function konnitiha(){
  return "Hello!";
}


function callNtimes(times, fun){
    for(var i=0; i < times; i++){
      console.log(fun());
  }
}

callNtimes(5, konnitiha);
