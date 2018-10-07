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
    public void comparingFlushesTest() {
        Hand flushWithTenHighCard = new Hand("flushWithTenHighCard.txt");
        Hand worseFlushWithTenHighCard = new Hand("worseFlushWithTenHighCard.txt");
        Hand flushWithJokerHighCard = new Hand("flushWithJokerHighCard.txt");
        Hand flushWithTenHighCardBetterSuit = new Hand("flushWithTenHighCardBetterSuit.txt");

        assertTrue(new Game(flushWithTenHighCard, worseFlushWithTenHighCard).isBetter());
        assertFalse(new Game(worseFlushWithTenHighCard, flushWithTenHighCard).isBetter());
        assertTrue(new Game(flushWithJokerHighCard, flushWithTenHighCard).isBetter());
        assertFalse(new Game(flushWithTenHighCard,flushWithJokerHighCard).isBetter());
        assertTrue(new Game(flushWithTenHighCardBetterSuit, flushWithTenHighCard).isBetter());
        assertFalse(new Game(flushWithTenHighCard, flushWithTenHighCardBetterSuit).isBetter());
    }

    @Test
    public void comparingStraightHands() {
        Hand highRankStraight = new Hand("highRankStraight.txt");
        Hand lowRankStraight = new Hand("lowRankStraight.txt");
        Hand betterSuitStraight = new Hand("betterSuitStraight.txt");
        Hand worseSuitStraight = new Hand("worseSuitStraight.txt");

        assertTrue(new Game(highRankStraight, lowRankStraight).isBetter());
        assertFalse(new Game(lowRankStraight, highRankStraight).isBetter());
        assertTrue(new Game(betterSuitStraight, worseSuitStraight).isBetter());
        assertFalse(new Game(worseSuitStraight, betterSuitStraight).isBetter());
    }

    @Test
    public void fourOfAKindTest() {
        Hand fourOfAKind = new Hand("fourOfAKind.txt");
        Hand worseFourOfAKindWithHigherCard = new Hand("fourOfAKindHigherCard.txt");

        assertFalse(new Game(worseFourOfAKindWithHigherCard, fourOfAKind).isBetter());
        assertTrue(new Game(fourOfAKind, worseFourOfAKindWithHigherCard).isBetter());
    }

    @Test
    public void threeOfAKindTest() {
        Hand fullHouse = new Hand("fullHouse.txt");
        Hand betterFullHouse = new Hand("betterFullHouse.txt");
        Hand threeOfAKind = new Hand("threeOfAKind.txt");
        Hand worseThreeOfAKindWithHigherCard = new Hand("threeOfAKindWithKing.txt");

        assertTrue(new Game(betterFullHouse, fullHouse).isBetter());
        assertFalse(new Game(fullHouse, betterFullHouse).isBetter());
        assertTrue(new Game(threeOfAKind, worseThreeOfAKindWithHigherCard).isBetter());
        assertFalse(new Game(worseThreeOfAKindWithHigherCard, threeOfAKind).isBetter());
    }

    @Test
    public void twoPairsTest() {
        Hand handWithTwoPairs = new Hand("hasTwoPairs.txt");
        Hand handWithWorsePairs = new Hand("hasTwoWorsePairs.txt");
        Hand handWithSamePairsBetterSuit = new Hand("handWithTwoPairsBetterSuits.txt");
        Hand handWithBetterRankedSecondPair = new Hand("hasOneBetterPair.txt");

        assertTrue(new Game(handWithTwoPairs, handWithWorsePairs).isBetter());
        assertFalse(new Game(handWithWorsePairs, handWithTwoPairs).isBetter());

        assertTrue(new Game(handWithSamePairsBetterSuit, handWithWorsePairs).isBetter());
        assertFalse(new Game(handWithWorsePairs, handWithSamePairsBetterSuit).isBetter());

        // rank of second pair doesn't matter, we only care about highest card between both pairs.
        assertFalse(new Game(handWithBetterRankedSecondPair, handWithTwoPairs).isBetter());
        assertTrue(new Game(handWithTwoPairs, handWithBetterRankedSecondPair).isBetter());
    }

    // testing hands with only one pair each.
    @Test
    public void pairsTest() {
        Hand pairOfFives = new Hand("pairOfFives.txt");
        Hand betterPairOfFives = new Hand("betterPairOfFives.txt");
        Hand pairOfFours = new Hand("pairOfFours.txt");
        Hand pairOfFoursWithOtherHighCards = new Hand("pairOfFoursWithOtherHighCards.txt");

        assertTrue(new Game(betterPairOfFives, pairOfFives).isBetter());
        assertFalse(new Game(pairOfFives, betterPairOfFives).isBetter());

        assertTrue(new Game(pairOfFives, pairOfFours).isBetter());
        assertFalse(new Game(pairOfFours, pairOfFives).isBetter());

        assertTrue(new Game(pairOfFives, pairOfFoursWithOtherHighCards).isBetter());
        assertFalse(new Game(pairOfFoursWithOtherHighCards, pairOfFives).isBetter());
    }

    @Test
    public void highestCardTest() {
        Hand highestCardTen = new Hand("highestCardTen.txt");
        Hand highestCardTenWorseSuit = new Hand("highestCardTenWorseSuit.txt");
        Hand highestCardNine = new Hand("highestCardNine.txt");

        assertTrue(new Game(highestCardTen, highestCardTenWorseSuit).isBetter());
        assertFalse(new Game(highestCardTenWorseSuit, highestCardTen).isBetter());

        assertTrue(new Game(highestCardTen, highestCardNine).isBetter());
        assertFalse(new Game(highestCardNine, highestCardTen).isBetter());
    }
}