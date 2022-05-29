// 1)
let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"]

let teamA = []

let teamH = []

harryPotterTeam.forEach(item => {
    if (item.includes('a')) {
        teamA.push(item)
    } else if (item.includes('H')) {
        teamH.push(item)
    }
})

console.log(teamA);
console.log(teamH);
// 2)
let arr = [6, 3, "ten", 1, true, "4"]

let sum = 0;

let multiply = 1;

arr.forEach(item => {
    if (typeof item === "number") {
        sum += item, multiply *= item
    }
})

console.log(sum);
console.log(multiply);
// 3)



// 4)
let students = [
    { name: 'Alexey', id: 123, marks: 9 }, { name: 'Vitalik', id: 101, marks: 5 },
    { name: 'Tanya', id: 200, marks: 7 },
    { name: 'Sasha', id: 115, marks: 10 }
]

let studentsId = students.find(item => {
    return item.id === 101
})

console.log(studentsId);
// 5)




// 6)
let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];

parfume.forEach(index => {
    console.log(index)
})
console.log(parfume.length);

parfume.splice(3, 1, "Jo Malone")

console.log(parfume);