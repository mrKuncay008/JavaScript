// program Unutk menghitung jumlah vokal
function countVowel(str) {
    // find the count of vowels
    const count = str.match(/(aeiou)/gi).length;
    // return number of vowels
    return count;
}

// take input
const string = "Kuncay Hiyaaa";
const result = countVowel(string);
console.log(result);