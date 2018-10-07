package comp4004.a1;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashSet;

public class Hand {

    /* Variables */

    ArrayList<Card> cards;

    /* Constructors */
    Hand(ArrayList cards) {
        if (cards.size() != 5) {
            throw new IllegalArgumentException("The required number of cards in a hand is 5.");
        }
        this.cards = cards;
    }

    // Reads in file and reads cards from there!
    Hand(String path) {
        ArrayList<Card> cards = new ArrayList<Card>();
        String fileContent = readInFile(path);
        String[] stringCards = fileContent.split(" ");
        Card card;

        for(int x = 0; x < stringCards.length; x++) {
            card = new Card(stringCards[x].substring(0, 1), stringCards[x].substring(1));
            cards.add(card);
        }

        if (cards.size() != 5) {
            throw new IllegalArgumentException("The required number of cards in a hand is 5. Cards from " + path);
        }
        this.cards = cards;
    }

   private String readInFile(String path) {

       ClassLoader classLoader = ClassLoader.getSystemClassLoader();

       File file = new File(classLoader.getResource(path).getFile());

       String content = null;
       try {
           content = new String(Files.readAllBytes(file.toPath()));
       } catch (IOException e) {
           e.printStackTrace();
       }
       return content.toString();
   }


    /* Methods */

    /*
        Returns true if the current hand "beats" the opponents hand, otherwise false.
     */
    public boolean compare(Hand opponentHand) {
        return false;
    }

    public boolean isRoyalFlush() {
        if (!this.isStraightFlush()) { return false; }

        boolean result;
        String[] ranks = {"10", "J", "Q", "K", "A"};
        for (int x = 0; x < ranks.length; x++) {
            result = false;
            for (int y = 0; y < ranks.length; y++) {
                 if (ranks[x].equals(cards.get(y).getRankAsString())) {
                     result = true;
                 }
            }
            if (!result) { return false; }
        }
        return true;
    }

    public boolean isStraightFlush() {
        return ((this.isStraight() && numberOfSuitInstances(cards.get(0).suit) == 5) ? true : false);
    }

    public boolean isFullHouse() {
        int rank1 = -1;
        int rank2 = -1;
        int currCardRank;

        // check for three of a kind first - don't bother iterate if there is none.
        // makes any check where hand is not full house faster, but will slightly
        // increase check for success. This is a sacrifice I'm willing to make.
        if (!this.isThreeOfAKind()) { return false; }

        for (int x = 0; x < cards.size(); x++) {
            currCardRank = cards.get(x).rank;
            if (rank1 != -1 && currCardRank != rank1 && numberOfRankInstances(currCardRank) == 2) {
               return true;
            }
            if (rank1 == -1 && numberOfRankInstances(currCardRank) == 3) {
                rank1 = currCardRank;
            }
        }
        return false;
    }

    public boolean isFlush() {
        for (int x = 0; x < cards.size() - 1; x++) {
            if (cards.get(x).suit != cards.get(x + 1).suit) {
                return false;
            }
        }
        return true;
    }

    // TODO: confirm/test the ace rule (bottom, top, or both?)
    public boolean isStraight() {
        int lowestRank = 1000;
        int highestRank = 0;
        HashSet ranks = new HashSet();
        for (int x = 0; x < cards.size(); x++) {
            if (cards.get(x).rank > highestRank) {
                highestRank = cards.get(x).rank;
            }
            if (cards.get(x).rank < lowestRank) {
                lowestRank = cards.get(x).rank;
            }
            ranks.add(cards.get(x).rank);
        }
        // if all ranks are unique and the difference between the lowest
        // and highest is 4 then it must be a straight.
        if(ranks.size() == 5 && (highestRank - lowestRank) == 4) {
            return true;
        }
        return false;
    }

    public boolean isFourOfAKind() {
        return isNOfAKind(4);
    }

    public boolean isThreeOfAKind() {
        return isNOfAKind(3);
    }

    public boolean isTwoOfAKind() {
        return isNOfAKind(2);
    }

    private boolean isNOfAKind(int n) {
        for (int x = 0; x < cards.size(); x++) {
            if (numberOfRankInstances(cards.get(x).rank) >= n) {
                return true;
            }
        }
        return false;
    }

    public int numberOfRankInstances(int rank) {
        int n = 0;
        for (int x = 0; x < cards.size(); x++) {
            if (cards.get(x).rank == rank) {
                n = n + 1;
            }
        }
        return n;
    }

    public int numberOfSuitInstances(int suit) {
        int n = 0;
        for (int x = 0; x < cards.size(); x++) {
            if (cards.get(x).suit == suit) {
                n = n + 1;
            }
        }
        return n;
    }

    public int score() {
        return 0;
    }

    // returns the index at which to swap out a card, -1 if no action should be taken.
    public int oneOff() {
        Deck deck = new Deck();
        deck.removeCards(this.cards);

        Hand testingHand;

        // This is a crappy way to do this but...
        // swaps out each card with every card of the deck to see if
        // if any hands where one card is changed are a Straight or better
        // but excluding four of a kind
        for (int x = 0; x < deck.cards.size(); x++) {
            for (int y = 0; y < this.cards.size(); y++) {
                testingHand = this.makeCopy();
                testingHand.cards.remove(y);
                testingHand.cards.add(deck.cards.get(x));
                if (testingHand.isStraight() || testingHand.isFlush() || testingHand.isFullHouse()) {
                    return y;
                }
            }
        }
        return -1;
    }

    public Hand makeCopy() {
        ArrayList<Card> cards = new ArrayList<>();
        for (int i = 0; i < this.cards.size(); i++) {
            cards.add(this.cards.get(i).makeCopy());
        }
        return new Hand(cards);
    }

    public void improveHand() {
        Deck deck = new Deck();
        deck.removeCards(this.cards);
        // Don't improve if straight or better. Note that special versions of hands are encompassed
        // by the following. Example: Royal Flush will be caught by a check for a non-Royal Flush.
        if (this.isStraight() || this.isFlush() || this.isFullHouse() || this.isFourOfAKind()) {
            // do nothing if straight or better
        }
        // if one off from straight, full house, or flush then exchange that card
        else if (-1 != this.oneOff()) {
            this.cards.remove(this.oneOff());
            this.cards.add(deck.draw());
        }
        else if (-1 != this.hasThreeOfSameSuit()) {
            for (int x = 0; x < this.cards.size(); x++) {
                if (cards.get(x).suit != this.hasThreeOfSameSuit()) {
                    this.cards.remove(x);
                    // add to front so that rest of the cards are still checked
                    this.cards.add(0, deck.draw());
                }
            }
        }
        else if (threeInSequence()) {
            this.cards.remove(this.cards.size() - 1);
            this.cards.remove(this.cards.size() - 1);
            this.cards.add(deck.draw());
            this.cards.add(deck.draw());
        }
        // if hand has two pairs then it must be one card away from full house,
        // so no need to implement that requirement here.
        else if (this.isTwoOfAKind()) {
            Card firstInPair, secondInPair, c;
            for (int x = 0; x < this.cards.size(); x++) {
                for (int y = 0; y < this.cards.size(); y++) {
                    if (this.cards.get(x).rank == this.cards.get(y).rank && !this.cards.get(x).equals(this.cards.get(y))) {
                        firstInPair = this.cards.get(x);
                        secondInPair = this.cards.get(y);

                        System.out.println("doing it");

                        for (int i = 0; i < this.cards.size(); i++) {
                            c = this.cards.get(i);
                            if (c.equals(firstInPair) || c.equals(secondInPair)) {
                                // do nothing
                            }
                            else {
                                c.printCard();
                                Card newCard = deck.draw();
                                newCard.printCard();
                                this.cards.remove(c);
                                this.cards.add(0, newCard);
                            }
                        }
                        return;
                    }
                }
            }
        } else {
            Card highest = new Card(0,0);
            Card secondHighest = new Card(0,0);

            for (int x = 0; x < this.cards.size(); x++) {
                if (highest.rank < this.cards.get(x).rank) {
                    highest = this.cards.get(x);
                }
                else if (highest.rank == this.cards.get(x).rank && highest.suit < this.cards.get(x).suit) {
                    highest = this.cards.get(x);
                }
            }

            for (int x = 0; x < this.cards.size(); x++) {
                if (!this.cards.get(x).equals(highest)) {
                    this.cards.get(x).printCard();
                    if (secondHighest.rank < this.cards.get(x).rank) {
                        secondHighest = this.cards.get(x);
                    }
                    // no need to check for the same rank but different suit priorities because if there was a pair
                    // of ranks then improveHand won't get here.
                }
            }
            // remove all cards
            for (int i = 0; i < 5; i++) {
                this.cards.remove(0);
            }
            // add back two highest
            this.cards.add(highest);
            this.cards.add(secondHighest);
            // draw three new cards
            for (int i = 0; i < 3; i++) {
                this.cards.add(deck.draw());
            }
        }
    }

    private boolean threeInSequence() {
        ArrayList<Card> cards = new ArrayList<>();

        // order cards by rank
        for (int x = 12; x >= 0; x--) {
            for (int y = 0; y < this.cards.size(); y++) {
                if (this.cards.get(y).rank == x) {
                    cards.add(0, this.cards.get(y).makeCopy());
                }
            }
        }

        // if there is any group of three cards that are in order and rank
        // increments by 1 then we have a sequence of three.
        for (int x = 0; x <= 2; x++) {
            if (cards.get(x).rank + 1 == cards.get(x + 1).rank &&
                cards.get(x + 1).rank + 1 == cards.get(x + 2).rank) {
                this.cards = cards;
                return true;
            }
        }
        return false;
    }

    private int hasThreeOfSameSuit() {
        for (int x = 0; x < 4; x++) {
            if (numberOfSuitInstances(x) == 3) {
                return x;
            }
        }
        return -1;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof Hand)) {
            return false;
        }
        Hand hand = (Hand) o;
        boolean inHand;
        for (int x = 0; x < this.cards.size(); x++) {
            inHand = false;
            for (int y = 0; y < hand.cards.size(); y++) {
                if (this.cards.get(x).equals(hand.cards.get(y))) {
                    inHand = true;
                }
            }
            if (!inHand) {
                return false;
            }
        }
        return true;
    }

    public void print() {
        for (int x = 0; x < this.cards.size(); x++) {
            this.cards.get(x).printCard();
        }
    }
}
