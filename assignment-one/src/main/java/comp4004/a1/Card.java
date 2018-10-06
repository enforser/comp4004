package comp4004.a1;

public class Card {
    public int suit, rank = 0;

    private static String[] suits = {"C", "D", "H", "S"};
    private static String[] ranks = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};

    Card(String suit, String value) {
        this.suit = lookupSuit(suit);
        this.rank = lookupRank(value);
    }

    Card(Integer suit, Integer rank) {
        this.suit = suit;
        this.rank = rank;
    }

    public Card makeCopy() {
        return new Card(this.suit, this.rank);
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

    public String getRankAsString() {
        return ranks[rank];
    }

    @Override
    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof Card)) {
            return false;
        }
        Card card = (Card) o;
        if (this.suit == card.suit && this.rank == card.rank) {
            return true;
        }
        return false;
    }

    public boolean greaterThan(Card c) {
        if (this.rank > c.rank || (this.rank == c.rank && this.suit > c.suit)) {
            return true;
        }
        return false;
    }

    public void printCard() {
        System.out.println("Printing Card value: " + suits[this.suit] + ranks[this.rank]);
    }
}
