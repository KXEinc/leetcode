// const mergeTwoLists = function(l1, l2) {
//   let joinArray = l1.concat(l2);
//   let result = []
//   while (joinArray.length > 0) {
//     result.push(joinArray.splice(joinArray.indexOf(Math.min(...joinArray)), 1)[0]);
//   }
//   return result;
// };

//console.log(mergeTwoLists([1, 2, 3], [1, 4, 5]));

// const kek = {
//   lol: 'kek',
//   sas: {
//     ololol: "lol"
//   }
// }
//
// console.log({...kek})

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
//  }
//
//  const kek = new ListNode((new ListNode(5))),
// console.log(kek);

// const numbers = [0, 0, 1, 0, 0, 1, 0]
//
// function jumpingOnClouds(c) {
//   let num = 0;
//   for(let i = 0; i < c.length; i++){
//     if(c[i] === c[i+2]){
//       num += 1;
//       i += 1;
//     } else if (c[i] === c[i+1]) {
//       num += 1;
//     }
//   }
//   return num;
// }

// function repeatedString(s, n) {
//   if(s.length === 1 && s === 'a') return n;
//   let l = 0;
//   s.length > n ? l = s.length : l = n;
//     let numOfA = s.repeat(l)
//       .slice(0, n)
//       .split('')
//       .filter(e => e === 'a')
//       .length;
//   return numOfA;
// }

// function repeatedString(s, n) {
//   const countA = s => s.split('a').length - 1;
//   let len = s.length;
//   let reps = Math.floor(n / len);
//   let remainder = s.slice(0, n % len);
//
//   return reps * countA(s) + countA(remainder);
// }

// function countingValleys(n, s) {
// //   let valey = 0;
// //   let passCount = 0;
// //   for(let i = 0; i < n; i++){
// //     s[i] === 'D' ? passCount -= 1 : passCount += 1;
// //     if(passCount < 0) valey += 1;
// //   }
// //   return valey;
// // }
// //
// //
// //
// // console.log(countingValleys(8, 'UDDDUDUU'));

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null
    }
  }
};
let l2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: null
    }
  }
};

// const mergeTwoLists = function(l1, l2) {
//   let mergedList = new ListNode();
//   let l3 = mergedList;
//   if(!l1 && !l2) return null;
//   // loop over the lists as long as both of them have some value
//   while(l1 && l2) {
//     if(l1.val < l2.val){
//       l3.next = l1;
//       l1 = l1.next;
//     } else {
//       l3.next = l2;
//       l2 = l2.next;
//     }
//     // move l3 to its next position so that it points to the last node of merged list.
//     l3 = l3.next;
//   }
//
//   l3.next = l1 || l2;
//
//   return mergedList.next;
// };
//
//
// console.log(mergeTwoLists(l1, l2));

// let a = new ListNode();
// let b = {...a};
//
// b.next = 1;
//
// console.log(a, b);

// let s = {
//   kek: 1,
//   lol: {
//     cheburek: 2
//   }
// }
//
// let c = s
//
// console.log('');
// console.log("s:",s);
// console.log('c:', c)
//
// c.lol = {cheburek: 'ory'};
//
// console.log('');
// console.log("s:",s);
// console.log('c:', c)
//
// c = c.lol;
//
// console.log('');
// console.log("s:",s);
// console.log('c:', c)
//
// c.cheburek = 'blyat';
//
// console.log('');
// console.log("s:",s);
// console.log('c:', c)

// arr = [
//   [-9, -9, -9,  1, 1, 1],
//   [0, -9,  0,  4, 3, 2],
//   [-9, -9, -9,  1, 2, 3],
//   [0,  0,  8,  6, 6, 0],
//   [0,  0,  0, -2, 0, 0],
//   [0,  0,  1,  2, 4, 0]
// ];

// function hourglassSum(arr) {
//   let hourglasses = [];
//   for(let j = 0; j < 4; j++) {
//     for (let i = 0; i < 4; i++) {
//       let arrHandler = []
//       arrHandler.push(
//         arr[j][i],
//         arr[j][i + 1],
//         arr[j][i + 2],
//         arr[j+1][i + 1],
//         arr[j+2][i],
//         arr[j+2][i + 1],
//         arr[j+2][i + 2]);
//       hourglasses.push(arrHandler)
//     }
//   }
//   const hourglassesSum = hourglasses.map(arr => arr.reduce((acc, el) => acc + el));
//
//   return Math.max(...hourglassesSum);
// }

// console.log(hourglassSum(arr));

function rotLeft(a, d) {
  return a.slice(d).concat(a.slice(0, d));
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));

