Feature: AIP should be capable of applying a strategy then losing or winning

 ### Description ###
 # These tests use example tables to ensure that AIP will properly implement the 
 # improvement strategy, then lose or win based off which cards it ends up with, 
 # given the available cards in 'deck'. 
 # This allows tests to be written for specific game situations. Note that in real 
 # usage of the application the deck will always contain all cards except those which
 # have been discarded or are in a hand. Doing the deck this way is simply a way 
 # to fake game situations to better test how AIP will react when presented certain
 # cards from the deck. 
 # The first set of Scenarios represents moves that AIP makes to win the game. 
 # The second set represents the same moves but with different cards being given
 # to AIP, such that it loses. 

 Scenario Outline: AIP exchanges cards then wins against the HTB
  Given AIP has an initial hand of "<AIP cards>" 
  And HTB has an initial hand of "<HTB cards>"
  And AIP applies the improvement strategy with "<deck>"
  Then AIP should win against HTB

  Examples:
   | AIP cards | HTB cards | deck |
   # royal flush
   | C10 CJ CQ CK H2 | C2 H3 D4 S5 C6 | CA |
   # straight flush
   | C3 C4 C5 C6 H10 | C2 H3 D4 S5 C6 | C2 |
   # full house with one triplet
   | C3 D3 S3 C4 C2 | S2 S3 C4 S5 S6 | H2 |
   # full house with two pairs
   | C3 D3 C4 D4 H8 | S2 S3 C4 S5 S6 | H4 |
   # flush
   | C2 C4 C6 C8 H10 | H2 D2 H3 D3 C5 | C10 |
   # straight
   | C2 D3 H4 S5 C10 | H2 D2 H3 C3 DA | CA |
   # three of same suit 
   | C2 C5 C7 H10 D3 | SA SK S2 C5 D8 | C10 CK | 
   # three in sequence
   | C2 S3 H4 D10 SK | SA HK D9 C4 S6 | DA C5 |
   # one pair
   | C2 S2 CK DJ HA | C5 S5 D2 D3 S6 | D7 C7 S3 |
   # highest card
   | D2 CK D5 C6 S8 | SK D3 H5 S6 C8 | SA H7 D10 |

 Scenario Outline: AIP exchanges cards then loses against the HTB
  Given AIP has an initial hand of "<AIP cards>" 
  And HTB has an initial hand of "<HTB cards>"
  And AIP applies the improvement strategy with "<deck>"
  Then AIP should lose against HTB

  Examples:
   | AIP cards | HTB cards | deck |
   # royal flush
   | C10 CJ CQ CK H2 | C2 H3 D4 S5 C6 | D6 |
   # straight flush
   | C3 C4 C5 C6 H10 | C2 H3 D4 S5 C6 | H5 |
   # full house with one triplet
   | C3 D3 S3 C4 C2 | S2 S3 C4 S5 S6 | H8 |
   # full house with two pairs
   | C3 D3 C4 D4 H8 | S2 S3 C4 S5 S6 | H8 H9 |
   # flush
   | C2 C4 C6 C8 H10 | H2 D2 H3 D3 C5 | D10 |
   # straight
   | C2 D3 H4 S5 C10 | H2 D2 H3 C3 DA | C7 |
   # three of same suit 
   | C2 C5 C7 H10 D3 | SA SK S2 C5 D8 | HA SQ |
   # three in sequence
   | C2 S3 H4 D10 SK | SA HK D9 C4 S6 | D8 H6 |
   # one pair
   | C2 S2 CK DJ HA | C5 S5 D2 D3 S6 | D7 C10 S3 |
   # highest card
   | D2 CK D5 C6 S8 | SK D3 H5 S6 C8 | SQ H7 D10 |
