// Object Transformation:

// Given an array of objects representing people, use arrow functions to transform the array into a new array of objects where each person's age is incremented by 1.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
];

const incrementedAges = people.map(person => ({
    name: person.name,
    age: person.age + 1
}))

console.log(incrementedAges)

