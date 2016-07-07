// Assignment IV: Deck of Cards
// Create a Deck object constructor. A deck should have the following functionality:

// The Deck should contain the 52 standard cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck
function Card(value, suit){
	this.value=value;
	this.suit=suit;
}

function DeckConstructor(){
	this.deck= [];
	// this.makeDeck = this.makeDeck();
}

DeckConstructor.prototype.makeDeck = function(){
	this.value = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10","J", "Q", "K");
	this.suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");
	this.deck=new Array(52);
	var i=0, j=0;
	for (i=0; i < suits.length; i++){
		for (j=0; j < value.length; j++){
			this.deck[i*value.length + j]=new Card(value[j], suits[i]);
			console.log('Card created');
		}
	}
	this.deck="made the deck"
	console.log(this.deck);
	return this.deck;
}

DeckConstructor.prototype.deal=function(){

}

deck=new DeckConstructor();
deck.makeDeck();

// 	cards=[];
// 	this.deck=deck;
// 	this.shuffle=function(deck){

// 	}, 
// 	this.reset=function(){

// 	}, 
// 	this.deal=function(){
// 		return card; 	
// 	}
// }

// The Player should have a name
// The Player should have a hand
// The Player should be able to take a card (use the deck.deal method)
// The Player should be able to discard a card

function PlayerConstructor(name){
	this.name=name;
	this.hand=[];
// 	this.take_card=function(deck){
// 		deck.deal();
// 	}, 
// 	this.discard=function(){
// 	}
}

