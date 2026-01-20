import { initializeRpcClient, JsonRpcClient } from "@msaki/jsonrpc";

export class EngineExecutionClient {
	private client: JsonRpcClient;

	constructor(url: string, jwt_token: string) {
		this.client = initializeRpcClient(url, jwt_token);
	}

	async debug_getRawHeader(block: BlockNumberOrTag): Promise<Bytes> {
		// RPL-encoded header
		return await this.client.call(DebugMethods.debug_getRawHeader, [block]);
	}
	async debug_getRawBlock(block: BlockNumberOrTag): Promise<Bytes> {
		// RPL-encoded block
		return await this.client.call(DebugMethods.debug_getRawBlock, [block]);
	}
	async debug_getRawTransaction(transactionHash: Hash32): Promise<Bytes> {
		// EIP-2718 binary-encoded trnasactions
		return await this.client.call(DebugMethods.debug_getRawTransaction, [
			transactionHash,
		]);
	}
	async debug_getRawReceipts(block: BlockNumberOrTag): Promise<Bytes[]> {
		return await this.client.call(DebugMethods.debug_getRawReceipts, [block]);
	}
	async debug_getBadBlocks(): Promise<BadBlock[]> {
		return await this.client.call(DebugMethods.debug_getBadBlocks, []);
	}
}
