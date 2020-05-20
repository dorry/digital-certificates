/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const FabricCAServices = require('fabric-ca-client');
const { FileSystemWallet, X509WalletMixin } = require('fabric-network');
const fs = require('fs');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..','..', 'gateway', 'asu-connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

async function main() {
    try {

        // Create a new CA client for interacting with the CA.
        const caInfo = ccp.certificateAuthorities['ndbc22b-asuca.dcluster-f0b663fbbfc70b7f0cec9f6ad23e45a3-0000.eu-gb.containers.appdomain.cloud:7054'];
        const caTLSCACerts = caInfo.tlsCACerts.pem;
        const ca = new FabricCAServices(caInfo.url, { trustedRoots: caTLSCACerts, verify: false }, caInfo.caName);

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the appadmin user.
        const adminExists = await wallet.exists('appadmin');
        if (adminExists) {
            console.log('An identity for the appadmin user "appadmin" already exists in the wallet');
            return;
        }

        // Enroll the admin user, and import the new identity into the wallet.
        const enrollment = await ca.enroll({ enrollmentID: 'appadmin', enrollmentSecret: 'appadminpw' });
        const identity = X509WalletMixin.createIdentity('asumsp', enrollment.certificate, enrollment.key.toBytes());
        await wallet.import('appadmin', identity);
        console.log('Successfully enrolled appadmin user "appadmin" and imported it into the wallet');

    } catch (error) {
        console.error(`Failed to enroll appadmin user "appadmin": ${error}`);
        process.exit(1);
    }
}

main();
