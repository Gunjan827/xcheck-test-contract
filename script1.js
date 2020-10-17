const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyNews = require('./build/contracts/MyNews.json');
const mnemonic = "finish misery tooth board city female album magic key found level industry";
const infuraUrl = 'https://ropsten.infura.io/v3/0a4a357f57ae4968874d5bcfb12585bb'; 

const init2 = async () => {
    const web3 = new Web3(infuraUrl);
    const networkId = await web3.eth.net.getId();
    const myNews = new web3.eth.Contract(
      MyNews.abi,
      MyNews.networks[networkId].address
    );
    web3.eth.accounts.wallet.add(mnemonic);
  
    const tx = myNews.methods.setData(2);
    const gas = await tx.estimateGas({from: address});
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(address);
    const txData = {
      from: address,
      to: myNews.options.address,
      data: data,
      gas,
      gasPrice,
      nonce, 
      chain: 'ropsten', 
    };
  
    console.log(`Old data value: ${await myNews.methods.data().call()}`);
    const receipt = await web3.eth.sendTransaction(txData);
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`New data value: ${await myNews.methods.data().call()}`);
  }

  init2();
  