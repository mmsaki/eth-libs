declare global {
	export interface JsonRpcRequest {
		jsonrpc: "2.0";
		method: string;
		params?: unknown[];
		id?: JsonRpcId;
	}
}

export { };
