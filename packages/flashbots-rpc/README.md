# flashbots-rpc

A TypeScript client for flashbots relay rpc.

## Installation

```sh
bun add @asyncswap/flashbots-rpc
# Must install to resolve types
bun add -D @asyncswap/eth-types 
```

## Quick Start

### Flashbots Client API

Simple implementation.

```ts
import { FlashbotsClient } from "@asyncswap/flashbots-rpc";
import type { FlashbotsRpc, Hex } from "@asyncswap/flashbots-rpc";

const rpc = "https://relay.flashbots.net";
const client = new FlashbotsClient(rpc) as FlashbotsRpc;
const bundle = {
  txs: ["0x123abc", "0x456def..."] as Hex[],

  blockNumber: "0xb63dcd" as Hex,
  minTimestamp: 0,
  maxTimestamp: 1615920932,
};
const body = client.rpc.buildRequest("eth_sendBundle", [bundle]);
// const signature = wallet.sign(body)
// const sender = wallet.address
const result = await client
  .withHeaders({
    "X-Flashbots-Signature": `0x<sender>:0x<signature>`,
  })
  .eth_sendBundle(bundle);
console.log(result);
```

End to End implementation.

```ts
import { id, JsonRpcProvider, parseEther, Wallet } from "ethers";
import type { FlashbotsRpc, Hex } from "@asyncswap/eth-types";
import { FlashbotsClient } from "@asyncswap/flashbots-rpc";

// Using a provider to get the current block number
const ethProvider = new JsonRpcProvider("https://ethereum.publicnode.com");
const wallet = new Wallet(
 "<private-key>",
 ethProvider,
);

const rpc = "https://relay.flashbots.net";
const client = new FlashbotsClient(rpc) as FlashbotsRpc;

// Get current block number and timestamps
const blockNumber = await ethProvider.getBlockNumber();
const currentBlock = await ethProvider.getBlock(blockNumber);
const targetBlock = blockNumber + 1;

// Create a real simple transfer transaction
const tx = {
 to: "0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5",
 value: parseEther("0.001"),
 gasLimit: 21000,
 gasPrice:
  (await ethProvider.getFeeData()).gasPrice || parseEther("0.00000001"),
 nonce: await wallet.getNonce(),
 chainId: 1,
};

// Sign the transaction to get raw transaction hex
const signedTx = await wallet.signTransaction(tx);

// Create bundle with real signed transaction
const bundle = {
 txs: [signedTx as Hex],
 blockNumber: `0x${targetBlock.toString(16)}` as Hex,
 minTimestamp: currentBlock?.timestamp || 0,
 maxTimestamp: (currentBlock?.timestamp || 0) + 120,
};

console.log("Bundle:", bundle);

const body = client.rpc.buildRequest("eth_sendBundle", [bundle]);

const signature = await wallet.signMessage(id(JSON.stringify(body)));
console.log("Signature:", `${wallet.address}:${signature}`);

const result = await client
 .withHeaders({
  "X-Flashbots-Signature": `${wallet.address}:${signature}`,
 })
 .eth_sendBundle(bundle);
console.log("Result:", result);
```

## References

- [Fashbots JSON-RPC API Endpoints](https://docs.flashbots.net/flashbots-auction/advanced/rpc-endpoint)

## Dependencies

- `@asyncswap/jsonrpc` - a minimal JSON-RPC 2.0 spec library.

## License

MIT
