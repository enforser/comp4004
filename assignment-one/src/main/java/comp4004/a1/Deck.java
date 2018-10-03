package comp4004.a1;

import java.util.ArrayList;
import java.util.Random;

public class Deck {

    ArrayList<Card> cards = new ArrayList<Card>();
    private Random randomGenerator;
    Deck() {
        randomGenerator = new Random();

        for (int x = 0; x < 13; x++) { // x = rank A -> K
            for (int y = 0; y < 4; y++) { // y = suit (D, S, C, H)
                cards.add(
                        new Card(y, x)
                );
            }
        }
    }

    public void removeCards(ArrayList<Card> cards) {
        for (int x = 0; x < this.cards.size(); x++) {
            for (int y = 0; y < cards.size(); y++) {
                if (this.cards.get(x).equals(cards.get(y))) {
                    this.cards.remove(x);
                }
            }
        }
    }

    // returns some random card from the remaining cards in the deck
    public Card draw() {
        int index = randomGenerator.nextInt(this.cards.size());
        Card card = this.cards.get(index);
        this.cards.remove(index);
        return card;
    }
}
