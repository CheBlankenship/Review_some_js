function hola(){
    console.log("hello!");
}

function call3times(fun){
    fun();
    fun();
    fun();
}


call3times(hola);
