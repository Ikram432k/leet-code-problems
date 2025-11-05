// //383. Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
    let magazineArr = magazine.split("");
    let ransomNoteArr = ransomNote.split("");
    for(let i =0;i<magazineArr.length;i++){
        if(ransomNoteArr.includes(magazineArr[i])){
            ransomNoteArr.splice(ransomNoteArr.indexOf(magazineArr[i]), 1)
        }
    }
    if(ransomNoteArr.length == 0 ) {return true}
    else{return false}
};

console.log(canConstruct("fffbfg","effjfggbffjdgbjjhhdegh"))