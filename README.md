# TestEthSigner
In order to send Transactions on Hyperledger Besu, one has to either sign them using private keys of the sender, or use Eth_Signer.
Eth_Signer provides a server to send unsigned transactions, which are then signed and converted to raw Transactions to be forwarded to Besu.
This repository is made to test this functionality of Eth_Signer.
# Pre-requisites:
  1. Hyperledger Besu dev quick start network should be up and running.
  2. Deploy the contract on the network using 'npm run migrate -- --network besu'
  3. Eth Signer server must be up and running by using following command:
  bin/ethsigner  --chain-id=1337 --http-listen-host=127.0.0.1 --http-listen-port=8547 --downstream-http-port=8545 file-based-signer --key-file=pathTokeyFile --password-file=pathTopasswordFile
  4. In order to generate keyFile and passwordFile refer the docs of Eth_Signer.
# Test the Eth_Signer Server:
  1. run the interface.js from src and set the desired value
  2. run the listener.js also from src to verify the transaction!
