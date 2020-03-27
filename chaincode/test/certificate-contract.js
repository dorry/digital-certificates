/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { CertificateContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logging = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('CertificateContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new CertificateContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"certificate 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"certificate 1002 value"}'));
    });

    describe('#certificateExists', () => {

        it('should return true for a certificate', async () => {
            await contract.certificateExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a certificate that does not exist', async () => {
            await contract.certificateExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createCertificate', () => {

        it('should create a certificate', async () => {
            await contract.createCertificate(ctx, '1003', 'certificate 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"certificate 1003 value"}'));
        });

        it('should throw an error for a certificate that already exists', async () => {
            await contract.createCertificate(ctx, '1001', 'myvalue').should.be.rejectedWith(/The certificate 1001 already exists/);
        });

    });

    describe('#readCertificate', () => {

        it('should return a certificate', async () => {
            await contract.readCertificate(ctx, '1001').should.eventually.deep.equal({ value: 'certificate 1001 value' });
        });

        it('should throw an error for a certificate that does not exist', async () => {
            await contract.readCertificate(ctx, '1003').should.be.rejectedWith(/The certificate 1003 does not exist/);
        });

    });

    describe('#updateCertificate', () => {

        it('should update a certificate', async () => {
            await contract.updateCertificate(ctx, '1001', 'certificate 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"certificate 1001 new value"}'));
        });

        it('should throw an error for a certificate that does not exist', async () => {
            await contract.updateCertificate(ctx, '1003', 'certificate 1003 new value').should.be.rejectedWith(/The certificate 1003 does not exist/);
        });

    });

    describe('#deleteCertificate', () => {

        it('should delete a certificate', async () => {
            await contract.deleteCertificate(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a certificate that does not exist', async () => {
            await contract.deleteCertificate(ctx, '1003').should.be.rejectedWith(/The certificate 1003 does not exist/);
        });

    });

});