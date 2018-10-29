package comp4004.a1.steps;

import comp4004.a1.Hand;
import comp4004.a1.Card;
import comp4004.a1.Game;

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

public class HandPriorites {

    ArrayList<Hand> handPairs = new ArrayList<>();

    @Given("^two hands$")
    public void two_hands(DataTable arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        List<String> foo = arg1.asList(String.class);
        for (int x = 0; x < foo.size(); x = x + 2) {
            handPairs.add(new Hand(foo.get(x), true));
            handPairs.add(new Hand(foo.get(x + 1), true));
        }
    }

    @Then("^hand one beats hand two whether it belongs to AIP or HTB$")
    public void hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB() throws Throwable {
        for (int x = 0; x < handPairs.size(); x = x + 2) {
            Game handOneIsBetter = new Game(handPairs.get(x), handPairs.get(x + 1));
            Game handTwoIsBetter = new Game(handPairs.get(x + 1), handPairs.get(x));
            // if AIP has better hand then is better returns true.
            assertTrue(handOneIsBetter.isBetter());
            // check that if the user has the better hand then is better resturns false.
            assertFalse(handTwoIsBetter.isBetter());
        }
    }

}
