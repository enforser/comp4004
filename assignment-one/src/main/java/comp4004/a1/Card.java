package comp4004.a1;

public class Card {
    public int suit, rank = 0;

    private static String[] suits = {"C", "D", "H", "S"};
    private static String[] ranks = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};

    Card(String suit, String value) {
        for(int x = 0; x < suits.length; x++) {
            if(suits[x] == suit) {
                this.suit = x;
            }
        }
        for(int x = 0; x < ranks.length; x++) {
            if(ranks[x] == suit) {
                this.rank = x;
            }
        }
    }

    public void printCard() {
        System.out.print(suits[this.suit] + ranks[this.rank]);
    }
}
