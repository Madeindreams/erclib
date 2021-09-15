const NETWORK =
{
    1: {
        id: 1,
        network: "Mainnet",
        chain: "ETH",
        chainId: 1,
        type: "Production"
    },
    3: {
        id: 3,
        network: "Ropsten",
        chain: "ETH",
        chainId: 3,
        type: "Testnet"
    },
    4: {
        id: 4,
        network: "Rinkeby",
        chain: "ETH",
        chainId: 4,
        type: "Testnet"
    },
    5: {
        id: 5,
        network: "Goerli",
        chain: "ETH",
        chainId: 5,
        type: "Testnet"
    },
    42: {
        id: 42,
        network: "Kovan",
        chain: "ETH",
        chainId: 42,
        type: "Testnet"
    },
    2018: {
        id: 2018,
        network: "dev",
        chain: "ETH",
        chainId: 2018,
        type: "Development"
    },
    137: {
        id: 137,
        network: "Polygon",
        chain: "MATIC",
        chainId: 137,
        type: "Network"
    },
    8001: {
        id: 8001,
        network: "Mumbai",
        chain: "MATIC",
        chainId: 8001,
        type: "Testnet"
    },
    56: {
        id: 56,
        network: "BSC",
        chain: "BNB",
        chainId: 56,
        type: "Network"
    },
    97: {
        id: 97,
        network: "BSC",
        chain: "BNB",
        chainId: 97,
        type: "Testnet"
    },
    100: {
        id: 100,
        network: "xDAI",
        chain: "xDAI",
        chainId: 100,
        type: "Network"
    },
    31337: {
        id: 31337,
        network: "Local",
        chain: "ETH",
        chainId: 31337,
        type: "Network"
    },

}



const ERC20 = 
{
    "0x0000000000000000000000000000000000000000": {
        address:"0x0000000000000000000000000000000000000000",
        decimals: 18,
        symbol: "ETH",
        name: "Ether",
        color: "#000000",
        compound:"0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
        aave: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
        yearn: "0xa258C4606Ca8206D8aA700cE2143D7db854D168c"
    },
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
        address:"0x6B175474E89094C44Da98b954EedeAC495271d0F",
        decimals: 18,
        symbol: "DAI",
        name: "Dai Stablecoin",
        color: "#000000",
        compound: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
        aave: "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
        yearn: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95"
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
        address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        color: "#000000",
        compound: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
        aave: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
        yearn: "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9"
    },
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
        address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",
        decimals: 6,
        symbol: "USDT",
        name: "Tether USD",
        color: "#000000",
        compound: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
        aave: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
        yearn: "0x7Da96a3891Add058AdA2E826306D812C638D87a7"
    },
    "0x0000000000085d4780B73119b644AE5ecd22b376": {
        address:"0x0000000000085d4780B73119b644AE5ecd22b376",
        decimals: 18,
        symbol: "TUSD",
        name: "TrueUSD",
        color: "#000000",
        compound: "0x12392F67bdf24faE0AF363c24aC620a2f67DAd86",
        aave: "0x101cc05f4A51C0319f570d5E146a8C625198e636",
        yearn: "0xFD0877d9095789cAF24c98F7CCe092fa8E120775"
    },
    "0x4Fabb145d64652a948d72533023f6E7A623C7C53": {
        address:"0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        decimals: 18,
        symbol: "BUSD",
        name: "Binance USD",
        color: "#000000",
        compound: "",
        aave: "0xA361718326c15715591c299427c62086F69923D9",
        yearn: ""
    },
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
        address:"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        decimals: 8,
        symbol: "WBTC",
        name: "Wrapped BTC",
        color: "#000000",
        compound: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
        aave:"0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
        yearn: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E"
    },
    "0xc00e94Cb662C3520282E6f5717214004A7f26888": {
        address:"0xc00e94Cb662C3520282E6f5717214004A7f26888",
        decimals: 18,
        symbol: "COMP",
        name: "Compound",
        color: "#000000",
        compound: "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
        aave: "",
        yearn: "0x4A3FE75762017DB0eD73a71C9A06db7768DB5e66"
    },
    "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9": {
        address:"0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        decimals: 18,
        symbol: "AAVE",
        name: "Aave Token",
        color: "#000000",
        compound: "0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c",
        aave: "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B",
        yearn: "0xd9788f3931Ede4D5018184E198699dC6d66C1915"
    },
    "0x0D8775F648430679A709E98d2b0Cb6250d2887EF": {
        address:"0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
        decimals: 18,
        symbol: "BAT",
        name: "Basic Attention Token",
        color: "#000000",
        compound: "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
        aave: "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1",
        yearn: ""
    },
    "0x514910771AF9Ca656af840dff83E8264EcF986CA": {
        address:"0x514910771AF9Ca656af840dff83E8264EcF986CA",
        decimals: 18,
        symbol: "LINK",
        name: "ChainLink Token",
        color: "#000000",
        compound: "0xFAce851a4921ce59e912d19329929CE6da6EB0c7",
        aave: "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0",
        yearn: "0x671a912C10bba0CFA74Cfc2d6Fba9BA1ed9530B2"
    },
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
        address:"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
        decimals: 18,
        symbol: "MKR",
        name: "MAKER",
        color: "#000000",
        compound: "0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b",
        aave: "0xc713e5E149D5D0715DcD1c156a020976e7E56B88",
        yearn: ""
    },
    "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2": {
        address:"0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
        decimals: 18,
        symbol: "SUSHI",
        name: "SushiToken",
        color: "#000000",
        compound: "0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7",
        aave: "",
        yearn: ""
    },
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984": {
        address:"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        decimals: 18,
        symbol: "UNI",
        name: "Uniswap",
        color: "#000000",
        compound: "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
        aave: "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1",
        yearn: "0xFBEB78a723b8087fD2ea7Ef1afEc93d35E8Bed42"
    },
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e": {
        address:"0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
        decimals: 18,
        symbol: "YFI",
        name: "yearn.finance",
        color: "#000000",
        compound: "0x80a2AE356fc9ef4305676f7a3E2Ed04e12C33946",
        aave: "0x5165d24277cD063F5ac44Efd447B27025e888f37",
        yearn: "0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1"
    },
    "0xE41d2489571d322189246DaFA5ebDe1F4699F498": {
        address:"0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        decimals: 18,
        symbol: "ZRX",
        name: "0x Protocol Token",
        color: "#000000",
        compound: "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
        aave: "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e",
        yearn: ""
    }

};


export {
    ERC20,
    NETWORK
}