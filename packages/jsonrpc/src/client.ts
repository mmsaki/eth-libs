import { JsonRpcErrorCode } from "./error";
export class JsonRpcClient {
	private id = 0;

	constructor(private url: string) { }

	async call<Result = unknown, E = unknown>(
		request: JsonRpcRequest | JsonRpcRequest[],
		headers?: Record<string, string>,
	): Promise<Result | Result[] | E> {
		const response = await this.request(request, headers);
		if ("error" in response) {
			return response.error as E;
		}
		if ("result" in response) {
			return response.result as Result;
		}
		if (Array.isArray(response)) {
			return response as Result[];
		} else {
			// what else can result be? maybe indefined
			return response;
		}
	}

	buildRequest(method: string, params: unknown[] = []): JsonRpcRequest {
		return {
			jsonrpc: "2.0" as const,
			method,
			params,
			id: ++this.id,
		};
	}

	private async request(
		req: JsonRpcRequest | JsonRpcRequest[],
		customHeaders?: Record<string, string>,
	): Promise<
		JsonRpcResponse<unknown, number> | JsonRpcResponse<unknown, number>[]
	> {
		const controller = new AbortController();
		try {
			const headers: Record<string, string> = {
				"Content-Type": "application/json",
				...(customHeaders ?? {}),
			};
			const res = await fetch(this.url, {
				method: "POST",
				headers,
				body: JSON.stringify(req),
				signal: controller.signal,
			});

			return (await res.json()) as
				| JsonRpcResponse<unknown, number>
				| JsonRpcResponse<unknown, number>[];
		} catch (err) {
			return {
				jsonrpc: "2.0",
				error: {
					code: JsonRpcErrorCode.REQUEST_FAILED,
					message: `Request failed: ${err}`,
				},
				id: null,
			};
		}
	}

	async notify(method: string, params?: unknown[]) {
		const request: JsonRpcRequest = {
			jsonrpc: "2.0",
			method,
			params,
		};
		await fetch(this.url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(request),
		});
	}
}
