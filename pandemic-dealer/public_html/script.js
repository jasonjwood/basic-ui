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
    
    remove_from_top(card) {
        this.cards.splice(0, 1);
    }
    
    peek_at_top() {
        if (this.cards.length == 0) {
            return null;
        }
        return this.cards[0];
    }
}


class Deck {
    constructor () {
        this.cards = ["a", "b", "c"];
    }
    
    cards() {
        return this.cards;
    }
    
    draw_top() {
        return this.cards[0];        
    }
    
    shuffle() {
        
    }
}
	
