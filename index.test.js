const { isPalindrome } = require('./index.js');
test('É palindrome', () => {
    expect(isPalindrome('ame ema')).toBeTruthy();
})

test('Não é palindrome', () => {
    expect(isPalindrome('girafa')).toBeFalsy();
})