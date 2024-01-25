const { ethers } = require("ethers");

// TESTNET provider
const providerTestnet = new ethers.providers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/up5SMqiafivh3Z-tBVDzdZ7CsdissyMF"
);

// CREATE SIGNER
const myAddress = "0xA2Cd38C20Aa36a1D7d1569289D9B61E9b01a2cd7";
const privateKey = "b55289a764df1ffcd82428757dda2a9c33852aed40cf8f3b02a84ac273f4ab45";

const walletSigner = new ethers.Wallet(privateKey, providerTestnet);

const exchangeETH = async () => {
    const sendValueHumen = "0.05";
    const gasPrice = await providerTestnet.getGasPrice();
    const nonce = walletSigner.getTransactionCount(); // web3.eth.getTransactionCount(myAddress)
    const txBuild = {
        from: myAddress, // from,
        to: "0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa", // to (WETH on sepolia Test network),
        value: ethers.utils.parseEther(sendValueHumen), // value,
        nonce: nonce, // nonce,
        gasLimit: 150000, // gas limit,
        gasPrice: gasPrice, // gas price
    };

    // SEND Transaction
    const txSend = await walletSigner.sendTransaction(txBuild);

    console.log("");
    console.log("TX SEND");
    console.log(txSend);
};

exchangeETH();
