package comp4004.a1;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

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
            System.out.println(stringCards[x].substring(1));
            card = new Card(stringCards[x].substring(0, 1), stringCards[x].substring(1));
            card.printCard();
            cards.add(card);
        }

        if (cards.size() != 5) {
            throw new IllegalArgumentException("The required number of cards in a hand is 5. Cards from " + path);
        }
        this.cards = cards;
    }

    // Called on the AI hand to apply the improving logic.
    private Hand improveHand() {
       return this;
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
        return true;
    }

    public boolean isStraightFlush() {
        return true;
    }

    public boolean isFullHouse() {
        return true;
    }

    public boolean isFlush() {
        return true;
    }

    public boolean isStraight() {
        return true;
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
}
