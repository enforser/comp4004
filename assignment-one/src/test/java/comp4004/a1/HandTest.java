package comp4004.a1;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class HandTest {

    @Test
    public void validHandSize() {
        // init a list with 5 cards
        ArrayList<Card> cards = new ArrayList<Card>();
        for (int x = 0; x < 5; x++) {
            cards.add(new Card("a", "a"));
        }

        Hand h = new Hand(cards);
        assertSame(5, h.cards.size());
    }

    @Test
    public void failOnSmallHandSize() {
        boolean result = false;
        try {
            // init a list with 4 cards
            ArrayList<Card> fourcards = new ArrayList<Card>();
            for (int x = 0; x < 4; x++) {
                fourcards.add(new Card("a", "a"));
            }
            Hand fourCardHand = new Hand(fourcards);
        }
        catch (IllegalArgumentException e) {
            result = true;
        }
        assertTrue(result);
    }

    @Test
    public void failOnLargeHandSize() {
        boolean result = false;
        try {
            // init a list with 6 cards
            ArrayList<Card> sixcards = new ArrayList<Card>();
            for (int x = 0; x < 6; x++) {
                sixcards.add(new Card("a", "a"));
            }
            Hand sixCardHand = new Hand(sixcards);
        }
        catch (IllegalArgumentException e) {
            result = true;
        }
        assertTrue(result);
    }

    @Test
    public void score() {

    }
}