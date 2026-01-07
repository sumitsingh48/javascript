function isPalindrome(str){
    let len = str.length;
    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return "not palindrome";
        }

    }
}
return "it is palindrome";

let word ="hello";
console.log(isPalindrome(word));