// const points = [40, 100, 1, 5, 25, 10];
// // document.getElementById("demo1").innerHTML = points;

// const sort = points.sort(function (a, b) { return a - b });
// // const sort = points.sort();
// console.log(sort)
// // document.getElementById("demo2").innerHTML = points;


// let students = [
//     {
//         fname: "Rohan",
//         lname: "Dalal",
//         age: 19
//     },

//     {
//         fname: "Zain",
//         lname: "Ahmed",
//         age: 21
//     },

//     {
//         fname: "Anadi",
//         lname: "Malhotra",
//         age: 16
//     }
// ];

// students.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(students);

function sortNews(data, categoryName) {
    const sortedData = data.sort((a, b) => b.total_view - a.total_view);
    showNews(sortedData, categoryName);
}