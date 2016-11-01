var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];


// function goodJob(name){
//     return name.forEach(function(person){
//         console.log("Good job " + person + " !");
//     });
// }
//
// goodJob(people);


function orderAlphabetically(arr) {
    return arr.sort();
}

console.log(orderAlphabetically(people));
