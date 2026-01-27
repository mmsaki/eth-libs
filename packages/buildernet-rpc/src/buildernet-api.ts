import { BaseClient, type RpcSpec } from "@asyncswap/jsonrpc";
import type { BuildernetMethodsSpec } from "./types";

export class BuildernetClient extends BaseClient<BuildernetMethodsSpec> {
	constructor(url: string) {
		super(url);
	}
}

export type BuildernetRpc = BuildernetClient & RpcSpec<BuildernetMethodsSpec>;
