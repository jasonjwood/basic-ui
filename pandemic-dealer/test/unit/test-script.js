describe("Deck", function() {
    it("is created with draw and discard piles", function() {
        var deck = new Deck(["a", "b", "c"])
        expect(deck.piles["draw"].cards.length).toEqual(3);
        expect(deck.piles["discard"].cards.length).toEqual(0);
    })
    
    it("can move cards from draw to discard", function() {
        var deck = new Deck(["a", "b", "c"]);
        expect(deck.draw_and_discard()).toEqual("c");
        expect(deck.piles["draw"].cards.length).toEqual(2);
        expect(deck.piles["discard"].cards.length).toEqual(1);
    })
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
    it("can be shuffled", function() {
        var pile = new Pile(["a", "b", "c"]);
        var orderings = {};
       
        for (var i=0; i<5000; i++) {
            pile.shuffle();
            var order = pile.cards[0] + pile.cards[1] + pile.cards[2];
            if (!orderings[order]) {
                orderings[order] = 1;
            } else {
                orderings[order] = orderings[order] + 1;
            }
        }
        
        expect(orderings["abc"]>400).toEqual(true);
    });
});






