const findContentChildren = (g, s) => {
//     g.sort((a, b) => a - b);
//     s.sort((a, b) => a - b);

//     let cookie = 0;
//     let content = 0;

//     console.log(g, s);

//     for (const factor of g) {
//         if (cookie < s.length) {
//             let updated = false;
//             if (s[cookie] >= factor) {
//                 content++;
//                 cookie++;
//                 updated = true;

//             } else {
//                 for (let i = cookie + 1; i < s.length; i++) {
//                     if (s[i] >= factor) {
//                         content++;
//                         cookie = i + 1;
//                         updated = true;
//                     }
//                 }
//             }

//             if (!updated) {
//                 break;
//             }
//         } else {
//             break;
//         }
//     }

//     return content;
// };