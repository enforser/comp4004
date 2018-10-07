package comp4004.a1;

import org.junit.Test;
import static org.junit.Assert.*;

public class GameTest {

   @Test
   public void isBetterHandTypes() {
       Game testGame;

       // initialized in order of winners vs. losers
       Hand royalFlush = new Hand("royalFlush.txt");
       Hand straightFlush = new Hand("straightFlush.txt");
       Hand fourOfAKind = new Hand("handWithFourOfAKind.txt");
       Hand fullHouse = new Hand("fullHouse.txt");
       Hand flush = new Hand("flush.txt");
       Hand straight = new Hand("unorderedStraight.txt");
       Hand threeOfAKind = new Hand("handWithThreeOfAKind.txt");
       Hand twoOfAKind = new Hand("handWithPairTogether.txt");
       Hand highCard = new Hand("highestCard.txt");

       Hand[] orderedHands = {highCard, twoOfAKind, threeOfAKind, straight, flush, fullHouse, fourOfAKind, straightFlush, royalFlush};

       for (int x = 1; x < orderedHands.length; x++) { // defines root hand
           for (int y = x - 1; y >= 0; y--) { // compare all lower ranked hands to root hand
              testGame = new Game(orderedHands[x], orderedHands[y]);
              assertTrue(testGame.isBetter());
           }
       }
   }

    // Test to make sure that royal flush is ordered by suit.
    @Test
    public void isBetterRoyalFlush() {
        Game testGame;
        Hand heartsRoyalFlush = new Hand("heartsRoyalFlush.txt");
        Hand spadesRoyalFlush = new Hand("spadesRoyalFlush.txt");

        // ensure both hands are actually royal flushes
        assertTrue(heartsRoyalFlush.isRoyalFlush());
        assertTrue(spadesRoyalFlush.isRoyalFlush());

        testGame = new Game(heartsRoyalFlush, spadesRoyalFlush);
        assertFalse(testGame.isBetter());

        testGame = new Game(spadesRoyalFlush, heartsRoyalFlush);
        assertTrue(testGame.isBetter());
    }

    // TODO: Ace in straight needs to be considered as lowest rank
    @Test
    public void isBetterHigherCardTest() {
        Game testGame;

        Hand heartsStraightFlush = new Hand("heartsStraightFlush.txt");
        Hand spadesStraightFlush = new Hand("spadesStraightFlush.txt");
        Hand lowerRankedStraight = new Hand("lowerRankedStraightFlush.txt");
        Hand higherRankedStraight = new Hand("higherRankedStraightFlush.txt");
        Hand aceStraightFlush = new Hand("aceStraightFlush.txt");

        // ensure both are straight flushes
        assertTrue(heartsStraightFlush.isStraightFlush());
        assertTrue(spadesStraightFlush.isStraightFlush());

        assertFalse(new Game(heartsStraightFlush, spadesStraightFlush).isBetter());
        assertTrue(new Game(spadesStraightFlush, heartsStraightFlush).isBetter());

        assertTrue(new Game(higherRankedStraight, lowerRankedStraight).isBetter());
        assertFalse(new Game(lowerRankedStraight, higherRankedStraight).isBetter());

        assertTrue(new Game(heartsStraightFlush, aceStraightFlush).isBetter());
    }

    @Test
    public void fourOfAKindTest() {
       Game testgame;


    }

    @Test
    public void threeOfAKindTest() {
        Game testgame;

        Hand fullHouse = new Hand("fullHouse.txt");
        Hand betterFullHouse = new Hand("betterFullHouse.txt");
        Hand threeOfAKind = new Hand("threeOfAKind.txt");
        Hand worseThreeOfAKindWithHigherCard = new Hand("threeOfAKindWithKing.txt");

        assertTrue(new Game(betterFullHouse, fullHouse).isBetter());
        assertFalse(new Game(fullHouse, betterFullHouse).isBetter());
        assertTrue(new Game(threeOfAKind, worseThreeOfAKindWithHigherCard).isBetter());
        assertFalse(new Game(worseThreeOfAKindWithHigherCard, threeOfAKind).isBetter());
    }
}