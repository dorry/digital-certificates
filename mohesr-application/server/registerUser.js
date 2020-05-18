/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { FileSystemWallet, Gateway, X509WalletMixin } = require('fabric-network');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..','..', 'gateway', 'mohesr-connection.json');

async function registerAdmin(identity) {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists(identity);
        if (userExists) {
            console.log('An identity for the user '+ identity +'already exists in the wallet');
            return;
        }

        // Check to see if we've already enrolled the admin user.
        const adminExists = await wallet.exists('appadmin');
        if (!adminExists) {
            console.log('An identity for the admin user "appadmin" does not exist in the wallet');
            console.log('Run the enrollAdmin.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();

        await gateway.connect(ccpPath, { wallet, identity: 'appadmin', discovery: { enabled: true, asLocalhost: false } });

        // Get the CA client object from the gateway for interacting with the CA.
        const ca = gateway.getClient().getCertificateAuthority();
        const adminIdentity = gateway.getCurrentIdentity();

        // Register the user, enroll the user, and import the new identity into the wallet.
        const secret = await ca.register({ affiliation: '', enrollmentID: identity , role: 'admin' }, adminIdentity);
        const enrollment = await ca.enroll({ enrollmentID: identity, enrollmentSecret: secret });
        const userIdentity = X509WalletMixin.createIdentity('mohesrmsp', enrollment.certificate, enrollment.key.toBytes());
        await wallet.import(identity, userIdentity);
        console.log('Successfully registered and enrolled admin user '+ identity +' and imported it into the wallet');

    } catch (error) {
        console.error(`Failed to register user : ${error}`);
        process.exit(1);
    }
}

main("eldorry3@gmail.com");
