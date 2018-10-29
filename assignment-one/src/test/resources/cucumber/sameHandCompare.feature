Feature: Hands with the same ranking have their own rules to distinguish which is better. i.e. a royal flush is evaluated as better based off of suit.

 Scenario: A royal flush is determined by suit
  Given two hands
   | D10 DJ DQ DK DA | C10 CJ CQ CK CA |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Straight flush wins with highest ranked card
  Given two hands
   | C3 C4 C5 C6 C7 | S2 S3 S4 S5 S6 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Straight flush with the same highest card wins by suit
  Given two hands
   | H2 H3 H4 H5 H6 | C2 C3 C4 C5 C6 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Four of a kind is decided by highest card of the four of a kinds
  Given two hands
   | C3 D3 H3 S3 C4 | C2 D2 H2 S2 SA |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Highest card of two triplets in a full house is the winner
  Given two hands
   | CK DK C3 H3 S3 | SA HA C2 H2 S2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Highest card of triplets wins
  Given two hands
   | C3 H3 S3 C2 H5 | D2 S2 H2 SA SK |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Straight with same rank of highest card is determined by suit of highest card
  Given two hands
   | C3 C4 D5 H6 S7 | D3 H4 S5 S6 C7 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Straight with differently ranked highest cards are win based off the rank of the high card
  Given two hands
   | D3 H4 D5 H6 D7 | S2 C3 S4 C5 S6 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: If there are two pairs in each hand then the highest suit of the highest ranked one wins
  Given two hands
   | D2 C2 H5 S5 SK | S2 H2 C5 D5 SA |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: If there are two pairs in each hand then the highest ranked wins
  Given two hands
   | D2 C2 S10 C10 SK | H8 D8 S9 C9 SA |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Both hands with same ranked pair then highest suit wins
  Given two hands
   | S2 C2 CQ CK CA | D2 H2 SQ SK SA |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Both hands with different ranked pair then highest rank of pair wins
  Given two hands
   | S3 C3 CQ CK CA | C2 D2 SQ SK SA |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: High card hands are determined by suit if highest cards have same rank
  Given two hands
   | C2 S4 H5 D7 D8 | S2 S3 H6 S7 C8 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: High card wins based off rank regardless of suit
  Given two hands
   | C2 D3 CK CQ CA | S2 H3 SJ SQ SK |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Flush with 5 cards of the same rank is determined by suit
  Given two hands
   | D2 D4 D6 D8 D10 | C2 C4 C6 C8 C10 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Flush with 4 highest cards being the same rank then the 5th is the determining one
  Given two hands
   | C3 C4 C6 C8 C10 | D2 D4 D6 D8 D10 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Flush with 3 highest cards being the same rank then the best of remaining 4 win
  Given two hands
   | C4 C6 C7 C9 C10 | S4 S5 S7 S9 S10 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Flush with 2 highest cards being the same rank then the best of remaining 6 win
  Given two hands
   | C4 C5 C7 C9 C10 | S4 S5 S6 S9 S10 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: Flush with 1 highest card being the same rank then the best of remaining 8 win
  Given two hands
   | C4 C5 C7 C9 C10 | S4 S5 S7 S8 S10 |
  Then hand one beats hand two whether it belongs to AIP or HTB
