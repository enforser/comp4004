package comp4004.a1;

import static org.junit.Assert.*;
import java.util.ArrayList;
import org.junit.Test;

public class DeckTest {
    @Test
    public void removeCards() {
        Deck deck = new Deck();
        ArrayList<Card> cards = new ArrayList<>();
        cards.add(new Card(3,3));
        deck.removeCards(cards);
        assertEquals(deck.cards.size(), (13 * 4) - 1);
    }

    @Test
    public void draw() {
        Deck deck = new Deck();
        Card card = deck.draw();
        boolean result = true;
        // ensure the drawn card is removed from deck
        for (int x = 0; x < deck.cards.size(); x++) {
            if(card.equals(deck.cards.get(x))) {
                result = false;
            }
        }
        assertTrue(result);
    }
}
