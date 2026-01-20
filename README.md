# Ethereum Client Libs

Complete Ethereum client api libraries with implemented end to end.

## Core

### [`@msaki/jsonrpc`](./packages/jsonrpc)

A minimal jsonrpc spec implementation.

```sh
bun add @msaki/jsonrpc
```

### [`@msaki/eth-rpc`](./packages/eth-rpc)

A library for ethereum execution clients apis.

```sh
bun add @msaki/eth-rpc
```

## Usage

### Ethereum Execution Client Api

```ts
import { EthExecutionClient } from '@msaki/eth-rpc';

const url = 'http://localhost:8545'
const eth = new EthExecutionClient(url);

const balance = await eth.eth_getBalance(
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "latest"
);
console.log('Balance:', balance);
```

### Ethereum Engine Api

```ts
import { EngineExecutionClient } from "@msaki/eth-rpc";

const engineUrl = "https://localhost:8551";
const engine = new EngineExecutionClient(engineUrl, process.env.JWT_TOKEN!);
const payload = engine.engine_getPayloadV1("0x1");

console.log(payload);
```
