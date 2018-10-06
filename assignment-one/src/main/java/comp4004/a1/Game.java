package comp4004.a1;

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

        if (AIrank > userRank) { return true; }

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
}
