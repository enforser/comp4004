package comp4004.a1;

import static org.junit.Assert.*;
import org.junit.Test;

public class CardTest {
    @Test
    public void shouldAnswerWithTrue() {
        assertTrue(true);
    }

    @Test
    public void valueAccess() {
        assertEquals(1, new Card("S", "3").rank);
    }

    @Test
    public void equalsTest() {
        Card c = new Card("D", "A");

        assertTrue(new Card("D", "2").equals(new Card("D", "2")));
        assertTrue(c.equals(c));
        assertFalse(c.equals(new Card("D", "3")));
        assertFalse(c.equals(new Card("S", "A")));
        assertFalse(c.equals("a-non-card-object"));
    }

    @Test
    public void suitAccess() {
        assertEquals(3, new Card("S", "A").suit);
    }

    @Test
    public void greaterThan() {
        // same card => false
        assertFalse(new Card("D", "A").greaterThan(new Card("D", "A")));
        // lesser rank => false
        assertFalse(new Card("D", "2").greaterThan(new Card("D", "3")));
        // equal ranks but lesser suit => false
        assertFalse(new Card("D", "A").greaterThan(new Card("S", "A")));
        // greater suit and rank => true
        assertTrue(new Card("S", "5").greaterThan(new Card("H", "4")));
        // same rank but greater suit => true
        assertTrue(new Card("S", "5").greaterThan(new Card("H", "5")));
        // same suit but greater rank => true
        assertTrue(new Card("S", "5").greaterThan(new Card("S", "4")));
    }

    @Test
    public void testRanksAndSuitOrder() {
        String[] suits = {"C", "D", "H", "S"};
        String[] ranks = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};
        Card c = new Card("C", "2");

        for (int x = 0; x < suits.length; x++) {
            suits[x].equals(c.getSuits()[x]);
        }
        for (int x = 0; x < ranks.length; x++) {
            ranks[x].equals(c.getRanks()[x]);
        }
    }
}