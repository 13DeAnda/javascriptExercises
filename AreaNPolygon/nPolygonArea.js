// A 1-interesting polygon is just a square with a side of length 1. 
// An n-interesting polygon is obtained by taking the n - 1-interesting 
// polygon and appending 1-interesting polygons to its rim, side by side. 
// You can see the 1-, 2-, 3- and 
// 4-interesting polygons in the picture below.


function solution(n){
    let nIndex = 1;
    let past = [];

    while(nIndex <n+1){
        let area = nIndex*nIndex;
        let typeSum = 'add'
        for(let index = past.length-1; index >-1; index -- ){
            if(typeSum == 'add'){
                area = area + past[index];
                typeSum = 'minus'
            }
            else{
                area = area - past[index];
                typeSum = 'add'
            }
        }
        past.push(area);
        nIndex++;
    }
    return past[past.length-1];
}

console.log("n=1 -> 1", solution(1)); 1*1
console.log("n=2 -> 5", solution(2)); 2*2 +1
console.log("n=3 -> 13", solution(3)); 3*3 +5 -1
console.log("n=4 -> 25", solution(4)); 4*4 +13 -5 +1
console.log("n=5 -> 41", solution(5)); 5*5 + 25 -13 +5 -1
