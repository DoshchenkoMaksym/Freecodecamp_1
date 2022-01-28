/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending. */


function truncateString(str, num) {

    let truncString = str.slice(0, num);

    return truncString.length === str.length ? truncString : truncString + '...';

};

