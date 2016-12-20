describe("Tautology", function() {
    it("is always true", function() {
        expect(1==1);
    });
});

describe("Deck", function() {
    it("returns the top card", function() {
        var deck = new Deck();
        var top = deck.draw_top();
        expect(top=='a');
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
});




//describe("Hello world", function() {
//  it("says hello", function() {
//    expect(helloWorld()).toEqual("Hello world!");
//  });
//});


