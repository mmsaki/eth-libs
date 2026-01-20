declare global {
	export interface JsonRpcRequest<Method> {
		jsonrpc: "2.0";
		method: Method;
		params?: unknown[];
		id?: JsonRpcId;
	}
}

export { };
