package comp4004.a1;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashSet;

public class Hand {

    /* Variables */

    ArrayList<Card> cards;

    /* Constructors */
    Hand(ArrayList cards) {
        if (cards.size() != 5) {
            throw new IllegalArgumentException("The required number of cards in a hand is 5.");
        }
        this.cards = cards;
    }

    // Reads in file and reads cards from there!
    Hand(String path) {
        ArrayList<Card> cards = new ArrayList<Card>();
        String fileContent = readInFile(path);
        String[] stringCards = fileContent.split(" ");
        Card card;

        for(int x = 0; x < stringCards.length; x++) {
            card = new Card(stringCards[x].substring(0, 1), stringCards[x].substring(1));
            cards.add(card);
        }

        if (cards.size() != 5) {
            throw new IllegalArgumentException("The required number of cards in a hand is 5. Cards from " + path);
        }
        this.cards = cards;
    }

   private String readInFile(String path) {

       ClassLoader classLoader = ClassLoader.getSystemClassLoader();

       File file = new File(classLoader.getResource(path).getFile());

       String content = null;
       try {
           content = new String(Files.readAllBytes(file.toPath()));
       } catch (IOException e) {
           e.printStackTrace();
       }
       return content.toString();
   }


    /* Methods */

    /*
        Returns true if the current hand "beats" the opponents hand, otherwise false.
     */
    public boolean compare(Hand opponentHand) {
        return false;
    }

    public boolean isRoyalFlush() {
        if (!this.isStraightFlush()) { return false; }

        boolean result;
        String[] ranks = {"10", "J", "Q", "K", "A"};
        for (int x = 0; x < ranks.length; x++) {
            result = false;
            for (int y = 0; y < ranks.length; y++) {
                 if (ranks[x].equals(cards.get(y).getRankAsString())) {
                     result = true;
                 }
            }
            if (!result) { return false; }
        }
        return true;
    }

    public boolean isStraightFlush() {
        return ((this.isStraight() && numberOfSuitInstances(cards.get(0).suit) == 5) ? true : false);
    }

    public boolean isFullHouse() {
        int rank1 = -1;
        int rank2 = -1;
        int currCardRank;

        // check for three of a kind first - don't bother iterate if there is none.
        // makes any check where hand is not full house faster, but will slightly
        // increase check for success. This is a sacrifice I'm willing to make.
        if (!this.isThreeOfAKind()) { return false; }

        for (int x = 0; x < cards.size(); x++) {
            currCardRank = cards.get(x).rank;
            if (rank1 != -1 && currCardRank != rank1 && numberOfRankInstances(currCardRank) == 2) {
               return true;
            }
            if (rank1 == -1 && numberOfRankInstances(currCardRank) == 3) {
                rank1 = currCardRank;
            }
        }
        return false;
    }

    public boolean isFlush() {
        for (int x = 0; x < cards.size() - 1; x++) {
            if (cards.get(x).suit != cards.get(x + 1).suit) {
                return false;
            }
        }
        return true;
    }

    // TODO: confirm/test the ace rule (bottom, top, or both?)
    public boolean isStraight() {
        int lowestRank = 1000;
        int highestRank = 0;
        HashSet ranks = new HashSet();
        System.out.println("doing a thing");
        for (int x = 0; x < cards.size(); x++) {
            if (cards.get(x).rank > highestRank) {
                highestRank = cards.get(x).rank;
            }
            if (cards.get(x).rank < lowestRank) {
                lowestRank = cards.get(x).rank;
            }
            ranks.add(cards.get(x).rank);
        }
        // if all ranks are unique and the difference between the lowest
        // and highest is 4 then it must be a straight.
        System.out.print(ranks.size());
        System.out.print(lowestRank);
        System.out.print(highestRank);
        if(ranks.size() == 5 && (highestRank - lowestRank) == 4) {
            return true;
        }
        return false;
    }

    public boolean isFourOfAKind() {
        return isNOfAKind(4);
    }

    public boolean isThreeOfAKind() {
        return isNOfAKind(3);
    }

    public boolean isTwoOfAKind() {
        return isNOfAKind(2);
    }

    private boolean isNOfAKind(int n) {
        for (int x = 0; x < cards.size(); x++) {
            if (numberOfRankInstances(cards.get(x).rank) >= n) {
                return true;
            }
        }
        return false;
    }

    private int numberOfRankInstances(int rank) {
        int n = 0;
        for (int x = 0; x < cards.size(); x++) {
            if (cards.get(x).rank == rank) {
                n = n + 1;
            }
        }
        return n;
    }

    private int numberOfSuitInstances(int suit) {
        int n = 0;
        for (int x = 0; x < cards.size(); x++) {
            if (cards.get(x).suit == suit) {
                n = n + 1;
            }
        }
        return n;
    }

    public int score() {
        return 0;
    }

    public void improveHand() {
        System.out.println("Improving Hand!");
        // Don't improve if straight or better. Note that special versions of hands are encompassed
        // by the following. Example: Royal Flush will be caught by a check for a non-Royal Flush.
        if (this.isStraight() || this.isFlush() || this.isFullHouse() || this.isFourOfAKind()) {

        }
    }

    @Override
    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof Hand)) {
            return false;
        }
        Hand hand = (Hand) o;
        boolean inHand;
        for (int x = 0; x < this.cards.size(); x++) {
            inHand = false;
            for (int y = 0; y < hand.cards.size(); y++) {
                if (this.cards.get(x).equals(hand.cards.get(y))) {
                    inHand = true;
                }
            }
            if (!inHand) {
                return false;
            }
        }
        return true;
    }
}
