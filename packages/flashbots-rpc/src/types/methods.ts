import type { Address, Hash32, Hex } from "@asyncswap/eth-types";
import type {
	EthCallBundleParams,
	EthCallBundleResult,
	EthCancelBundleParams,
	EthCancelBundleResult,
	EthCancelPrivateTransactionResult,
	EthCancelPrivateTransactioParams,
	EthSendBundleParams,
	EthSendBundleResult,
	EthSendPrivateRawTransactionParams,
	EthSendPrivateRawTransactionResult,
	EthSendPrivateTransactionParams,
	EthSendPrivateTransactionResult,
	GetDelayedRefundsParams,
	GetDelayedRefundsResult,
	GetDelayedRefundTotalsByRecipientParams,
	GetDelayedRefundTotalsByRecipientResult,
	GetFeeRefundsByBlockParams,
	GetFeeRefundsByBlockResult,
	GetFeeRefundsByBundleParams,
	GetFeeRefundsByBundleResult,
	GetFeeRefundsByRecipientParams,
	GetFeeRefundsByRecipientResult,
	GetFeeRefundTotalsByRecipientParams,
	GetFeeRefundTotalsByRecipientResult,
	MevSendBundleParams,
	MevSendBundleResult,
	MevSimBundleParams,
	MevSimBundleResult,
} from "./types";
export type FlashbotsMethodsSpec = {
	eth_sendBundle: {
		params: [EthSendBundleParams];
		result: EthSendBundleResult;
	};
	eth_callBundle: {
		params: [EthCallBundleParams];
		result: EthCallBundleResult;
	};
	mev_sendBundle: {
		params: [MevSendBundleParams];
		result: MevSendBundleResult;
	};
	mev_simBundle: {
		params: [MevSimBundleParams, { parentBlock: Hash32 }];
		result: MevSimBundleResult;
	};
	eth_cancelBundle: {
		params: [EthCancelBundleParams];
		result: EthCancelBundleResult;
	};
	eth_sendPrivateTransaction: {
		params: [EthSendPrivateTransactionParams];
		result: EthSendPrivateTransactionResult;
	};
	eth_sendPrivateRawTransaction: {
		params: [EthSendPrivateRawTransactionParams];
		result: EthSendPrivateRawTransactionResult;
	};
	eth_cancelPrivateTransaction: {
		params: [EthCancelPrivateTransactioParams];
		result: EthCancelPrivateTransactionResult;
	};

	flashbots_getFeeRefundTotalsByRecipient: {
		params: GetFeeRefundTotalsByRecipientParams[];
		result: GetFeeRefundTotalsByRecipientResult;
	};
	flashbots_getFeeRefundsByRecipient: {
		params: [GetFeeRefundsByRecipientParams];
		result: GetFeeRefundsByRecipientResult;
	};
	flashbots_getFeeRefundsByBlock: {
		params: [GetFeeRefundsByBlockParams];
		result: GetFeeRefundsByBlockResult;
	};
	flashbots_getFeeRefundsByBundle: {
		params: [GetFeeRefundsByBundleParams];
		result: GetFeeRefundsByBundleResult;
	};
	flashbots_setFeeRefundRecipient: {
		params: [Address, Address];
		result: { from: Address; to: Address };
	};
	buildernet_getDelayedRefunds: {
		params: [GetDelayedRefundsParams];
		result: GetDelayedRefundsResult;
	};
	buildernet_getDelayedRefundTotalsByRecipient: {
		params: [GetDelayedRefundTotalsByRecipientParams];
		result: GetDelayedRefundTotalsByRecipientResult;
	};
	flashbots_getMevRefundTotalByRecipient: {
		params: [Address];
		result: { total: Hex };
	};
	flashbots_getMevRefundTotalBySender: {
		params: [Address];
		result: { total: Hex };
	};
};
