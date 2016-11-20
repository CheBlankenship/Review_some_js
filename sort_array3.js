var arr = [[1, 3, 4],[2, 4, 6, 8],[3, 6]];


function sunNum(num){
    return num.reduce(function(a,b){
        return a + b;
    });
}

console.log(sumNum(arr));

// function orderBySum(sunNum){
//
//     });
// }
//
// console.log(orderBySum(arr));
