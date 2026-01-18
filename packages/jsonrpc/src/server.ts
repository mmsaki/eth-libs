import type { JsonRpcResponse,  JsonRpcRequest } from "./types";

export const INVALID_REQUEST  = -32600;
export const METHOD_NOT_FOUND = -32601;
export const INVALID_PARAMS   = -32602; // unused
export const INTERNAL_ERROR   = -32603;
export const PARSE_ERROR      = -32700; // unused
export const REQUEST_ABORTED  = -32800; // unused

export type Handler = (params: any) => any | Promise<any>

export class JsonRpcServer {
  private methods = new Map<string, Handler>()

  register(method: string, handler: Handler) {
    this.methods.set(method, handler)
  }

  async handle(
    raw: unknown, 
  ): Promise<JsonRpcResponse | JsonRpcResponse[] | null> {
    // handle batch
    if (Array.isArray(raw)) {
      if (raw.length === 0) {
        return this.error(null, INVALID_REQUEST, "Invalid request")
      }
      const responses = await Promise.all(
        raw.map(item => this.handle(item))
      )
        const filtered = responses.filter(
        (r): r is JsonRpcResponse => r !== null
      )
      return filtered.length > 0 ? filtered : null
    }

    // handle single response
    let req = raw as Partial<JsonRpcRequest>

    if (
      typeof req !== "object" ||
        req === null ||
        req.jsonrpc !== "2.0" ||
        typeof req.method !== "string"
    ) {
      return this.error(null, INVALID_REQUEST, "Invalid request")
    }
    
    const id = 
      typeof (req as any)?.id === "string" ||
      typeof (req as any)?.id === "number" ||
      (req as any)?.id === null ? (req as any).id : null

    const handler = this.methods.get(req.method)
    if (!handler) {
      return id === null ? null : this.error(req.id, METHOD_NOT_FOUND, "Method not found")
    }

    try {
      const result = await handler(req.params)
      if (req.id === undefined) return null // notification
      return {
        jsonrpc: "2.0",
        result,
        id: req.id
      }
    } catch (err) {
      return this.error(
        req.id ?? null,
        INTERNAL_ERROR,
        "Internal error",
        err instanceof Error ? err.message : err
      )
    }
  }

  private error(
    id: JsonRpcRequest["id"],
    code: number,
    message: string,
    data?: unknown
  ): JsonRpcResponse {
    return {
      jsonrpc: "2.0",
      error: { code, message, data },
      id: id ?? null
    }
  }
}
