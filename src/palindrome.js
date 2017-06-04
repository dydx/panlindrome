function sanitize (phrase) {
    return phrase.replace(/\s/g, '').toLowerCase();
}

function reverse (phrase) {
    return phrase.split('').reverse().join('');
}

module.exports = function isPalindrome (phrase) {
    let _phrase = sanitize(phrase);

    return reverse(_phrase) === _phrase;
};
