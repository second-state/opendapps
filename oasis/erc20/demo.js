/* Don't modify */
var abi = [];
var bytecode = '';
var cAddr = '';
/* Don't modify */

var instance = null;
window.addEventListener('web3Ready', function() {
  var contract = web3.ss.contract(abi);
  instance = contract.at(cAddr);
  reload();
});

function reload() {
    document.getElementById("address").innerHTML = cAddr;
}
