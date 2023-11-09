// let arr=[2,1,1,5,6,2,3,1];
let arr = [7,5,3,2,1,4,10,11,1];


let max = -Infinity,
  pos = -1,
  secondMax = -Infinity;
let res = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    pos = i;
  }
}
if (pos == 0 || pos == arr.length - 1) {
  let temp = arr.slice();

  temp.sort((a, b) => a - b);

  secondMax = temp[temp.length - 2];
  pos = arr.indexOf(secondMax);
}

let c = 0;

for (let i = pos + 1; i < arr.length - 1; i++) {
  if (arr[i] <= arr[i + 1]) {
    res.push(i + 1);
    c++;
  }
}

for (let i = 0; i < pos - 1; i++) {
  if (arr[i] >= arr[i + 1]) {
    res.push(i);
    c++;
  }
}

let finalArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!res.includes(i)) finalArr.push(arr[i]);
}

console.log(finalArr, "\ncount:", c);
