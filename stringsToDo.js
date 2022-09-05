//Remove Blanks:
//using examples removeBlanks("Pl ay Tha tF unkyM usic") and removeBlanks("I can not BELIEVE it's not BUTTER")
function removeBlanks(str) {
    let newStr = ''
    for(let i = 0; i <str.length; i++) {
        if(str[i] != ' ') {
            newStr += str[i]
        }
    }
    return newStr
}
//console.log(removeBlanks("Pl ay Tha tF unkyM usic")) logs => PlayThatFunkyMusic
//console.log(removeBlanks("I can not BELIEVE it's not BUTTER")) logs => IcannotBELIEVEit'snotBUTTER

//Get Digits
//Example to use: getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680 and getDigits("abc8c0d1ngd0j0!8") => 801008
function getDigits(str) {
    let newNumStr = ''
    for(let char in str) {
        if(!isNaN(str[char])) {
            newNumStr += str[char]
        }
    }
    return Number(newNumStr)
}
//console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")) logs => 1357924680
//console.log(getDigits("abc8c0d1ngd0j0!8")) logs => 801008

//Acronyms:
//Examples to use: acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW".  and acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronym(str) { 
    let wordsArr = str.split(' ')
    let acronymStr = ''
    for(let word in wordsArr) {
        if(wordsArr[word].length > 0) {
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }
    return acronymStr
}
//console.log(acronym("there's no free lunch - gotta pay yer way. ")) logs => TNFL-GPYW
//console.log(acronym("Live from New York, it's Saturday Night!")) logs => LFNYISN

//Count Non-Spaces
//Examples in use: countNonSpaces("Honey pie, you are driving me crazy") => 29 and countNonSpaces("Hello world !") => 11
function countNonSpaces(str) {
    let counter = 0
    for(let char in str) {
        if(str[char] != ' ') {
            counter++
        } 
    }
    return counter
}
//console.log(countNonSpaces("Honey pie, you are driving me crazy")) logs => 29
//console.log(countNonSpaces("Hello world !")) logged => "Hello World !" at first, then I realized I put only console.log("Hello world !") actually logs => 11

//Remove Shorter Strings:
//Examples in use: removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello'] and removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
function removeShorterStrings(arr, len) {
    let newStrings = []
    let nextIndex = 0
    for(let value in arr) {
        if(arr[value].length >= len) {
            newStrings[nextIndex++] = arr[value]
        }
    }
    return newStrings
}
//console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)) logs => [ 'Good morning', 'sunshine', 'Earth', 'says', 'hello' ]
//console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)) logs => [ 'There', 'bug', 'the', 'system' ]