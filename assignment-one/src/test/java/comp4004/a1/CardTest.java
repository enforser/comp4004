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
    public void suitAccess() {
        assertEquals(3, new Card("S", "A").suit);
    }
}