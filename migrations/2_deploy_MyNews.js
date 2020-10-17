const MyNews = artifacts.require("MyNews");

module.exports = function (deployer) {
  deployer.deploy(MyNews);
};
