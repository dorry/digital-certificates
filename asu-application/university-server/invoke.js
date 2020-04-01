/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { FileSystemWallet, Gateway } = require('fabric-network');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..','..', 'gateway', 'asu-connection.json');


exports.addCertificate =  async function(username,certificateID,name, gpa , grade,screenshot) {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists(username);
        if (!userExists) {
            console.log('An identity for the user ' +username+' does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: username, discovery: { enabled: true, asLocalhost: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('unichannel');

        // Get the contract from the network.
        const contract = network.getContract('chaincode');

        // Submit the specified transaction.
        await contract.submitTransaction('addCertificate',certificateID,name, gpa, grade,screenshot);
        console.log('Transaction has been submitted');
        


        // Disconnect from the gateway.
        await gateway.disconnect();
        return 'Transaction has been submitted';

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

// addCertificate('admin','996','joe','2.4','v.good');
