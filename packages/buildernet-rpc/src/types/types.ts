import type { Address, Hash32, Hex } from "@asyncswap/eth-types";

export type Cursor = string;
export type BuildernetSendBundleResult = {
  bundleHash: Hex;
};
export type BuildernetSendBundleParams = {
  txs: Hex[];
  blockNumber: Hex | "0x" | null; // 0x | null or missing field for next block only
  // Optional fields
  replacementUuid?: string;
  replacementNonce?: string;

  revertingTxHashes?: string[];
  droppingTxHashes?: string[];
  refundTxHashes?: string[];

  minTimestamp?: number;
  maxTimestamp?: number;

  refundPercent?: number;
  refundRecipient?: string;
  delayedRefund?: boolean;

  refundIdentity?: string;
};
export type BuildernetGetFeeRefundsByRecipientParams = {
  recipient: Address;
  cursor?: Cursor;
};
export type BuildernetGetFeeRefundsResult = {
  refunds: Array<{
    hash: Hash32;
    amount: Hex;
    blockNumber: Hex;
    status: "pending" | "received";
    recipient: Address;
  }>;
  cursor: Cursor;
};
export type BundleHash = Hash32;
export type DelayedRefundsBase = {
  recipient: Address;
  cursor?: Cursor;
};
type WithoutBundleHash = DelayedRefundsBase & {
  hash?: never;
  blockRangeFrom?: Hex;
  blockRangeTo?: Hex;
};
type WithBundleHash = DelayedRefundsBase & {
  hash: BundleHash;
  blockRangeFrom: Hex;
  blockRangeTo: Hex;
};
export type BuildernetGetDelayedRefundsParams =
  | WithBundleHash
  | WithoutBundleHash;
export type BuildernetGetDelayedRefundsResult = {
  refunds: [
    {
      amount: Hex;
      blockNumber: Hex;
      hash: Hash32;
      recipient: Address;
      status: "pending" | "received";
    },
  ];
  nextCursor: Cursor;
  indexedUpTo: Hex;
};
export type BuildernetGetDelayedRefundTotalsByRecipientParams = {
  recipient: Address;
  blockRangeFrom?: Hex;
  blockRangeTo?: Hex;
};
export type BuildernetGetDelayedRefundTotalsByRecipientResult = {
  indexedUpTo: Hex;
  pending: Hex;
  received: Hex;
};
