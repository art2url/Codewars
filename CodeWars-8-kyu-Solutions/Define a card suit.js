// You get any card as an argument. Your task 
// is to return a suit of this card.

//v3
function defineSuit(card) {
    let char = card.charAt(card.length - 1)

    return char == '♣' ? 'clubs' :
        char == '♠' ? 'spades' :
        char == '♦' ? 'diamonds' :
        char == '♥' ? 'hearts' : null
}

//v2
function defineSuit(card) {
    let cardOneChars = card.charAt(1);
    let cardTwoChars = card.charAt(2);

    return (cardOneChars == '♣' || cardTwoChars == '♣') ? 'clubs' :
        (cardOneChars == '♠' || cardTwoChars == '♠') ? 'spades' :
        (cardOneChars == '♦' || cardTwoChars == '♦') ? 'diamonds' :
        (cardOneChars == '♥' || cardTwoChars == '♥') ? 'hearts' : null

}

//v1
function defineSuit(card) {
    if (card.charAt(1) == '♣' || card.charAt(2) == '♣') {
        return 'clubs'
    } else if (card.charAt(1) == '♠' || card.charAt(2) == '♠') {
        return 'spades'
    } else if (card.charAt(1) == '♦' || card.charAt(2) == '♦') {
        return 'diamonds'
    } else if (card.charAt(1) == '♥' || card.charAt(2) == '♥') {
        return 'hearts'
    }
}

defineSuit('10♣')