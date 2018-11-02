$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/AIPholds.feature");
formatter.feature({
  "line": 1,
  "name": "When AIP has a straight or better it holds",
  "description": "",
  "id": "when-aip-has-a-straight-or-better-it-holds",
  "keyword": "Feature"
});
formatter.before({
  "duration": 160321,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "# royal flush"
    }
  ],
  "line": 10,
  "name": "",
  "description": "",
  "id": "when-aip-has-a-straight-or-better-it-holds;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "\"C10 CJ CQ CK CA\" is a straight or better",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Improved AIP should be unchanged from the initial AIP",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C10 CJ CQ CK CA",
      "offset": 1
    }
  ],
  "location": "ImproveHandAndCompare.is_a_straight_or_better(String)"
});
formatter.result({
  "duration": 78190657,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 48001,
  "status": "passed"
});
formatter.before({
  "duration": 43875,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "# straight flush"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "when-aip-has-a-straight-or-better-it-holds;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "\"C4 C5 C6 C7 C8\" is a straight or better",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Improved AIP should be unchanged from the initial AIP",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C4 C5 C6 C7 C8",
      "offset": 1
    }
  ],
  "location": "ImproveHandAndCompare.is_a_straight_or_better(String)"
});
formatter.result({
  "duration": 98438,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 23690,
  "status": "passed"
});
formatter.before({
  "duration": 40516,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "# four of a kind"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "id": "when-aip-has-a-straight-or-better-it-holds;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "\"C2 H2 D2 S2 C5\" is a straight or better",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Improved AIP should be unchanged from the initial AIP",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 H2 D2 S2 C5",
      "offset": 1
    }
  ],
  "location": "ImproveHandAndCompare.is_a_straight_or_better(String)"
});
formatter.result({
  "duration": 71265,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 23953,
  "status": "passed"
});
formatter.before({
  "duration": 58154,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "# full house"
    }
  ],
  "line": 16,
  "name": "",
  "description": "",
  "id": "when-aip-has-a-straight-or-better-it-holds;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "\"C2 H2 D2 S3 C3\" is a straight or better",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Improved AIP should be unchanged from the initial AIP",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 H2 D2 S3 C3",
      "offset": 1
    }
  ],
  "location": "ImproveHandAndCompare.is_a_straight_or_better(String)"
});
formatter.result({
  "duration": 69046,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 25620,
  "status": "passed"
});
formatter.before({
  "duration": 39594,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "# flush"
    }
  ],
  "line": 18,
  "name": "",
  "description": "",
  "id": "when-aip-has-a-straight-or-better-it-holds;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "\"C3 C6 CA C10 CJ\" is a straight or better",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Improved AIP should be unchanged from the initial AIP",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C3 C6 CA C10 CJ",
      "offset": 1
    }
  ],
  "location": "ImproveHandAndCompare.is_a_straight_or_better(String)"
});
formatter.result({
  "duration": 70553,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 21611,
  "status": "passed"
});
formatter.before({
  "duration": 43223,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "# straight"
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "when-aip-has-a-straight-or-better-it-holds;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "\"C2 S3 H4 D5 D6\" is a straight or better",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Improved AIP should be unchanged from the initial AIP",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 S3 H4 D5 D6",
      "offset": 1
    }
  ],
  "location": "ImproveHandAndCompare.is_a_straight_or_better(String)"
});
formatter.result({
  "duration": 64968,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 18790,
  "status": "passed"
});
formatter.uri("cucumber/aipstrategy.feature");
formatter.feature({
  "line": 1,
  "name": "AIP should be capable of applying a strategy then losing or winning",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning",
  "keyword": "Feature"
});
formatter.before({
  "duration": 35202,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 24,
      "value": "# royal flush"
    }
  ],
  "line": 25,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C10 CJ CQ CK H2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"C2 H3 D4 S5 C6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"CA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C10 CJ CQ CK H2",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 115213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C2 H3 D4 S5 C6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 68478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CA",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 1145146,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 100874,
  "status": "passed"
});
formatter.before({
  "duration": 64928,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "# straight flush"
    }
  ],
  "line": 27,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C3 C4 C5 C6 H10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"C2 H3 D4 S5 C6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"C2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C3 C4 C5 C6 H10",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 77729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C2 H3 D4 S5 C6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 75125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C2",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 696931,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 82661,
  "status": "passed"
});
formatter.before({
  "duration": 45402,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 28,
      "value": "# full house with one triplet"
    }
  ],
  "line": 29,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C3 D3 S3 C4 C2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"S2 S3 C4 S5 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"H2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C3 D3 S3 C4 C2",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 83287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S2 S3 C4 S5 S6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 94658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H2",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 3013522,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 126487,
  "status": "passed"
});
formatter.before({
  "duration": 43122,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 30,
      "value": "# full house with two pairs"
    }
  ],
  "line": 31,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C3 D3 C4 D4 H8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"S2 S3 C4 S5 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"H4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C3 D3 C4 D4 H8",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 135468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S2 S3 C4 S5 S6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 101626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H4",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 2846935,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 82756,
  "status": "passed"
});
formatter.before({
  "duration": 46655,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "# flush"
    }
  ],
  "line": 33,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C2 C4 C6 C8 H10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"H2 D2 H3 D3 C5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"C10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 C4 C6 C8 H10",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 108606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H2 D2 H3 D3 C5",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 61063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C10",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 1047631,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 100192,
  "status": "passed"
});
formatter.before({
  "duration": 49213,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 34,
      "value": "# straight"
    }
  ],
  "line": 35,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C2 D3 H4 S5 C10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"H2 D2 H3 C3 DA\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"CA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 D3 H4 S5 C10",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 84953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H2 D2 H3 C3 DA",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 52521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CA",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 1071973,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 86746,
  "status": "passed"
});
formatter.before({
  "duration": 43446,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 36,
      "value": "# three of same suit"
    }
  ],
  "line": 37,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C2 C5 C7 H10 D3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"SA SK S2 C5 D8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"C10 CK\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 C5 C7 H10 D3",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 64054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA SK S2 C5 D8",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 43623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C10 CK",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 1820467,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 109111,
  "status": "passed"
});
formatter.before({
  "duration": 45884,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 38,
      "value": "# three in sequence"
    }
  ],
  "line": 39,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C2 S3 H4 D10 SK\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"SA HK D9 C4 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"DA C5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 S3 H4 D10 SK",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 78580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA HK D9 C4 S6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 60659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DA C5",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 2141019,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 127617,
  "status": "passed"
});
formatter.before({
  "duration": 42256,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 40,
      "value": "# one pair"
    }
  ],
  "line": 41,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"C2 S2 CK DJ HA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"C5 S5 D2 D3 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"D7 C7 S3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 S2 CK DJ HA",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 78723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C5 S5 D2 D3 S6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 70495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D7 C7 S3",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 2783090,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 88148,
  "status": "passed"
});
formatter.before({
  "duration": 632546,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 42,
      "value": "# highest card"
    }
  ],
  "line": 43,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "AIP has an initial hand of \"D2 CK D5 C6 S8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "HTB has an initial hand of \"SK D3 H5 S6 C8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "AIP applies the improvement strategy with \"SA H7 D10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "AIP should win against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D2 CK D5 C6 S8",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 349322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SK D3 H5 S6 C8",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 69415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA H7 D10",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 1514454,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 161677,
  "status": "passed"
});
formatter.before({
  "duration": 98445,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 53,
      "value": "# royal flush"
    }
  ],
  "line": 54,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C10 CJ CQ CK H2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"C2 H3 D4 S5 C6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"D6\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C10 CJ CQ CK H2",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 84617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C2 H3 D4 S5 C6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 61877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D6",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 629768,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 72411,
  "status": "passed"
});
formatter.before({
  "duration": 43888,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 55,
      "value": "# straight flush"
    }
  ],
  "line": 56,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C3 C4 C5 C6 H10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"C2 H3 D4 S5 C6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"H5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C3 C4 C5 C6 H10",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 55525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C2 H3 D4 S5 C6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 43453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H5",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 353366,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 51955,
  "status": "passed"
});
formatter.before({
  "duration": 34048,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 57,
      "value": "# full house with one triplet"
    }
  ],
  "line": 58,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C3 D3 S3 C4 C2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"S2 S3 C4 S5 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"H8\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C3 D3 S3 C4 C2",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 105647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S2 S3 C4 S5 S6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 38278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H8",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 526895,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 57408,
  "status": "passed"
});
formatter.before({
  "duration": 114286,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "# full house with two pairs"
    }
  ],
  "line": 60,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C3 D3 C4 D4 H8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"S2 S3 C4 S5 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"H8 H9\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C3 D3 C4 D4 H8",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 55506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S2 S3 C4 S5 S6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 41768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H8 H9",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 414264,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 34464,
  "status": "passed"
});
formatter.before({
  "duration": 24352,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 61,
      "value": "# flush"
    }
  ],
  "line": 62,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C2 C4 C6 C8 H10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"H2 D2 H3 D3 C5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"D10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 C4 C6 C8 H10",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 60453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H2 D2 H3 D3 C5",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 35409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D10",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 469876,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 35684,
  "status": "passed"
});
formatter.before({
  "duration": 31300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 63,
      "value": "# straight"
    }
  ],
  "line": 64,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C2 D3 H4 S5 C10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"H2 D2 H3 C3 DA\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"C7\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 D3 H4 S5 C10",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 360622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H2 D2 H3 C3 DA",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 247327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C7",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 796728,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 35788,
  "status": "passed"
});
formatter.before({
  "duration": 34238,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 65,
      "value": "# three of same suit"
    }
  ],
  "line": 66,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C2 C5 C7 H10 D3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"SA SK S2 C5 D8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"HA SQ\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 C5 C7 H10 D3",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 108773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA SK S2 C5 D8",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 50597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA SQ",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 731249,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 48011,
  "status": "passed"
});
formatter.before({
  "duration": 25011,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 67,
      "value": "# three in sequence"
    }
  ],
  "line": 68,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C2 S3 H4 D10 SK\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"SA HK D9 C4 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"D8 H6\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 S3 H4 D10 SK",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 73125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA HK D9 C4 S6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 52874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D8 H6",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 927702,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 66505,
  "status": "passed"
});
formatter.before({
  "duration": 30501,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 69,
      "value": "# one pair"
    }
  ],
  "line": 70,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"C2 S2 CK DJ HA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"C5 S5 D2 D3 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"D7 C10 S3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C2 S2 CK DJ HA",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 75252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C5 S5 D2 D3 S6",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 57251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D7 C10 S3",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 910673,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 231435,
  "status": "passed"
});
formatter.before({
  "duration": 29417,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 71,
      "value": "# highest card"
    }
  ],
  "line": 72,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "AIP has an initial hand of \"D2 CK D5 C6 S8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "HTB has an initial hand of \"SK D3 H5 S6 C8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP applies the improvement strategy with \"SQ H7 D10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "AIP should lose against HTB",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D2 CK D5 C6 S8",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.aip_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 68167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SK D3 H5 S6 C8",
      "offset": 28
    }
  ],
  "location": "ImproveHandAndCompare.htb_has_an_initial_hand_of(String)"
});
formatter.result({
  "duration": 43588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SQ H7 D10",
      "offset": 43
    }
  ],
  "location": "ImproveHandAndCompare.aip_applies_the_improvement_strategy_with(String)"
});
formatter.result({
  "duration": 600928,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 43539,
  "status": "passed"
});
formatter.uri("cucumber/anyOrder.feature");
formatter.feature({
  "line": 1,
  "name": "All hands can be identified regardless of card order.",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 32993,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 J Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 26782347,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 13300354,
  "status": "passed"
});
formatter.before({
  "duration": 29407,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"C C C C C\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "10 J Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 10393351,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5327614,
  "status": "passed"
});
formatter.before({
  "duration": 33235,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"H H H H H\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "10 J Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 11256495,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5205121,
  "status": "passed"
});
formatter.before({
  "duration": 57016,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"D D D D D\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "10 J Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5262948,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 7168089,
  "status": "passed"
});
formatter.before({
  "duration": 32811,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J 10 Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J 10 Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5503468,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4537865,
  "status": "passed"
});
formatter.before({
  "duration": 32788,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q 10 J K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q 10 J K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5160538,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 6738396,
  "status": "passed"
});
formatter.before({
  "duration": 34766,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 Q J K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 Q J K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 12372657,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4611763,
  "status": "passed"
});
formatter.before({
  "duration": 32761,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J Q 10 K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J Q 10 K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6054439,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4251098,
  "status": "passed"
});
formatter.before({
  "duration": 30921,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q J 10 K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q J 10 K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5512528,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4754296,
  "status": "passed"
});
formatter.before({
  "duration": 32315,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q J K 10 A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q J K 10 A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4715585,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3835744,
  "status": "passed"
});
formatter.before({
  "duration": 23351,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J Q K 10 A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J Q K 10 A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4567986,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3952989,
  "status": "passed"
});
formatter.before({
  "duration": 33502,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K Q J 10 A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K Q J 10 A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7531193,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3959407,
  "status": "passed"
});
formatter.before({
  "duration": 30945,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q K J 10 A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q K J 10 A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4859467,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3753977,
  "status": "passed"
});
formatter.before({
  "duration": 36902,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J K Q 10 A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J K Q 10 A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6030959,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3359258,
  "status": "passed"
});
formatter.before({
  "duration": 19936,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K J Q 10 A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K J Q 10 A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4878334,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4912787,
  "status": "passed"
});
formatter.before({
  "duration": 48395,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K 10 Q J A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K 10 Q J A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6834002,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 6478861,
  "status": "passed"
});
formatter.before({
  "duration": 29700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 K Q J A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 K Q J A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 10184703,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 6010311,
  "status": "passed"
});
formatter.before({
  "duration": 38400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q K 10 J A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q K 10 J A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6562147,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 8095093,
  "status": "passed"
});
formatter.before({
  "duration": 33729,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K Q 10 J A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K Q 10 J A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6165497,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 9121345,
  "status": "passed"
});
formatter.before({
  "duration": 104945,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 Q K J A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 Q K J A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6235780,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 6245683,
  "status": "passed"
});
formatter.before({
  "duration": 35749,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q 10 K J A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q 10 K J A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6145314,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 10254287,
  "status": "passed"
});
formatter.before({
  "duration": 68616,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J 10 K Q A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J 10 K Q A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6452901,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 12794629,
  "status": "passed"
});
formatter.before({
  "duration": 79107,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 J K Q A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 J K Q A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4592665,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5454303,
  "status": "passed"
});
formatter.before({
  "duration": 49394,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K J 10 Q A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K J 10 Q A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5227972,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3904728,
  "status": "passed"
});
formatter.before({
  "duration": 25280,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J K 10 Q A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J K 10 Q A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4508759,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3440738,
  "status": "passed"
});
formatter.before({
  "duration": 54581,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 K J Q A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 K J Q A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7908548,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3355643,
  "status": "passed"
});
formatter.before({
  "duration": 43226,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K 10 J Q A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K 10 J Q A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4842051,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4155907,
  "status": "passed"
});
formatter.before({
  "duration": 21445,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A 10 J Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5048450,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5691790,
  "status": "passed"
});
formatter.before({
  "duration": 20996,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 A J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 A J Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5191401,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4454461,
  "status": "passed"
});
formatter.before({
  "duration": 34543,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J A 10 Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J A 10 Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5310330,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4409663,
  "status": "passed"
});
formatter.before({
  "duration": 41880,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A J 10 Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A J 10 Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4886265,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4936220,
  "status": "passed"
});
formatter.before({
  "duration": 37365,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 J A Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 J A Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7448011,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4245066,
  "status": "passed"
});
formatter.before({
  "duration": 68298,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J 10 A Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J 10 A Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5151897,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4278427,
  "status": "passed"
});
formatter.before({
  "duration": 33002,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J 10 Q A K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J 10 Q A K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6026753,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4243551,
  "status": "passed"
});
formatter.before({
  "duration": 19029,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 J Q A K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 J Q A K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5045579,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5725396,
  "status": "passed"
});
formatter.before({
  "duration": 20709,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q J 10 A K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q J 10 A K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4681490,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3876936,
  "status": "passed"
});
formatter.before({
  "duration": 19041,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J Q 10 A K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J Q 10 A K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5012927,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3872135,
  "status": "passed"
});
formatter.before({
  "duration": 33469,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 Q J A K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 Q J A K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 13327279,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3466546,
  "status": "passed"
});
formatter.before({
  "duration": 20473,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q 10 J A K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q 10 J A K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4918889,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3587522,
  "status": "passed"
});
formatter.before({
  "duration": 20865,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q A J 10 K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q A J 10 K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5850041,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3376509,
  "status": "passed"
});
formatter.before({
  "duration": 22027,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;42",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A Q J 10 K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A Q J 10 K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5501943,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4011332,
  "status": "passed"
});
formatter.before({
  "duration": 20077,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;43",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J Q A 10 K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J Q A 10 K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4448473,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3409213,
  "status": "passed"
});
formatter.before({
  "duration": 21666,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;44",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q J A 10 K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q J A 10 K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4737913,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3716737,
  "status": "passed"
});
formatter.before({
  "duration": 19361,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;45",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A J Q 10 K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A J Q 10 K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7704450,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3258542,
  "status": "passed"
});
formatter.before({
  "duration": 22776,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;46",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J A Q 10 K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J A Q 10 K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4857933,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3731512,
  "status": "passed"
});
formatter.before({
  "duration": 24541,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;47",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 A Q J K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 A Q J K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6509452,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3340197,
  "status": "passed"
});
formatter.before({
  "duration": 23485,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;48",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A 10 Q J K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A 10 Q J K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4450891,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5621678,
  "status": "passed"
});
formatter.before({
  "duration": 36658,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;49",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q 10 A J K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q 10 A J K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5641105,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3388355,
  "status": "passed"
});
formatter.before({
  "duration": 20661,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;50",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 Q A J K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 Q A J K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4588460,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3387058,
  "status": "passed"
});
formatter.before({
  "duration": 29068,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;51",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A Q 10 J K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A Q 10 J K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7503954,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3267556,
  "status": "passed"
});
formatter.before({
  "duration": 20072,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;52",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q A 10 J K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q A 10 J K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4972743,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3453353,
  "status": "passed"
});
formatter.before({
  "duration": 21513,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;53",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K A 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K A 10 J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4859849,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4562310,
  "status": "passed"
});
formatter.before({
  "duration": 20419,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;54",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A K 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A K 10 J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4573559,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3172000,
  "status": "passed"
});
formatter.before({
  "duration": 28775,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;55",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 K A J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 K A J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5657466,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5092163,
  "status": "passed"
});
formatter.before({
  "duration": 24668,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;56",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K 10 A J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K 10 A J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5382038,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3710885,
  "status": "passed"
});
formatter.before({
  "duration": 30700,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;57",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A 10 K J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A 10 K J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5920785,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 8548844,
  "status": "passed"
});
formatter.before({
  "duration": 24020,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;58",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 A K J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 A K J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6225342,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5748491,
  "status": "passed"
});
formatter.before({
  "duration": 36218,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;59",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 A J K Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 A J K Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7158977,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5539421,
  "status": "passed"
});
formatter.before({
  "duration": 32182,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;60",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A 10 J K Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A 10 J K Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7732332,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 6294439,
  "status": "passed"
});
formatter.before({
  "duration": 22941,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;61",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J 10 A K Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J 10 A K Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5884797,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5464247,
  "status": "passed"
});
formatter.before({
  "duration": 29232,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;62",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 J A K Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 J A K Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8884887,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5726398,
  "status": "passed"
});
formatter.before({
  "duration": 25102,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;63",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A J 10 K Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A J 10 K Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6358148,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 6001342,
  "status": "passed"
});
formatter.before({
  "duration": 22232,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;64",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J A 10 K Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J A 10 K Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6388812,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5278685,
  "status": "passed"
});
formatter.before({
  "duration": 27889,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;65",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J K 10 A Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J K 10 A Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7581545,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5582208,
  "status": "passed"
});
formatter.before({
  "duration": 24259,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;66",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K J 10 A Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K J 10 A Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6123812,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5663282,
  "status": "passed"
});
formatter.before({
  "duration": 21671,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;67",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 J K A Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 J K A Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 9596791,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5663403,
  "status": "passed"
});
formatter.before({
  "duration": 20948,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;68",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J 10 K A Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J 10 K A Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6778520,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 7324221,
  "status": "passed"
});
formatter.before({
  "duration": 24635,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;69",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K 10 J A Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K 10 J A Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5994014,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 6964834,
  "status": "passed"
});
formatter.before({
  "duration": 28954,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;70",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 K J A Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 K J A Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6124029,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 10424201,
  "status": "passed"
});
formatter.before({
  "duration": 34287,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;71",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A K J 10 Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A K J 10 Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4806790,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 6034092,
  "status": "passed"
});
formatter.before({
  "duration": 21512,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;72",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K A J 10 Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K A J 10 Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4822725,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3629064,
  "status": "passed"
});
formatter.before({
  "duration": 22095,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;73",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J A K 10 Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J A K 10 Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5146567,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5297217,
  "status": "passed"
});
formatter.before({
  "duration": 23230,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;74",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A J K 10 Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A J K 10 Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4823919,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3280035,
  "status": "passed"
});
formatter.before({
  "duration": 29948,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;75",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K J A 10 Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K J A 10 Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4753787,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3469743,
  "status": "passed"
});
formatter.before({
  "duration": 22293,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;76",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J K A 10 Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J K A 10 Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4465533,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3238646,
  "status": "passed"
});
formatter.before({
  "duration": 24709,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;77",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q K A 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q K A 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4552747,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3226589,
  "status": "passed"
});
formatter.before({
  "duration": 22141,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;78",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K Q A 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K Q A 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5667610,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3661300,
  "status": "passed"
});
formatter.before({
  "duration": 22944,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;79",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A Q K 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A Q K 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4910733,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3896945,
  "status": "passed"
});
formatter.before({
  "duration": 29974,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;80",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q A K 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q A K 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5153940,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4764836,
  "status": "passed"
});
formatter.before({
  "duration": 22220,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;81",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K A Q 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K A Q 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4553633,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3409929,
  "status": "passed"
});
formatter.before({
  "duration": 29295,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;82",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A K Q 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A K Q 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6824192,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3480903,
  "status": "passed"
});
formatter.before({
  "duration": 25351,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;83",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A K 10 Q J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A K 10 Q J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6037002,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4397245,
  "status": "passed"
});
formatter.before({
  "duration": 28080,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;84",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K A 10 Q J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K A 10 Q J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4816751,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 7198384,
  "status": "passed"
});
formatter.before({
  "duration": 27429,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;85",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 A K Q J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 A K Q J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4757326,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3827488,
  "status": "passed"
});
formatter.before({
  "duration": 21664,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;86",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A 10 K Q J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A 10 K Q J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5019894,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5392550,
  "status": "passed"
});
formatter.before({
  "duration": 20399,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;87",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K 10 A Q J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K 10 A Q J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4782958,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3406917,
  "status": "passed"
});
formatter.before({
  "duration": 26484,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;88",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 K A Q J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 K A Q J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4820123,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3683809,
  "status": "passed"
});
formatter.before({
  "duration": 23714,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;89",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 Q A K J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 Q A K J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4619258,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3858241,
  "status": "passed"
});
formatter.before({
  "duration": 20818,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;90",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q 10 A K J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q 10 A K J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4734790,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3760385,
  "status": "passed"
});
formatter.before({
  "duration": 29000,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;91",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A 10 Q K J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A 10 Q K J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7474648,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3991924,
  "status": "passed"
});
formatter.before({
  "duration": 26193,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;92",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 A Q K J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 A Q K J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5487751,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4431675,
  "status": "passed"
});
formatter.before({
  "duration": 21734,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;93",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q A 10 K J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q A 10 K J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6221094,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3831029,
  "status": "passed"
});
formatter.before({
  "duration": 20577,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;94",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A Q 10 K J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A Q 10 K J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4723652,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4270086,
  "status": "passed"
});
formatter.before({
  "duration": 21488,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;95",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K Q 10 A J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K Q 10 A J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5177317,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4067454,
  "status": "passed"
});
formatter.before({
  "duration": 20485,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;96",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q K 10 A J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q K 10 A J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4701506,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3966991,
  "status": "passed"
});
formatter.before({
  "duration": 20903,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;97",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 K Q A J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 K Q A J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4845993,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5858677,
  "status": "passed"
});
formatter.before({
  "duration": 20269,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;98",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K 10 Q A J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K 10 Q A J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5021435,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3967572,
  "status": "passed"
});
formatter.before({
  "duration": 25087,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;99",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q 10 K A J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q 10 K A J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5214591,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4785669,
  "status": "passed"
});
formatter.before({
  "duration": 32470,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;100",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"10 Q K A J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 Q K A J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4603783,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3529129,
  "status": "passed"
});
formatter.before({
  "duration": 21034,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;101",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J Q K A 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J Q K A 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5532997,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 9963545,
  "status": "passed"
});
formatter.before({
  "duration": 22708,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;102",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q J K A 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q J K A 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4446463,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3220141,
  "status": "passed"
});
formatter.before({
  "duration": 27692,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;103",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K J Q A 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K J Q A 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4628399,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 5781961,
  "status": "passed"
});
formatter.before({
  "duration": 20968,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;104",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J K Q A 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J K Q A 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4668115,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3653468,
  "status": "passed"
});
formatter.before({
  "duration": 22669,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;105",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q K J A 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q K J A 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5006969,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4728089,
  "status": "passed"
});
formatter.before({
  "duration": 20513,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;106",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K Q J A 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K Q J A 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4704989,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3250654,
  "status": "passed"
});
formatter.before({
  "duration": 20065,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;107",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K Q A J 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K Q A J 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4744926,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4246598,
  "status": "passed"
});
formatter.before({
  "duration": 21642,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;108",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q K A J 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q K A J 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4869021,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3372885,
  "status": "passed"
});
formatter.before({
  "duration": 20508,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;109",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A K Q J 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A K Q J 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4535458,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3244720,
  "status": "passed"
});
formatter.before({
  "duration": 19813,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;110",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K A Q J 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K A Q J 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7560702,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3593561,
  "status": "passed"
});
formatter.before({
  "duration": 21543,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;111",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q A K J 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q A K J 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4781024,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3590828,
  "status": "passed"
});
formatter.before({
  "duration": 23012,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;112",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A Q K J 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A Q K J 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4855405,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4636306,
  "status": "passed"
});
formatter.before({
  "duration": 21321,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;113",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A J K Q 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A J K Q 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4607328,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3241126,
  "status": "passed"
});
formatter.before({
  "duration": 35945,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;114",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J A K Q 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J A K Q 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4853304,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3297358,
  "status": "passed"
});
formatter.before({
  "duration": 35692,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;115",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K A J Q 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K A J Q 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4465706,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3265841,
  "status": "passed"
});
formatter.before({
  "duration": 24051,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;116",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A K J Q 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A K J Q 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4504191,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3392094,
  "status": "passed"
});
formatter.before({
  "duration": 19195,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;117",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J K A Q 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J K A Q 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8575924,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3536899,
  "status": "passed"
});
formatter.before({
  "duration": 21498,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;118",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"K J A Q 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "K J A Q 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4756093,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3521618,
  "status": "passed"
});
formatter.before({
  "duration": 26903,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;119",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q J A K 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q J A K 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5068186,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 4762652,
  "status": "passed"
});
formatter.before({
  "duration": 19444,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;120",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J Q A K 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J Q A K 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4528776,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3327939,
  "status": "passed"
});
formatter.before({
  "duration": 18625,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;121",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A Q J K 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A Q J K 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5405514,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3387598,
  "status": "passed"
});
formatter.before({
  "duration": 27825,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;122",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"Q A J K 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "Q A J K 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4521869,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3642944,
  "status": "passed"
});
formatter.before({
  "duration": 40687,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;123",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"J A Q K 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "J A Q K 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4785337,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3509601,
  "status": "passed"
});
formatter.before({
  "duration": 50408,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-royal-flush-can-be-determined-given-any-order;;124",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "A set of cards with \"S S S S S\" and \"A J Q K 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the hand should be a royal flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A J Q K 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7949374,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 3381943,
  "status": "passed"
});
formatter.before({
  "duration": 27378,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "10 J Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4791470,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4559603,
  "status": "passed"
});
formatter.before({
  "duration": 21764,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"9 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "9 10 J Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6485569,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3939124,
  "status": "passed"
});
formatter.before({
  "duration": 21728,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"8 9 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "8 9 10 J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5055568,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 5813398,
  "status": "passed"
});
formatter.before({
  "duration": 43983,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"7 8 9 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "7 8 9 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4521841,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2993637,
  "status": "passed"
});
formatter.before({
  "duration": 21636,
  "status": "passed"
});
formatter.scenario({
  "line": 153,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"6 7 8 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "6 7 8 9 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3847737,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2701482,
  "status": "passed"
});
formatter.before({
  "duration": 18479,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"5 6 7 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "5 6 7 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4137916,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2343875,
  "status": "passed"
});
formatter.before({
  "duration": 19420,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"4 5 6 7 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "4 5 6 7 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3890360,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2212623,
  "status": "passed"
});
formatter.before({
  "duration": 21438,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "3 4 5 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3670103,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2408481,
  "status": "passed"
});
formatter.before({
  "duration": 33633,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"2 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "2 3 4 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3916295,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2489895,
  "status": "passed"
});
formatter.before({
  "duration": 28794,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"S S S S S\" and \"A 2 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "A 2 3 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6063450,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 28329403,
  "status": "passed"
});
formatter.before({
  "duration": 21835,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "10 J Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5368581,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 13163741,
  "status": "passed"
});
formatter.before({
  "duration": 23347,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"9 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "9 10 J Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6585198,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4459475,
  "status": "passed"
});
formatter.before({
  "duration": 24729,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"8 9 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "8 9 10 J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7017293,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4385528,
  "status": "passed"
});
formatter.before({
  "duration": 27988,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"7 8 9 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "7 8 9 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7304269,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3773162,
  "status": "passed"
});
formatter.before({
  "duration": 22815,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"6 7 8 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "6 7 8 9 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4963888,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3856544,
  "status": "passed"
});
formatter.before({
  "duration": 21286,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"5 6 7 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "5 6 7 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5586164,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 7228005,
  "status": "passed"
});
formatter.before({
  "duration": 27320,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"4 5 6 7 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "4 5 6 7 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5056420,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4286769,
  "status": "passed"
});
formatter.before({
  "duration": 20486,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "3 4 5 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4930541,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 5059249,
  "status": "passed"
});
formatter.before({
  "duration": 19809,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"2 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "2 3 4 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4044741,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3836041,
  "status": "passed"
});
formatter.before({
  "duration": 20983,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"D D D D D\" and \"A 2 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "A 2 3 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5676631,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 48370117,
  "status": "passed"
});
formatter.before({
  "duration": 29745,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "10 J Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8669216,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 5943997,
  "status": "passed"
});
formatter.before({
  "duration": 159187,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"9 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "9 10 J Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6713260,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3887540,
  "status": "passed"
});
formatter.before({
  "duration": 24858,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"8 9 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "8 9 10 J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7503374,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4392645,
  "status": "passed"
});
formatter.before({
  "duration": 41274,
  "status": "passed"
});
formatter.scenario({
  "line": 172,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"7 8 9 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "7 8 9 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6260343,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 5173912,
  "status": "passed"
});
formatter.before({
  "duration": 30815,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"6 7 8 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "6 7 8 9 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6853808,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3611883,
  "status": "passed"
});
formatter.before({
  "duration": 25487,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"5 6 7 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "5 6 7 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7755681,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 5911953,
  "status": "passed"
});
formatter.before({
  "duration": 28099,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"4 5 6 7 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "4 5 6 7 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6294207,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4291180,
  "status": "passed"
});
formatter.before({
  "duration": 30947,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "3 4 5 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5082770,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4728500,
  "status": "passed"
});
formatter.before({
  "duration": 22474,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"2 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "2 3 4 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8339079,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3852697,
  "status": "passed"
});
formatter.before({
  "duration": 21973,
  "status": "passed"
});
formatter.scenario({
  "line": 178,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"H H H H H\" and \"A 2 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "A 2 3 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6801253,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 9653873,
  "status": "passed"
});
formatter.before({
  "duration": 22781,
  "status": "passed"
});
formatter.scenario({
  "line": 179,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "10 J Q K A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7384731,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 6154767,
  "status": "passed"
});
formatter.before({
  "duration": 52734,
  "status": "passed"
});
formatter.scenario({
  "line": 180,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"9 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 10 J Q K",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5922603,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4366143,
  "status": "passed"
});
formatter.before({
  "duration": 29080,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"8 9 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 9 10 J Q",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6740906,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 6972858,
  "status": "passed"
});
formatter.before({
  "duration": 31773,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"7 8 9 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "7 8 9 10 J",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5591133,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 5388525,
  "status": "passed"
});
formatter.before({
  "duration": 40073,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"6 7 8 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 7 8 9 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5886184,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4039756,
  "status": "passed"
});
formatter.before({
  "duration": 27900,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"5 6 7 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "5 6 7 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8107801,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 7502497,
  "status": "passed"
});
formatter.before({
  "duration": 78010,
  "status": "passed"
});
formatter.scenario({
  "line": 185,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"4 5 6 7 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 5 6 7 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5728153,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3888785,
  "status": "passed"
});
formatter.before({
  "duration": 21324,
  "status": "passed"
});
formatter.scenario({
  "line": 186,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "3 4 5 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5139620,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4343753,
  "status": "passed"
});
formatter.before({
  "duration": 21249,
  "status": "passed"
});
formatter.scenario({
  "line": 187,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"2 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 3 4 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8100097,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3990147,
  "status": "passed"
});
formatter.before({
  "duration": 41163,
  "status": "passed"
});
formatter.scenario({
  "line": 188,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-flush-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "A set of cards with \"C C C C C\" and \"A 2 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "the hand should be a straight flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "A 2 3 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5333788,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 8902626,
  "status": "passed"
});
formatter.before({
  "duration": 22172,
  "status": "passed"
});
formatter.scenario({
  "line": 197,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-four-of-a-kind-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 192,
  "name": "A set of cards with \"C H D C S\" and \"5 5 5 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "the hand should be a four of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H D C S",
      "offset": 21
    },
    {
      "val": "5 5 5 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5891617,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 2004454,
  "status": "passed"
});
formatter.before({
  "duration": 18724,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-four-of-a-kind-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 192,
  "name": "A set of cards with \"C H S D S\" and \"2 2 A 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "the hand should be a four of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S D S",
      "offset": 21
    },
    {
      "val": "2 2 A 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6981240,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 3283383,
  "status": "passed"
});
formatter.before({
  "duration": 30739,
  "status": "passed"
});
formatter.scenario({
  "line": 199,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-four-of-a-kind-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 192,
  "name": "A set of cards with \"C H S D S\" and \"A 2 2 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "the hand should be a four of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S D S",
      "offset": 21
    },
    {
      "val": "A 2 2 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4223634,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1491832,
  "status": "passed"
});
formatter.before({
  "duration": 19994,
  "status": "passed"
});
formatter.scenario({
  "line": 200,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-four-of-a-kind-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 192,
  "name": "A set of cards with \"C H S D S\" and \"2 A 2 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "the hand should be a four of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S D S",
      "offset": 21
    },
    {
      "val": "2 A 2 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2640803,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1488341,
  "status": "passed"
});
formatter.before({
  "duration": 19713,
  "status": "passed"
});
formatter.scenario({
  "line": 201,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-four-of-a-kind-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 192,
  "name": "A set of cards with \"C H S D S\" and \"2 2 2 A 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "the hand should be a four of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S D S",
      "offset": 21
    },
    {
      "val": "2 2 2 A 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5641408,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1309284,
  "status": "passed"
});
formatter.before({
  "duration": 21199,
  "status": "passed"
});
formatter.scenario({
  "line": 202,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-four-of-a-kind-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 192,
  "name": "A set of cards with \"C H S D S\" and \"2 2 2 2 A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "the hand should be a four of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S D S",
      "offset": 21
    },
    {
      "val": "2 2 2 2 A",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2627121,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 666137,
  "status": "passed"
});
formatter.before({
  "duration": 21026,
  "status": "passed"
});
formatter.scenario({
  "line": 210,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"2 2 4 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 2 4 4 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2736792,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 5842622,
  "status": "passed"
});
formatter.before({
  "duration": 33096,
  "status": "passed"
});
formatter.scenario({
  "line": 211,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"2 4 2 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 4 2 4 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3618213,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 3380364,
  "status": "passed"
});
formatter.before({
  "duration": 21799,
  "status": "passed"
});
formatter.scenario({
  "line": 212,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"2 4 4 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 4 4 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4177528,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 2766073,
  "status": "passed"
});
formatter.before({
  "duration": 51670,
  "status": "passed"
});
formatter.scenario({
  "line": 213,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"2 4 4 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 4 4 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3020661,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 3090842,
  "status": "passed"
});
formatter.before({
  "duration": 92253,
  "status": "passed"
});
formatter.scenario({
  "line": 214,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"4 2 2 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 2 2 4 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2764450,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 1579359,
  "status": "passed"
});
formatter.before({
  "duration": 18312,
  "status": "passed"
});
formatter.scenario({
  "line": 215,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"4 2 4 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 2 4 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2588599,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 850803,
  "status": "passed"
});
formatter.before({
  "duration": 17285,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"4 2 4 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 2 4 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2367151,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 827730,
  "status": "passed"
});
formatter.before({
  "duration": 26531,
  "status": "passed"
});
formatter.scenario({
  "line": 217,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"4 4 2 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 4 2 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2652131,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 963817,
  "status": "passed"
});
formatter.before({
  "duration": 19967,
  "status": "passed"
});
formatter.scenario({
  "line": 218,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"4 4 2 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 4 2 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2589774,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 823683,
  "status": "passed"
});
formatter.before({
  "duration": 17468,
  "status": "passed"
});
formatter.scenario({
  "line": 219,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-full-house-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 205,
  "name": "A set of cards with \"C S H D C\" and \"4 4 4 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the hand should be a full house in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 4 4 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2421432,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 3284343,
  "status": "passed"
});
formatter.before({
  "duration": 26541,
  "status": "passed"
});
formatter.scenario({
  "line": 227,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"S S S S S\" and \"2 2 4 5 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S S S S S",
      "offset": 21
    },
    {
      "val": "2 2 4 5 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3564731,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 3597387,
  "status": "passed"
});
formatter.before({
  "duration": 28838,
  "status": "passed"
});
formatter.scenario({
  "line": 228,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"D D D D D\" and \"2 2 4 5 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "D D D D D",
      "offset": 21
    },
    {
      "val": "2 2 4 5 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3055091,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1563572,
  "status": "passed"
});
formatter.before({
  "duration": 19856,
  "status": "passed"
});
formatter.scenario({
  "line": 229,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"H H H H H\" and \"2 2 4 5 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "H H H H H",
      "offset": 21
    },
    {
      "val": "2 2 4 5 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4408323,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1569101,
  "status": "passed"
});
formatter.before({
  "duration": 21445,
  "status": "passed"
});
formatter.scenario({
  "line": 230,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 4 6 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 4 6 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4096217,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1666354,
  "status": "passed"
});
formatter.before({
  "duration": 19016,
  "status": "passed"
});
formatter.scenario({
  "line": 231,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 4 6 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 4 6 9 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2872925,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1177816,
  "status": "passed"
});
formatter.before({
  "duration": 18836,
  "status": "passed"
});
formatter.scenario({
  "line": 232,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 4 8 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 4 8 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3487614,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 847138,
  "status": "passed"
});
formatter.before({
  "duration": 27981,
  "status": "passed"
});
formatter.scenario({
  "line": 233,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 4 8 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 4 8 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3785062,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 699163,
  "status": "passed"
});
formatter.before({
  "duration": 19335,
  "status": "passed"
});
formatter.scenario({
  "line": 234,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 4 9 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 4 9 6 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2840335,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 460351,
  "status": "passed"
});
formatter.before({
  "duration": 19332,
  "status": "passed"
});
formatter.scenario({
  "line": 235,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 4 9 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 4 9 8 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3209182,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 552382,
  "status": "passed"
});
formatter.before({
  "duration": 27705,
  "status": "passed"
});
formatter.scenario({
  "line": 236,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 6 4 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 6 4 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2969981,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 513936,
  "status": "passed"
});
formatter.before({
  "duration": 20023,
  "status": "passed"
});
formatter.scenario({
  "line": 237,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 6 4 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 6 4 9 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4295249,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 510708,
  "status": "passed"
});
formatter.before({
  "duration": 19676,
  "status": "passed"
});
formatter.scenario({
  "line": 238,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 6 8 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 6 8 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6074947,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 357874,
  "status": "passed"
});
formatter.before({
  "duration": 20576,
  "status": "passed"
});
formatter.scenario({
  "line": 239,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 6 8 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 6 8 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3053911,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 366503,
  "status": "passed"
});
formatter.before({
  "duration": 21521,
  "status": "passed"
});
formatter.scenario({
  "line": 240,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 6 9 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 6 9 4 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3070111,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 374244,
  "status": "passed"
});
formatter.before({
  "duration": 19391,
  "status": "passed"
});
formatter.scenario({
  "line": 241,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 6 9 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 6 9 8 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3016005,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 349142,
  "status": "passed"
});
formatter.before({
  "duration": 17360,
  "status": "passed"
});
formatter.scenario({
  "line": 242,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 8 4 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 8 4 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3114247,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 585966,
  "status": "passed"
});
formatter.before({
  "duration": 17637,
  "status": "passed"
});
formatter.scenario({
  "line": 243,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 8 4 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 8 4 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4137939,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 217886,
  "status": "passed"
});
formatter.before({
  "duration": 26306,
  "status": "passed"
});
formatter.scenario({
  "line": 244,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 8 6 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 8 6 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2829235,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 212035,
  "status": "passed"
});
formatter.before({
  "duration": 18793,
  "status": "passed"
});
formatter.scenario({
  "line": 245,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 8 6 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 8 6 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2838070,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 257539,
  "status": "passed"
});
formatter.before({
  "duration": 38063,
  "status": "passed"
});
formatter.scenario({
  "line": 246,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 8 9 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 8 9 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2989710,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1415666,
  "status": "passed"
});
formatter.before({
  "duration": 47492,
  "status": "passed"
});
formatter.scenario({
  "line": 247,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 8 9 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 8 9 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4151369,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 546761,
  "status": "passed"
});
formatter.before({
  "duration": 28386,
  "status": "passed"
});
formatter.scenario({
  "line": 248,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 9 4 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 9 4 6 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3405633,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221209,
  "status": "passed"
});
formatter.before({
  "duration": 18080,
  "status": "passed"
});
formatter.scenario({
  "line": 249,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 9 4 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 9 4 8 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2871161,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 262275,
  "status": "passed"
});
formatter.before({
  "duration": 19283,
  "status": "passed"
});
formatter.scenario({
  "line": 250,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 9 6 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 9 6 4 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3002963,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 384113,
  "status": "passed"
});
formatter.before({
  "duration": 34791,
  "status": "passed"
});
formatter.scenario({
  "line": 251,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 9 6 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 9 6 8 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2847517,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 207568,
  "status": "passed"
});
formatter.before({
  "duration": 16708,
  "status": "passed"
});
formatter.scenario({
  "line": 252,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 9 8 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 9 8 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2938246,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 366653,
  "status": "passed"
});
formatter.before({
  "duration": 20008,
  "status": "passed"
});
formatter.scenario({
  "line": 253,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"2 9 8 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "2 9 8 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6028419,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 329876,
  "status": "passed"
});
formatter.before({
  "duration": 24794,
  "status": "passed"
});
formatter.scenario({
  "line": 254,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 2 6 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 2 6 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3177847,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 269314,
  "status": "passed"
});
formatter.before({
  "duration": 21083,
  "status": "passed"
});
formatter.scenario({
  "line": 255,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 2 6 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 2 6 9 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3042186,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 216277,
  "status": "passed"
});
formatter.before({
  "duration": 19023,
  "status": "passed"
});
formatter.scenario({
  "line": 256,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 2 8 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 2 8 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3384220,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 237852,
  "status": "passed"
});
formatter.before({
  "duration": 19216,
  "status": "passed"
});
formatter.scenario({
  "line": 257,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 2 8 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 2 8 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3449261,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 531203,
  "status": "passed"
});
formatter.before({
  "duration": 30252,
  "status": "passed"
});
formatter.scenario({
  "line": 258,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 2 9 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 2 9 6 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5650028,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 260926,
  "status": "passed"
});
formatter.before({
  "duration": 20049,
  "status": "passed"
});
formatter.scenario({
  "line": 259,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 2 9 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 2 9 8 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2930268,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 228971,
  "status": "passed"
});
formatter.before({
  "duration": 27614,
  "status": "passed"
});
formatter.scenario({
  "line": 260,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 6 2 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 6 2 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2835239,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 215958,
  "status": "passed"
});
formatter.before({
  "duration": 20071,
  "status": "passed"
});
formatter.scenario({
  "line": 261,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 6 2 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 6 2 9 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3941832,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 495292,
  "status": "passed"
});
formatter.before({
  "duration": 23541,
  "status": "passed"
});
formatter.scenario({
  "line": 262,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 6 8 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 6 8 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3761579,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 339455,
  "status": "passed"
});
formatter.before({
  "duration": 31941,
  "status": "passed"
});
formatter.scenario({
  "line": 263,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 6 8 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 6 8 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2840415,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 202136,
  "status": "passed"
});
formatter.before({
  "duration": 19246,
  "status": "passed"
});
formatter.scenario({
  "line": 264,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 6 9 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 6 9 2 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3051304,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 213115,
  "status": "passed"
});
formatter.before({
  "duration": 20575,
  "status": "passed"
});
formatter.scenario({
  "line": 265,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 6 9 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 6 9 8 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3253332,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 388789,
  "status": "passed"
});
formatter.before({
  "duration": 19241,
  "status": "passed"
});
formatter.scenario({
  "line": 266,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 8 2 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 8 2 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2856652,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 205277,
  "status": "passed"
});
formatter.before({
  "duration": 18448,
  "status": "passed"
});
formatter.scenario({
  "line": 267,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;42",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 8 2 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 8 2 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3316746,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 307610,
  "status": "passed"
});
formatter.before({
  "duration": 24220,
  "status": "passed"
});
formatter.scenario({
  "line": 268,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;43",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 8 6 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 8 6 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3908069,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 347409,
  "status": "passed"
});
formatter.before({
  "duration": 30262,
  "status": "passed"
});
formatter.scenario({
  "line": 269,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;44",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 8 6 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 8 6 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3321429,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221194,
  "status": "passed"
});
formatter.before({
  "duration": 20957,
  "status": "passed"
});
formatter.scenario({
  "line": 270,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;45",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 8 9 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 8 9 2 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4372769,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 220453,
  "status": "passed"
});
formatter.before({
  "duration": 29953,
  "status": "passed"
});
formatter.scenario({
  "line": 271,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;46",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 8 9 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 8 9 6 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3541915,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 235274,
  "status": "passed"
});
formatter.before({
  "duration": 22695,
  "status": "passed"
});
formatter.scenario({
  "line": 272,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;47",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 9 2 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 9 2 6 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3255288,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 239299,
  "status": "passed"
});
formatter.before({
  "duration": 20165,
  "status": "passed"
});
formatter.scenario({
  "line": 273,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;48",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 9 2 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 9 2 8 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3939097,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 310805,
  "status": "passed"
});
formatter.before({
  "duration": 24223,
  "status": "passed"
});
formatter.scenario({
  "line": 274,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;49",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 9 6 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 9 6 2 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3406644,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1062541,
  "status": "passed"
});
formatter.before({
  "duration": 30646,
  "status": "passed"
});
formatter.scenario({
  "line": 275,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;50",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 9 6 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 9 6 8 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4283050,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 463385,
  "status": "passed"
});
formatter.before({
  "duration": 131733,
  "status": "passed"
});
formatter.scenario({
  "line": 276,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;51",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 9 8 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 9 8 2 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3736370,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 341377,
  "status": "passed"
});
formatter.before({
  "duration": 22543,
  "status": "passed"
});
formatter.scenario({
  "line": 277,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;52",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"4 9 8 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "4 9 8 6 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3960415,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 381954,
  "status": "passed"
});
formatter.before({
  "duration": 26698,
  "status": "passed"
});
formatter.scenario({
  "line": 278,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;53",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 2 4 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 2 4 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3394971,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 265124,
  "status": "passed"
});
formatter.before({
  "duration": 23734,
  "status": "passed"
});
formatter.scenario({
  "line": 279,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;54",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 2 4 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 2 4 9 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3767014,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 249803,
  "status": "passed"
});
formatter.before({
  "duration": 21236,
  "status": "passed"
});
formatter.scenario({
  "line": 280,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;55",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 2 8 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 2 8 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6876741,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 330042,
  "status": "passed"
});
formatter.before({
  "duration": 30618,
  "status": "passed"
});
formatter.scenario({
  "line": 281,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;56",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 2 8 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 2 8 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4339898,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 329666,
  "status": "passed"
});
formatter.before({
  "duration": 26508,
  "status": "passed"
});
formatter.scenario({
  "line": 282,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;57",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 2 9 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 2 9 4 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4337996,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 397777,
  "status": "passed"
});
formatter.before({
  "duration": 30919,
  "status": "passed"
});
formatter.scenario({
  "line": 283,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;58",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 2 9 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 2 9 8 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4872469,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 339343,
  "status": "passed"
});
formatter.before({
  "duration": 28824,
  "status": "passed"
});
formatter.scenario({
  "line": 284,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;59",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 4 2 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 4 2 8 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5274046,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 380146,
  "status": "passed"
});
formatter.before({
  "duration": 29350,
  "status": "passed"
});
formatter.scenario({
  "line": 285,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;60",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 4 2 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 4 2 9 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7021486,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 428169,
  "status": "passed"
});
formatter.before({
  "duration": 31271,
  "status": "passed"
});
formatter.scenario({
  "line": 286,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;61",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 4 8 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 4 8 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5015087,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 639807,
  "status": "passed"
});
formatter.before({
  "duration": 28411,
  "status": "passed"
});
formatter.scenario({
  "line": 287,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;62",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 4 8 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 4 8 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5040732,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 312294,
  "status": "passed"
});
formatter.before({
  "duration": 25007,
  "status": "passed"
});
formatter.scenario({
  "line": 288,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;63",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 4 9 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 4 9 2 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5794818,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 726092,
  "status": "passed"
});
formatter.before({
  "duration": 131732,
  "status": "passed"
});
formatter.scenario({
  "line": 289,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;64",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 4 9 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 4 9 8 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5125733,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 311402,
  "status": "passed"
});
formatter.before({
  "duration": 31955,
  "status": "passed"
});
formatter.scenario({
  "line": 290,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;65",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 8 2 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 8 2 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7652238,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 385724,
  "status": "passed"
});
formatter.before({
  "duration": 42720,
  "status": "passed"
});
formatter.scenario({
  "line": 291,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;66",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 8 2 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 8 2 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5378834,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 334025,
  "status": "passed"
});
formatter.before({
  "duration": 30698,
  "status": "passed"
});
formatter.scenario({
  "line": 292,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;67",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 8 4 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 8 4 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5219168,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 336261,
  "status": "passed"
});
formatter.before({
  "duration": 48293,
  "status": "passed"
});
formatter.scenario({
  "line": 293,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;68",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 8 4 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 8 4 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5102689,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 301028,
  "status": "passed"
});
formatter.before({
  "duration": 60953,
  "status": "passed"
});
formatter.scenario({
  "line": 294,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;69",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 8 9 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 8 9 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6183744,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 216891,
  "status": "passed"
});
formatter.before({
  "duration": 28444,
  "status": "passed"
});
formatter.scenario({
  "line": 295,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;70",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 8 9 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 8 9 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3965407,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221593,
  "status": "passed"
});
formatter.before({
  "duration": 21041,
  "status": "passed"
});
formatter.scenario({
  "line": 296,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;71",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 9 2 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 9 2 4 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4044334,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 216761,
  "status": "passed"
});
formatter.before({
  "duration": 19697,
  "status": "passed"
});
formatter.scenario({
  "line": 297,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;72",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 9 2 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 9 2 8 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4488815,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 676736,
  "status": "passed"
});
formatter.before({
  "duration": 46341,
  "status": "passed"
});
formatter.scenario({
  "line": 298,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;73",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 9 4 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 9 4 2 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4631235,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 387515,
  "status": "passed"
});
formatter.before({
  "duration": 23522,
  "status": "passed"
});
formatter.scenario({
  "line": 299,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;74",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 9 4 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 9 4 8 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6764587,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 282262,
  "status": "passed"
});
formatter.before({
  "duration": 25719,
  "status": "passed"
});
formatter.scenario({
  "line": 300,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;75",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 9 8 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 9 8 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5134749,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 299882,
  "status": "passed"
});
formatter.before({
  "duration": 23826,
  "status": "passed"
});
formatter.scenario({
  "line": 301,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;76",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"6 9 8 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "6 9 8 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4189123,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221832,
  "status": "passed"
});
formatter.before({
  "duration": 21087,
  "status": "passed"
});
formatter.scenario({
  "line": 302,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;77",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 2 4 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 2 4 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4082872,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 215338,
  "status": "passed"
});
formatter.before({
  "duration": 27470,
  "status": "passed"
});
formatter.scenario({
  "line": 303,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;78",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 2 4 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 2 4 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3510507,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 218375,
  "status": "passed"
});
formatter.before({
  "duration": 19894,
  "status": "passed"
});
formatter.scenario({
  "line": 304,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;79",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 2 6 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 2 6 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3975965,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 319045,
  "status": "passed"
});
formatter.before({
  "duration": 28040,
  "status": "passed"
});
formatter.scenario({
  "line": 305,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;80",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 2 6 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 2 6 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4079314,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 341227,
  "status": "passed"
});
formatter.before({
  "duration": 28345,
  "status": "passed"
});
formatter.scenario({
  "line": 306,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;81",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 2 9 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 2 9 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4213497,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 444217,
  "status": "passed"
});
formatter.before({
  "duration": 47903,
  "status": "passed"
});
formatter.scenario({
  "line": 307,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;82",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 2 9 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 2 9 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3463550,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 290009,
  "status": "passed"
});
formatter.before({
  "duration": 27266,
  "status": "passed"
});
formatter.scenario({
  "line": 308,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;83",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 4 2 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 4 2 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3452003,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 217112,
  "status": "passed"
});
formatter.before({
  "duration": 57399,
  "status": "passed"
});
formatter.scenario({
  "line": 309,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;84",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 4 2 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 4 2 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3052688,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 248369,
  "status": "passed"
});
formatter.before({
  "duration": 18783,
  "status": "passed"
});
formatter.scenario({
  "line": 310,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;85",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 4 6 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 4 6 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3036594,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 209213,
  "status": "passed"
});
formatter.before({
  "duration": 17743,
  "status": "passed"
});
formatter.scenario({
  "line": 311,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;86",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 4 6 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 4 6 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3827607,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 314811,
  "status": "passed"
});
formatter.before({
  "duration": 19564,
  "status": "passed"
});
formatter.scenario({
  "line": 312,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;87",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 4 9 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 4 9 2 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7256142,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 271200,
  "status": "passed"
});
formatter.before({
  "duration": 20608,
  "status": "passed"
});
formatter.scenario({
  "line": 313,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;88",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 4 9 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 4 9 6 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3371057,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221700,
  "status": "passed"
});
formatter.before({
  "duration": 20474,
  "status": "passed"
});
formatter.scenario({
  "line": 314,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;89",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 6 2 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 6 2 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3239448,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 280330,
  "status": "passed"
});
formatter.before({
  "duration": 27488,
  "status": "passed"
});
formatter.scenario({
  "line": 315,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;90",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 6 2 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 6 2 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3556935,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 267866,
  "status": "passed"
});
formatter.before({
  "duration": 19748,
  "status": "passed"
});
formatter.scenario({
  "line": 316,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;91",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 6 4 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 6 4 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4319221,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 260251,
  "status": "passed"
});
formatter.before({
  "duration": 17561,
  "status": "passed"
});
formatter.scenario({
  "line": 317,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;92",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 6 4 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 6 4 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5272419,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 328898,
  "status": "passed"
});
formatter.before({
  "duration": 18536,
  "status": "passed"
});
formatter.scenario({
  "line": 318,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;93",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 6 9 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 6 9 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3243650,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 262299,
  "status": "passed"
});
formatter.before({
  "duration": 20691,
  "status": "passed"
});
formatter.scenario({
  "line": 319,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;94",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 6 9 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 6 9 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4853670,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 506083,
  "status": "passed"
});
formatter.before({
  "duration": 39504,
  "status": "passed"
});
formatter.scenario({
  "line": 320,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;95",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 9 2 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 9 2 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4066772,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 254718,
  "status": "passed"
});
formatter.before({
  "duration": 18663,
  "status": "passed"
});
formatter.scenario({
  "line": 321,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;96",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 9 2 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 9 2 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2933474,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 208942,
  "status": "passed"
});
formatter.before({
  "duration": 18408,
  "status": "passed"
});
formatter.scenario({
  "line": 322,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;97",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 9 4 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 9 4 2 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3364119,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 215076,
  "status": "passed"
});
formatter.before({
  "duration": 18691,
  "status": "passed"
});
formatter.scenario({
  "line": 323,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;98",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 9 4 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 9 4 6 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3101115,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 213031,
  "status": "passed"
});
formatter.before({
  "duration": 18481,
  "status": "passed"
});
formatter.scenario({
  "line": 324,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;99",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 9 6 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 9 6 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3340378,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 234677,
  "status": "passed"
});
formatter.before({
  "duration": 19239,
  "status": "passed"
});
formatter.scenario({
  "line": 325,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;100",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"8 9 6 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "8 9 6 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7376175,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 366597,
  "status": "passed"
});
formatter.before({
  "duration": 26463,
  "status": "passed"
});
formatter.scenario({
  "line": 326,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;101",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 2 4 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 2 4 6 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3833603,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221061,
  "status": "passed"
});
formatter.before({
  "duration": 20297,
  "status": "passed"
});
formatter.scenario({
  "line": 327,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;102",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 2 4 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 2 4 8 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3734728,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 342422,
  "status": "passed"
});
formatter.before({
  "duration": 25949,
  "status": "passed"
});
formatter.scenario({
  "line": 328,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;103",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 2 6 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 2 6 4 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5121673,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 223313,
  "status": "passed"
});
formatter.before({
  "duration": 21837,
  "status": "passed"
});
formatter.scenario({
  "line": 329,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;104",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 2 6 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 2 6 8 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3765646,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 300104,
  "status": "passed"
});
formatter.before({
  "duration": 24195,
  "status": "passed"
});
formatter.scenario({
  "line": 330,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;105",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 2 8 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 2 8 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4607321,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 319270,
  "status": "passed"
});
formatter.before({
  "duration": 24490,
  "status": "passed"
});
formatter.scenario({
  "line": 331,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;106",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 2 8 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 2 8 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5463703,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 580251,
  "status": "passed"
});
formatter.before({
  "duration": 36500,
  "status": "passed"
});
formatter.scenario({
  "line": 332,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;107",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 4 2 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 4 2 6 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5523069,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 226185,
  "status": "passed"
});
formatter.before({
  "duration": 20194,
  "status": "passed"
});
formatter.scenario({
  "line": 333,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;108",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 4 2 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 4 2 8 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3924124,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 299120,
  "status": "passed"
});
formatter.before({
  "duration": 21719,
  "status": "passed"
});
formatter.scenario({
  "line": 334,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;109",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 4 6 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 4 6 2 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3337630,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 214449,
  "status": "passed"
});
formatter.before({
  "duration": 24908,
  "status": "passed"
});
formatter.scenario({
  "line": 335,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;110",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 4 6 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 4 6 8 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3412221,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 224951,
  "status": "passed"
});
formatter.before({
  "duration": 22970,
  "status": "passed"
});
formatter.scenario({
  "line": 336,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;111",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 4 8 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 4 8 2 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3340372,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 244302,
  "status": "passed"
});
formatter.before({
  "duration": 23581,
  "status": "passed"
});
formatter.scenario({
  "line": 337,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;112",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 4 8 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 4 8 6 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6447988,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 226465,
  "status": "passed"
});
formatter.before({
  "duration": 20534,
  "status": "passed"
});
formatter.scenario({
  "line": 338,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;113",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 6 2 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 6 2 4 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4203640,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 346509,
  "status": "passed"
});
formatter.before({
  "duration": 36908,
  "status": "passed"
});
formatter.scenario({
  "line": 339,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;114",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 6 2 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 6 2 8 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3543842,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 224675,
  "status": "passed"
});
formatter.before({
  "duration": 22164,
  "status": "passed"
});
formatter.scenario({
  "line": 340,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;115",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 6 4 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 6 4 2 8",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4471338,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 321225,
  "status": "passed"
});
formatter.before({
  "duration": 25424,
  "status": "passed"
});
formatter.scenario({
  "line": 341,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;116",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 6 4 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 6 4 8 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3791449,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 225861,
  "status": "passed"
});
formatter.before({
  "duration": 20112,
  "status": "passed"
});
formatter.scenario({
  "line": 342,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;117",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 6 8 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 6 8 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5669772,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 269136,
  "status": "passed"
});
formatter.before({
  "duration": 26159,
  "status": "passed"
});
formatter.scenario({
  "line": 343,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;118",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 6 8 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 6 8 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3663982,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 232499,
  "status": "passed"
});
formatter.before({
  "duration": 48128,
  "status": "passed"
});
formatter.scenario({
  "line": 344,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;119",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 8 2 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 8 2 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4342668,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 623217,
  "status": "passed"
});
formatter.before({
  "duration": 38385,
  "status": "passed"
});
formatter.scenario({
  "line": 345,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;120",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 8 2 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 8 2 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3511613,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 217576,
  "status": "passed"
});
formatter.before({
  "duration": 20335,
  "status": "passed"
});
formatter.scenario({
  "line": 346,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;121",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 8 4 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 8 4 2 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3250973,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 560431,
  "status": "passed"
});
formatter.before({
  "duration": 22767,
  "status": "passed"
});
formatter.scenario({
  "line": 347,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;122",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 8 4 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 8 4 6 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3080746,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 220820,
  "status": "passed"
});
formatter.before({
  "duration": 17490,
  "status": "passed"
});
formatter.scenario({
  "line": 348,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;123",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 8 6 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 8 6 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3339563,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 223605,
  "status": "passed"
});
formatter.before({
  "duration": 18529,
  "status": "passed"
});
formatter.scenario({
  "line": 349,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-flush-can-be-determined-given-any-order;;124",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 222,
  "name": "A set of cards with \"C C C C C\" and \"9 8 6 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "the hand should be a flush in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C C C C",
      "offset": 21
    },
    {
      "val": "9 8 6 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6598346,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 301486,
  "status": "passed"
});
formatter.before({
  "duration": 21739,
  "status": "passed"
});
formatter.scenario({
  "line": 357,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 4 5 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3574782,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3586973,
  "status": "passed"
});
formatter.before({
  "duration": 20086,
  "status": "passed"
});
formatter.scenario({
  "line": 358,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 4 5 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 4 5 7 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4058777,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4887382,
  "status": "passed"
});
formatter.before({
  "duration": 19913,
  "status": "passed"
});
formatter.scenario({
  "line": 359,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 4 6 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 4 6 5 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3659112,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4606609,
  "status": "passed"
});
formatter.before({
  "duration": 23080,
  "status": "passed"
});
formatter.scenario({
  "line": 360,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 4 6 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 4 6 7 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3401377,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3220890,
  "status": "passed"
});
formatter.before({
  "duration": 41178,
  "status": "passed"
});
formatter.scenario({
  "line": 361,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 4 7 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 4 7 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5006610,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3349561,
  "status": "passed"
});
formatter.before({
  "duration": 18070,
  "status": "passed"
});
formatter.scenario({
  "line": 362,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 4 7 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 4 7 6 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3343846,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4695414,
  "status": "passed"
});
formatter.before({
  "duration": 17950,
  "status": "passed"
});
formatter.scenario({
  "line": 363,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 5 4 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 5 4 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3204552,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1827658,
  "status": "passed"
});
formatter.before({
  "duration": 17944,
  "status": "passed"
});
formatter.scenario({
  "line": 364,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 5 4 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 5 4 7 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3258479,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5133723,
  "status": "passed"
});
formatter.before({
  "duration": 23486,
  "status": "passed"
});
formatter.scenario({
  "line": 365,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 5 6 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 5 6 4 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3690101,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1908769,
  "status": "passed"
});
formatter.before({
  "duration": 20472,
  "status": "passed"
});
formatter.scenario({
  "line": 366,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 5 6 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 5 6 7 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3356386,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1722111,
  "status": "passed"
});
formatter.before({
  "duration": 35558,
  "status": "passed"
});
formatter.scenario({
  "line": 367,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 5 7 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 5 7 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3341722,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2743859,
  "status": "passed"
});
formatter.before({
  "duration": 20120,
  "status": "passed"
});
formatter.scenario({
  "line": 368,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 5 7 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 5 7 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4784585,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1648736,
  "status": "passed"
});
formatter.before({
  "duration": 19890,
  "status": "passed"
});
formatter.scenario({
  "line": 369,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 6 4 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 6 4 5 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3172794,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1651698,
  "status": "passed"
});
formatter.before({
  "duration": 18405,
  "status": "passed"
});
formatter.scenario({
  "line": 370,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 6 4 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 6 4 7 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4438026,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2557857,
  "status": "passed"
});
formatter.before({
  "duration": 30996,
  "status": "passed"
});
formatter.scenario({
  "line": 371,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 6 5 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 6 5 4 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3559334,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1822093,
  "status": "passed"
});
formatter.before({
  "duration": 21300,
  "status": "passed"
});
formatter.scenario({
  "line": 372,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 6 5 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 6 5 7 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3222447,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1964658,
  "status": "passed"
});
formatter.before({
  "duration": 26313,
  "status": "passed"
});
formatter.scenario({
  "line": 373,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 6 7 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 6 7 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3035319,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1567618,
  "status": "passed"
});
formatter.before({
  "duration": 17170,
  "status": "passed"
});
formatter.scenario({
  "line": 374,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 6 7 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 6 7 5 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3346242,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4625267,
  "status": "passed"
});
formatter.before({
  "duration": 47292,
  "status": "passed"
});
formatter.scenario({
  "line": 375,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 7 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 7 4 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3118935,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1684429,
  "status": "passed"
});
formatter.before({
  "duration": 18596,
  "status": "passed"
});
formatter.scenario({
  "line": 376,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 7 4 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 7 4 6 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3327043,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1694558,
  "status": "passed"
});
formatter.before({
  "duration": 23214,
  "status": "passed"
});
formatter.scenario({
  "line": 377,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 7 5 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 7 5 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3372477,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1860259,
  "status": "passed"
});
formatter.before({
  "duration": 19215,
  "status": "passed"
});
formatter.scenario({
  "line": 378,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 7 5 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 7 5 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4460912,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1604005,
  "status": "passed"
});
formatter.before({
  "duration": 28130,
  "status": "passed"
});
formatter.scenario({
  "line": 379,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 7 6 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 7 6 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3245212,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1526687,
  "status": "passed"
});
formatter.before({
  "duration": 17803,
  "status": "passed"
});
formatter.scenario({
  "line": 380,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"3 7 6 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "3 7 6 5 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3090349,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1819155,
  "status": "passed"
});
formatter.before({
  "duration": 59399,
  "status": "passed"
});
formatter.scenario({
  "line": 381,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 3 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 3 5 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3874251,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2224520,
  "status": "passed"
});
formatter.before({
  "duration": 23738,
  "status": "passed"
});
formatter.scenario({
  "line": 382,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 3 5 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 3 5 7 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3284138,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1832316,
  "status": "passed"
});
formatter.before({
  "duration": 19494,
  "status": "passed"
});
formatter.scenario({
  "line": 383,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 3 6 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 3 6 5 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3194989,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1577745,
  "status": "passed"
});
formatter.before({
  "duration": 18353,
  "status": "passed"
});
formatter.scenario({
  "line": 384,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 3 6 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 3 6 7 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3226335,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1764587,
  "status": "passed"
});
formatter.before({
  "duration": 24110,
  "status": "passed"
});
formatter.scenario({
  "line": 385,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 3 7 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 3 7 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6153849,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1680621,
  "status": "passed"
});
formatter.before({
  "duration": 41655,
  "status": "passed"
});
formatter.scenario({
  "line": 386,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 3 7 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 3 7 6 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3183686,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1733370,
  "status": "passed"
});
formatter.before({
  "duration": 19587,
  "status": "passed"
});
formatter.scenario({
  "line": 387,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 5 3 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 5 3 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3335489,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1672576,
  "status": "passed"
});
formatter.before({
  "duration": 17916,
  "status": "passed"
});
formatter.scenario({
  "line": 388,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 5 3 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 5 3 7 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3411020,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1752780,
  "status": "passed"
});
formatter.before({
  "duration": 18707,
  "status": "passed"
});
formatter.scenario({
  "line": 389,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 5 6 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 5 6 3 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4510638,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1569318,
  "status": "passed"
});
formatter.before({
  "duration": 27509,
  "status": "passed"
});
formatter.scenario({
  "line": 390,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 5 6 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 5 6 7 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3204271,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1810115,
  "status": "passed"
});
formatter.before({
  "duration": 17516,
  "status": "passed"
});
formatter.scenario({
  "line": 391,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 5 7 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 5 7 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3610609,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2487504,
  "status": "passed"
});
formatter.before({
  "duration": 20518,
  "status": "passed"
});
formatter.scenario({
  "line": 392,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 5 7 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 5 7 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4208319,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1576022,
  "status": "passed"
});
formatter.before({
  "duration": 16741,
  "status": "passed"
});
formatter.scenario({
  "line": 393,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 6 3 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 6 3 5 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3091757,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1590064,
  "status": "passed"
});
formatter.before({
  "duration": 18103,
  "status": "passed"
});
formatter.scenario({
  "line": 394,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 6 3 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 6 3 7 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3095123,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1677316,
  "status": "passed"
});
formatter.before({
  "duration": 17504,
  "status": "passed"
});
formatter.scenario({
  "line": 395,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 6 5 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 6 5 3 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3093469,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1660839,
  "status": "passed"
});
formatter.before({
  "duration": 33160,
  "status": "passed"
});
formatter.scenario({
  "line": 396,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 6 5 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 6 5 7 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6192273,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1617864,
  "status": "passed"
});
formatter.before({
  "duration": 32125,
  "status": "passed"
});
formatter.scenario({
  "line": 397,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;42",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 6 7 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 6 7 3 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3259209,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1886582,
  "status": "passed"
});
formatter.before({
  "duration": 19633,
  "status": "passed"
});
formatter.scenario({
  "line": 398,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;43",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 6 7 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 6 7 5 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3368516,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1838203,
  "status": "passed"
});
formatter.before({
  "duration": 18905,
  "status": "passed"
});
formatter.scenario({
  "line": 399,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;44",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 7 3 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 7 3 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3382778,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3060720,
  "status": "passed"
});
formatter.before({
  "duration": 20102,
  "status": "passed"
});
formatter.scenario({
  "line": 400,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;45",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 7 3 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 7 3 6 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3301004,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1837152,
  "status": "passed"
});
formatter.before({
  "duration": 17080,
  "status": "passed"
});
formatter.scenario({
  "line": 401,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;46",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 7 5 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 7 5 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3109229,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1658039,
  "status": "passed"
});
formatter.before({
  "duration": 20453,
  "status": "passed"
});
formatter.scenario({
  "line": 402,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;47",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 7 5 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 7 5 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3896361,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2655710,
  "status": "passed"
});
formatter.before({
  "duration": 21225,
  "status": "passed"
});
formatter.scenario({
  "line": 403,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;48",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 7 6 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 7 6 3 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3766885,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1761184,
  "status": "passed"
});
formatter.before({
  "duration": 17709,
  "status": "passed"
});
formatter.scenario({
  "line": 404,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;49",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"4 7 6 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "4 7 6 5 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3119366,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1695736,
  "status": "passed"
});
formatter.before({
  "duration": 17409,
  "status": "passed"
});
formatter.scenario({
  "line": 405,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;50",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 3 4 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 3 4 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3107700,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1653007,
  "status": "passed"
});
formatter.before({
  "duration": 16353,
  "status": "passed"
});
formatter.scenario({
  "line": 406,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;51",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 3 4 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 3 4 7 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3249466,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1786878,
  "status": "passed"
});
formatter.before({
  "duration": 18141,
  "status": "passed"
});
formatter.scenario({
  "line": 407,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;52",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 3 6 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 3 6 4 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6148865,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1617243,
  "status": "passed"
});
formatter.before({
  "duration": 27521,
  "status": "passed"
});
formatter.scenario({
  "line": 408,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;53",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 3 6 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 3 6 7 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3343741,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1699701,
  "status": "passed"
});
formatter.before({
  "duration": 18805,
  "status": "passed"
});
formatter.scenario({
  "line": 409,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;54",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 3 7 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 3 7 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3307007,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1840057,
  "status": "passed"
});
formatter.before({
  "duration": 17649,
  "status": "passed"
});
formatter.scenario({
  "line": 410,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;55",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 3 7 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 3 7 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3382854,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1694384,
  "status": "passed"
});
formatter.before({
  "duration": 19451,
  "status": "passed"
});
formatter.scenario({
  "line": 411,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;56",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 4 3 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 4 3 6 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3289442,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1597657,
  "status": "passed"
});
formatter.before({
  "duration": 18481,
  "status": "passed"
});
formatter.scenario({
  "line": 412,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;57",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 4 3 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 4 3 7 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3594307,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1747528,
  "status": "passed"
});
formatter.before({
  "duration": 39209,
  "status": "passed"
});
formatter.scenario({
  "line": 413,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;58",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 4 6 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 4 6 3 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3929661,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2857680,
  "status": "passed"
});
formatter.before({
  "duration": 18811,
  "status": "passed"
});
formatter.scenario({
  "line": 414,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;59",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 4 6 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 4 6 7 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3118100,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1667145,
  "status": "passed"
});
formatter.before({
  "duration": 28094,
  "status": "passed"
});
formatter.scenario({
  "line": 415,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;60",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 4 7 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 4 7 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3096831,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1571360,
  "status": "passed"
});
formatter.before({
  "duration": 27610,
  "status": "passed"
});
formatter.scenario({
  "line": 416,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;61",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 4 7 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 4 7 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3166798,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1782277,
  "status": "passed"
});
formatter.before({
  "duration": 26783,
  "status": "passed"
});
formatter.scenario({
  "line": 417,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;62",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 6 3 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 6 3 4 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3534291,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4851053,
  "status": "passed"
});
formatter.before({
  "duration": 25645,
  "status": "passed"
});
formatter.scenario({
  "line": 418,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;63",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 6 3 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 6 3 7 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3189092,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1821393,
  "status": "passed"
});
formatter.before({
  "duration": 19808,
  "status": "passed"
});
formatter.scenario({
  "line": 419,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;64",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 6 4 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 6 4 3 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3346159,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1834862,
  "status": "passed"
});
formatter.before({
  "duration": 17936,
  "status": "passed"
});
formatter.scenario({
  "line": 420,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;65",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 6 4 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 6 4 7 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3308632,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1852191,
  "status": "passed"
});
formatter.before({
  "duration": 19703,
  "status": "passed"
});
formatter.scenario({
  "line": 421,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;66",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 6 7 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 6 7 3 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4567312,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1589849,
  "status": "passed"
});
formatter.before({
  "duration": 28192,
  "status": "passed"
});
formatter.scenario({
  "line": 422,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;67",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 6 7 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 6 7 4 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3043949,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1715757,
  "status": "passed"
});
formatter.before({
  "duration": 20092,
  "status": "passed"
});
formatter.scenario({
  "line": 423,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;68",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 7 3 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 7 3 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3077986,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2909813,
  "status": "passed"
});
formatter.before({
  "duration": 20609,
  "status": "passed"
});
formatter.scenario({
  "line": 424,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;69",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 7 3 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 7 3 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3981518,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2406154,
  "status": "passed"
});
formatter.before({
  "duration": 18349,
  "status": "passed"
});
formatter.scenario({
  "line": 425,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;70",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 7 4 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 7 4 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3207053,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1568475,
  "status": "passed"
});
formatter.before({
  "duration": 16828,
  "status": "passed"
});
formatter.scenario({
  "line": 426,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;71",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 7 4 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 7 4 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3100604,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1571272,
  "status": "passed"
});
formatter.before({
  "duration": 17320,
  "status": "passed"
});
formatter.scenario({
  "line": 427,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;72",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 7 6 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 7 6 3 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3157821,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1552420,
  "status": "passed"
});
formatter.before({
  "duration": 29490,
  "status": "passed"
});
formatter.scenario({
  "line": 428,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;73",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"5 7 6 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "5 7 6 4 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3241504,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4625977,
  "status": "passed"
});
formatter.before({
  "duration": 20108,
  "status": "passed"
});
formatter.scenario({
  "line": 429,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;74",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 3 4 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 3 4 5 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3157777,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3310635,
  "status": "passed"
});
formatter.before({
  "duration": 17930,
  "status": "passed"
});
formatter.scenario({
  "line": 430,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;75",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 3 4 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 3 4 7 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4972678,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3513982,
  "status": "passed"
});
formatter.before({
  "duration": 19116,
  "status": "passed"
});
formatter.scenario({
  "line": 431,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;76",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 3 5 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 3 5 4 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4583478,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2486178,
  "status": "passed"
});
formatter.before({
  "duration": 27248,
  "status": "passed"
});
formatter.scenario({
  "line": 432,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;77",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 3 5 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 3 5 7 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4672696,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3881504,
  "status": "passed"
});
formatter.before({
  "duration": 19452,
  "status": "passed"
});
formatter.scenario({
  "line": 433,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;78",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 3 7 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 3 7 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6533813,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4176909,
  "status": "passed"
});
formatter.before({
  "duration": 24759,
  "status": "passed"
});
formatter.scenario({
  "line": 434,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;79",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 3 7 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 3 7 5 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4734514,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3529553,
  "status": "passed"
});
formatter.before({
  "duration": 19370,
  "status": "passed"
});
formatter.scenario({
  "line": 435,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;80",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 4 3 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 4 3 5 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4561590,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 6684915,
  "status": "passed"
});
formatter.before({
  "duration": 21451,
  "status": "passed"
});
formatter.scenario({
  "line": 436,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;81",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 4 3 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 4 3 7 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5254795,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 6466052,
  "status": "passed"
});
formatter.before({
  "duration": 26350,
  "status": "passed"
});
formatter.scenario({
  "line": 437,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;82",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 4 5 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 4 5 3 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7913847,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5372438,
  "status": "passed"
});
formatter.before({
  "duration": 19823,
  "status": "passed"
});
formatter.scenario({
  "line": 438,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;83",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 4 5 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 4 5 7 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6403832,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 6246974,
  "status": "passed"
});
formatter.before({
  "duration": 26037,
  "status": "passed"
});
formatter.scenario({
  "line": 439,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;84",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 4 7 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 4 7 3 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4769870,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4517037,
  "status": "passed"
});
formatter.before({
  "duration": 18613,
  "status": "passed"
});
formatter.scenario({
  "line": 440,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;85",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 4 7 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 4 7 5 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4586802,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4020584,
  "status": "passed"
});
formatter.before({
  "duration": 18688,
  "status": "passed"
});
formatter.scenario({
  "line": 441,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;86",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 5 3 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 5 3 4 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8392669,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4632564,
  "status": "passed"
});
formatter.before({
  "duration": 32534,
  "status": "passed"
});
formatter.scenario({
  "line": 442,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;87",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 5 3 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 5 3 7 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4955027,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4852692,
  "status": "passed"
});
formatter.before({
  "duration": 18667,
  "status": "passed"
});
formatter.scenario({
  "line": 443,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;88",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 5 4 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 5 4 3 7",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6890601,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4107932,
  "status": "passed"
});
formatter.before({
  "duration": 17615,
  "status": "passed"
});
formatter.scenario({
  "line": 444,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;89",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 5 4 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 5 4 7 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5795180,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5521714,
  "status": "passed"
});
formatter.before({
  "duration": 20767,
  "status": "passed"
});
formatter.scenario({
  "line": 445,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;90",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 5 7 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 5 7 3 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4997374,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4134327,
  "status": "passed"
});
formatter.before({
  "duration": 18735,
  "status": "passed"
});
formatter.scenario({
  "line": 446,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;91",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 5 7 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 5 7 4 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4916099,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4732659,
  "status": "passed"
});
formatter.before({
  "duration": 33811,
  "status": "passed"
});
formatter.scenario({
  "line": 447,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;92",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 7 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 7 3 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4881751,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4204535,
  "status": "passed"
});
formatter.before({
  "duration": 19506,
  "status": "passed"
});
formatter.scenario({
  "line": 448,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;93",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 7 3 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 7 3 5 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4979931,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4258484,
  "status": "passed"
});
formatter.before({
  "duration": 20120,
  "status": "passed"
});
formatter.scenario({
  "line": 449,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;94",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 7 4 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 7 4 3 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6118930,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3743690,
  "status": "passed"
});
formatter.before({
  "duration": 16734,
  "status": "passed"
});
formatter.scenario({
  "line": 450,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;95",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 7 4 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 7 4 5 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6013603,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4783813,
  "status": "passed"
});
formatter.before({
  "duration": 20325,
  "status": "passed"
});
formatter.scenario({
  "line": 451,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;96",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 7 5 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 7 5 3 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4699325,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3619750,
  "status": "passed"
});
formatter.before({
  "duration": 17741,
  "status": "passed"
});
formatter.scenario({
  "line": 452,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;97",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"6 7 5 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "6 7 5 4 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4554941,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4052345,
  "status": "passed"
});
formatter.before({
  "duration": 24755,
  "status": "passed"
});
formatter.scenario({
  "line": 453,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;98",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 3 4 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8262402,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5133568,
  "status": "passed"
});
formatter.before({
  "duration": 24050,
  "status": "passed"
});
formatter.scenario({
  "line": 454,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;99",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 3 4 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 3 4 6 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5426207,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5840294,
  "status": "passed"
});
formatter.before({
  "duration": 18774,
  "status": "passed"
});
formatter.scenario({
  "line": 455,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;100",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 3 5 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 3 5 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6784298,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3813183,
  "status": "passed"
});
formatter.before({
  "duration": 23693,
  "status": "passed"
});
formatter.scenario({
  "line": 456,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;101",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 3 5 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 3 5 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8485948,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4819016,
  "status": "passed"
});
formatter.before({
  "duration": 50078,
  "status": "passed"
});
formatter.scenario({
  "line": 457,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;102",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 3 6 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 3 6 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4971829,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4618021,
  "status": "passed"
});
formatter.before({
  "duration": 29316,
  "status": "passed"
});
formatter.scenario({
  "line": 458,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;103",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 3 6 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 3 6 5 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5225759,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 8829442,
  "status": "passed"
});
formatter.before({
  "duration": 26963,
  "status": "passed"
});
formatter.scenario({
  "line": 459,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;104",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 4 3 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 4 3 5 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6198880,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3939707,
  "status": "passed"
});
formatter.before({
  "duration": 25357,
  "status": "passed"
});
formatter.scenario({
  "line": 460,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;105",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 4 3 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 4 3 6 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6708432,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5715828,
  "status": "passed"
});
formatter.before({
  "duration": 19260,
  "status": "passed"
});
formatter.scenario({
  "line": 461,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;106",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 4 5 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 4 5 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7031127,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 6506412,
  "status": "passed"
});
formatter.before({
  "duration": 24881,
  "status": "passed"
});
formatter.scenario({
  "line": 462,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;107",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 4 5 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 4 5 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4921708,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4887168,
  "status": "passed"
});
formatter.before({
  "duration": 25819,
  "status": "passed"
});
formatter.scenario({
  "line": 463,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;108",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 4 6 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 4 6 3 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4591394,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 7702987,
  "status": "passed"
});
formatter.before({
  "duration": 24740,
  "status": "passed"
});
formatter.scenario({
  "line": 464,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;109",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 4 6 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 4 6 5 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6955096,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 6046391,
  "status": "passed"
});
formatter.before({
  "duration": 28325,
  "status": "passed"
});
formatter.scenario({
  "line": 465,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;110",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 5 3 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 5 3 4 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6608256,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 8171197,
  "status": "passed"
});
formatter.before({
  "duration": 31118,
  "status": "passed"
});
formatter.scenario({
  "line": 466,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;111",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 5 3 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 5 3 6 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5747291,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 7068700,
  "status": "passed"
});
formatter.before({
  "duration": 25501,
  "status": "passed"
});
formatter.scenario({
  "line": 467,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;112",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 5 4 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 5 4 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4867989,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3968597,
  "status": "passed"
});
formatter.before({
  "duration": 20767,
  "status": "passed"
});
formatter.scenario({
  "line": 468,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;113",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 5 4 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 5 4 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4868031,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 8546230,
  "status": "passed"
});
formatter.before({
  "duration": 28108,
  "status": "passed"
});
formatter.scenario({
  "line": 469,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;114",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 5 6 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 5 6 3 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4996051,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3887235,
  "status": "passed"
});
formatter.before({
  "duration": 19427,
  "status": "passed"
});
formatter.scenario({
  "line": 470,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;115",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 5 6 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 5 6 4 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5395432,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5374663,
  "status": "passed"
});
formatter.before({
  "duration": 23762,
  "status": "passed"
});
formatter.scenario({
  "line": 471,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;116",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 6 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 6 3 4 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6123828,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3716789,
  "status": "passed"
});
formatter.before({
  "duration": 24311,
  "status": "passed"
});
formatter.scenario({
  "line": 472,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;117",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 6 3 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 6 3 5 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 9796706,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3884342,
  "status": "passed"
});
formatter.before({
  "duration": 27050,
  "status": "passed"
});
formatter.scenario({
  "line": 473,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;118",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 6 4 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 6 4 3 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5472459,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3601643,
  "status": "passed"
});
formatter.before({
  "duration": 19299,
  "status": "passed"
});
formatter.scenario({
  "line": 474,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;119",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 6 4 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 6 4 5 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 9177456,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3814672,
  "status": "passed"
});
formatter.before({
  "duration": 21450,
  "status": "passed"
});
formatter.scenario({
  "line": 475,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;120",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 6 5 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 6 5 3 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6452569,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5316580,
  "status": "passed"
});
formatter.before({
  "duration": 22309,
  "status": "passed"
});
formatter.scenario({
  "line": 476,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-straight-can-be-determined-given-any-order;;121",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 352,
  "name": "A set of cards with \"C D H S C\" and \"7 6 5 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "the hand should be a straight in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C D H S C",
      "offset": 21
    },
    {
      "val": "7 6 5 4 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5817352,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5068934,
  "status": "passed"
});
formatter.before({
  "duration": 19223,
  "status": "passed"
});
formatter.scenario({
  "line": 485,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 2 2 10 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 2 2 10 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6703814,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 2508696,
  "status": "passed"
});
formatter.before({
  "duration": 36737,
  "status": "passed"
});
formatter.scenario({
  "line": 486,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 2 2 5 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 2 2 5 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4638871,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1571335,
  "status": "passed"
});
formatter.before({
  "duration": 17100,
  "status": "passed"
});
formatter.scenario({
  "line": 487,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 2 2 10 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 2 2 10 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4231315,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1934528,
  "status": "passed"
});
formatter.before({
  "duration": 37216,
  "status": "passed"
});
formatter.scenario({
  "line": 488,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 2 5 2 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 2 5 2 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3882604,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1635049,
  "status": "passed"
});
formatter.before({
  "duration": 19611,
  "status": "passed"
});
formatter.scenario({
  "line": 489,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 2 5 10 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 2 5 10 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6790979,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 2008353,
  "status": "passed"
});
formatter.before({
  "duration": 21456,
  "status": "passed"
});
formatter.scenario({
  "line": 490,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 2 10 2 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 2 10 2 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4043844,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 787624,
  "status": "passed"
});
formatter.before({
  "duration": 19807,
  "status": "passed"
});
formatter.scenario({
  "line": 491,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 2 10 5 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 2 10 5 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3906620,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 545660,
  "status": "passed"
});
formatter.before({
  "duration": 16156,
  "status": "passed"
});
formatter.scenario({
  "line": 492,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 5 2 2 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 5 2 2 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4972441,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1395778,
  "status": "passed"
});
formatter.before({
  "duration": 53413,
  "status": "passed"
});
formatter.scenario({
  "line": 493,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 5 2 10 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 5 2 10 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6386560,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 537381,
  "status": "passed"
});
formatter.before({
  "duration": 17455,
  "status": "passed"
});
formatter.scenario({
  "line": 494,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 5 10 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 5 10 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4486463,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1078538,
  "status": "passed"
});
formatter.before({
  "duration": 26283,
  "status": "passed"
});
formatter.scenario({
  "line": 495,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 10 2 2 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 10 2 2 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5415079,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 605591,
  "status": "passed"
});
formatter.before({
  "duration": 17655,
  "status": "passed"
});
formatter.scenario({
  "line": 496,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 10 2 5 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 10 2 5 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4890211,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 467080,
  "status": "passed"
});
formatter.before({
  "duration": 32120,
  "status": "passed"
});
formatter.scenario({
  "line": 497,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"2 10 5 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "2 10 5 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4649410,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 372254,
  "status": "passed"
});
formatter.before({
  "duration": 17239,
  "status": "passed"
});
formatter.scenario({
  "line": 498,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"5 2 2 2 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "5 2 2 2 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4356223,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 302713,
  "status": "passed"
});
formatter.before({
  "duration": 18381,
  "status": "passed"
});
formatter.scenario({
  "line": 499,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"5 2 2 10 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "5 2 2 10 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 8826384,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 570378,
  "status": "passed"
});
formatter.before({
  "duration": 28121,
  "status": "passed"
});
formatter.scenario({
  "line": 500,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"5 2 10 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "5 2 10 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5007887,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 620187,
  "status": "passed"
});
formatter.before({
  "duration": 17159,
  "status": "passed"
});
formatter.scenario({
  "line": 501,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"5 10 2 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "5 10 2 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4937799,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 534835,
  "status": "passed"
});
formatter.before({
  "duration": 20833,
  "status": "passed"
});
formatter.scenario({
  "line": 502,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"10 2 2 2 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "10 2 2 2 5",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4051717,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 286975,
  "status": "passed"
});
formatter.before({
  "duration": 17144,
  "status": "passed"
});
formatter.scenario({
  "line": 503,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"10 2 2 5 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "10 2 2 5 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6257538,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 434927,
  "status": "passed"
});
formatter.before({
  "duration": 17164,
  "status": "passed"
});
formatter.scenario({
  "line": 504,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"10 2 5 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "10 2 5 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4304065,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 957715,
  "status": "passed"
});
formatter.before({
  "duration": 29113,
  "status": "passed"
});
formatter.scenario({
  "line": 505,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-three-of-a-kind-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 480,
  "name": "A set of cards with \"C H S S D\" and \"10 5 2 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "the hand should be a three of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C H S S D",
      "offset": 21
    },
    {
      "val": "10 5 2 2 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5258592,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 426172,
  "status": "passed"
});
formatter.before({
  "duration": 17726,
  "status": "passed"
});
formatter.scenario({
  "line": 513,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"2 4 4 9 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 4 4 9 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4294568,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 3973242,
  "status": "passed"
});
formatter.before({
  "duration": 28341,
  "status": "passed"
});
formatter.scenario({
  "line": 514,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"2 4 9 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 4 9 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4264955,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 2005746,
  "status": "passed"
});
formatter.before({
  "duration": 29470,
  "status": "passed"
});
formatter.scenario({
  "line": 515,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"2 4 9 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 4 9 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7537749,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 2534377,
  "status": "passed"
});
formatter.before({
  "duration": 29238,
  "status": "passed"
});
formatter.scenario({
  "line": 516,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"2 9 4 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 9 4 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4423717,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 2179491,
  "status": "passed"
});
formatter.before({
  "duration": 18230,
  "status": "passed"
});
formatter.scenario({
  "line": 517,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"2 9 4 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 9 4 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4970128,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1709604,
  "status": "passed"
});
formatter.before({
  "duration": 17957,
  "status": "passed"
});
formatter.scenario({
  "line": 518,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"2 9 9 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "2 9 9 4 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6544224,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1048195,
  "status": "passed"
});
formatter.before({
  "duration": 16982,
  "status": "passed"
});
formatter.scenario({
  "line": 519,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 2 4 9 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 2 4 9 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4373096,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 917842,
  "status": "passed"
});
formatter.before({
  "duration": 24669,
  "status": "passed"
});
formatter.scenario({
  "line": 520,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 2 9 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 2 9 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6076228,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 973740,
  "status": "passed"
});
formatter.before({
  "duration": 22318,
  "status": "passed"
});
formatter.scenario({
  "line": 521,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 2 9 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 2 9 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5248398,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1038080,
  "status": "passed"
});
formatter.before({
  "duration": 16691,
  "status": "passed"
});
formatter.scenario({
  "line": 522,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 4 2 9 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 4 2 9 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4399997,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1066726,
  "status": "passed"
});
formatter.before({
  "duration": 18801,
  "status": "passed"
});
formatter.scenario({
  "line": 523,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 4 9 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 4 9 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4834958,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 980022,
  "status": "passed"
});
formatter.before({
  "duration": 16856,
  "status": "passed"
});
formatter.scenario({
  "line": 524,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 4 9 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 4 9 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7859625,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 743824,
  "status": "passed"
});
formatter.before({
  "duration": 18453,
  "status": "passed"
});
formatter.scenario({
  "line": 525,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 9 2 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 9 2 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5557945,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1463552,
  "status": "passed"
});
formatter.before({
  "duration": 29076,
  "status": "passed"
});
formatter.scenario({
  "line": 526,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 9 2 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 9 2 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5054804,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 735793,
  "status": "passed"
});
formatter.before({
  "duration": 22116,
  "status": "passed"
});
formatter.scenario({
  "line": 527,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 9 4 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 9 4 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6488347,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1240662,
  "status": "passed"
});
formatter.before({
  "duration": 23159,
  "status": "passed"
});
formatter.scenario({
  "line": 528,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 9 4 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 9 4 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4835076,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1101765,
  "status": "passed"
});
formatter.before({
  "duration": 17161,
  "status": "passed"
});
formatter.scenario({
  "line": 529,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 9 9 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 9 9 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7648190,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1091088,
  "status": "passed"
});
formatter.before({
  "duration": 20439,
  "status": "passed"
});
formatter.scenario({
  "line": 530,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"4 9 9 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "4 9 9 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4277453,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 838885,
  "status": "passed"
});
formatter.before({
  "duration": 26019,
  "status": "passed"
});
formatter.scenario({
  "line": 531,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 2 4 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 2 4 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4433596,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 789582,
  "status": "passed"
});
formatter.before({
  "duration": 17191,
  "status": "passed"
});
formatter.scenario({
  "line": 532,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 2 4 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 2 4 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4298216,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 805283,
  "status": "passed"
});
formatter.before({
  "duration": 16456,
  "status": "passed"
});
formatter.scenario({
  "line": 533,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 2 9 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 2 9 4 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 7528735,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 711655,
  "status": "passed"
});
formatter.before({
  "duration": 17399,
  "status": "passed"
});
formatter.scenario({
  "line": 534,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 4 2 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 4 2 4 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4523921,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 907157,
  "status": "passed"
});
formatter.before({
  "duration": 19724,
  "status": "passed"
});
formatter.scenario({
  "line": 535,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 4 2 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 4 2 9 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6245804,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 810489,
  "status": "passed"
});
formatter.before({
  "duration": 18908,
  "status": "passed"
});
formatter.scenario({
  "line": 536,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 4 4 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 4 4 2 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3318078,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 734054,
  "status": "passed"
});
formatter.before({
  "duration": 17494,
  "status": "passed"
});
formatter.scenario({
  "line": 537,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 4 4 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 4 4 9 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3199769,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 684982,
  "status": "passed"
});
formatter.before({
  "duration": 17089,
  "status": "passed"
});
formatter.scenario({
  "line": 538,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 4 9 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 4 9 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2958318,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 809066,
  "status": "passed"
});
formatter.before({
  "duration": 16038,
  "status": "passed"
});
formatter.scenario({
  "line": 539,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 4 9 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 4 9 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3239757,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1023958,
  "status": "passed"
});
formatter.before({
  "duration": 19464,
  "status": "passed"
});
formatter.scenario({
  "line": 540,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 9 2 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 9 2 4 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3276892,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1268804,
  "status": "passed"
});
formatter.before({
  "duration": 17214,
  "status": "passed"
});
formatter.scenario({
  "line": 541,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 9 4 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 9 4 2 4",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2906708,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 894601,
  "status": "passed"
});
formatter.before({
  "duration": 17148,
  "status": "passed"
});
formatter.scenario({
  "line": 542,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-pair-hand-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 508,
  "name": "A set of cards with \"C S H D C\" and \"9 9 4 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 509,
  "name": "the hand should be a two pair in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C S H D C",
      "offset": 21
    },
    {
      "val": "9 9 4 4 2",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3198493,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 873988,
  "status": "passed"
});
formatter.before({
  "duration": 15911,
  "status": "passed"
});
formatter.scenario({
  "line": 550,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 3 6 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 3 6 9 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2957506,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1901151,
  "status": "passed"
});
formatter.before({
  "duration": 16959,
  "status": "passed"
});
formatter.scenario({
  "line": 551,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 3 6 10 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 3 6 10 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3046153,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1789740,
  "status": "passed"
});
formatter.before({
  "duration": 26636,
  "status": "passed"
});
formatter.scenario({
  "line": 552,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 3 9 6 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 3 9 6 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5882480,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1682671,
  "status": "passed"
});
formatter.before({
  "duration": 16525,
  "status": "passed"
});
formatter.scenario({
  "line": 553,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 3 9 10 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 3 9 10 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2996454,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1778613,
  "status": "passed"
});
formatter.before({
  "duration": 18328,
  "status": "passed"
});
formatter.scenario({
  "line": 554,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 3 10 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 3 10 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3130601,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1338026,
  "status": "passed"
});
formatter.before({
  "duration": 16920,
  "status": "passed"
});
formatter.scenario({
  "line": 555,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 3 10 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 3 10 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3177409,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 791510,
  "status": "passed"
});
formatter.before({
  "duration": 19137,
  "status": "passed"
});
formatter.scenario({
  "line": 556,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 6 3 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 6 3 9 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4281104,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 583015,
  "status": "passed"
});
formatter.before({
  "duration": 15861,
  "status": "passed"
});
formatter.scenario({
  "line": 557,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 6 3 10 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 6 3 10 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3007363,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 598025,
  "status": "passed"
});
formatter.before({
  "duration": 21606,
  "status": "passed"
});
formatter.scenario({
  "line": 558,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 6 9 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 6 9 3 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3074629,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 590276,
  "status": "passed"
});
formatter.before({
  "duration": 15856,
  "status": "passed"
});
formatter.scenario({
  "line": 559,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 6 9 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 6 9 10 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3334569,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1115902,
  "status": "passed"
});
formatter.before({
  "duration": 22707,
  "status": "passed"
});
formatter.scenario({
  "line": 560,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 6 10 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 6 10 3 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3475636,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1154726,
  "status": "passed"
});
formatter.before({
  "duration": 17698,
  "status": "passed"
});
formatter.scenario({
  "line": 561,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 6 10 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 6 10 9 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2959645,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 596810,
  "status": "passed"
});
formatter.before({
  "duration": 16618,
  "status": "passed"
});
formatter.scenario({
  "line": 562,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 9 3 6 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 9 3 6 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3017710,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 450910,
  "status": "passed"
});
formatter.before({
  "duration": 29765,
  "status": "passed"
});
formatter.scenario({
  "line": 563,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 9 3 10 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 9 3 10 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3094438,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 340925,
  "status": "passed"
});
formatter.before({
  "duration": 19201,
  "status": "passed"
});
formatter.scenario({
  "line": 564,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 9 6 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 9 6 3 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3006378,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 449484,
  "status": "passed"
});
formatter.before({
  "duration": 42125,
  "status": "passed"
});
formatter.scenario({
  "line": 565,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 9 6 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 9 6 10 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3231945,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 603516,
  "status": "passed"
});
formatter.before({
  "duration": 13221,
  "status": "passed"
});
formatter.scenario({
  "line": 566,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 9 10 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 9 10 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2996076,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 404465,
  "status": "passed"
});
formatter.before({
  "duration": 20499,
  "status": "passed"
});
formatter.scenario({
  "line": 567,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 9 10 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 9 10 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 5258260,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 329504,
  "status": "passed"
});
formatter.before({
  "duration": 15275,
  "status": "passed"
});
formatter.scenario({
  "line": 568,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 10 3 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 10 3 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3164887,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 351532,
  "status": "passed"
});
formatter.before({
  "duration": 15642,
  "status": "passed"
});
formatter.scenario({
  "line": 569,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 10 3 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 10 3 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3188148,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 347797,
  "status": "passed"
});
formatter.before({
  "duration": 17160,
  "status": "passed"
});
formatter.scenario({
  "line": 570,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 10 6 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 10 6 3 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3426029,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 403574,
  "status": "passed"
});
formatter.before({
  "duration": 15327,
  "status": "passed"
});
formatter.scenario({
  "line": 571,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 10 6 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 10 6 9 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3153235,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 366949,
  "status": "passed"
});
formatter.before({
  "duration": 14033,
  "status": "passed"
});
formatter.scenario({
  "line": 572,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 10 9 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 10 9 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4266819,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 318394,
  "status": "passed"
});
formatter.before({
  "duration": 24333,
  "status": "passed"
});
formatter.scenario({
  "line": 573,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"3 10 9 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "3 10 9 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2895937,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 437017,
  "status": "passed"
});
formatter.before({
  "duration": 11081,
  "status": "passed"
});
formatter.scenario({
  "line": 574,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 3 3 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 3 3 9 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3914676,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 736075,
  "status": "passed"
});
formatter.before({
  "duration": 25153,
  "status": "passed"
});
formatter.scenario({
  "line": 575,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 3 3 10 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 3 3 10 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3051850,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 446862,
  "status": "passed"
});
formatter.before({
  "duration": 21664,
  "status": "passed"
});
formatter.scenario({
  "line": 576,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 3 9 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 3 9 3 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3136251,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 455192,
  "status": "passed"
});
formatter.before({
  "duration": 14191,
  "status": "passed"
});
formatter.scenario({
  "line": 577,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 3 9 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 3 9 10 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2984041,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 447053,
  "status": "passed"
});
formatter.before({
  "duration": 12540,
  "status": "passed"
});
formatter.scenario({
  "line": 578,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 3 10 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 3 10 3 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3034189,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 361580,
  "status": "passed"
});
formatter.before({
  "duration": 13879,
  "status": "passed"
});
formatter.scenario({
  "line": 579,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 3 10 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 3 10 9 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3006679,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 314387,
  "status": "passed"
});
formatter.before({
  "duration": 11842,
  "status": "passed"
});
formatter.scenario({
  "line": 580,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 9 3 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 9 3 3 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2962145,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 343797,
  "status": "passed"
});
formatter.before({
  "duration": 12733,
  "status": "passed"
});
formatter.scenario({
  "line": 581,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 9 3 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 9 3 10 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6506431,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 345908,
  "status": "passed"
});
formatter.before({
  "duration": 24396,
  "status": "passed"
});
formatter.scenario({
  "line": 582,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 9 10 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 9 10 3 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2919865,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 322310,
  "status": "passed"
});
formatter.before({
  "duration": 14335,
  "status": "passed"
});
formatter.scenario({
  "line": 583,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 10 3 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 10 3 3 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3071610,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 351626,
  "status": "passed"
});
formatter.before({
  "duration": 13842,
  "status": "passed"
});
formatter.scenario({
  "line": 584,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 10 3 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 10 3 9 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3173006,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 344322,
  "status": "passed"
});
formatter.before({
  "duration": 13324,
  "status": "passed"
});
formatter.scenario({
  "line": 585,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"6 10 9 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "6 10 9 3 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3130176,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 380405,
  "status": "passed"
});
formatter.before({
  "duration": 14899,
  "status": "passed"
});
formatter.scenario({
  "line": 586,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 3 3 6 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 3 3 6 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3213240,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 355714,
  "status": "passed"
});
formatter.before({
  "duration": 14814,
  "status": "passed"
});
formatter.scenario({
  "line": 587,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 3 3 10 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 3 3 10 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4313583,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 358452,
  "status": "passed"
});
formatter.before({
  "duration": 21976,
  "status": "passed"
});
formatter.scenario({
  "line": 588,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 3 6 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 3 6 3 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3332113,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 332820,
  "status": "passed"
});
formatter.before({
  "duration": 20502,
  "status": "passed"
});
formatter.scenario({
  "line": 589,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 3 6 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 3 6 10 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3098019,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1383339,
  "status": "passed"
});
formatter.before({
  "duration": 36339,
  "status": "passed"
});
formatter.scenario({
  "line": 590,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;42",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 3 10 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 3 10 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3893756,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 649309,
  "status": "passed"
});
formatter.before({
  "duration": 43853,
  "status": "passed"
});
formatter.scenario({
  "line": 591,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;43",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 3 10 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 3 10 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3346039,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 333074,
  "status": "passed"
});
formatter.before({
  "duration": 18793,
  "status": "passed"
});
formatter.scenario({
  "line": 592,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;44",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 6 3 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 6 3 3 10",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2978364,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 354327,
  "status": "passed"
});
formatter.before({
  "duration": 20882,
  "status": "passed"
});
formatter.scenario({
  "line": 593,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;45",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 6 3 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 6 3 10 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4606629,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 341730,
  "status": "passed"
});
formatter.before({
  "duration": 15496,
  "status": "passed"
});
formatter.scenario({
  "line": 594,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;46",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 6 10 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 6 10 3 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3970552,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 501149,
  "status": "passed"
});
formatter.before({
  "duration": 20063,
  "status": "passed"
});
formatter.scenario({
  "line": 595,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;47",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 10 3 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 10 3 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 6425340,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 404202,
  "status": "passed"
});
formatter.before({
  "duration": 18026,
  "status": "passed"
});
formatter.scenario({
  "line": 596,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;48",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 10 3 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 10 3 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3015348,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 358924,
  "status": "passed"
});
formatter.before({
  "duration": 15866,
  "status": "passed"
});
formatter.scenario({
  "line": 597,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;49",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"9 10 6 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "9 10 6 3 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3126776,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 361824,
  "status": "passed"
});
formatter.before({
  "duration": 14640,
  "status": "passed"
});
formatter.scenario({
  "line": 598,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;50",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 3 3 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 3 3 6 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3164242,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 358874,
  "status": "passed"
});
formatter.before({
  "duration": 13736,
  "status": "passed"
});
formatter.scenario({
  "line": 599,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;51",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 3 3 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 3 3 9 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3654496,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 357668,
  "status": "passed"
});
formatter.before({
  "duration": 14835,
  "status": "passed"
});
formatter.scenario({
  "line": 600,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;52",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 3 6 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 3 6 3 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4326675,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 327565,
  "status": "passed"
});
formatter.before({
  "duration": 14040,
  "status": "passed"
});
formatter.scenario({
  "line": 601,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;53",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 3 6 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 3 6 9 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2951030,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 313650,
  "status": "passed"
});
formatter.before({
  "duration": 12696,
  "status": "passed"
});
formatter.scenario({
  "line": 602,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;54",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 3 9 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 3 9 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3043334,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 436317,
  "status": "passed"
});
formatter.before({
  "duration": 13063,
  "status": "passed"
});
formatter.scenario({
  "line": 603,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;55",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 3 9 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 3 9 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2887231,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 404519,
  "status": "passed"
});
formatter.before({
  "duration": 14806,
  "status": "passed"
});
formatter.scenario({
  "line": 604,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;56",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 6 3 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 6 3 3 9",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 4117647,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 647194,
  "status": "passed"
});
formatter.before({
  "duration": 19625,
  "status": "passed"
});
formatter.scenario({
  "line": 605,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;57",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 6 3 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 6 3 9 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3128508,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 337087,
  "status": "passed"
});
formatter.before({
  "duration": 14867,
  "status": "passed"
});
formatter.scenario({
  "line": 606,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;58",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 6 9 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 6 9 3 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 2969068,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 342337,
  "status": "passed"
});
formatter.before({
  "duration": 15921,
  "status": "passed"
});
formatter.scenario({
  "line": 607,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;59",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 9 3 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 9 3 3 6",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3735886,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 339114,
  "status": "passed"
});
formatter.before({
  "duration": 15803,
  "status": "passed"
});
formatter.scenario({
  "line": 608,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;60",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 9 3 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 9 3 6 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3458510,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 330471,
  "status": "passed"
});
formatter.before({
  "duration": 17457,
  "status": "passed"
});
formatter.scenario({
  "line": 609,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order.;a-two-of-a-kind-can-be-determined-given-any-order;;61",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 545,
  "name": "A set of cards with \"C C D H S\" and \"10 9 6 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "the hand should be a two of a kind in any order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "C C D H S",
      "offset": 21
    },
    {
      "val": "10 9 6 3 3",
      "offset": 37
    }
  ],
  "location": "AnyOrder.a_set_of_cards_with(String,String)"
});
formatter.result({
  "duration": 3090343,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 334070,
  "status": "passed"
});
formatter.uri("cucumber/handPriorities.feature");
formatter.feature({
  "line": 1,
  "name": "All given hands beat hands of lesser value",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17149,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "### Description ###"
    },
    {
      "line": 4,
      "value": "# These tests verify that two hands of different values will be properly"
    },
    {
      "line": 5,
      "value": "# compared against each other. Note that it does only covers different hands."
    },
    {
      "line": 6,
      "value": "# By this I mean that this feature file does not encompass comparisons between"
    },
    {
      "line": 7,
      "value": "# the same hand types (ex. royal flush vs. royal flush)."
    },
    {
      "line": 8,
      "value": "# The tests here involve testing the various possible types of hands against each other."
    },
    {
      "line": 9,
      "value": "# For each comparison made the tests will ensure that the winner of the game is that"
    },
    {
      "line": 10,
      "value": "# with the better hand - regardless of if it belongs to AIP or HTB."
    }
  ],
  "line": 12,
  "name": "A royal flush beats straight flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-straight-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "S9 S10 SJ SQ SK"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 3703757,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 92520,
  "status": "passed"
});
formatter.before({
  "duration": 20181,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "A royal flush beats four of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-four-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA CA HA DA SK"
      ],
      "line": 19
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 42707,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 71344,
  "status": "passed"
});
formatter.before({
  "duration": 18287,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "A royal flush beats full house",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-full-house",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA CA HA SK DK"
      ],
      "line": 24
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 55714,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 23952,
  "status": "passed"
});
formatter.before({
  "duration": 13034,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "A royal flush beats flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "S4 S5 S6 S7 S10"
      ],
      "line": 29
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 22298,
  "status": "passed"
});
formatter.before({
  "duration": 11134,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "A royal flush beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "S4 C5 D6 S7 H8"
      ],
      "line": 34
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 29908,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 57242,
  "status": "passed"
});
formatter.before({
  "duration": 13045,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "A royal flush beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA HA DA C5 D8"
      ],
      "line": 39
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 44510,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 34751,
  "status": "passed"
});
formatter.before({
  "duration": 18583,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "A royal flush beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA CA SK CK H8"
      ],
      "line": 44
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 38259,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 21216,
  "status": "passed"
});
formatter.before({
  "duration": 15694,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "A royal flush beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA CA D8 D10 C2"
      ],
      "line": 49
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 41305,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 51409,
  "status": "passed"
});
formatter.before({
  "duration": 9124,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "A royal flush beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA H3 D10 SJ CQ"
      ],
      "line": 54
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 32763,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 20861,
  "status": "passed"
});
formatter.before({
  "duration": 9637,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "A straight flush beats four of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-four-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA CA HA DA SK"
      ],
      "line": 59
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 29227,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14137,
  "status": "passed"
});
formatter.before({
  "duration": 8611,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "A straight flush beats full house",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-full-house",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 63,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA CA HA SK DK"
      ],
      "line": 64
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 31085,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 28118,
  "status": "passed"
});
formatter.before({
  "duration": 11139,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "A straight flush beats flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "S4 S5 S6 S7 S10"
      ],
      "line": 69
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 31862,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 30872,
  "status": "passed"
});
formatter.before({
  "duration": 10788,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "A straight flush beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "S4 C5 D6 S7 H8"
      ],
      "line": 74
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 30715,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14431,
  "status": "passed"
});
formatter.before({
  "duration": 9773,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "A straight flush beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA HA DA C5 D8"
      ],
      "line": 79
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 43555,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 15981,
  "status": "passed"
});
formatter.before({
  "duration": 10117,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "A straight flush beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 83,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA CA SK CK H8"
      ],
      "line": 84
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 30097,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 18342,
  "status": "passed"
});
formatter.before({
  "duration": 10978,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "A straight flush beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 88,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA CA D8 D10 C2"
      ],
      "line": 89
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 746788,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 194144,
  "status": "passed"
});
formatter.before({
  "duration": 12774,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "A straight flush beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 93,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA H3 D10 SJ CQ"
      ],
      "line": 94
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 51817,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 28662,
  "status": "passed"
});
formatter.before({
  "duration": 12566,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "A four of a kind beats full house",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-full-house",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 98,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA CA HA SK DK"
      ],
      "line": 99
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 29841,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 9923,
  "status": "passed"
});
formatter.before({
  "duration": 10447,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "A four of a kind beats flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 103,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "S4 S5 S6 S7 S10"
      ],
      "line": 104
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 44701,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13122,
  "status": "passed"
});
formatter.before({
  "duration": 15109,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "A four of a kind beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "S4 C5 D6 S7 H8"
      ],
      "line": 109
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 38144,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 15211,
  "status": "passed"
});
formatter.before({
  "duration": 14190,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "A four of a kind beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 113,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA HA DA C5 D8"
      ],
      "line": 114
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 28096,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 11028,
  "status": "passed"
});
formatter.before({
  "duration": 11617,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "A four of a kind beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 118,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA CA SK CK H8"
      ],
      "line": 119
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 39966,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14753,
  "status": "passed"
});
formatter.before({
  "duration": 11530,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "A four of a kind beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 123,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA CA D8 D10 C2"
      ],
      "line": 124
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 28048,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12909,
  "status": "passed"
});
formatter.before({
  "duration": 10668,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "A four of a kind beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 128,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA H3 D10 SJ CQ"
      ],
      "line": 129
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13061,
  "status": "passed"
});
formatter.before({
  "duration": 10827,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "A full house beats flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 133,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "S4 S5 S6 S7 S10"
      ],
      "line": 134
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 27150,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 10520,
  "status": "passed"
});
formatter.before({
  "duration": 9996,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "A full house beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 138,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "S4 C5 D6 S7 H8"
      ],
      "line": 139
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25129,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 10746,
  "status": "passed"
});
formatter.before({
  "duration": 10114,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "A full house beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 143,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "SA HA DA C5 D8"
      ],
      "line": 144
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24801,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12930,
  "status": "passed"
});
formatter.before({
  "duration": 9460,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "A full house beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 148,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "SA CA SK CK H8"
      ],
      "line": 149
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26342,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13596,
  "status": "passed"
});
formatter.before({
  "duration": 11071,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "A full house beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 153,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "SA CA D8 D10 C2"
      ],
      "line": 154
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 155,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 29505,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 23072,
  "status": "passed"
});
formatter.before({
  "duration": 15059,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "A full house beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 158,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "SA H3 D10 SJ CQ"
      ],
      "line": 159
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 38276,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 19948,
  "status": "passed"
});
formatter.before({
  "duration": 14774,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "A flush beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 163,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "S4 C5 D6 S7 H8"
      ],
      "line": 164
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 39350,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 108290,
  "status": "passed"
});
formatter.before({
  "duration": 15304,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "A flush beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 168,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "SA HA DA C5 D8"
      ],
      "line": 169
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 170,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 32834,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 11970,
  "status": "passed"
});
formatter.before({
  "duration": 12643,
  "status": "passed"
});
formatter.scenario({
  "line": 172,
  "name": "A flush beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 173,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "SA CA SK CK H8"
      ],
      "line": 174
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 29135,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13363,
  "status": "passed"
});
formatter.before({
  "duration": 19711,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "A flush beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 178,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "SA CA D8 D10 C2"
      ],
      "line": 179
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 180,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 27621,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13156,
  "status": "passed"
});
formatter.before({
  "duration": 9975,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "A flush beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 183,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "SA H3 D10 SJ CQ"
      ],
      "line": 184
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 185,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 53401,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13296,
  "status": "passed"
});
formatter.before({
  "duration": 11375,
  "status": "passed"
});
formatter.scenario({
  "line": 187,
  "name": "A straight beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 188,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CA C2 C3 C4 C5",
        "SA HA DA C5 D8"
      ],
      "line": 189
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 190,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 27175,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 25901,
  "status": "passed"
});
formatter.before({
  "duration": 11148,
  "status": "passed"
});
formatter.scenario({
  "line": 192,
  "name": "A straight beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 193,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CA C2 C3 C4 C5",
        "SA CA SK CK H8"
      ],
      "line": 194
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 27481,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13925,
  "status": "passed"
});
formatter.before({
  "duration": 11253,
  "status": "passed"
});
formatter.scenario({
  "line": 197,
  "name": "A straight beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 198,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CA C2 C3 C4 C5",
        "SA CA D8 D10 C2"
      ],
      "line": 199
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 35056,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 32743,
  "status": "passed"
});
formatter.before({
  "duration": 11525,
  "status": "passed"
});
formatter.scenario({
  "line": 202,
  "name": "A straight beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 203,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CA C2 C3 C4 C5",
        "SA H3 D10 SJ CQ"
      ],
      "line": 204
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 205,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 27131,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13674,
  "status": "passed"
});
formatter.before({
  "duration": 11149,
  "status": "passed"
});
formatter.scenario({
  "line": 207,
  "name": "A three of a kind beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-three-of-a-kind-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 208,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 D2 S3 C6",
        "SA CA SK CK H8"
      ],
      "line": 209
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 210,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 28628,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 35179,
  "status": "passed"
});
formatter.before({
  "duration": 1144876,
  "status": "passed"
});
formatter.scenario({
  "line": 212,
  "name": "A three of a kind beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-three-of-a-kind-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 213,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 D2 S3 C6",
        "SA CA D8 D10 C2"
      ],
      "line": 214
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 35994,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 16013,
  "status": "passed"
});
formatter.before({
  "duration": 11695,
  "status": "passed"
});
formatter.scenario({
  "line": 217,
  "name": "A three of a kind beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-three-of-a-kind-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 218,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 D2 S3 C6",
        "SA H3 D10 SJ CQ"
      ],
      "line": 219
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 220,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 31835,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13822,
  "status": "passed"
});
formatter.before({
  "duration": 10548,
  "status": "passed"
});
formatter.scenario({
  "line": 222,
  "name": "A two pairs beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-two-pairs-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 223,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 C3 H3 S7",
        "SA CA D8 D10 C2"
      ],
      "line": 224
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 225,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26986,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14596,
  "status": "passed"
});
formatter.before({
  "duration": 11633,
  "status": "passed"
});
formatter.scenario({
  "line": 227,
  "name": "A two pairs beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-two-pairs-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 228,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 C3 H3 S7",
        "SA H3 D10 SJ CQ"
      ],
      "line": 229
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 230,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 30312,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 28175,
  "status": "passed"
});
formatter.before({
  "duration": 10597,
  "status": "passed"
});
formatter.scenario({
  "line": 232,
  "name": "One pair beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;one-pair-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 233,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 C4 S6 H9",
        "SA H3 D10 SJ CQ"
      ],
      "line": 234
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26193,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14830,
  "status": "passed"
});
formatter.uri("cucumber/runProgram.feature");
formatter.feature({
  "line": 1,
  "name": "runProgram",
  "description": "As a user\nI want to run the program\nSo that I can play the game",
  "id": "runprogram",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17408,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Run The Program",
  "description": "",
  "id": "runprogram;run-the-program",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have input files",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I run the program",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the result should be that the program is run",
  "keyword": "Then "
});
formatter.match({
  "location": "RunProgramSteps.i_have_input_files()"
});
formatter.result({
  "duration": 44226,
  "status": "passed"
});
formatter.match({
  "location": "RunProgramSteps.i_run_the_program()"
});
formatter.result({
  "duration": 8348,
  "status": "passed"
});
formatter.match({
  "location": "RunProgramSteps.the_result_should_be_that_the_program_is_run()"
});
formatter.result({
  "duration": 8099,
  "status": "passed"
});
formatter.uri("cucumber/sameHandCompare.feature");
formatter.feature({
  "line": 1,
  "name": "Hands with the same ranking have their own rules to distinguish which is better. i.e. a royal flush is evaluated as better based off of suit.",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12675,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "### Description ###"
    },
    {
      "line": 4,
      "value": "# This file contains the tests which determine how a hands which are the same value"
    },
    {
      "line": 5,
      "value": "# are compared against each other. For example, we don\u0027t test if a royal flush beats"
    },
    {
      "line": 6,
      "value": "# a straight flush - instead we test how a royal flush beats (or loses) against other"
    },
    {
      "line": 7,
      "value": "# royal flushes!"
    }
  ],
  "line": 9,
  "name": "A royal flush is determined by suit",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;a-royal-flush-is-determined-by-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D10 DJ DQ DK DA",
        "C10 CJ CQ CK CA"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 31308,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 27153,
  "status": "passed"
});
formatter.before({
  "duration": 9648,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Straight flush wins with highest ranked card",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;straight-flush-wins-with-highest-ranked-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 C4 C5 C6 C7",
        "S2 S3 S4 S5 S6"
      ],
      "line": 16
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26121,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 41995,
  "status": "passed"
});
formatter.before({
  "duration": 19730,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Straight flush with the same highest card wins by suit",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;straight-flush-with-the-same-highest-card-wins-by-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "H2 H3 H4 H5 H6",
        "C2 C3 C4 C5 C6"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25852,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 18993,
  "status": "passed"
});
formatter.before({
  "duration": 9787,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Four of a kind is decided by highest card of the four of a kinds",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;four-of-a-kind-is-decided-by-highest-card-of-the-four-of-a-kinds",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 D3 H3 S3 C4",
        "C2 D2 H2 S2 SA"
      ],
      "line": 26
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 51685,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 60233,
  "status": "passed"
});
formatter.before({
  "duration": 19770,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Highest card of two triplets in a full house is the winner",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;highest-card-of-two-triplets-in-a-full-house-is-the-winner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CK DK C3 H3 S3",
        "SA HA C2 H2 S2"
      ],
      "line": 31
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 32990,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 42287,
  "status": "passed"
});
formatter.before({
  "duration": 23558,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Highest card of triplets wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;highest-card-of-triplets-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 H3 S3 C2 H5",
        "D2 S2 H2 SA SK"
      ],
      "line": 36
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 31566,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 16658,
  "status": "passed"
});
formatter.before({
  "duration": 8833,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Straight with same rank of highest card is determined by suit of highest card",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;straight-with-same-rank-of-highest-card-is-determined-by-suit-of-highest-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 C4 D5 H6 S7",
        "D3 H4 S5 S6 C7"
      ],
      "line": 41
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24140,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13001,
  "status": "passed"
});
formatter.before({
  "duration": 8884,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Straight with differently ranked highest cards are win based off the rank of the high card",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;straight-with-differently-ranked-highest-cards-are-win-based-off-the-rank-of-the-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D3 H4 D5 H6 D7",
        "S2 C3 S4 C5 S6"
      ],
      "line": 46
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23380,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 22268,
  "status": "passed"
});
formatter.before({
  "duration": 8478,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "If there are two pairs in each hand then the highest suit of the highest ranked one wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;if-there-are-two-pairs-in-each-hand-then-the-highest-suit-of-the-highest-ranked-one-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D2 C2 H5 S5 SK",
        "S2 H2 C5 D5 SA"
      ],
      "line": 51
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23604,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 187783,
  "status": "passed"
});
formatter.before({
  "duration": 10470,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "If there are two pairs in each hand then the highest ranked wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;if-there-are-two-pairs-in-each-hand-then-the-highest-ranked-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D2 C2 S10 C10 SK",
        "H8 D8 S9 C9 SA"
      ],
      "line": 56
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 39187,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 179115,
  "status": "passed"
});
formatter.before({
  "duration": 13260,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Both hands with same ranked pair then highest suit wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;both-hands-with-same-ranked-pair-then-highest-suit-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 CQ CK CA",
        "D2 H2 SQ SK SA"
      ],
      "line": 61
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 38162,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 106732,
  "status": "passed"
});
formatter.before({
  "duration": 11278,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Both hands with different ranked pair then highest rank of pair wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;both-hands-with-different-ranked-pair-then-highest-rank-of-pair-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S3 C3 CQ CK CA",
        "C2 D2 SQ SK SA"
      ],
      "line": 66
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24867,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 134132,
  "status": "passed"
});
formatter.before({
  "duration": 15356,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "High card hands are determined by suit if highest cards have same rank",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;high-card-hands-are-determined-by-suit-if-highest-cards-have-same-rank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 S4 H5 D7 D8",
        "S2 S3 H6 S7 C8"
      ],
      "line": 71
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 172114,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 65354,
  "status": "passed"
});
formatter.before({
  "duration": 61371,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "High card wins based off rank regardless of suit",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;high-card-wins-based-off-rank-regardless-of-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 D3 CK CQ CA",
        "S2 H3 SJ SQ SK"
      ],
      "line": 76
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 185074,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 79625,
  "status": "passed"
});
formatter.before({
  "duration": 43255,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Flush with 5 cards of the same rank is determined by suit",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-5-cards-of-the-same-rank-is-determined-by-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D2 D4 D6 D8 D10",
        "C2 C4 C6 C8 C10"
      ],
      "line": 81
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 54589,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 60648,
  "status": "passed"
});
formatter.before({
  "duration": 40398,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Flush with 4 highest cards being the same rank then the 5th is the determining one",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-4-highest-cards-being-the-same-rank-then-the-5th-is-the-determining-one",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 85,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 C4 C6 C8 C10",
        "D2 D4 D6 D8 D10"
      ],
      "line": 86
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 48182,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 32334,
  "status": "passed"
});
formatter.before({
  "duration": 12849,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Flush with 3 highest cards being the same rank then the best of remaining 4 win",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-3-highest-cards-being-the-same-rank-then-the-best-of-remaining-4-win",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 90,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C4 C6 C7 C9 C10",
        "S4 S5 S7 S9 S10"
      ],
      "line": 91
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 56004,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 37720,
  "status": "passed"
});
formatter.before({
  "duration": 17260,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Flush with 2 highest cards being the same rank then the best of remaining 6 win",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-2-highest-cards-being-the-same-rank-then-the-best-of-remaining-6-win",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 95,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C4 C5 C7 C9 C10",
        "S4 S5 S6 S9 S10"
      ],
      "line": 96
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 54108,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 42731,
  "status": "passed"
});
formatter.before({
  "duration": 49257,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Flush with 1 highest card being the same rank then the best of remaining 8 win",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-1-highest-card-being-the-same-rank-then-the-best-of-remaining-8-win",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 100,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C4 C5 C7 C9 C10",
        "S4 S5 S7 S8 S10"
      ],
      "line": 101
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 44702,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 60617,
  "status": "passed"
});
});