const fs = require('fs');
const Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8547'));
const jsonFile = "../build/contracts/TestEthSigner.json"
const fromAddress = "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73";
var parsed = JSON.parse(fs.readFileSync(jsonFile));
var contractABI = parsed.abi;
var contractAddress = parsed.networks['1337'].address;

var contract_instance = new web3.eth.Contract(contractABI, contractAddress);

async function listen() {
    var event = await contract_instance.getPastEvents("GetValue", {
        fromBlock: 0,
        toBlock: 'latest'
    });
    for (i=0; i<event.length; i++){
        console.log(event[i]);
    }
}

setInterval(listen, 4000);