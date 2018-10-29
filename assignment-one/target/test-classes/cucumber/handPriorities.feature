Feature: All given hands beat hands of lesser value

 Scenario: A royal flush beats straight flush
  Given two hands
   | C10 CJ CQ CK CA | S9 S10 SJ SQ SK |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A royal flush beats four of a kind
  Given two hands
   | C10 CJ CQ CK CA | SA CA HA DA SK |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A royal flush beats full house
  Given two hands
   | C10 CJ CQ CK CA | SA CA HA SK DK | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A royal flush beats flush 
  Given two hands
   | C10 CJ CQ CK CA | S4 S5 S6 S7 S10 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A royal flush beats straight
  Given two hands
   | C10 CJ CQ CK CA | S4 C5 D6 S7 H8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A royal flush beats three of a kind
  Given two hands
   | C10 CJ CQ CK CA | SA HA DA C5 D8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A royal flush beats two pairs
  Given two hands
   | C10 CJ CQ CK CA | SA CA SK CK H8 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A royal flush beats one pair
  Given two hands
   | C10 CJ CQ CK CA | SA CA D8 D10 C2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A royal flush beats high card
  Given two hands
   | C10 CJ CQ CK CA | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight flush beats four of a kind
  Given two hands
   | C2 C3 C4 C5 C6 | SA CA HA DA SK |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight flush beats full house
  Given two hands
   | C2 C3 C4 C5 C6 | SA CA HA SK DK | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight flush beats flush 
  Given two hands
   | C2 C3 C4 C5 C6 | S4 S5 S6 S7 S10 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight flush beats straight
  Given two hands
   | C2 C3 C4 C5 C6 | S4 C5 D6 S7 H8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight flush beats three of a kind
  Given two hands
   | C2 C3 C4 C5 C6 | SA HA DA C5 D8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight flush beats two pairs
  Given two hands
   | C2 C3 C4 C5 C6 | SA CA SK CK H8 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight flush beats one pair
  Given two hands
   | C2 C3 C4 C5 C6 | SA CA D8 D10 C2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight flush beats high card
  Given two hands
   | C2 C3 C4 C5 C6 | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A four of a kind beats full house
  Given two hands
   | S2 C2 H2 D2 S3 | SA CA HA SK DK | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A four of a kind beats flush 
  Given two hands
   | S2 C2 H2 D2 S3 | S4 S5 S6 S7 S10 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A four of a kind beats straight
  Given two hands
   | S2 C2 H2 D2 S3 | S4 C5 D6 S7 H8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A four of a kind beats three of a kind
  Given two hands
   | S2 C2 H2 D2 S3 | SA HA DA C5 D8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A four of a kind beats two pairs
  Given two hands
   | S2 C2 H2 D2 S3 | SA CA SK CK H8 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A four of a kind beats one pair
  Given two hands
   | S2 C2 H2 D2 S3 | SA CA D8 D10 C2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A four of a kind beats high card
  Given two hands
   | S2 C2 H2 D2 S3 | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A full house beats flush 
  Given two hands
   | S2 C2 H2 S3 C3 | S4 S5 S6 S7 S10 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A full house beats straight
  Given two hands
   | S2 C2 H2 S3 C3 | S4 C5 D6 S7 H8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A full house beats three of a kind
  Given two hands
   | S2 C2 H2 S3 C3 | SA HA DA C5 D8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A full house beats two pairs
  Given two hands
   | S2 C2 H2 S3 C3 | SA CA SK CK H8 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A full house beats one pair
  Given two hands
   | S2 C2 H2 S3 C3 | SA CA D8 D10 C2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A full house beats high card
  Given two hands
   | S2 C2 H2 S3 C3 | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A flush beats straight
  Given two hands
   | C2 C4 C6 C7 C9 | S4 C5 D6 S7 H8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A flush beats three of a kind
  Given two hands
   | C2 C4 C6 C7 C9 | SA HA DA C5 D8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A flush beats two pairs
  Given two hands
   | C2 C4 C6 C7 C9 | SA CA SK CK H8 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A flush beats one pair
  Given two hands
   | C2 C4 C6 C7 C9 | SA CA D8 D10 C2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A flush beats high card
  Given two hands
   | C2 C4 C6 C7 C9 | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight beats three of a kind
  Given two hands
   | CA C2 C3 C4 C5 | SA HA DA C5 D8 | 
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight beats two pairs
  Given two hands
   | CA C2 C3 C4 C5 | SA CA SK CK H8 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight beats one pair
  Given two hands
   | CA C2 C3 C4 C5 | SA CA D8 D10 C2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A straight beats high card
  Given two hands
   | CA C2 C3 C4 C5 | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A three of a kind beats two pairs
  Given two hands
   | C2 H2 D2 S3 C6 | SA CA SK CK H8 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A three of a kind beats one pair
  Given two hands
   | C2 H2 D2 S3 C6 | SA CA D8 D10 C2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A three of a kind beats high card
  Given two hands
   | C2 H2 D2 S3 C6 | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A two pairs beats one pair
  Given two hands
   | C2 H2 C3 H3 S7 | SA CA D8 D10 C2 |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: A two pairs beats high card
  Given two hands
   | C2 H2 C3 H3 S7 | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB

 Scenario: One pair beats high card
  Given two hands
   | C2 H2 C4 S6 H9 | SA H3 D10 SJ CQ |
  Then hand one beats hand two whether it belongs to AIP or HTB
