# erclib
[![Version npm](https://img.shields.io/npm/v/@idecentralize/erclib.svg?logo=npm)](https://www.npmjs.com/package/@idecentralize/erclib)

ERC library for blockchain Development

In development. More Networks and features are coming

## Install and import

```npm install @idecentralize/erclib```

```import ERC20 from "@idecentralize/erclib"```

> *address should be checksumed*

## Usage

```const usdc = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"```

```ERC20[network_id][usdc].decimals  // output decimals of asset```

```ERC20[network_id][usdc].compound  // output cToken address```

> HINT:*When forking the mainnet use a condition to use mainnet asset.*


network_id should be the chain id return by the provider.
When forking the mainnet using hardhat, the network id is 31337 and we want to use the mainnet asset under network id 1.


```ERC20[network_id === 31337 ? 1 : network_id][usdc].decimals  // output decimals of asset```

This will use the mainnet id on the library when forking.



# Supported Network

- Ethereum
- Polygon
- BSC

# Supported Testnet & protocols

- Compound (Rinkeby)
- Aave (kovan)


Please repport any issues!


