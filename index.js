const words = ['hi', 'bYe', 'YYes'];

function dontAskWhy(arr) {
  const updatedArr = [];
  for(let i = 0; i < arr.length; i++) {
    const word = arr[i].toLowerCase();
    if(!word.includes('y')) {
      updatedArr.push(`Is it ${word}`);
    }
  }
  console.log(updatedArr);
}

dontAskWhy(words);

module.exports = { dontAskWhy };
