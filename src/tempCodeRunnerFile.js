
//             return this.data[this.data.length - 1];
//         },
//         size: function () {
//             return this.data.length;
//         },
//     };

//     [...str].forEach((currentBracket) => {
//         console.log('currentBracket 1 =', currentBracket);
//         bracketsConfig.forEach((bracketsArray) => {
//             if (currentBracket === bracketsArray[0]) {
//                 stack.add(currentBracket);
//                 console.log('bracketsArray[0] =', bracketsArray[0], 'stack add =', stack.data);
//             } else {
//                 if (stack.size() === 0) {
//                     console.log('stack size =', stack.data);
//                     return false;
//                 } else {
//                     bracketsConfig.forEach((bracketsArray) => {
//                         if (stack.top() === bracketsArray[0] && currentBracket === bracketsArray[1]) {
//                             console.log(
//                                 'currentBracket 2 =',
//                                 currentBracket,
//                                 'bracketsArray[1] 2 =',
//                                 bracketsArray[1],
//                                 'bracketsArray[0] 1 =',
//                                 bracketsArray[0],
//                                 'stack top =',
//                                 stack.top()
//                             );

//                             stack.take();