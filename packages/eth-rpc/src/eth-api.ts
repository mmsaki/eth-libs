import type { EthMethodsSpec } from "@asyncswap/eth-types";
import { BaseClient, type RpcSpec } from "@asyncswap/jsonrpc";

export class ExecutionClient extends BaseClient<EthMethodsSpec> {
	constructor(url: string) {
		super(url);
	}
}

export type ExecutionClientRpc = ExecutionClient & RpcSpec<EthMethodsSpec>;
