describe("Deck", function() {
    it("can expose its cards", function() {
        var deck = new Deck();
        expect(deck.cards[0]).toEqual("a");
        expect(deck.cards[1]).toEqual("b");
        expect(deck.cards[2]).toEqual("c");
    });
    
    
    it("can be shuffled", function() {
        var deck = new Deck();
        var orderings = {};
       
        for (var i=0; i<5000; i++) {
            deck.shuffle();
            var order = deck.cards[0] + deck.cards[1] + deck.cards[2];
            if (!orderings[order]) {
                orderings[order] = 1;
            } else {
                orderings[order] = orderings[order] + 1;
            }
        }
        
        expect(orderings["abc"]>400).toEqual(true);
    });
});

describe("Pile", function() {
    it("is created empty", function() {
        var pile = new Pile();
        expect(pile.peek_at_top()).toBeNull();
    });
    it("can have items added to it", function() {
        var pile = new Pile();
        pile.add_to_top("TOP");
        expect(pile.peek_at_top()).toEqual("TOP");
    });
    it("adds newest items to top", function() {
        var pile = new Pile();
        pile.add_to_top("a");
        pile.add_to_top("b");
        expect(pile.peek_at_top()).toEqual("b");        
    });
    it("removes cards from the top", function() {
        var pile = new Pile();
        pile.add_to_top("a");
        pile.add_to_top("b");
        expect(pile.remove_from_top()).toEqual("b");
        expect(pile.remove_from_top()).toEqual("a");
        expect(pile.remove_from_top()).toBeNull();
    });
});






