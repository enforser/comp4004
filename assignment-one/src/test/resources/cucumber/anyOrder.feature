Feature: All hands can be identified regardless of card order. 

 ### Description ###
 # These tests use an example table to test each permutation of a hand. 
 # Most hand types are only tested with one particular instance of the hand.
 # For example, we test S10, SJ, SQ, SK, and SA for royal flush - but 
 # it is tested in all 120 possible permutations. 
 # There are up to 120 permutations for hands with distinct cards and less 
 # for hands which have repeated ranks. 
 # To generate permutations I used: 
 # https://www.dcode.fr/permutations-generator

 Scenario Outline: A Royal Flush can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a royal flush in any order

  Examples: 
   | available suits | available ranks |
   | S S S S S | 10 J Q K A |
   | C C C C C | 10 J Q K A |
   | H H H H H | 10 J Q K A |
   | D D D D D | 10 J Q K A |
   | S S S S S | J 10 Q K A |
   | S S S S S | Q 10 J K A |
   | S S S S S | 10 Q J K A |
   | S S S S S | J Q 10 K A |
   | S S S S S | Q J 10 K A |
   | S S S S S | Q J K 10 A |
   | S S S S S | J Q K 10 A |
   | S S S S S | K Q J 10 A |
   | S S S S S | Q K J 10 A |
   | S S S S S | J K Q 10 A |
   | S S S S S | K J Q 10 A |
   | S S S S S | K 10 Q J A |
   | S S S S S | 10 K Q J A |
   | S S S S S | Q K 10 J A |
   | S S S S S | K Q 10 J A |
   | S S S S S | 10 Q K J A |
   | S S S S S | Q 10 K J A |
   | S S S S S | J 10 K Q A |
   | S S S S S | 10 J K Q A |
   | S S S S S | K J 10 Q A |
   | S S S S S | J K 10 Q A |
   | S S S S S | 10 K J Q A |
   | S S S S S | K 10 J Q A |
   | S S S S S | A 10 J Q K |
   | S S S S S | 10 A J Q K |
   | S S S S S | J A 10 Q K |
   | S S S S S | A J 10 Q K |
   | S S S S S | 10 J A Q K |
   | S S S S S | J 10 A Q K |
   | S S S S S | J 10 Q A K |
   | S S S S S | 10 J Q A K |
   | S S S S S | Q J 10 A K |
   | S S S S S | J Q 10 A K |
   | S S S S S | 10 Q J A K |
   | S S S S S | Q 10 J A K |
   | S S S S S | Q A J 10 K |
   | S S S S S | A Q J 10 K |
   | S S S S S | J Q A 10 K |
   | S S S S S | Q J A 10 K |
   | S S S S S | A J Q 10 K |
   | S S S S S | J A Q 10 K |
   | S S S S S | 10 A Q J K |
   | S S S S S | A 10 Q J K |
   | S S S S S | Q 10 A J K |
   | S S S S S | 10 Q A J K |
   | S S S S S | A Q 10 J K |
   | S S S S S | Q A 10 J K |
   | S S S S S | K A 10 J Q |
   | S S S S S | A K 10 J Q |
   | S S S S S | 10 K A J Q |
   | S S S S S | K 10 A J Q |
   | S S S S S | A 10 K J Q |
   | S S S S S | 10 A K J Q |
   | S S S S S | 10 A J K Q |
   | S S S S S | A 10 J K Q |
   | S S S S S | J 10 A K Q |
   | S S S S S | 10 J A K Q |
   | S S S S S | A J 10 K Q |
   | S S S S S | J A 10 K Q |
   | S S S S S | J K 10 A Q |
   | S S S S S | K J 10 A Q |
   | S S S S S | 10 J K A Q |
   | S S S S S | J 10 K A Q |
   | S S S S S | K 10 J A Q |
   | S S S S S | 10 K J A Q |
   | S S S S S | A K J 10 Q |
   | S S S S S | K A J 10 Q |
   | S S S S S | J A K 10 Q |
   | S S S S S | A J K 10 Q |
   | S S S S S | K J A 10 Q |
   | S S S S S | J K A 10 Q |
   | S S S S S | Q K A 10 J |
   | S S S S S | K Q A 10 J |
   | S S S S S | A Q K 10 J |
   | S S S S S | Q A K 10 J |
   | S S S S S | K A Q 10 J |
   | S S S S S | A K Q 10 J |
   | S S S S S | A K 10 Q J |
   | S S S S S | K A 10 Q J |
   | S S S S S | 10 A K Q J |
   | S S S S S | A 10 K Q J |
   | S S S S S | K 10 A Q J |
   | S S S S S | 10 K A Q J |
   | S S S S S | 10 Q A K J |
   | S S S S S | Q 10 A K J |
   | S S S S S | A 10 Q K J |
   | S S S S S | 10 A Q K J |
   | S S S S S | Q A 10 K J |
   | S S S S S | A Q 10 K J |
   | S S S S S | K Q 10 A J |
   | S S S S S | Q K 10 A J |
   | S S S S S | 10 K Q A J |
   | S S S S S | K 10 Q A J |
   | S S S S S | Q 10 K A J |
   | S S S S S | 10 Q K A J |
   | S S S S S | J Q K A 10 |
   | S S S S S | Q J K A 10 |
   | S S S S S | K J Q A 10 |
   | S S S S S | J K Q A 10 |
   | S S S S S | Q K J A 10 |
   | S S S S S | K Q J A 10 |
   | S S S S S | K Q A J 10 |
   | S S S S S | Q K A J 10 |
   | S S S S S | A K Q J 10 |
   | S S S S S | K A Q J 10 |
   | S S S S S | Q A K J 10 |
   | S S S S S | A Q K J 10 |
   | S S S S S | A J K Q 10 |
   | S S S S S | J A K Q 10 |
   | S S S S S | K A J Q 10 |
   | S S S S S | A K J Q 10 |
   | S S S S S | J K A Q 10 |
   | S S S S S | K J A Q 10 |
   | S S S S S | Q J A K 10 |
   | S S S S S | J Q A K 10 |
   | S S S S S | A Q J K 10 |
   | S S S S S | Q A J K 10 |
   | S S S S S | J A Q K 10 |
   | S S S S S | A J Q K 10 |

 Scenario Outline: A Straight Flush can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a straight flush in any order

  Examples:
   | available suits | available ranks |
   | S S S S S | 10 J Q K A |
   | S S S S S | 9 10 J Q K |
   | S S S S S | 8 9 10 J Q |
   | S S S S S | 7 8 9 10 J |
   | S S S S S | 6 7 8 9 10 |
   | S S S S S | 5 6 7 8 9 |
   | S S S S S | 4 5 6 7 8 |
   | S S S S S | 3 4 5 6 7 |
   | S S S S S | 2 3 4 5 6 |
   | S S S S S | A 2 3 4 5 |
   | D D D D D | 10 J Q K A |
   | D D D D D | 9 10 J Q K |
   | D D D D D | 8 9 10 J Q |
   | D D D D D | 7 8 9 10 J |
   | D D D D D | 6 7 8 9 10 |
   | D D D D D | 5 6 7 8 9 |
   | D D D D D | 4 5 6 7 8 |
   | D D D D D | 3 4 5 6 7 |
   | D D D D D | 2 3 4 5 6 |
   | D D D D D | A 2 3 4 5 |
   | H H H H H | 10 J Q K A |
   | H H H H H | 9 10 J Q K |
   | H H H H H | 8 9 10 J Q |
   | H H H H H | 7 8 9 10 J |
   | H H H H H | 6 7 8 9 10 |
   | H H H H H | 5 6 7 8 9 |
   | H H H H H | 4 5 6 7 8 |
   | H H H H H | 3 4 5 6 7 |
   | H H H H H | 2 3 4 5 6 |
   | H H H H H | A 2 3 4 5 |
   | C C C C C | 10 J Q K A |
   | C C C C C | 9 10 J Q K |
   | C C C C C | 8 9 10 J Q |
   | C C C C C | 7 8 9 10 J |
   | C C C C C | 6 7 8 9 10 |
   | C C C C C | 5 6 7 8 9 |
   | C C C C C | 4 5 6 7 8 |
   | C C C C C | 3 4 5 6 7 |
   | C C C C C | 2 3 4 5 6 |
   | C C C C C | A 2 3 4 5 |


 Scenario Outline: A Four of a kind can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a four of a kind in any order
  
  Examples:
   | available suits | available ranks |
   | C H D C S | 5 5 5 5 6 |
   | C H S D S | 2 2 A 2 2 |
   | C H S D S | A 2 2 2 2 |
   | C H S D S | 2 A 2 2 2 |
   | C H S D S | 2 2 2 A 2 |
   | C H S D S | 2 2 2 2 A |

 Scenario Outline: A full house can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a full house in any order

  Examples: 
   | available suits | available ranks |
   | C S H D C | 2 2 4 4 4 |
   | C S H D C | 2 4 2 4 4 |
   | C S H D C | 2 4 4 2 4 |
   | C S H D C | 2 4 4 4 2 |
   | C S H D C | 4 2 2 4 4 |
   | C S H D C | 4 2 4 2 4 |
   | C S H D C | 4 2 4 4 2 |
   | C S H D C | 4 4 2 2 4 |
   | C S H D C | 4 4 2 4 2 |
   | C S H D C | 4 4 4 2 2 |

 Scenario Outline: A flush can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a flush in any order

  Examples:
   | available suits | available ranks |
   | S S S S S | 2 2 4 5 9 |
   | D D D D D | 2 2 4 5 9 |
   | H H H H H | 2 2 4 5 9 |
   | C C C C C | 2 4 6 8 9 |
   | C C C C C | 2 4 6 9 8 |
   | C C C C C | 2 4 8 6 9 |
   | C C C C C | 2 4 8 9 6 |
   | C C C C C | 2 4 9 6 8 |
   | C C C C C | 2 4 9 8 6 |
   | C C C C C | 2 6 4 8 9 |
   | C C C C C | 2 6 4 9 8 |
   | C C C C C | 2 6 8 4 9 |
   | C C C C C | 2 6 8 9 4 |
   | C C C C C | 2 6 9 4 8 |
   | C C C C C | 2 6 9 8 4 |
   | C C C C C | 2 8 4 6 9 |
   | C C C C C | 2 8 4 9 6 |
   | C C C C C | 2 8 6 4 9 |
   | C C C C C | 2 8 6 9 4 |
   | C C C C C | 2 8 9 4 6 |
   | C C C C C | 2 8 9 6 4 |
   | C C C C C | 2 9 4 6 8 |
   | C C C C C | 2 9 4 8 6 |
   | C C C C C | 2 9 6 4 8 |
   | C C C C C | 2 9 6 8 4 |
   | C C C C C | 2 9 8 4 6 |
   | C C C C C | 2 9 8 6 4 |
   | C C C C C | 4 2 6 8 9 |
   | C C C C C | 4 2 6 9 8 |
   | C C C C C | 4 2 8 6 9 |
   | C C C C C | 4 2 8 9 6 |
   | C C C C C | 4 2 9 6 8 |
   | C C C C C | 4 2 9 8 6 |
   | C C C C C | 4 6 2 8 9 |
   | C C C C C | 4 6 2 9 8 |
   | C C C C C | 4 6 8 2 9 |
   | C C C C C | 4 6 8 9 2 |
   | C C C C C | 4 6 9 2 8 |
   | C C C C C | 4 6 9 8 2 |
   | C C C C C | 4 8 2 6 9 |
   | C C C C C | 4 8 2 9 6 |
   | C C C C C | 4 8 6 2 9 |
   | C C C C C | 4 8 6 9 2 |
   | C C C C C | 4 8 9 2 6 |
   | C C C C C | 4 8 9 6 2 |
   | C C C C C | 4 9 2 6 8 |
   | C C C C C | 4 9 2 8 6 |
   | C C C C C | 4 9 6 2 8 |
   | C C C C C | 4 9 6 8 2 |
   | C C C C C | 4 9 8 2 6 |
   | C C C C C | 4 9 8 6 2 |
   | C C C C C | 6 2 4 8 9 |
   | C C C C C | 6 2 4 9 8 |
   | C C C C C | 6 2 8 4 9 |
   | C C C C C | 6 2 8 9 4 |
   | C C C C C | 6 2 9 4 8 |
   | C C C C C | 6 2 9 8 4 |
   | C C C C C | 6 4 2 8 9 |
   | C C C C C | 6 4 2 9 8 |
   | C C C C C | 6 4 8 2 9 |
   | C C C C C | 6 4 8 9 2 |
   | C C C C C | 6 4 9 2 8 |
   | C C C C C | 6 4 9 8 2 |
   | C C C C C | 6 8 2 4 9 |
   | C C C C C | 6 8 2 9 4 |
   | C C C C C | 6 8 4 2 9 |
   | C C C C C | 6 8 4 9 2 |
   | C C C C C | 6 8 9 2 4 |
   | C C C C C | 6 8 9 4 2 |
   | C C C C C | 6 9 2 4 8 |
   | C C C C C | 6 9 2 8 4 |
   | C C C C C | 6 9 4 2 8 |
   | C C C C C | 6 9 4 8 2 |
   | C C C C C | 6 9 8 2 4 |
   | C C C C C | 6 9 8 4 2 |
   | C C C C C | 8 2 4 6 9 |
   | C C C C C | 8 2 4 9 6 |
   | C C C C C | 8 2 6 4 9 |
   | C C C C C | 8 2 6 9 4 |
   | C C C C C | 8 2 9 4 6 |
   | C C C C C | 8 2 9 6 4 |
   | C C C C C | 8 4 2 6 9 |
   | C C C C C | 8 4 2 9 6 |
   | C C C C C | 8 4 6 2 9 |
   | C C C C C | 8 4 6 9 2 |
   | C C C C C | 8 4 9 2 6 |
   | C C C C C | 8 4 9 6 2 |
   | C C C C C | 8 6 2 4 9 |
   | C C C C C | 8 6 2 9 4 |
   | C C C C C | 8 6 4 2 9 |
   | C C C C C | 8 6 4 9 2 |
   | C C C C C | 8 6 9 2 4 |
   | C C C C C | 8 6 9 4 2 |
   | C C C C C | 8 9 2 4 6 |
   | C C C C C | 8 9 2 6 4 |
   | C C C C C | 8 9 4 2 6 |
   | C C C C C | 8 9 4 6 2 |
   | C C C C C | 8 9 6 2 4 |
   | C C C C C | 8 9 6 4 2 |
   | C C C C C | 9 2 4 6 8 |
   | C C C C C | 9 2 4 8 6 |
   | C C C C C | 9 2 6 4 8 |
   | C C C C C | 9 2 6 8 4 |
   | C C C C C | 9 2 8 4 6 |
   | C C C C C | 9 2 8 6 4 |
   | C C C C C | 9 4 2 6 8 |
   | C C C C C | 9 4 2 8 6 |
   | C C C C C | 9 4 6 2 8 |
   | C C C C C | 9 4 6 8 2 |
   | C C C C C | 9 4 8 2 6 |
   | C C C C C | 9 4 8 6 2 |
   | C C C C C | 9 6 2 4 8 |
   | C C C C C | 9 6 2 8 4 |
   | C C C C C | 9 6 4 2 8 |
   | C C C C C | 9 6 4 8 2 |
   | C C C C C | 9 6 8 2 4 |
   | C C C C C | 9 6 8 4 2 |
   | C C C C C | 9 8 2 4 6 |
   | C C C C C | 9 8 2 6 4 |
   | C C C C C | 9 8 4 2 6 |
   | C C C C C | 9 8 4 6 2 |
   | C C C C C | 9 8 6 2 4 |
   | C C C C C | 9 8 6 4 2 |

 Scenario Outline: A straight can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a straight in any order

  Examples:
   | available suits | available ranks |
   | C D H S C | 3 4 5 6 7 |
   | C D H S C | 3 4 5 7 6 |
   | C D H S C | 3 4 6 5 7 |
   | C D H S C | 3 4 6 7 5 |
   | C D H S C | 3 4 7 5 6 |
   | C D H S C | 3 4 7 6 5 |
   | C D H S C | 3 5 4 6 7 |
   | C D H S C | 3 5 4 7 6 |
   | C D H S C | 3 5 6 4 7 |
   | C D H S C | 3 5 6 7 4 |
   | C D H S C | 3 5 7 4 6 |
   | C D H S C | 3 5 7 6 4 |
   | C D H S C | 3 6 4 5 7 |
   | C D H S C | 3 6 4 7 5 |
   | C D H S C | 3 6 5 4 7 |
   | C D H S C | 3 6 5 7 4 |
   | C D H S C | 3 6 7 4 5 |
   | C D H S C | 3 6 7 5 4 |
   | C D H S C | 3 7 4 5 6 |
   | C D H S C | 3 7 4 6 5 |
   | C D H S C | 3 7 5 4 6 |
   | C D H S C | 3 7 5 6 4 |
   | C D H S C | 3 7 6 4 5 |
   | C D H S C | 3 7 6 5 4 |
   | C D H S C | 4 3 5 6 7 |
   | C D H S C | 4 3 5 7 6 |
   | C D H S C | 4 3 6 5 7 |
   | C D H S C | 4 3 6 7 5 |
   | C D H S C | 4 3 7 5 6 |
   | C D H S C | 4 3 7 6 5 |
   | C D H S C | 4 5 3 6 7 |
   | C D H S C | 4 5 3 7 6 |
   | C D H S C | 4 5 6 3 7 |
   | C D H S C | 4 5 6 7 3 |
   | C D H S C | 4 5 7 3 6 |
   | C D H S C | 4 5 7 6 3 |
   | C D H S C | 4 6 3 5 7 |
   | C D H S C | 4 6 3 7 5 |
   | C D H S C | 4 6 5 3 7 |
   | C D H S C | 4 6 5 7 3 |
   | C D H S C | 4 6 7 3 5 |
   | C D H S C | 4 6 7 5 3 |
   | C D H S C | 4 7 3 5 6 |
   | C D H S C | 4 7 3 6 5 |
   | C D H S C | 4 7 5 3 6 |
   | C D H S C | 4 7 5 6 3 |
   | C D H S C | 4 7 6 3 5 |
   | C D H S C | 4 7 6 5 3 |
   | C D H S C | 5 3 4 6 7 |
   | C D H S C | 5 3 4 7 6 |
   | C D H S C | 5 3 6 4 7 |
   | C D H S C | 5 3 6 7 4 |
   | C D H S C | 5 3 7 4 6 |
   | C D H S C | 5 3 7 6 4 |
   | C D H S C | 5 4 3 6 7 |
   | C D H S C | 5 4 3 7 6 |
   | C D H S C | 5 4 6 3 7 |
   | C D H S C | 5 4 6 7 3 |
   | C D H S C | 5 4 7 3 6 |
   | C D H S C | 5 4 7 6 3 |
   | C D H S C | 5 6 3 4 7 |
   | C D H S C | 5 6 3 7 4 |
   | C D H S C | 5 6 4 3 7 |
   | C D H S C | 5 6 4 7 3 |
   | C D H S C | 5 6 7 3 4 |
   | C D H S C | 5 6 7 4 3 |
   | C D H S C | 5 7 3 4 6 |
   | C D H S C | 5 7 3 6 4 |
   | C D H S C | 5 7 4 3 6 |
   | C D H S C | 5 7 4 6 3 |
   | C D H S C | 5 7 6 3 4 |
   | C D H S C | 5 7 6 4 3 |
   | C D H S C | 6 3 4 5 7 |
   | C D H S C | 6 3 4 7 5 |
   | C D H S C | 6 3 5 4 7 |
   | C D H S C | 6 3 5 7 4 |
   | C D H S C | 6 3 7 4 5 |
   | C D H S C | 6 3 7 5 4 |
   | C D H S C | 6 4 3 5 7 |
   | C D H S C | 6 4 3 7 5 |
   | C D H S C | 6 4 5 3 7 |
   | C D H S C | 6 4 5 7 3 |
   | C D H S C | 6 4 7 3 5 |
   | C D H S C | 6 4 7 5 3 |
   | C D H S C | 6 5 3 4 7 |
   | C D H S C | 6 5 3 7 4 |
   | C D H S C | 6 5 4 3 7 |
   | C D H S C | 6 5 4 7 3 |
   | C D H S C | 6 5 7 3 4 |
   | C D H S C | 6 5 7 4 3 |
   | C D H S C | 6 7 3 4 5 |
   | C D H S C | 6 7 3 5 4 |
   | C D H S C | 6 7 4 3 5 |
   | C D H S C | 6 7 4 5 3 |
   | C D H S C | 6 7 5 3 4 |
   | C D H S C | 6 7 5 4 3 |
   | C D H S C | 7 3 4 5 6 |
   | C D H S C | 7 3 4 6 5 |
   | C D H S C | 7 3 5 4 6 |
   | C D H S C | 7 3 5 6 4 |
   | C D H S C | 7 3 6 4 5 |
   | C D H S C | 7 3 6 5 4 |
   | C D H S C | 7 4 3 5 6 |
   | C D H S C | 7 4 3 6 5 |
   | C D H S C | 7 4 5 3 6 |
   | C D H S C | 7 4 5 6 3 |
   | C D H S C | 7 4 6 3 5 |
   | C D H S C | 7 4 6 5 3 |
   | C D H S C | 7 5 3 4 6 |
   | C D H S C | 7 5 3 6 4 |
   | C D H S C | 7 5 4 3 6 |
   | C D H S C | 7 5 4 6 3 |
   | C D H S C | 7 5 6 3 4 |
   | C D H S C | 7 5 6 4 3 |
   | C D H S C | 7 6 3 4 5 |
   | C D H S C | 7 6 3 5 4 |
   | C D H S C | 7 6 4 3 5 |
   | C D H S C | 7 6 4 5 3 |
   | C D H S C | 7 6 5 3 4 |
   | C D H S C | 7 6 5 4 3 |


 Scenario Outline: A three of a kind can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a three of a kind in any order

 Examples:
   | available suits | available ranks |
   | C H S S D | 2 2 2 10 5 |
   | C H S S D | 2 2 2 5 10 |
   | C H S S D | 2 2 2 10 5 |
   | C H S S D | 2 2 5 2 10 |
   | C H S S D | 2 2 5 10 2 |
   | C H S S D | 2 2 10 2 5 |
   | C H S S D | 2 2 10 5 2 |
   | C H S S D | 2 5 2 2 10 |
   | C H S S D | 2 5 2 10 2 |
   | C H S S D | 2 5 10 2 2 |
   | C H S S D | 2 10 2 2 5 |
   | C H S S D | 2 10 2 5 2 |
   | C H S S D | 2 10 5 2 2 |
   | C H S S D | 5 2 2 2 10 |
   | C H S S D | 5 2 2 10 2 |
   | C H S S D | 5 2 10 2 2 |
   | C H S S D | 5 10 2 2 2 |
   | C H S S D | 10 2 2 2 5 |
   | C H S S D | 10 2 2 5 2 |
   | C H S S D | 10 2 5 2 2 |
   | C H S S D | 10 5 2 2 2 |

 Scenario Outline: A two pair hand can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a two pair in any order

  Examples: 
   | available suits | available ranks |
   | C S H D C | 2 4 4 9 9 |
   | C S H D C | 2 4 9 4 9 |
   | C S H D C | 2 4 9 9 4 |
   | C S H D C | 2 9 4 4 9 |
   | C S H D C | 2 9 4 9 4 |
   | C S H D C | 2 9 9 4 4 |
   | C S H D C | 4 2 4 9 9 |
   | C S H D C | 4 2 9 4 9 |
   | C S H D C | 4 2 9 9 4 |
   | C S H D C | 4 4 2 9 9 |
   | C S H D C | 4 4 9 2 9 |
   | C S H D C | 4 4 9 9 2 |
   | C S H D C | 4 9 2 4 9 |
   | C S H D C | 4 9 2 9 4 |
   | C S H D C | 4 9 4 2 9 |
   | C S H D C | 4 9 4 9 2 |
   | C S H D C | 4 9 9 2 4 |
   | C S H D C | 4 9 9 4 2 |
   | C S H D C | 9 2 4 4 9 |
   | C S H D C | 9 2 4 9 4 |
   | C S H D C | 9 2 9 4 4 |
   | C S H D C | 9 4 2 4 9 |
   | C S H D C | 9 4 2 9 4 |
   | C S H D C | 9 4 4 2 9 |
   | C S H D C | 9 4 4 9 2 |
   | C S H D C | 9 4 9 2 4 |
   | C S H D C | 9 4 9 4 2 |
   | C S H D C | 9 9 2 4 4 |
   | C S H D C | 9 9 4 2 4 |
   | C S H D C | 9 9 4 4 2 |

 Scenario Outline: A two of a kind can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a two of a kind in any order

  Examples: 
   | available suits | available ranks |
   | C C D H S | 3 3 6 9 10 |
   | C C D H S | 3 3 6 10 9 |
   | C C D H S | 3 3 9 6 10 |
   | C C D H S | 3 3 9 10 6 |
   | C C D H S | 3 3 10 6 9 |
   | C C D H S | 3 3 10 9 6 |
   | C C D H S | 3 6 3 9 10 |
   | C C D H S | 3 6 3 10 9 |
   | C C D H S | 3 6 9 3 10 |
   | C C D H S | 3 6 9 10 3 |
   | C C D H S | 3 6 10 3 9 |
   | C C D H S | 3 6 10 9 3 |
   | C C D H S | 3 9 3 6 10 |
   | C C D H S | 3 9 3 10 6 |
   | C C D H S | 3 9 6 3 10 |
   | C C D H S | 3 9 6 10 3 |
   | C C D H S | 3 9 10 3 6 |
   | C C D H S | 3 9 10 6 3 |
   | C C D H S | 3 10 3 6 9 |
   | C C D H S | 3 10 3 9 6 |
   | C C D H S | 3 10 6 3 9 |
   | C C D H S | 3 10 6 9 3 |
   | C C D H S | 3 10 9 3 6 |
   | C C D H S | 3 10 9 6 3 |
   | C C D H S | 6 3 3 9 10 |
   | C C D H S | 6 3 3 10 9 |
   | C C D H S | 6 3 9 3 10 |
   | C C D H S | 6 3 9 10 3 |
   | C C D H S | 6 3 10 3 9 |
   | C C D H S | 6 3 10 9 3 |
   | C C D H S | 6 9 3 3 10 |
   | C C D H S | 6 9 3 10 3 |
   | C C D H S | 6 9 10 3 3 |
   | C C D H S | 6 10 3 3 9 |
   | C C D H S | 6 10 3 9 3 |
   | C C D H S | 6 10 9 3 3 |
   | C C D H S | 9 3 3 6 10 |
   | C C D H S | 9 3 3 10 6 |
   | C C D H S | 9 3 6 3 10 |
   | C C D H S | 9 3 6 10 3 |
   | C C D H S | 9 3 10 3 6 |
   | C C D H S | 9 3 10 6 3 |
   | C C D H S | 9 6 3 3 10 |
   | C C D H S | 9 6 3 10 3 |
   | C C D H S | 9 6 10 3 3 |
   | C C D H S | 9 10 3 3 6 |
   | C C D H S | 9 10 3 6 3 |
   | C C D H S | 9 10 6 3 3 |
   | C C D H S | 10 3 3 6 9 |
   | C C D H S | 10 3 3 9 6 |
   | C C D H S | 10 3 6 3 9 |
   | C C D H S | 10 3 6 9 3 |
   | C C D H S | 10 3 9 3 6 |
   | C C D H S | 10 3 9 6 3 |
   | C C D H S | 10 6 3 3 9 |
   | C C D H S | 10 6 3 9 3 |
   | C C D H S | 10 6 9 3 3 |
   | C C D H S | 10 9 3 3 6 |
   | C C D H S | 10 9 3 6 3 |
   | C C D H S | 10 9 6 3 3 |
