package comp4004.a1.steps;

import comp4004.a1.Hand;
import comp4004.a1.Card;

import java.lang.reflect.Array;
import java.util.*;

import comp4004.a1.Utils;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;
import com.google.common.collect.Sets;

public class AnyOrder {

    ArrayList<Hand> hands = new ArrayList<>();
    ArrayList<String[]> suits = new ArrayList<>();
    ArrayList<String[]> ranks = new ArrayList<>();

    String[] allRanks = {"2", "3", "4", "5", "6", "7", "8", "9", "10","J", "Q", "K", "A"};

    String[][] allSuitCombos = {
            {"C", "C", "D", "H", "S"},
            {"S", "S", "D", "H", "C"},
            {"H", "H", "D", "S", "C"},
            {"D", "D", "C", "H", "S"}
    };

    public Hand setHand(String s) {
        return new Hand(s, true);
    }

    public void initAllPermsAsHands(String[] availSuits, String[] availRanks) {
        ArrayList<String> myList = new ArrayList<String>(Arrays.asList(availSuits));
        permutationsOfSuits(myList, new Stack<String>(), 5);
        myList= new ArrayList<>(Arrays.asList(availRanks));
        permutationsOfRanks(myList, new Stack<String>(), 5);

        for(String[] s: suits) {
            for(String[] r: ranks) {
                ArrayList<Card> mycards = new ArrayList<>();
                for (int x = 0; x < 5; x++) {
                    mycards.add(new Card(s[x], r[x]));
                }
                hands.add(new Hand(mycards));
            }
        }
    }

    public void filterHandsByRank(int num, String rank) {
        for(Hand h: hands) {
            int count = 0;
            for (int i = 0; i < h.cards.size(); i++) {
                if (h.cards.get(i).getRankAsString().equals(rank)) {
                    count++;
                }
            }
            if (count < num) {
                hands.remove(h);
            }
        }
    }

    public void permutationsOfSuits(ArrayList<String> items, Stack<String> permutation, int size) {
        if(permutation.size() == size) {
            suits.add(permutation.toArray(new String[permutation.size()]));
        }
        String[] availableItems = items.toArray(new String[0]);
        for(String i : availableItems) {
            permutation.push(i);
            items.remove(i);
            permutationsOfSuits(items, permutation, size);
            items.add(permutation.pop());
        }
    }

    public void permutationsOfRanks(ArrayList<String> items, Stack<String> permutation, int size) {
        if(permutation.size() == size) {
            ranks.add(permutation.toArray(new String[permutation.size()]));
        }
        String[] availableItems = items.toArray(new String[0]);
        for(String i : availableItems) {
            permutation.push(i);
            items.remove(i);
            permutationsOfRanks(items, permutation, size);
            items.add(permutation.pop());
        }
    }

    public void permutations(Set<Card> items, Stack<Card> permutation, int size) {
        if(permutation.size() == size) {
            hands.add(new Hand(new ArrayList<Card>(permutation)));
        }
        Card[] availableItems = items.toArray(new Card[0]);
        for(Card i : availableItems) {
            permutation.push(i);
            items.remove(i);
            permutations(items, permutation, size);
            items.add(permutation.pop());
        }
    }

    @Before
    public void beforeScenario() {
        System.out.println("\n----- RUNNING SCENARIO ------");
    }

    @Given("^A set of cards with \"(.*)\" and \"(.*)\"$")
    public void a_set_of_cards_with(String suits, String ranks) throws Throwable {
        initAllPermsAsHands(suits.split(" "), ranks.split(" "));
    }

    @Given("^A set of cards with (\\d+) of \"(.*?)\"$")
    public void a_set_of_cards_with_of(int num, String rankstring) throws Throwable {
        String[] ranks = rankstring.split(" ");
        for (String r: ranks) {
            filterHandsByRank(num, r);
        }
    }

    @Then("^the hand should be a royal flush in any order$")
    public void the_hand_should_be_a_royal_flush_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isRoyalFlush());
        }
    }

    @Then("^the hand should be a straight flush in any order$")
    public void the_hand_should_be_a_straight_flush_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isStraightFlush());
        }
    }

    @Then("^the hand should be a four of a kind in any order$")
    public void the_hand_should_be_a_four_of_a_kind_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isFourOfAKind());
        }
    }

    @Then("^the hand should be a three of a kind in any order$")
    public void the_hand_should_be_a_three_of_a_kind_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isThreeOfAKind());
        }
    }

    @Then("^the hand should be a full house in any order$")
    public void the_hand_should_be_a_full_house_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isFullHouse());
        }
    }

    @Then("^the hand should be a flush in any order$")
    public void the_hand_should_be_a_flush_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isFlush());
        }
    }

    @Then("^the hand should be a straight in any order$")
    public void the_hand_should_be_a_straight_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isStraight());
        }
    }

    @Then("^the hand should be a two pair in any order$")
    public void the_hand_should_be_a_two_pair_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isTwoPairs());
        }
    }

    @Then("^the hand should be a two of a kind in any order$")
    public void the_hand_should_be_a_two_of_a_kind_in_any_order() throws Throwable {
        for (Hand h: hands) {
            assertTrue(h.isTwoOfAKind());
        }
    }
}