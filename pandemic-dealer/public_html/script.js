function reset() {
    document.getElementById("message").innerText = "Just did reset";
    }


class Pile {
    constructor() {
        this.cards = [];
    }
    
    add_to_top(card) {
        this.cards.push(card);
    }
    
    peek_at_top() {
        if (this.cards.length === 0) {
            return null;
        }
        return this.cards[this.cards.length-1];
    }
    
    remove_from_top() {
        var card = this.peek_at_top();
        this.cards.splice(this.cards.length-1, 1);
        return card;
    }
    
    
}


class Deck {
    constructor () {
        this.cards = ["a", "b", "c"];
        this.piles = {};
    }
    
    cards () {
        return this.cards;
    }
    
    swap(l, x, y) {
        var b = l[x];
        l[x] = l[y];
        l[y] = b;
    }
    
    shuffle() {
        for (var i = this.cards.length - 1; i>0; i--) {
            var n = Math.floor(Math.random() * (i+1));
            this.swap(this.cards, i, n);
        }
    }
}
	
