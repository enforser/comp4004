package comp4004.a1;

import java.util.ArrayList;

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

    /* Methods */

    public int score() {
        // Will return the score of the hand.
        // The higher score the stronger the hand.
        return 0;
    }
}
