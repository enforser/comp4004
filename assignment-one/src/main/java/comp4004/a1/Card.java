package comp4004.a1;

public class Card {
    public int suit, rank = 0;

    private static String[] suits = {"C", "D", "H", "S"};
    private static String[] ranks = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};

    Card(String suit, String value) {
        this.suit = lookupSuit(suit);
        this.rank = lookupRank(value);
    }

    public int lookupSuit(String suit) {
        for (int x = 0; x < suits.length; x++) {
            if(suits[x].equals(suit)) {
                return x;
            }
        }
        return 0;
    }

    public int lookupRank(String rank) {
        for (int x = 0; x < ranks.length; x++) {
            if(ranks[x].equals(rank)) {
                return x;
            }
        }
        return 0;
    }

    public void printCard() {
        System.out.println("Printing Card value: " + suits[this.suit] + ranks[this.rank]);
    }
}
