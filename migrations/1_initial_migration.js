var Contract = artifacts.require("./InvestmentPlatform.sol");

module.exports = function(deployer) {
  deployer.deploy(Contract);
};
