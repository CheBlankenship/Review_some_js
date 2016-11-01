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


function goodJob(name){
    return name.forEach(function(persone){
        console.log("Good job " + persone + " !");
    });
}

goodJob(people);
