const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { impersonateFundErc20 } = require("../utils/utilities");

const { abi, } = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");

const provider = ethers.provider;

describe("FlashSwap Contract", () => {
    let FLASHSWAP,
        BORROW_AMOUNT,
        FUND_AMOUNT,
        initiateFundHuman,
        txArbitrage,
        gasUsedUSD;
    
    const DECIMALS = 18;

    const BUSD_WHALE = "0x8fe348f2f890046719aacea910f01d772dc20a65";
    const BUSD = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    const USDT = "0x55d398326f99059fF775485246999027B3197955";
    const CAKE = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";
    const CROX = "0x2c094F5A7D1146BB93850f629501eB749f6Ed491";

    const BASE_TOKEN_ADDRESS = BUSD;

    const tokenBase = new ethers.Contract(BASE_TOKEN_ADDRESS, abi, provider);

    beforeEach(async () => {

    });
});