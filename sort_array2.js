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

function sortbylen(people){
    return people.sort(function(a,b){
        return a.length - b.length;
    });
}

console.log(sortbylen(people));
