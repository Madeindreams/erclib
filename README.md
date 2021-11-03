# erclib
[![Version npm](https://img.shields.io/npm/v/@idecentralize/erclib.svg?logo=npm)](https://www.npmjs.com/package/@idecentralize/erclib)
[![Node.js CI](https://github.com/Madeindreams/erclib/actions/workflows/node.js.yml/badge.svg)](https://github.com/Madeindreams/erclib/actions/workflows/node.js.yml)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Madeindreams/erclib.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Madeindreams/erclib/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Madeindreams/erclib.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Madeindreams/erclib/alerts/)



ERC library for blockchain Development

The svg files of all assets contained in this library can be found on IPFS

QmdUn2HLafKVbojmjdUM3CKEJYT7nL4Wm4wAwRCf9Zsuhi

In development. More networks, asset's and features are coming...

## Install and import

```npm install @idecentralize/erclib```

```import ERC20 from "@idecentralize/erclib"```

> *address should be checksumed*

## Usage

```const usdc = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"```

```ERC20[network_id][usdc].decimals  // output decimals of asset```

```ERC20[network_id][usdc].compound  // output cToken address```

> HINT:*When forking the mainnet use a condition to use mainnet asset.*


## LOGO

```import IPFS_SVG_PATH from "@idecentralize/erclib"```


```<image src={IPFS_SVG_PATH + ERC20[network_id][usdc].symbol + '.svg'} alt={ERC20[network_id][usdc].symbol} />```

network_id should be the chain id return by the provider.
When forking the mainnet using hardhat, the network id is 31337 and we want to use the mainnet asset under network id 1.


```ERC20[network_id === 31337 ? 1 : network_id][usdc].decimals  // output decimals of asset```

This will use the mainnet id on the library when forking.

## SVG LOGO

I addition you can use the library and IPFS to add the images of the assets in your apps.






# Supported Network
- IPFS
- Ethereum
- Polygon
- BSC

# Supported Testnet & protocols

- Compound (Rinkeby)
- Aave (kovan)


Please report any issues!

To have add some assets please submit a PR and provide the SVG logo.


