const sinon = [];
var out=[];
function writeCards(sinon,event) {
  for (let i = 0; i < sinon.length; i++) {
   out.push(`Thank you, ${sinon[i]}, for the wonderful ${event} gift!`);
  }

  return out;
}
function countDown(a){
  while (a>=0){
    console.log(a--)
  }
}


