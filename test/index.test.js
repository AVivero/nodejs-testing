const { expect } = require('chai');
const ip = require('ip');

describe('../index.js', () => {
    describe('#getCorrectIpAddress', () => {
        context('When the FORCE_LOCAL_IP env var exists', () => {
            beforeEach(() => {
                process.env.FORCE_LOCAL_IP = true;
            });
            it('should return the ip address', () => {
                
                const getCorrectIpAddress = require('../index.js').getCorrectIpAddress;

                const expected = ip.address();
                const presetIpAddress = '0.0.0.0';

                const result = getCorrectIpAddress(presetIpAddress);

                expect(result).to.equal(expected);

            });
            afterEach(() => {
                delete process.env.FORCE_LOCAL_IP;
            })
        });
        context('When the FORCE_LOCAL_IP env var does not exists', () => {
            it('should return the same value passed as argument', () => {
                
                const getCorrectIpAddress = require('../index.js').getCorrectIpAddress;
                
                const presetIpAddress = '0.0.0.0';

                const result = getCorrectIpAddress(presetIpAddress);

                expect(result).to.equal(presetIpAddress);

            });
        });
    });
});