Feature: All hands can be identified regardless of card order

 Scenario Outline: A Royal Flush can be determined given any order
  Given A set of cards with "<available suits>" and "<available ranks>"
  Then the hand should be a royal flush in any order

  Examples: 
   | available suits | available ranks |
   | S S S S S | 10 J Q K A |
   | C C C C C | 10 J Q K A |
   | H H H H H | 10 J Q K A |
   | D D D D D | 10 J Q K A |

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
