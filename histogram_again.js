function histogram(text){
    // Make a empty object
    var result = {};
    // Use the for loop to go through all the letters in text
    for(var i=0; i<text.length; i++){
    // if the text[i] is in the {}, it counts +1
        if(text[i] in result){
            result[text[i]]++;
        }
    // if it doesn't exist or the first time, you define 1
        else{
            result[text[i]]=1;
        }
    }
    return result;
}

console.log(histogram("bananas"));
