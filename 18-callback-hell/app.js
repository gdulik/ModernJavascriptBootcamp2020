const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
// }, 1000)
// setTimeout(() => {
//   btn.style.transform = `translateX(200px)`;
// }, 2000)
// setTimeout(() => {
//   btn.style.transform = `translateX(300px)`;
// }, 3000)
// setTimeout(() => {
//   btn.style.transform = `translateX(400px)`;
// }, 4000)
// setTimeout(() => {
//   btn.style.transform = `translateX(500px)`;
// }, 5000)

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;
//   if (elRight + amount > bodyBoundary) {
//     onFailure();
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       if (onSuccess) onSuccess();
//     }, delay);
//   }
// };

// CALLBACKS
// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000);
//       });
//     });
//   });
// });

// CALLBACK HELL
// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     moveX(
//       btn,
//       100,
//       1000,
//       () => {
//         moveX(
//           btn,
//           100,
//           1000,
//           () => {
//             moveX(
//               btn,
//               100,
//               1000,
//               () => {
//                 moveX(btn, 100, 1000);
//               },
//               () => {
//                 alert("Cannot move further");
//               }
//             );
//           },
//           () => {
//             alert("Cannot move further");
//           }
//         );
//       },
//       () => {
//         alert("Cannot move further");
//       }
//     );
//   },
//   () => {
//     alert("Cannot move further");
//   }
// );

// PROMISES
// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if(rand<0.5){
//         resolve()
//       } else {
//         reject()
//       }
//     }, 5000);
//   });
// }

// makeDogPromise()
//   .then(() => {
//     console.log('Got a dog');
//   })
//   .catch(() => {
//     console.log('No dog');
//   });

// RESOLVING/REJECTING with value
// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, username: "Bilbo" },
//           { id: 5, username: "Esmeralda" },
//         ],
//         "/about": "This is the about page",
//       };
//       const data = pages[url];
//       if (!data) reject({ status: 404 });
//       resolve({ status: 200, data });
//     }, 1000);
//   });
// };

// fakeRequest("/users")
//   .then((res) => {
//     console.log(res.status);
//     console.log(res.data);
//     console.log("Request worked");
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log("Request failed");
//   });

const moveXPromise = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveXPromise(btn, 100, 1000)
  .then(() => moveXPromise(btn, 100, 1000))
  .then(() => moveXPromise(btn, 100, 1000))
  .then(() => moveXPromise(btn, 100, 1000))
  .then(() => moveXPromise(btn, 100, 1000))
  .then(() => console.log("Finished"))
  .catch(({ bodyBoundary, elRight, amount }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount} is too large!`);
  });
