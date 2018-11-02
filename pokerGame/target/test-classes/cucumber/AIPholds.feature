Feature: When AIP has a straight or better it holds

 Scenario Outline: 
  Given "<AIP>" is a straight or better
  Then Improved AIP should be unchanged from the initial AIP

  Examples: 
   | AIP |
   # royal flush
   | C10 CJ CQ CK CA |
   # straight flush
   | C4 C5 C6 C7 C8 |
   # four of a kind
   | C2 H2 D2 S2 C5 |
   # full house
   | C2 H2 D2 S3 C3 |
   # flush
   | C3 C6 CA C10 CJ |
   # straight
   | C2 S3 H4 D5 D6 |
