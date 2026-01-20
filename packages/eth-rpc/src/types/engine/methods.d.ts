declare global {
	export enum EngineMethods {
		// eth_methods
		eth_blockNumber = "eth_blockNumber",
		eth_call = "eth_call",
		eth_chainId = "eth_chainId",
		eth_getCode = "eth_getCode",
		eth_getBlockByHash = "eth_getBlockByHash",
		eth_getBlockByNumber = "eth_getBlockByNumber",
		eth_getLogs = "eth_getLogs",
		eth_sendRawTransaction = "eth_sendRawTransaction",
		eth_syncing = "eth_syncing",
		// engine/blob
		engine_getBlobsV1 = "engine_getBlobsV1",
		engine_getBlobsV2 = "engine_getBlobsV2",
		engine_getBlobsV3 = "engine_getBlobsV3",
		// engine/capabilities
		engine_exchangeCapabilities = "engine_exchangeCapabilities",
		// engine/forkchoice
		engine_forkchoiceUpdatedV1 = "engine_forkchoiceUpdatedV1",
		engine_forkchoiceUpdatedV2 = "engine_forkchoiceUpdatedV2",
		engine_forkchoiceUpdatedV3 = "engine_forkchoiceUpdatedV3",
		// engine/payload
		engine_newPayloadV1 = "engine_newPayloadV1",
		engine_newPayloadV2 = "engine_newPayloadV2",
		engine_newPayloadV3 = "engine_newPayloadV3",
		engine_newPayloadV4 = "engine_newPayloadV4",
		engine_getPayloadV1 = "engine_getPayloadV1",
		engine_getPayloadV2 = "engine_getPayloadV2",
		engine_getPayloadV3 = "engine_getPayloadV3",
		engine_getPayloadV4 = "engine_getPayloadV4",
		engine_getPayloadV5 = "engine_getPayloadV5",
		engine_getPayloadBodiesByHashV1 = "engine_getPayloadBodiesByHashV1",
		engine_getPayloadBodiesByRangeV1 = "engine_getPayloadBodiesByRangeV1",
		engine_newPayloadV5 = "engine_newPayloadV5",
		engine_getPayloadV6 = "engine_getPayloadV6",
		// engine/transition-configuration
		engine_exchangeTransitionConfigurationV1 = "engine_exchangeTransitionConfigurationV1",
	}
}

export { };
