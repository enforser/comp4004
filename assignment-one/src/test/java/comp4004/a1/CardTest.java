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
        assertEquals("value", new Card("suit", "value").getValue());
    }

    @Test
    public void suitAccess() {
        assertEquals("suit", new Card("suit", "value").getSuit());
    }
}