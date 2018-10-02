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
}