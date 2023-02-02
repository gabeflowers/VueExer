function newPassword(a, b) {
    // Write your code here
    var result = [];
    var coringa = '0';
    for ( let i = 0; i < a.length; i++){
        result.push(a[i]);
        result.push(coringa);
    }
    result.toString();
    for ( let i = 0; i < b.length; i++){
        if( result[i] === '0') {
            result.replace(result[i], b[i]);
        }
    }
    console.log(result);

}

console.log(newPassword('abacate', 'mamao'));