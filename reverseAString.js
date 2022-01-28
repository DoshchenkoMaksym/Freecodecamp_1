/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

function reverseString1(str) {

    let arrFromStr = str.split('');

    let reverseArr = arrFromStr.reverse();

    str = reverseArr.join('');

    return str;
};

function reverseString2(str) {

    let arrFromStr = str.split('');

    let reverseArr = arrFromStr.map((item, index, arr) => { 
        
        return item = arr[arr.length - (index + 1)];

    });

    str = reverseArr.join('');

    return str;

};



