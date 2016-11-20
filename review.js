// Just thepositives

function positiveNumbers(num){
    var result =[];
    for(var i=0; i< num.length; i++){
        var position = num[i];
        if(position > 0){
            result.push(position);
        }
    }
    return result;
}

console.log(positiveNumbers([1,3,6,-55,44]));
