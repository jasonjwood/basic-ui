function reset() {
    document.getElementById("message").innerText = "Just did reset";
    }


class Pile {
    constructor(cardsIn) {
        if (!cardsIn) {
            this.cards = [];
        } else {
            this.cards = cardsIn;
        }
    }
    
    cards () {
        return this.cards;
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
        if (!card) return null;
        
        this.cards.splice(this.cards.length-1, 1);
        return card;
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


class Deck {
    constructor (cardsIn) {
        this.piles = {}
        this.piles["draw"] = new Pile(cardsIn)
        this.piles["discard"] = new Pile()
    }
    
    piles () {
        return this.piles;
    }
    
    draw_and_discard() {
        var card = this.piles["draw"].remove_from_top();
        this.piles["discard"].add_to_top(card);
        return card;
    }
    
    
}
	
