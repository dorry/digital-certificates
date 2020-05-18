/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { FileSystemWallet, Gateway } = require('fabric-network');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..','..', 'gateway', 'mohesr-connection.json');

exports.checkWallet = async function(username){
    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);
    
    // Check to see if we've already enrolled the user.
    const userExists = await wallet.exists(username);
    if (!userExists) {
        console.log('An identity for the user ' +username+' does not exist in the wallet');
        console.log('Run the registerUser.js application before retrying');
        return "wallet doesn't exist";
    }
    else{
        return "wallet exist";}
}

exports.query = async function(name,functionName, certificateID) {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists(name);
        if (!userExists) {
            console.log('An identity for the user '+username+'does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: name, discovery: { enabled: true, asLocalhost: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('unichannel');

        // Get the contract from the network.
        const contract = network.getContract('chaincode');

        // Evaluate the specified transaction.

        if(certificateID==-1){
            const result = await contract.evaluateTransaction(functionName);
            //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
            
            return result;
        }
        else{
            const result = await contract.evaluateTransaction(functionName,certificateID);
            //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
            console.log("else");

            return result;
        }

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return"doesn't exist";
        //process.exit(1);
    }
}
exports.queryAll = async function(name){
    const response = await this.query(name,'queryAll',-1);
    return response;
}


//  await query('admin','readCertificate','996');
