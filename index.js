function reverteTexto(texto) {
    const textoArray = texto.split('');
    const textoReversoArray = [...textoArray].reverse();

    return textoReversoArray.join('');
}

function isPalindrome(texto) {
    const textoReverso = reverteTexto(texto);
    const result = texto === textoReverso;

    return result;
}

module.exports = { isPalindrome };