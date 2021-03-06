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

    async addCertificate(ctx, certificateId, name1 , gpa1, grade1,faculty1, university1, screenshot1) {
        const exists = await this.certificateExists(ctx, certificateId);
        if (exists) {
            throw new Error(`The certificate ${certificateId} already exists`);
        }
        var d = new Date();
        let cert={
            name:name1,
            gpa:gpa1,
            grade:grade1,
            faculty:faculty1,
            university:university1,
            screenshot:screenshot1,
            transaction_month: d.getMonth()+1,
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
            
            throw new Error(`The certificate ${certificateId} doesn't exists`);
        }

        let cert1 =  await this.readCertificate(ctx,certificateId)
        cert1 = JSON.parse(cert1);
        console.log(cert1);
        var d = new Date();
        console.log(cert1);
        var monthNow = d.getMonth()+1;
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



    async addExpiredCertificate(ctx, certificateId, name1 , gpa1, grade1,faculty1, university1, screenshot1){
        const exists = await this.certificateExists(ctx, certificateId);
        if (exists) {
            throw new Error(`The certificate ${certificateId} already exists`);
        }
        var d = new Date();
        let cert={
            name:name1,
            gpa:gpa1,
            grade:grade1,
            faculty:faculty1,
            university:university1,
            screenshot:screenshot1,
            transaction_month: d.getMonth()+1,
            transaction_year: d.getFullYear()
            }; 
        
        const buffer = Buffer.from(JSON.stringify(cert));
        await ctx.stub.putState(certificateId, Buffer.from(JSON.stringify(cert)));
    }

    async updateCertificate(ctx, certificateId, name1 , gpa1, grade1,faculty1, university1, screenshot1) {
        const exists = await this.certificateExists(ctx, certificateId);
        if (!exists) {
            throw new Error(`The certificate ${certificateId} does not exist`);
        }
        var d = new Date();
        let cert={
            name:name1,
            gpa:gpa1,
            grade:grade1,
            faculty:faculty1,
            university:university1,
            screenshot:screenshot1,
            transaction_month: d.getMonth()+1,
            transaction_year: d.getFullYear()
            }; 

        await ctx.stub.putState(certificateId, Buffer.from(JSON.stringify(cert)));

    }

    async deleteCertificate(ctx, certificateId) {
        const exists = await this.certificateExists(ctx, certificateId);
        if (!exists) {
            throw new Error(`The certificate ${certificateId} does not exist`);
        }
        await ctx.stub.deleteState(certificateId);
    }

    async readByObjectType(ctx, objectType) {

        let queryString = {
          selector: {
            type: objectType
          }
        };
    
        let queryResults = await this.queryWithQueryString(ctx, JSON.stringify(queryString));
        return queryResults;
    
      }

      async queryAll(ctx) {

        let queryString = {
          selector: {}
        };
    
        let queryResults = await this.queryWithQueryString(ctx, JSON.stringify(queryString));
        return queryResults;
    
      }
      async queryWithQueryString(ctx, queryString) {

        console.log('query String');
        console.log(JSON.stringify(queryString));
    
        let resultsIterator = await ctx.stub.getQueryResult(queryString);
    
        let allResults = [];
    
        // eslint-disable-next-line no-constant-condition
        while (true) {
          let res = await resultsIterator.next();
    
          if (res.value && res.value.value.toString()) {
            let jsonRes = {};
    
            console.log(res.value.value.toString('utf8'));
    
            jsonRes.Key = res.value.key;
    
            try {
              jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
            } catch (err) {
              console.log(err);
              jsonRes.Record = res.value.value.toString('utf8');
            }
    
            allResults.push(jsonRes);
          }
          if (res.done) {
            console.log('end of data');
            await resultsIterator.close();
            console.info(allResults);
            console.log(JSON.stringify(allResults));
            return JSON.stringify(allResults);
          }
        }
      }

}

module.exports = CertificateContract;
