const SimpleMessage = artifacts.require("SimpleMessage");

module.exports = (deployer) => {
  deployer.deploy(SimpleMessage);
};
