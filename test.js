const lol = [{name: "SashaSenior", age: 25},  {name: "Traktor", age: 21},  {name: "Salam", age: 21}, {name: "Kamaz", age: 25},]

const kek = (key, value, arr) => {
  return arr.reduce((acc, el, i, arr) =>  el[key] === value ? el : acc, null)
}


// console.log(kek('dwa', 21, lol));

// console.log(lol[0]['age']);

const arr = [1, 2, 3, 4, 5]

const myReduce = (arr, callback, initialValue) => {
  if (!Array.isArray(arr) || !typeof callback === "function" || !arr.length) {
    return undefined
  };

  let acc;
  
  if (initialValue) {
    acc = initialValue;
    for (let i = 0; i < arr.length; i++) {
      acc = callback(acc, arr[i], i, arr)     
    }
  } else {
    acc = arr[0]
    for (let i = 1; i < arr.length; i++) {
       acc = callback(acc, arr[i], i, arr)  
    }
  }
  // let start;
  // initialValue ? start = initialValue : start = 0
  // let acc = start
  //   for (let i=start; i < arr.length; i++) {
  //       callback(acc, arr[i], i, arr)  
  //   }
  return acc;
}

// console.log(myReduce([1], 'dwadwf'));

// const mycb = (acc, el, i, arr) => {
//   return acc +=el 
// }

const mycb = (acc, el, i, arr) => {
  return acc * el;  
}

console.log(myReduce(lol, mycb))
