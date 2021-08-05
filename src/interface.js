const fs = require('fs');
const Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8547'));

const jsonFile = "../build/contracts/TestEthSigner.json"
const fromAddress = "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73";
var parsed = JSON.parse(fs.readFileSync(jsonFile));
var contractABI = parsed.abi;
var contractAddress = parsed.networks['1337'].address;
const gasLimit = web3.utils.numberToHex(100000);
const gasPrice = web3.utils.numberToHex(6721970);
var contract_instance = new web3.eth.Contract(contractABI, contractAddress);





async function set_value(val) {
    var data = contract_instance.methods.setValue(val).encodeABI();
    var nonce = await web3.eth.getTransactionCount(fromAddress);
    web3.eth.sendTransaction(
        {
            from: fromAddress,
            to: contractAddress,
            nonce: nonce,
            data: data,
            gas: gasLimit,
            gasPrice: gasPrice,
            value: web3.utils.numberToHex(0),
        })
        .on('receipt', receipt => { console.log('Receipt: ', receipt); })
        .catch(error => { console.log('Error: ', error.message); });
}


set_value(42069);