package comp4004.a1;

import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class HandTest {

    /***** UTILITY FUNCTIONS *****/

    // checks if cards in the hand all exist in the array list of card
    public boolean sameCards(Hand hand, ArrayList<Card> cards) {
        ArrayList<Card> cardsInHands = hand.cards;
        for(int x = 0; x < cardsInHands.size(); x++) {
            Card card1, card2;
            boolean inHand = false;
            for(int y = 0; y < cards.size(); y++) {
                card1 = cardsInHands.get(x);
                card2 = cards.get(y);
                if (card1.rank == card2.rank && card1.suit == card2.suit) {
                    inHand = true;
                }
            }
            if (!inHand) {
                return false;
            }
        }
        return true;
    }

    public ArrayList<Card> generateCards(String[] suits, String[] ranks) {
        ArrayList<Card> cards = new ArrayList<>();
        for (int x = 0; x < suits.length; x++) {
            cards.add(new Card(suits[x], ranks[x]));
        }
        return cards;
    }

    /******* END UTILITY FUNCTIONS *****/

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
    public void getCardsFromFileTest() {
        String[] suits = {"S", "S", "D", "H", "S"};
        String[] ranks = {"A", "2", "10", "J", "K"};
        generateCards(suits, ranks);

        Hand hand = new Hand("fixture1.txt");
        assertTrue(sameCards(hand, generateCards(suits, ranks)));
    }

    @Test
    public void isRoyalFlushTest() {
        Hand royalFlushHand = new Hand("royalFlush.txt");
        Hand sameSuitsHand = new Hand("sameSuits.txt");
        Hand royalWithDifferentSuits = new Hand("royalWithDifferentSuits.txt");
        assertTrue(royalFlushHand.isRoyalFlush());
        assertFalse(sameSuitsHand.isRoyalFlush());
        assertFalse(royalWithDifferentSuits.isRoyalFlush());
    }

    @Test
    public void isStraightFlush() {
        assertTrue(new Hand("straightFlush.txt").isStraightFlush());
        assertTrue(new Hand("royalFlush.txt").isStraightFlush());
        assertFalse(new Hand("orderedStraight.txt").isStraightFlush());
        assertFalse(new Hand("straightWithFourSameSuit.txt").isStraightFlush());
        assertFalse(new Hand("noOrderedRanks.txt").isStraightFlush());
    }

    @Test
    public void isFullHouse() {
        assertTrue(new Hand("fullHouse.txt").isFullHouse());
        assertFalse(new Hand("handWithThreeOfAKind.txt").isFullHouse());
        assertFalse(new Hand("handWithPairTogether.txt").isFullHouse());
        assertFalse(new Hand("handWithNoPairs.txt").isFullHouse());
    }

    @Test
    public void isFlush() {
        assertTrue(new Hand("flush.txt").isFlush());
        assertFalse(new Hand("oneDifferentSuit.txt").isFlush());
        assertFalse(new Hand("allSuits.txt").isFlush());
    }

    @Test
    public void isStraight() {
        assertTrue(new Hand("orderedStraight.txt").isStraight());
        assertTrue(new Hand("unorderedStraight.txt").isStraight());
        assertFalse(new Hand("fromHighestToLowestRank.txt").isStraight());
        assertFalse(new Hand("fourOrderedRanks.txt").isStraight());
        assertFalse(new Hand("noOrderedRanks.txt").isStraight());
    }

    @Test
    public void testHandsWithPairs() {
        Hand handWithPairTogether = new Hand("handWithPairTogether.txt");
        Hand handWithPairNotTogether = new Hand("handWithPairNotTogether.txt");
        Hand handWithNoPairs = new Hand("handWithNoPairs.txt");
        Hand handWithThreeOfAKind = new Hand("handWithThreeOfAKind.txt");
        Hand handWithFourOfAKind = new Hand("handWithFourOfAKind.txt");
        assertTrue(handWithPairTogether.isTwoOfAKind());
        assertTrue(handWithPairNotTogether.isTwoOfAKind());
        assertFalse(handWithNoPairs.isTwoOfAKind());
        assertTrue(handWithFourOfAKind.isTwoOfAKind());
        assertTrue(handWithThreeOfAKind.isTwoOfAKind());
    }

    @Test
    public void testHandsWithThreeOfSameRank() {
        Hand handWithPairTogether = new Hand("handWithPairTogether.txt");
        Hand handWithPairNotTogether = new Hand("handWithPairNotTogether.txt");
        Hand handWithNoPairs = new Hand("handWithNoPairs.txt");
        Hand handWithThreeOfAKind = new Hand("handWithThreeOfAKind.txt");
        Hand handWithFourOfAKind = new Hand("handWithFourOfAKind.txt");
        // TODO: Add test for when the three are not grouped together in hand
        assertFalse(handWithPairTogether.isThreeOfAKind());
        assertFalse(handWithPairNotTogether.isThreeOfAKind());
        assertFalse(handWithNoPairs.isThreeOfAKind());
        assertTrue(handWithFourOfAKind.isThreeOfAKind());
        assertTrue(handWithThreeOfAKind.isThreeOfAKind());
    }

    @Test
    public void testHandsWithFourOfSameRank() {
        Hand handWithPairTogether = new Hand("handWithPairTogether.txt");
        Hand handWithPairNotTogether = new Hand("handWithPairNotTogether.txt");
        Hand handWithNoPairs = new Hand("handWithNoPairs.txt");
        Hand handWithThreeOfAKind = new Hand("handWithThreeOfAKind.txt");
        Hand handWithFourOfAKind = new Hand("handWithFourOfAKind.txt");
        // TODO: Add test for when the four cards are not grouped together
        assertFalse(handWithPairTogether.isFourOfAKind());
        assertFalse(handWithPairNotTogether.isFourOfAKind());
        assertFalse(handWithNoPairs.isFourOfAKind());
        assertFalse(handWithThreeOfAKind.isFourOfAKind());
        assertTrue(handWithFourOfAKind.isFourOfAKind());
    }

    @Test
    public void score() {

    }

    @Test
    public void improveHand() {

    }
}