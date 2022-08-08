// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
// each statue having an non-negative integer size. Since he likes to make things perfect, 
// he wants to arrange them from smallest to largest so that each statue will be bigger than 
// the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
//  Help him figure out the minimum number of additional statues needed.
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.


function solution(statues){
    let smallest;
    let biggest;

    for(let statue of statues){
        if(biggest=== undefined ||  statue > biggest ){
            biggest = statue;

        }
        if(smallest === undefined || statue < smallest){
            smallest = statue;
        }
    }
    const collectionSize = biggest - smallest +1;
    return collectionSize - statues.length;

}

console.log('[6, 2, 3, 8] => 3', solution([6, 2, 3, 8]));
console.log('[0, 3] => 2', solution([0, 3]));
