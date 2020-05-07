require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food cheap rival oval unit grid enter equal gas'; 
let testAccounts = [
"0x42f30b72066e86d30ba9adc3e70cacb6ddaded3f4ebc12d0798e0fb64ff272f6",
"0x274c58328b5b752a9e268121b574f5e92e61dfc622aaed049cddd3040c1c250e",
"0xa5d3f44e216a9e9f00549f93e2eec103e9b1a53f258704a9688dbea6c40e349b",
"0xb7df8f8a9267040fa6d44ab28c1ababb4dad35d34b1635db3b8f3f97bd8ecf34",
"0x65f612a473e1730b993a16b73f7b0bcda5203fe190fa9f0edd81dcea37033ef8",
"0xd54b8b27ddc411fffca42662a79977abac69c0ce910597f5010798f355a74371",
"0x6e0dcd5c44aed34841723c25d2d2ceb5fe020a1b58b85d0f63805a5404639698",
"0xbe2329ed06a785a481007f4599b188ded81b300a7c37cd338a203ac523c51f53",
"0xcc3fc1a824c90fea156ad4ff88a651c763433f3f398c1e9cba110bd14cbe1168",
"0x7ef705104b51b23fa5eca01dc6fc2b6c02667a01b31b03d5b44758ef9535591b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
