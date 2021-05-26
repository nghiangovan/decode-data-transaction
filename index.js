const InputDataDecoder = require('ethereum-input-data-decoder');
const ethers = require('ethers');
const timeLockABI = './timeLockABI.json';
const RouterABI = './RouterABI.json';
const decoder = new InputDataDecoder(RouterABI);

function decodeParameters(types, data) {
  const abiCoder = new ethers.utils.AbiCoder();
  return abiCoder.decode(types, data);
}

function encodeParameters(types, values) {
  const abi = new ethers.utils.AbiCoder();
  return abi.encode(types, values);
}

function buf2hex(buffer) {
  // buffer is an ArrayBuffer
  return Array.prototype.map
    .call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2))
    .join('');
}

let txData =
  '0x414bf389000000000000000000000000bbfee90bafe94a8b694d1503485f7320974b5c9600000000000000000000000024f90ec26affacc9cacc34829d350078f79a8a6a000000000000000000000000000000000000000000000000000000000000271000000000000000000000000054c823fa9bedec087f3eda8186e29d824d6cfdc2000000000000000000000000000000000000000000000000000000006094f35d00000000000000000000000000000000000000000000000000005af3107a400000000000000000000000000000000000000000000000000000005a07edce46a80000000000000000000000000000000000000000000000000000000000000000';
let dDecode = decoder.decodeData(txData);
console.log(dDecode);
console.log(parseInt(dDecode.inputs[0][4]));
console.log(parseInt(dDecode.inputs[0][5]));
console.log(parseInt(dDecode.inputs[0][6]));
console.log(parseInt(dDecode.inputs[0][7]));

// console.log('Decode: ', dDecode, '\n\n\n');
// console.log(' - target: ', dDecode.inputs[0]);
// console.log(' - value: ', parseInt(dDecode.inputs[1]));
// console.log(' - signature: ', dDecode.inputs[2]);
// console.log('0x' + buf2hex(dDecode.inputs[3]));
// console.log(' - signature: ', decodeParameters(dDecode.types, '0x' + buf2hex(dDecode.inputs[3])));

// console.log(' - eta: ', parseInt(dDecode.inputs[4]));

// console.log(encodeParameters(['address'], ['0x73feaa1ee314f8c655e354234017be2193c9e24e']));
// console.log(
//   decodeParameters(
//     ['address'],
//     '0x00000000000000000000000073feaa1ee314f8c655e354234017be2193c9e24e'
//   )
// );
