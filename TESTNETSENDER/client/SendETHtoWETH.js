const { ethers } = require("ethers");

// TESTNET provider
const providerTestnet = new ethers.providers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/up5SMqiafivh3Z-tBVDzdZ7CsdissyMF"
);

// CREATE SIGNER
const myAddress = "0xA2Cd38C20Aa36a1D7d1569289D9B61E9b01a2cd7";
const privateKey = "b55289a764df1ffcd82428757dda2a9c33852aed40cf8f3b02a84ac273f4ab45";

const walletSigner = new ethers.Wallet(privateKey, providerTestnet);

console.log(walletSigner);