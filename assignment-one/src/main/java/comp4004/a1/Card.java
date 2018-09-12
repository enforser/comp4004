package comp4004.a1;

public class Card {
    String suit;
    String value;

    Card(String suit, String value) {
        this.suit = suit;
        this.value = value;
    }

    public String getSuit() {
        return this.suit;
    }

    public String getValue() {
        return this.value;
    }
}
