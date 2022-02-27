const Web3 = require("web3");
const contract = require("truffle-contract");
const path = require("path");
const contractFullPath = path.resolve(__dirname, "../build/SimpleMessage.json");
console.log({ contractFullPath });
const simpleMessageContract = require(contractFullPath);
console.log("givenProvider:", Web3.givenProvider);
const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:8545");

const LMS = contract(simpleMessageContract);
LMS.setProvider(web3.currentProvider);

async function start() {
  console.log("start");
  const accounts = await web3.eth.getAccounts();
  const lms = await LMS.deployed();
  lms
    .setMessage("Hello World", { from: accounts[0] })
    .then((r) => {
      console.log("message sent");
      console.log({ r });
      console.log("logs:", JSON.stringify(r.logs, null, 2));
    })
    .catch(console.error);
}

start().then((_) => {
  console.log("done");
});
