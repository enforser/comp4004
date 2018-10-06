package comp4004.a1;

import com.sun.media.sound.AiffFileReader;

public class Game {

    Hand AIHand, userHand;

    Game(Hand AIHand, Hand userHand) {
        this.AIHand = AIHand;
        this.userHand = userHand;
    }

    // returns true if AIHand is better than userHand, otherwise false.
    public boolean isBetter() {
        int AIrank = handRank(this.AIHand);
        int userRank = handRank(this.userHand);

        if (AIrank > userRank) { // ai is better rank
            return true;
        }
        else if (AIrank < userRank) { // user is better rank
            return false;
        }
        else { // ranks must be tied (uh oh!!!)
            switch (AIrank) {
                case 9: // royal flush
                    return isBetterSuit();
                case 8: // straight flush
                    return isBetterHighestCard();
            }
        }

        try {
            throw new Exception("Could not identify a winner between the AI and User hands");
        }
        catch (Exception ex) {
            System.out.println(ex.getMessage());
        }

        return false;
    }

    // returns an integer which represents the rank of the hand.
    private int handRank(Hand hand) {
        if (hand.isRoyalFlush()) { return 9; }
        else if (hand.isStraightFlush()) { return 8; }
        else if (hand.isFourOfAKind()) { return 7; }
        else if (hand.isFullHouse()) { return 6; }
        else if (hand.isFlush()) { return 5; }
        else if (hand.isStraight()) { return 4; }
        else if (hand.isThreeOfAKind()) { return 3; }
        else if (hand.isTwoOfAKind()) { return 2; }
        else {return 1;}
    }

    // assuming both hands have all cards of the same suit, returns if AI hand is better.
    private boolean isBetterSuit() {
        return AIHand.cards.get(0).suit > userHand.cards.get(0).suit;
    }

    private boolean isBetterHighestCard() {
        Card bestAICard = new Card(0,0);
        Card bestUserCard = new Card(0,0);

        for (int x = 0; x < 5; x++) {


        }
        return false;
    }
}
