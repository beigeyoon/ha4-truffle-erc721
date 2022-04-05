const Migrations = artifacts.require('Migrations');
const yooniNFTs = artifacts.require('yooniNFTs.sol'); // yooniNFTs.sol 파일 추가

module.exports = function (deployer) {
	deployer.deploy(Migrations);
	deployer.deploy(yooniNFTs); // yooniNFTs를 배포에 추가
};