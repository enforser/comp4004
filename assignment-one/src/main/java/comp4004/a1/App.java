package comp4004.a1;

public class App
{
    public static void main( String[] args ) {

        //Create hands for user and AI
        Hand AI = new Hand("realhands/ai.txt");
        Hand user = new Hand("realhands/user.txt");

        // Print initial hands for both users
        System.out.println("AI Hand: ");
        AI.print();
        System.out.println("User Hand: ");
        user.print();

        // Create a full deck minus the cards in the two hands.
        Deck deck = new Deck();
        deck.removeCards(AI.cards);
        deck.removeCards(user.cards);

        // AI tries to improve their hand
        AI.improveHand();

        // time to compare the hands to determine the winner!
        Game game = new Game(AI, user);
        boolean isAIWinner = game.isBetter();

        if (isAIWinner) {
            System.out.println("AI is the winner!");
        }
        else {
            System.out.println("User is the winner");
        }
    }
}


