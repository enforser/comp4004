package comp4004.a1;

import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class HandTest {

    Hand h = new Hand();

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

    public int numberOfDifferentCards(Hand hand1, Hand hand2) {
        int count = 0;
        boolean existsIn;
        for (int i = 0; i < hand1.cards.size(); i++) {
            existsIn = false;
            for (int q = 0; q < hand2.cards.size(); q++) {
                if (hand2.cards.get(i).equals(hand1.cards.get(q))) {
                    existsIn = true;
                }
            }
            if (!existsIn) { count = count + 1; }
        }
        return count;
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
        Hand[] royalFlushHands = h.handsFromInputFile(3);
        Hand royalFlushHand = new Hand("royalFlush.txt");
        Hand sameSuitsHand = new Hand("sameSuits.txt");
        Hand royalWithDifferentSuits = new Hand("royalWithDifferentSuits.txt");
        Hand royalReverse = new Hand("royalFlushDifferentOrderOne.txt");
        Hand royalRandom = new Hand("royalFlushDifferentOrderTwo.txt");
        assertTrue(royalFlushHands[0].isRoyalFlush());
        assertTrue(royalFlushHands[1].isRoyalFlush());
        assertTrue(royalRandom.isRoyalFlush());
        assertTrue(royalReverse.isRoyalFlush());
        assertTrue(royalFlushHand.isRoyalFlush());
        assertFalse(sameSuitsHand.isRoyalFlush());
        assertFalse(royalWithDifferentSuits.isRoyalFlush());
    }

    @Test
    public void isStraightFlush() {
        Hand[] hands = h.handsFromInputFile(4);
        assertTrue(hands[0].isStraightFlush());
        assertTrue(hands[1].isStraightFlush());

        assertTrue(new Hand("straightFlush.txt").isStraightFlush());
        assertTrue(new Hand("straightFlushRandom.txt").isStraightFlush());
        assertTrue(new Hand("royalFlush.txt").isStraightFlush());
        assertFalse(new Hand("orderedStraight.txt").isStraightFlush());
        assertFalse(new Hand("straightWithFourSameSuit.txt").isStraightFlush());
        assertFalse(new Hand("noOrderedRanks.txt").isStraightFlush());
    }

    @Test
    public void isFullHouse() {
        Hand[] hands = h.handsFromInputFile(6);
        assertTrue(hands[0].isFullHouse());
        assertTrue(hands[1].isFullHouse());

        assertTrue(new Hand("fullHouse.txt").isFullHouse());
        assertFalse(new Hand("handWithThreeOfAKind.txt").isFullHouse());
        assertFalse(new Hand("handWithPairTogether.txt").isFullHouse());
        assertFalse(new Hand("handWithNoPairs.txt").isFullHouse());
    }

    @Test
    public void isFlush() {
        Hand[] hands = h.handsFromInputFile(7);
        assertTrue(hands[0].isFlush());
        assertTrue(hands[1].isFlush());

        assertTrue(new Hand("flush.txt").isFlush());
        assertFalse(new Hand("oneDifferentSuit.txt").isFlush());
        assertFalse(new Hand("allSuits.txt").isFlush());
    }

    @Test
    public void isStraight() {
        Hand[] hands = h.handsFromInputFile(8);
        assertTrue(hands[0].isStraight());
        assertTrue(hands[1].isStraight());

        assertTrue(new Hand("orderedStraight.txt").isStraight());
        assertTrue(new Hand("unorderedStraight.txt").isStraight());
        assertFalse(new Hand("fromHighestToLowestRank.txt").isStraight());
        assertFalse(new Hand("fourOrderedRanks.txt").isStraight());
        assertFalse(new Hand("noOrderedRanks.txt").isStraight());
    }

    @Test
    public void testHandsWithTwoPairs() {
        Hand handWithTwoPairs = new Hand("hasTwoWorsePairs.txt");
        Hand otherHandWithTwoPairs = new Hand("hasTwoPairs.txt");
        Hand handWithPairTogether = new Hand("handWithPairTogether.txt");
        Hand handWithPairNotTogether = new Hand("handWithPairNotTogether.txt");
        Hand handWithNoPairs = new Hand("handWithNoPairs.txt");
        Hand handWithThreeOfAKind = new Hand("handWithThreeOfAKind.txt");
        Hand handWithFourOfAKind = new Hand("handWithFourOfAKind.txt");
        assertTrue(handWithTwoPairs.isTwoPairs());
        assertTrue(otherHandWithTwoPairs.isTwoPairs());
        assertTrue(handWithFourOfAKind.isTwoPairs());
        assertFalse(handWithPairTogether.isTwoPairs());
        assertFalse(handWithPairNotTogether.isTwoPairs());
        assertFalse(handWithNoPairs.isTwoPairs());
        assertFalse(handWithThreeOfAKind.isTwoPairs());
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
        assertFalse(handWithPairTogether.isThreeOfAKind());
        assertFalse(handWithPairNotTogether.isThreeOfAKind());
        assertFalse(handWithNoPairs.isThreeOfAKind());
        assertTrue(handWithFourOfAKind.isThreeOfAKind());
        assertTrue(handWithThreeOfAKind.isThreeOfAKind());
    }

    @Test
    public void testHandsWithFourOfSameRank() {
        Hand[] hands = h.handsFromInputFile(5);
        assertTrue(hands[0].isFourOfAKind());
        assertTrue(hands[1].isFourOfAKind());

        Hand handWithPairTogether = new Hand("handWithPairTogether.txt");
        Hand handWithPairNotTogether = new Hand("handWithPairNotTogether.txt");
        Hand handWithNoPairs = new Hand("handWithNoPairs.txt");
        Hand handWithThreeOfAKind = new Hand("handWithThreeOfAKind.txt");
        Hand handWithFourOfAKind = new Hand("handWithFourOfAKind.txt");
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
        Hand h1, h2;
        Hand[] initHands;
        Hand[] improvedHands;

        // Test that improve hand does not change anything above a straight
        h1 = new Hand("orderedStraight.txt");
        h2 = new Hand("orderedStraight.txt");
        h2.improveHand();
        assertTrue(h1.equals(h2));

        h1 = new Hand("royalFlush.txt");
        h2 = new Hand("royalFlush.txt");
        h2.improveHand();
        assertTrue(h1.equals(h2));

        // royal flush hands
        initHands = h.handsFromInputFile(3);
        improvedHands = h.handsFromInputFile(3);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertTrue(initHands[0].equals(improvedHands[0]));
        assertTrue(initHands[1].equals(improvedHands[1]));

        // straight flush hands
        initHands = h.handsFromInputFile(4);
        improvedHands = h.handsFromInputFile(4);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertTrue(initHands[0].equals(improvedHands[0]));
        assertTrue(initHands[1].equals(improvedHands[1]));

        // four of a kind
        initHands = h.handsFromInputFile(5);
        improvedHands = h.handsFromInputFile(5);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertTrue(initHands[0].equals(improvedHands[0]));
        assertTrue(initHands[1].equals(improvedHands[1]));

        // full house
        initHands = h.handsFromInputFile(6);
        improvedHands = h.handsFromInputFile(6);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertTrue(initHands[0].equals(improvedHands[0]));
        assertTrue(initHands[1].equals(improvedHands[1]));

        // flush
        initHands = h.handsFromInputFile(7);
        improvedHands = h.handsFromInputFile(7);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertTrue(initHands[0].equals(improvedHands[0]));
        assertTrue(initHands[1].equals(improvedHands[1]));

        // straight
        initHands = h.handsFromInputFile(8);
        improvedHands = h.handsFromInputFile(8);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertTrue(initHands[0].equals(improvedHands[0]));
        assertTrue(initHands[1].equals(improvedHands[1]));

        // oneoff from royal flush
        initHands = h.handsFromInputFile(9);
        improvedHands = h.handsFromInputFile(9);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertEquals(1, numberOfDifferentCards(initHands[0], improvedHands[0]));
        assertEquals(1, numberOfDifferentCards(initHands[1], improvedHands[1]));

        // If one off then we expect the hand to change with one new Card.
        // other oneOff hands are covered in oneOff tests.
        h1 = new Hand("oneOffFromStraight.txt");
        h2 = new Hand("oneOffFromStraight.txt");
        h2.improveHand();
        assertEquals(1, numberOfDifferentCards(h2, h1));

        // three of same suit
        initHands = h.handsFromInputFile(15);
        improvedHands = h.handsFromInputFile(15);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertEquals(2, numberOfDifferentCards(initHands[0], improvedHands[0]));
        assertEquals(2, numberOfDifferentCards(initHands[1], improvedHands[1]));

        h1 = new Hand("threeOfSameSuit.txt");
        h2 = new Hand("threeOfSameSuit.txt");
        h2.improveHand();
        assertEquals(2, numberOfDifferentCards(h2, h1));

        // three cards in sequence
        initHands = h.handsFromInputFile(16);
        improvedHands = h.handsFromInputFile(16);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertEquals(2, numberOfDifferentCards(initHands[0], improvedHands[0]));
        assertEquals(2, numberOfDifferentCards(initHands[1], improvedHands[1]));

        h1 = new Hand("threeCardsInSequence.txt");
        h2 = new Hand("threeCardsInSequence.txt");
        h2.improveHand();
        assertEquals(2, numberOfDifferentCards(h2, h1));

        h1 = new Hand("threeCardsInSequenceUnordered.txt");
        h2 = new Hand("threeCardsInSequenceUnordered.txt");
        h2.improveHand();
        assertEquals(2, numberOfDifferentCards(h2, h1));

        h1 = new Hand("threeCardsInSequenceAtEnd.txt");
        h2 = new Hand("threeCardsInSequenceAtEnd.txt");
        h2.improveHand();
        assertEquals(2, numberOfDifferentCards(h2, h1));

        // hands with a pair of cards
        initHands = h.handsFromInputFile(17);
        improvedHands = h.handsFromInputFile(17);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertEquals(3, numberOfDifferentCards(initHands[0], improvedHands[0]));
        assertEquals(3, numberOfDifferentCards(initHands[1], improvedHands[1]));


        h1 = new Hand("handWithPairTogether.txt");
        h2 = new Hand("handWithPairTogether.txt");
        h2.improveHand();
        assertEquals(3, numberOfDifferentCards(h2, h1));

        h1 = new Hand("handWithPairNotTogether.txt");
        h2 = new Hand("handWithPairNotTogether.txt");
        h2.improveHand();
        assertEquals(3, numberOfDifferentCards(h2, h1));

        // hands with a pair of cards
        initHands = h.handsFromInputFile(18);
        improvedHands = h.handsFromInputFile(18);
        improvedHands[0].improveHand();
        improvedHands[1].improveHand();
        assertEquals(3, numberOfDifferentCards(initHands[0], improvedHands[0]));
        assertEquals(3, numberOfDifferentCards(initHands[1], improvedHands[1]));

        h1 = new Hand("keepTwoHighestCards.txt");
        h2 = new Hand("keepTwoHighestCards.txt");
        h2.improveHand();
        assertFalse(h1.equals(h2));
        assertEquals(3, numberOfDifferentCards(h1, h2));
        boolean highestCard = false, secondHighest = false;
        Card c;
        for (int x = 0; x < h2.cards.size(); x++) {
            c = h2.cards.get(x);
            if (c.rank == 9 && c.suit == 3) {
                highestCard = true;
            }
            if (c.rank == 7 && c.suit == 1) {
                secondHighest = true;
            }
        }
        assertTrue(highestCard && secondHighest);


    }

    @Test
    public void equalsTest() {
        Hand flush = new Hand("flush.txt");
        Hand flushDup = new Hand("flush.txt");
        Hand fullHouse = new Hand("fullHouse.txt");

        assertFalse(flush.equals(fullHouse));
        assertFalse(fullHouse.equals(flush));
        assertFalse(flush.equals("not-a-hand-object"));
        assertTrue(flush.equals(flush));
        assertTrue(flush.equals(flushDup));
    }

    @Test
    public void oneOff() {
        Hand[] hands;

        // Lines 9-14 in input file outline the different hands that are oneOff from
        // a hand that means the strategy should exchange one card. Order as follows (from 9-14)
        // royal flush, straight flush, 4 of a kind, full house, flush, then straight.
        for (int x = 9; x <= 14; x++) {
            hands = h.handsFromInputFile(x);
            // one off returns -1 if no cards should be exchanged.
            assertTrue(-1 < hands[0].oneOff());
            assertTrue(-1 < hands[1].oneOff());
        }

        Hand oneOffFromStraight = new Hand("oneOffFromStraight.txt");
        assertEquals(0, oneOffFromStraight.oneOff());

        Hand oneOffFromFullHouse = new Hand("oneOffFromFullHouse.txt");
        assertEquals(2, oneOffFromFullHouse.oneOff());

        Hand oneOffFromFlush = new Hand("oneOffFromFlush.txt");
        assertEquals(4, oneOffFromFlush.oneOff());

        assertEquals(-1, new Hand("highestCard.txt").oneOff());
    }

    @Test
    public void hasTwoPairs() {
        Hand hasTwoPairs = new Hand("hasTwoPairs.txt");
        Hand fullHouse = new Hand("fullHouse.txt");
        Hand fourOfAKind = new Hand("handWithFourOfAKind.txt");
        Hand noPairs = new Hand("worseSuitStraight.txt");
        Hand onePair = new Hand("handWithPairTogether.txt");

        assertTrue(hasTwoPairs.isTwoPairs());
        assertTrue(fullHouse.isTwoPairs());
        assertTrue(fourOfAKind.isTwoPairs());
        assertFalse(noPairs.isTwoPairs());
        assertFalse(onePair.isTwoPairs());

    }

    @Test
    public void testfrominputfile() {
        Hand h = new Hand();

        Hand[] hands = h.handsFromInputFile(1, "testInputFile.txt");
        Hand[] handsTwo = h.handsFromInputFile(2, "testInputFile.txt");
        assertTrue(true);


    }
}