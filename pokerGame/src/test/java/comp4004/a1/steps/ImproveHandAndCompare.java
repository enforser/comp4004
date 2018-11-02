package comp4004.a1.steps;

import comp4004.a1.Hand;
import comp4004.a1.Card;
import comp4004.a1.Game;
import comp4004.a1.Deck;

import java.lang.reflect.Array;
import java.util.*;
import comp4004.a1.Utils;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.DataTable;
import static org.junit.Assert.*;
import com.google.common.collect.Sets;

public class ImproveHandAndCompare {

    Hand ai, user, initialAI;
    Deck deck;

    // accepts a string of cards and puts them into an arraylist
    public ArrayList<Card> stringToCards(String s) {
        ArrayList<Card> cards = new ArrayList<>();
        String[] splitS = s.split(" ");
        for(int x = 0; x < splitS.length; x++) {
            cards.add(new Card(splitS[x].substring(0, 1), splitS[x].substring(1)));
        }
        return cards;
    }

    @When("^\"(.*?)\" is one off from royal flush$")
    public void is_one_off_from_royal_flush(String AIP) throws Throwable {
        ai = new Hand(stringToCards(AIP));
    }

    @When("^it is given \"(.*?)\" to improve itself$")
    public void it_is_given_to_improve_itself(String deckS) throws Throwable {
        deck = new Deck(stringToCards(deckS));
        ai.improveHand(deck);
    }

    @Then("^AIP should beat \"(.*?)\"$")
    public void aip_should_beat(String HTB) throws Throwable {
        user = new Hand(stringToCards(HTB));
        ai.print();
        user.print();
        assertTrue(new Game(ai, user).isBetter());
    }

    @Given("^\"(.*?)\" is a straight or better$")
    public void is_a_straight_or_better(String AIP) throws Throwable {
        ai = new Hand(stringToCards(AIP));
        initialAI = new Hand(stringToCards(AIP));
    }

    @Then("Improved AIP should be unchanged from the initial AIP")
    public void improved_AIP_is_unchanged() throws Throwable {
        ai.equals(initialAI);
    }

    @Given("^AIP has an initial hand of \"(.*?)\"$")
    public void aip_has_an_initial_hand_of(String arg1) throws Throwable {
        ai = new Hand(arg1, true);
    }

    @Given("^HTB has an initial hand of \"(.*?)\"$")
    public void htb_has_an_initial_hand_of(String arg1) throws Throwable {
        user = new Hand(arg1, true);
    }

    @Given("^AIP applies the improvement strategy with \"(.*?)\"$")
    public void aip_applies_the_improvement_strategy_with(String arg1) throws Throwable {
        ai.improveHand(new Deck(stringToCards(arg1)));
        ai.print();
    }

    @Then("^AIP should win against HTB$")
    public void aip_should_win_against_HTB() throws Throwable {
        assertTrue(new Game(ai, user).isBetter());
        assertFalse(new Game(user, ai).isBetter());
    }

    @Then("^AIP should lose against HTB$")
    public void aip_should_lose_against_HTB() throws Throwable {
        assertFalse(new Game(ai, user).isBetter());
        assertTrue(new Game(user, ai).isBetter());
    }
   }