// QNo 1. Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// *             *
//     *     *
//        *
//     *     *
// *             *

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   gap = "";
//   for (let j = 1; j <= n; j++) {
//     if (i+j === n+1) {
//       gap += "*";
//     } else if(i == j){
//         gap += "*";
//     }
//      else {
//       gap += " ";
//     }
//   }
//   console.log(gap);
// }

// QNo 2. Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
//              *
//        *           *
//  *                       *
//        *           *
//              *


// let n = 5;
// for(let i = 1; i <= n; i++){
//     gap = "";
//     for(let j = 1; j <= n; j++){
//         if(i+j == n-1 || i+j == n+1 || i+j == n+3){
//             gap += "*";
//         }
//         else{
//             gap += "  ";
//         }
//     }
//     console.log(gap);
// } 

// Qno 3: Print the following pattern
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let n = 5, count = 1;
// for(let i = 1; i <= n; i++) {
//     gap = '';
//     for(let j = 1; j <= i; j++) {
//         gap = gap + ' ' + count;
//         count++;
//     }
//     console.log(gap);
// }

// Qno 4: Print Fibonacci series in this order
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// 0
// 1 1
// 2 3 5
// 8 13 21 34
// 55 89 144 233 377

// let n = 5, a = 0, b = 1;
// for(let i = 1; i <= n; i++) {
//     gap = '';
//     for(let j = 1; j <= i; j++){
//         gap += ' ' + a;
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     console.log(gap);
// }

// Qno 5: Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 10
// Also, n is odd.
// Output
// Print the following pattern
// Sample Output:
// For n = 5
//          1
//      2   3   2
//   3  4  5   4   3
//      2   3   2
//          1