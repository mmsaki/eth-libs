export type JsonRpcId = string | number | null

export interface JsonRpcRequest {
  jsonrpc: "2.0"
  method: string
  params?: unknown
  id?: JsonRpcId
}

export interface JsonRpcSuccess {
  jsonrpc: "2.0"
  result: unknown
  id: JsonRpcId
}

export interface JsonRpcErrorObject {
  code: number
  message: string
  data?: unknown
}

export interface JsonRpcError {
  jsonrpc: "2.0"
  error: JsonRpcErrorObject
  id: JsonRpcId
}

export type JsonRpcResponse = JsonRpcSuccess | JsonRpcError
