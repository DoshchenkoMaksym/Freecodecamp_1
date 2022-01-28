/* Return the length of the longest word in the provided sentence.

Your response should be a number. */


function findLongestWordLength1(str) {

    let stringInArr = str.split(' ');

    let arrInNums = stringInArr.map((item, index, arr) => {

        return item.length >= arr[arr.length - (index + 1)].length ? item.length : 0;

    });

    str = Math.max.apply(null, arrInNums);

    return str;

};


function findLongestWordLength2(str) {

    let stringInArr = str.split(' ');

    let longestWord = '';

    for (let i = 0; i < stringInArr.length; i++) {
        
        if (stringInArr[i].length > longestWord.length) {
            
            longestWord = stringInArr[i];
        
        };
    };

    return longestWord.length;
};

