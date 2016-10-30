function long(str){
    var result = "";
    for(var i=0; i < str.length; i++){
        var loop = str[i];
        var lookTow = str.substr(i, 2);
        if(lookTow === "ee"){
            loop = "eeee";
        }
        else if(lookTow === "oo"){
            loop = "oooo";
        }
        result += loop;
    }
    return result;
}

console.log(long("loop"));
