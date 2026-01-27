import { BaseClient, type RpcSpec } from "@asyncswap/jsonrpc";
import type { FlashbotsMethodsSpec } from "./types";

export class FlashbotsClient extends BaseClient<FlashbotsMethodsSpec> {
  constructor(url: string) {
    super(url);
  }
}

export type FlashbotsRpc = FlashbotsClient & RpcSpec<FlashbotsMethodsSpec>;
