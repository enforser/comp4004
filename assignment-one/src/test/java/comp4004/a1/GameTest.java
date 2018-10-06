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

       // size of 9.
       Hand[] orderedHands = {highCard, twoOfAKind, threeOfAKind, straight, flush, fullHouse, fourOfAKind, straightFlush, royalFlush};


       for (int x = 1; x < orderedHands.length; x++) { // defines root hand
           for (int y = x - 1; y >= 0; y--) { // compare all lower ranked hands to root hand
              testGame = new Game(orderedHands[x], orderedHands[y]);
              assertTrue(testGame.isBetter());
           }
       }
   }
}
