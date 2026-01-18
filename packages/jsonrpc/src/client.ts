import type { JsonRpcRequest, JsonRpcResponse } from "./types";

export class JsonRpcClient {
  private id = 0

  constructor(
    private send: (req: JsonRpcRequest) => Promise<JsonRpcResponse>
  ) {}

  async call<T = unknown>(method: string, params?: unknown): Promise<T> {
    const request: JsonRpcRequest = {
      jsonrpc: "2.0",
      method,
      params,
      id: ++this.id,
    }
    const response = await this.send(request);
    if ("error" in response) {
      const e = response.error
      throw new Error(`RPC error ${e.code} ${e.message}`)
    }
    return response.result as T
  }

  notify(method: string, params?: unknown) {
    const request: JsonRpcRequest = {
      jsonrpc: "2.0",
      method,
      params
    }
    return this.send(request)
  }
}
