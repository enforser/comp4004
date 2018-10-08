package comp4004.a1;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class App
{
    public static void main( String[] args ) {

        Hand AI;
        Hand user;

        if (args.length == 2) {
            //Create hands for user and AI
            String pathToAICards = "hands/" + args[0];
            String pathToUserCards = "hands/" + args[1];

            AI = new Hand(pathToAICards);
            user = new Hand(pathToUserCards);
        }
        else {
            Hand h = new Hand();
            Hand[] hands = h.handsFromInputFile(1, args[0]);
            AI = hands[0];
            user = hands[1];
        }


        System.out.println("---------------------------------------");

        // Print initial hands for both users
        System.out.println("Initial AI Hand:");
        AI.print();
        System.out.println();
        System.out.println("User Hand: ");
        user.print();

        // Create a full deck minus the cards in the two hands.
        Deck deck = new Deck();
        deck.removeCards(AI.cards);
        deck.removeCards(user.cards);

        // AI tries to improve their hand
        System.out.println("---------------------------------------");
        System.out.println("Attempting to improve the AI hand.");
        System.out.println("---------------------------------------");
        AI.improveHand();
        System.out.println("The updated AI hand is: ");
        AI.print();
        System.out.println("---------------------------------------");

        // time to compare the hands to determine the winner!
        Game game = new Game(AI, user);
        boolean isAIWinner = game.isBetter();

        System.out.print("Result: ");
        if (isAIWinner) {
            System.out.println("AI is the winner!");
        }
        else {
            System.out.println("User is the winner!");
        }
        System.out.println("---------------------------------------");
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
}


