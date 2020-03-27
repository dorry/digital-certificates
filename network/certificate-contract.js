/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class CertificateContract extends Contract {

    async certificateExists(ctx, certificateId) {
        const buffer = await ctx.stub.getState(certificateId);
        return (!!buffer && buffer.length > 0);
    }

    async addCertificate(ctx, certificateId, name1 , gpa1, grade1) {
        const exists = await this.certificateExists(ctx, certificateId);
        if (exists) {
            throw new Error(`The certificate ${certificateId} already exists`);
        }
        var d = new Date();
        let cert={
            name:name1,
            gpa:gpa1,
            grade:grade1,
            transaction_month: d.getMonth(),
            transaction_year: d.getFullYear()
            }; 
        
        const buffer = Buffer.from(JSON.stringify(cert));
        await ctx.stub.putState(certificateId, Buffer.from(JSON.stringify(cert)));
    }

    async readCertificate(ctx, certificateId) {
        let exists = await this.certificateExists(ctx, certificateId);
        if (!exists) {
            throw new Error(`The certificate ${certificateId} does not exist`);
        }
        let buffer = await ctx.stub.getState(certificateId);
        let asset = JSON.parse(buffer.toString());
        return JSON.stringify(asset);
    }

    async readCertificateForValidation(ctx, certificateId) {
        let exists = await this.certificateExists(ctx, certificateId);
        if (!exists) {
            throw new Error(`The certificate ${certificateId} does not exist`);
        }
        let buffer = await ctx.stub.getState(certificateId);
        let asset = JSON.parse(buffer.toString());
        return asset;
    }

    async validateCertificate(ctx, certificateId){
        const exists = await this.certificateExists(ctx, certificateId);
        if (!exists) {
            throw new Error(`The certificate ${certificateId} already exists`);
        }

        let cert1 =  await this.readCertificate(ctx,certificateId)
        cert1 = JSON.parse(cert1);
        console.log(cert1);
        var d = new Date();
        console.log(cert1);
        var monthNow = d.getMonth();
        var yearNow = d.getFullYear();
        var yearDiff = yearNow - cert1.transaction_year;
        if(yearDiff == 1){
            if(monthNow > cert1.transaction_month){
                return "Invalid certificate"  ;
            }
            else{
                return "Valid certificate" ;
            }
        }
        else if(yearDiff > 1){
            return "Invalid certificate";
        }

        else {
            return "Valid certificate" ;
        }
        
    }



    async addExpiredCertificate(ctx, certificateId,name1,gpa1,grade1){
        const exists = await this.certificateExists(ctx, certificateId);
        if (exists) {
            throw new Error(`The certificate ${certificateId} already exists`);
        }
        var d = new Date();
        let cert={
            name:name1,
            gpa:gpa1,
            grade:grade1,
            transaction_month: 2,
            transaction_year: 2018
            }; 
        
        const buffer = Buffer.from(JSON.stringify(cert));
        await ctx.stub.putState(certificateId, Buffer.from(JSON.stringify(cert)));
    }

    async updateCertificate(ctx, certificateId, newValue) {
        const exists = await this.certificateExists(ctx, certificateId);
        if (!exists) {
            throw new Error(`The certificate ${certificateId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(certificateId, buffer);
    }

    async deleteCertificate(ctx, certificateId) {
        const exists = await this.certificateExists(ctx, certificateId);
        if (!exists) {
            throw new Error(`The certificate ${certificateId} does not exist`);
        }
        await ctx.stub.deleteState(certificateId);
    }

}

module.exports = CertificateContract;
