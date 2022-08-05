function isPalidrome(inputString) {
    const reversed = inputString.split("").reverse().join("");
    return reversed === inputString;
}
console.log("aabaa->true", isPalidrome("aabaa"));
console.log("abac->false", isPalidrome("abac"));
console.log("a->true", isPalidrome("a"));