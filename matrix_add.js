function matrixAdd(arr1, arr2){
    var result = [[],[]];
    for(var i=0; i<result.length; i++){
        // This for loop will stop when the empty array is fill
        for(var j=0; j<arr1.length; j++){
            // This for loop will stop when arr1 is looped through.
            result[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return result;
}


console.log(matrixAdd([[1,3],[2,4]],[[1,2],[2,3]]));
