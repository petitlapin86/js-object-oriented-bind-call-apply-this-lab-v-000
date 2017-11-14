
function justInvoke(fn) {
  return fn();
}

function setThisWithCall (fn, thisValue, arg) {

}

setThisWithCall.call(bob);
