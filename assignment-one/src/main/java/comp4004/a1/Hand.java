package comp4004.a1;

import java.util.ArrayList;

public class Hand {

    /* Variables */

    ArrayList<Card> cards;

    /* Constructors */
    // TODO: Read in file and create cards from there.
    Hand(ArrayList cards) {
        if (cards.size() != 5) {
            throw new IllegalArgumentException("The required number of cards in a hand is 5.");
        }

        this.cards = cards;
    }

    // Called on the AI hand to apply the improving logic.
    private Hand improveHand() {
       return this;
    }

    /* Methods */

    /*
        Returns true if the current hand "beats" the opponents hand, otherwise false.
     */
    public boolean compare(Hand opponentHand) {
        return false;
    }

    private boolean isRoyalFlush() {
        return true;
    }

    private boolean isStraightFlush() {
        return true;
    }

    private boolean isFullHouse() {
        return true;
    }

    private boolean isFlush() {
        return true;
    }

    private boolean isStraight() {
        return true;
    }

    private boolean isFourOfAKind() {
        return true;
    }

    private boolean isThreeOfAKind() {
        return true;
    }

    private boolean isTwoOfAKind() {
        return true;
    }

    public int score() {
        return 0;
    }
}
