const TestEthSigner = artifacts.require("TestEthSigner");

module.exports = deployer => deployer.deploy(
    TestEthSigner
);