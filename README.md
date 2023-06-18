# erclib
[![Version npm](https://img.shields.io/npm/v/@idecentralize/erclib.svg?logo=npm)](https://www.npmjs.com/package/@idecentralize/erclib)
[![Node.js CI](https://github.com/Madeindreams/erclib/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Madeindreams/erclib/actions/workflows/npm-publish.yml)




ERC library for blockchain Development

added colors for network and asset's

In development. More networks, asset's and features are coming...

## Install and import

```npm install @idecentralize/erclib```

```import ERC20 from "@idecentralize/erclib"```

> *address should be checksumed*

## Usage

set the chain ID

```const chainId = 137 // Polygon ```

for non ethereum metamask (not included ny default in metamask)

you can get the RPC, explorer to add the rpc to metamask or connect to the selected network

``` NETWORK[chainId].rpc // output the rpc URI```

get the asset into on the specific network.

```const usdc = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"```

```ERC20[chainId][usdc].decimals  // output decimals of asset```

```ERC20[chainId][usdc].compound  // output cToken address```

```ERC20[chainId][usdc].colors  // HTML color```


## SVG LOGO

```import IPFS_SVG_PATH from "@idecentralize/erclib"```


```<image src={IPFS_SVG_PATH + ERC20[network_id][usdc].symbol + '.svg'} alt={ERC20[network_id][usdc].symbol} />```

## FORKING

network_id should be the chain id return by the provider.
When forking the mainnet using hardhat, the network id is 31337 and we want to use the mainnet asset under network id 1.


```ERC20[network_id === 31337 ? 1 : network_id][usdc].decimals  // output decimals of asset```

This will use the mainnet id on the library when forking.








# Supported Network
- IPFS
- Ethereum
- Polygon
- BSC
- Aurora
- Avanlance
- xDai


# Supported Testnet & protocols

- Compound 
- Aave 
- Yearn v2 

Please report any issues!

To have add some assets please submit a PR and provide the SVG logo.


