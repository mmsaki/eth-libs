import { ExecutionClient } from "./src";

const url = "http://localhost:8545";
const eth = new ExecutionClient(url);
const balance = await eth.eth_getBalance(
	"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
	"latest",
);
console.log("Balance:", balance);
eth.eth_getTransactionCount("0x34", "safe");
