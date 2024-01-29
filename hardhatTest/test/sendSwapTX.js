const { expect, assert } = require("chai");
const { ethers, assertArgument } = require("ethers");
//const { JsonRpcProvider } = require("ethers");

const {
  addressFactory,
  addressRouter,
  addressFrom,
  addressTo,
} = require("../utils/AddressList");

const { erc20ABI, factoryABI, routerABI } = require("../utils/AbiList");

describe("Read and write to the Blockchain", () => {
  let provider,
    contractFactory,
    contractRouter,
    contractToken,
    decimals,
    amountIn;

  // connecting to provider
  provider = new ethers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/BRYqUv9MJRcbfIhQh8_XqkvFdSA3Xi8i"
  );

  // contract addresses
  contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);
  contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
  contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);

//   const amountInHuman = "1";
//   amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();

//   // get price information
//   const getAmountOut = async () => {
//     decimals = await contractToken.decimals();

//     const amountsOut = await contractRouter.getAmountsOut(amountIn, [
//       addressFrom,
//       addressTo,
//     ]);

//     return amountsOut[1].toString();
//   };

  it("connects to a provider, factory, token and router", async () => {
    assert(provider.provider);
      
    expect(await contractFactory.getAddress()).to.equal(
      "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
    );

    expect(await contractRouter.getAddress()).to.equal(
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    );

    expect(await contractToken.getAddress()).to.equal(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
  });

//   it("gets the price of amountsOut", async () => {
//     const amount = await getAmountOut();
//     assert(amount.toString());
//     console.log(amount.toString());  
//   });
});
