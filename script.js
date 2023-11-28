// ES6 fat arrow function
// function number() {
//     return 10;
// }

// let number = () => {
//     return 10;
// }

// let number = (a,b) => {
//     return a+b;
// }

// console.log(number(2,3));

// var javascript = {
//     name : 'JavaScript',
//     libraries: ['React','Angular','Vue'],
//     printLibraries: function() {
//         console.log(this);
//         this.libraries.forEach((a) => {
//             console.log(`${this.name} loves ${a}`);
//         })
//     }
// };

// javascript.printLibraries();.clear();

// console.clear();
// // console.log(window)
// fetch("https://jsonplaceholder.typicode.com/posts/3", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (!res.ok) {
//       const message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch(err > console.log(err));

const makeRequest = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        const message = `Error : ${res.status}`;
        throw new Error(message);
    const data = await res.json();
    return data;
}

const getData = () => {
    }
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};

getData();