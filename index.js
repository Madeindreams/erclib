const NETWORK =
{
    1: {
        id: 1,
        network: "Mainnet",
        chain: "Ethereum",
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
        network: "xDai",
        chain: "xDai",
        chainId: 100,
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
        compound:"0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5"
    },
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
        address:"0x6B175474E89094C44Da98b954EedeAC495271d0F",
        decimals: 18,
        symbol: "DAI",
        name: "Dai Stablecoin",
        color: "#000000",
        compound: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643"
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
        address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        color: "#000000",
        compound: "0x39AA39c021dfbaE8faC545936693aC917d5E7563"
    },
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
        address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",
        decimals: 6,
        symbol: "USDT",
        name: "Tether USD",
        color: "#000000",
        compound: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9"
    },
    "0x0000000000085d4780B73119b644AE5ecd22b376": {
        address:"0x0000000000085d4780B73119b644AE5ecd22b376",
        decimals: 18,
        symbol: "TUSD",
        name: "TrueUSD",
        color: "#000000",
        compound: "0x12392F67bdf24faE0AF363c24aC620a2f67DAd86"
    },
    "0x4Fabb145d64652a948d72533023f6E7A623C7C53": {
        address:"0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        decimals: 18,
        symbol: "BUSD",
        name: "Binance USD",
        color: "#000000",
        compound: "",
    },
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
        address:"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        decimals: 8,
        symbol: "WBTC",
        name: "Wrapped BTC",
        color: "#000000",
        compound: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4"
    },
    "0xc00e94Cb662C3520282E6f5717214004A7f26888": {
        address:"0xc00e94Cb662C3520282E6f5717214004A7f26888",
        decimals: 18,
        symbol: "COMP",
        name: "Compound",
        color: "#000000",
        compound: "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4"
    },
    "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9": {
        address:"0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        decimals: 18,
        symbol: "AAVE",
        name: "Aave Token",
        color: "#000000",
        compound: "0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c"
    },
    "0x0D8775F648430679A709E98d2b0Cb6250d2887EF": {
        address:"0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
        decimals: 18,
        symbol: "BAT",
        name: "Basic Attention Token",
        color: "#000000",
        compound: "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E"
    },
    "0x514910771AF9Ca656af840dff83E8264EcF986CA": {
        address:"0x514910771AF9Ca656af840dff83E8264EcF986CA",
        decimals: 18,
        symbol: "LINK",
        name: "ChainLink Token",
        color: "#000000",
        compound: "0xFAce851a4921ce59e912d19329929CE6da6EB0c7"
    },
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
        address:"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
        decimals: 18,
        symbol: "MKR",
        name: "MAKER",
        color: "#000000",
        compound: "0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b"
    },
    "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2": {
        address:"0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
        decimals: 18,
        symbol: "SUSHI",
        name: "SushiToken",
        color: "#000000",
        compound: "0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7"
    },
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984": {
        address:"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        decimals: 18,
        symbol: "UNI",
        name: "Uniswap",
        color: "#000000",
        compound: "0x35A18000230DA775CAc24873d00Ff85BccdeD550"
    },
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e": {
        address:"0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
        decimals: 18,
        symbol: "YFI",
        name: "yearn.finance",
        color: "#000000",
        compound: "0x80a2AE356fc9ef4305676f7a3E2Ed04e12C33946"
    },
    "0xE41d2489571d322189246DaFA5ebDe1F4699F498": {
        address:"0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        decimals: 18,
        symbol: "ZRX",
        name: "0x Protocol Token",
        color: "#000000",
        compound: "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407"
    }

};




export {
    ERC20,
    NETWORK
}