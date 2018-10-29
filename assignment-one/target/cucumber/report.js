$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/AIPholds.feature");
formatter.feature({
  "line": 1,
  "name": "When AIP has a straight or better it holds",
  "description": "",
  "id": "when-aip-has-a-straight-or-better-it-holds",
  "keyword": "Feature"
});
formatter.before({
  "duration": 191961,
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
  "duration": 114264996,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 142400,
  "status": "passed"
});
formatter.before({
  "duration": 105149,
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
  "duration": 174795,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 43550,
  "status": "passed"
});
formatter.before({
  "duration": 81719,
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
  "duration": 183683,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 24911,
  "status": "passed"
});
formatter.before({
  "duration": 44399,
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
  "duration": 146248,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 54346,
  "status": "passed"
});
formatter.before({
  "duration": 102353,
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
  "duration": 230437,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 48280,
  "status": "passed"
});
formatter.before({
  "duration": 40928,
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
  "duration": 180827,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.improved_AIP_is_unchanged()"
});
formatter.result({
  "duration": 54274,
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
  "duration": 59128,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "# royal flush"
    }
  ],
  "line": 12,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C10 CJ CQ CK H2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"C2 H3 D4 S5 C6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"CA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 206704,
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
  "duration": 246948,
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
  "duration": 2105451,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 4218220,
  "status": "passed"
});
formatter.before({
  "duration": 56331,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "# straight flush"
    }
  ],
  "line": 14,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C3 C4 C5 C6 H10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"C2 H3 D4 S5 C6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"C2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 230487,
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
  "duration": 187596,
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
  "duration": 557016,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 321617,
  "status": "passed"
});
formatter.before({
  "duration": 34688,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "# full house with one triplet"
    }
  ],
  "line": 16,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C3 D3 S3 C4 C2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"S2 S3 C4 S5 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"H2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 236751,
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
  "duration": 183156,
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
  "duration": 814423,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 159400,
  "status": "passed"
});
formatter.before({
  "duration": 124229,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "# full house with two pairs"
    }
  ],
  "line": 18,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C3 D3 C4 D4 H8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"S2 S3 C4 S5 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"H4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 177111,
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
  "duration": 123208,
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
  "duration": 1695386,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 136406,
  "status": "passed"
});
formatter.before({
  "duration": 66323,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "# flush"
    }
  ],
  "line": 20,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C2 C4 C6 C8 H10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"H2 D2 H3 D3 C5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"C10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 293372,
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
  "duration": 158094,
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
  "duration": 1378878,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 160158,
  "status": "passed"
});
formatter.before({
  "duration": 38272,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "# straight"
    }
  ],
  "line": 22,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C2 D3 H4 S5 C10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"H2 D2 H3 C3 DA\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"CA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 154686,
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
  "duration": 83174,
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
  "duration": 2785557,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 290149,
  "status": "passed"
});
formatter.before({
  "duration": 51854,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 23,
      "value": "# three of same suit"
    }
  ],
  "line": 24,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C2 C5 C7 H10 D3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"SA SK S2 C5 D8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"C10 CK\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 251719,
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
  "duration": 205428,
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
  "duration": 4505289,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 238831,
  "status": "passed"
});
formatter.before({
  "duration": 66877,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "# three in sequence"
    }
  ],
  "line": 26,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C2 S3 H4 D10 SK\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"SA HK D9 C4 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"DA C5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 105475,
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
  "duration": 3031099,
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
  "duration": 2600226,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 219006,
  "status": "passed"
});
formatter.before({
  "duration": 72297,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "# one pair"
    }
  ],
  "line": 28,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"C2 S2 CK DJ HA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"C5 S5 D2 D3 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"D7 C7 S3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 314242,
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
  "duration": 431109,
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
  "duration": 1766865,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 159911,
  "status": "passed"
});
formatter.before({
  "duration": 2151447,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "# highest card"
    }
  ],
  "line": 30,
  "name": "AIP exchanges cards then wins against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-wins-against-the-htb;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "AIP has an initial hand of \"D2 CK D5 C6 S8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "HTB has an initial hand of \"SK D3 H5 S6 C8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "AIP applies the improvement strategy with \"SA H7 D10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "duration": 13005504,
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
  "duration": 97084,
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
  "duration": 2200355,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_win_against_HTB()"
});
formatter.result({
  "duration": 418490,
  "status": "passed"
});
formatter.before({
  "duration": 216250,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 40,
      "value": "# royal flush"
    }
  ],
  "line": 41,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C10 CJ CQ CK H2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"C2 H3 D4 S5 C6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"D6\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 226365,
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
  "duration": 121442,
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
  "duration": 272892,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 194349,
  "status": "passed"
});
formatter.before({
  "duration": 218211,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 42,
      "value": "# straight flush"
    }
  ],
  "line": 43,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C3 C4 C5 C6 H10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"C2 H3 D4 S5 C6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"H5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 239753,
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
  "duration": 156413,
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
  "duration": 324131,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 84013,
  "status": "passed"
});
formatter.before({
  "duration": 180449,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 44,
      "value": "# full house with one triplet"
    }
  ],
  "line": 45,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C3 D3 S3 C4 C2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"S2 S3 C4 S5 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"H8\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 100225,
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
  "duration": 73138,
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
  "duration": 363314,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 53602,
  "status": "passed"
});
formatter.before({
  "duration": 77063,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 46,
      "value": "# full house with two pairs"
    }
  ],
  "line": 47,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C3 D3 C4 D4 H8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"S2 S3 C4 S5 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"H8 H9\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 109576,
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
  "duration": 97745,
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
  "duration": 1191955,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 53026,
  "status": "passed"
});
formatter.before({
  "duration": 58009,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 48,
      "value": "# flush"
    }
  ],
  "line": 49,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C2 C4 C6 C8 H10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"H2 D2 H3 D3 C5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"D10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 90425,
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
  "duration": 72201,
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
  "duration": 359660,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 57254,
  "status": "passed"
});
formatter.before({
  "duration": 30045,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 50,
      "value": "# straight"
    }
  ],
  "line": 51,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C2 D3 H4 S5 C10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"H2 D2 H3 C3 DA\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"C7\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 5382304,
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
  "duration": 414356,
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
  "duration": 944597,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 54166,
  "status": "passed"
});
formatter.before({
  "duration": 156364,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 52,
      "value": "# three of same suit"
    }
  ],
  "line": 53,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C2 C5 C7 H10 D3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"SA SK S2 C5 D8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"HA SQ\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 101753,
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
  "duration": 87105,
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
  "duration": 988106,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 141195,
  "status": "passed"
});
formatter.before({
  "duration": 31061,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 54,
      "value": "# three in sequence"
    }
  ],
  "line": 55,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C2 S3 H4 D10 SK\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"SA HK D9 C4 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"D8 H6\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 123944,
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
  "duration": 204355,
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
  "duration": 863842,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 65603,
  "status": "passed"
});
formatter.before({
  "duration": 31502,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 56,
      "value": "# one pair"
    }
  ],
  "line": 57,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"C2 S2 CK DJ HA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"C5 S5 D2 D3 S6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"D7 C10 S3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 80941,
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
  "duration": 75856,
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
  "duration": 814018,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 154352,
  "status": "passed"
});
formatter.before({
  "duration": 27685,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 58,
      "value": "# highest card"
    }
  ],
  "line": 59,
  "name": "AIP exchanges cards then loses against the HTB",
  "description": "",
  "id": "aip-should-be-capable-of-applying-a-strategy-then-losing-or-winning;aip-exchanges-cards-then-loses-against-the-htb;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "AIP has an initial hand of \"D2 CK D5 C6 S8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has an initial hand of \"SK D3 H5 S6 C8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "AIP applies the improvement strategy with \"SQ H7 D10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 88216,
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
  "duration": 67263,
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
  "duration": 981483,
  "status": "passed"
});
formatter.match({
  "location": "ImproveHandAndCompare.aip_should_lose_against_HTB()"
});
formatter.result({
  "duration": 62753,
  "status": "passed"
});
formatter.uri("cucumber/anyOrder.feature");
formatter.feature({
  "line": 1,
  "name": "All hands can be identified regardless of card order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order",
  "keyword": "Feature"
});
formatter.before({
  "duration": 25913,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-royal-flush-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A set of cards with \"S S S S S\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
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
  "duration": 57679087,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 28468066,
  "status": "passed"
});
formatter.before({
  "duration": 37950,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-royal-flush-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A set of cards with \"C C C C C\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
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
  "duration": 13577795,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 13436461,
  "status": "passed"
});
formatter.before({
  "duration": 49274,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-royal-flush-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A set of cards with \"H H H H H\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
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
  "duration": 9889403,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 12397222,
  "status": "passed"
});
formatter.before({
  "duration": 50649,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "A Royal Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-royal-flush-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A set of cards with \"D D D D D\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
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
  "duration": 7322031,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_royal_flush_in_any_order()"
});
formatter.result({
  "duration": 7026310,
  "status": "passed"
});
formatter.before({
  "duration": 24794,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 7339814,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 5327198,
  "status": "passed"
});
formatter.before({
  "duration": 25857,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"9 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 8050140,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 12983724,
  "status": "passed"
});
formatter.before({
  "duration": 17680,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"8 9 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 7644190,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3631860,
  "status": "passed"
});
formatter.before({
  "duration": 22708,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"7 8 9 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 5744893,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3748164,
  "status": "passed"
});
formatter.before({
  "duration": 18656,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"6 7 8 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 6114592,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3412685,
  "status": "passed"
});
formatter.before({
  "duration": 18474,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"5 6 7 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 5579952,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3420997,
  "status": "passed"
});
formatter.before({
  "duration": 27462,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"4 5 6 7 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 5146847,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3380210,
  "status": "passed"
});
formatter.before({
  "duration": 27987,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 4498217,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4003584,
  "status": "passed"
});
formatter.before({
  "duration": 24219,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"2 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 5411535,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3426908,
  "status": "passed"
});
formatter.before({
  "duration": 27804,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"S S S S S\" and \"A 2 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 6149923,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 58020375,
  "status": "passed"
});
formatter.before({
  "duration": 23021,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 6473887,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 9016573,
  "status": "passed"
});
formatter.before({
  "duration": 19025,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"9 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 7690703,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4413762,
  "status": "passed"
});
formatter.before({
  "duration": 18839,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"8 9 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 7784955,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4496579,
  "status": "passed"
});
formatter.before({
  "duration": 25271,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"7 8 9 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 6411378,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3723368,
  "status": "passed"
});
formatter.before({
  "duration": 27510,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"6 7 8 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 6005569,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3963178,
  "status": "passed"
});
formatter.before({
  "duration": 19821,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"5 6 7 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 5614837,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3889282,
  "status": "passed"
});
formatter.before({
  "duration": 17770,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"4 5 6 7 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 5268305,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3838155,
  "status": "passed"
});
formatter.before({
  "duration": 30061,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 4597294,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3643154,
  "status": "passed"
});
formatter.before({
  "duration": 17462,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"2 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 10988251,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1991585,
  "status": "passed"
});
formatter.before({
  "duration": 19522,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"D D D D D\" and \"A 2 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3149024,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 44486507,
  "status": "passed"
});
formatter.before({
  "duration": 30479,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 4484651,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 19841784,
  "status": "passed"
});
formatter.before({
  "duration": 32006,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"9 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 4107951,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2096217,
  "status": "passed"
});
formatter.before({
  "duration": 22928,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"8 9 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 4058420,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1816060,
  "status": "passed"
});
formatter.before({
  "duration": 16566,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"7 8 9 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3795695,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1945184,
  "status": "passed"
});
formatter.before({
  "duration": 19343,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"6 7 8 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3975365,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2181346,
  "status": "passed"
});
formatter.before({
  "duration": 16705,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"5 6 7 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3901644,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2106133,
  "status": "passed"
});
formatter.before({
  "duration": 17790,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"4 5 6 7 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3564241,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1695607,
  "status": "passed"
});
formatter.before({
  "duration": 29291,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3293411,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 4027743,
  "status": "passed"
});
formatter.before({
  "duration": 34121,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"2 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3473087,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1804086,
  "status": "passed"
});
formatter.before({
  "duration": 21750,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"H H H H H\" and \"A 2 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3658087,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3723064,
  "status": "passed"
});
formatter.before({
  "duration": 19397,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"10 J Q K A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 4288466,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1958921,
  "status": "passed"
});
formatter.before({
  "duration": 18274,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"9 10 J Q K\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 4107736,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2694209,
  "status": "passed"
});
formatter.before({
  "duration": 18244,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"8 9 10 J Q\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 5284759,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3281496,
  "status": "passed"
});
formatter.before({
  "duration": 96625,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"7 8 9 10 J\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3639645,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1677925,
  "status": "passed"
});
formatter.before({
  "duration": 18068,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"6 7 8 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3236417,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 8031918,
  "status": "passed"
});
formatter.before({
  "duration": 31316,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"5 6 7 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3140963,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2587708,
  "status": "passed"
});
formatter.before({
  "duration": 117360,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"4 5 6 7 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3584597,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1856270,
  "status": "passed"
});
formatter.before({
  "duration": 25324,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 4067472,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 2283850,
  "status": "passed"
});
formatter.before({
  "duration": 24486,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"2 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 3446554,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 1757500,
  "status": "passed"
});
formatter.before({
  "duration": 17062,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "A Straight Flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-flush-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "A set of cards with \"C C C C C\" and \"A 2 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
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
  "duration": 2806427,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_flush_in_any_order()"
});
formatter.result({
  "duration": 3620602,
  "status": "passed"
});
formatter.before({
  "duration": 18878,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-four-of-a-kind-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "A set of cards with \"C H D C S\" and \"5 5 5 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
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
  "duration": 2530971,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 2149455,
  "status": "passed"
});
formatter.before({
  "duration": 27564,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-four-of-a-kind-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "A set of cards with \"C H S D S\" and \"2 2 A 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
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
  "duration": 3823130,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 2616634,
  "status": "passed"
});
formatter.before({
  "duration": 22094,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-four-of-a-kind-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "A set of cards with \"C H S D S\" and \"A 2 2 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
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
  "duration": 2514612,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1711322,
  "status": "passed"
});
formatter.before({
  "duration": 24546,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-four-of-a-kind-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "A set of cards with \"C H S D S\" and \"2 A 2 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
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
  "duration": 3786011,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1522628,
  "status": "passed"
});
formatter.before({
  "duration": 16227,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-four-of-a-kind-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "A set of cards with \"C H S D S\" and \"2 2 2 A 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
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
  "duration": 3159745,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1333477,
  "status": "passed"
});
formatter.before({
  "duration": 29421,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "A Four of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-four-of-a-kind-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "A set of cards with \"C H S D S\" and \"2 2 2 2 A\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
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
  "duration": 2466863,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_four_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 497218,
  "status": "passed"
});
formatter.before({
  "duration": 27687,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"2 2 4 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2468818,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 3735884,
  "status": "passed"
});
formatter.before({
  "duration": 18120,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"2 4 2 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2399057,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 2994241,
  "status": "passed"
});
formatter.before({
  "duration": 16006,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"2 4 4 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2203440,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 3123939,
  "status": "passed"
});
formatter.before({
  "duration": 17842,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"2 4 4 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2440732,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 2033060,
  "status": "passed"
});
formatter.before({
  "duration": 17572,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"4 2 2 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2390745,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 1620723,
  "status": "passed"
});
formatter.before({
  "duration": 16526,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"4 2 4 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2161972,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 832039,
  "status": "passed"
});
formatter.before({
  "duration": 26246,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"4 2 4 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2456553,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 1169068,
  "status": "passed"
});
formatter.before({
  "duration": 17695,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"4 4 2 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2504992,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 894033,
  "status": "passed"
});
formatter.before({
  "duration": 16006,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"4 4 2 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2360974,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 969853,
  "status": "passed"
});
formatter.before({
  "duration": 16688,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "A full house can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-full-house-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "A set of cards with \"C S H D C\" and \"4 4 4 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
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
  "duration": 2298649,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_full_house_in_any_order()"
});
formatter.result({
  "duration": 832954,
  "status": "passed"
});
formatter.before({
  "duration": 17797,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"S S S S S\" and \"2 2 4 5 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4070681,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 2826500,
  "status": "passed"
});
formatter.before({
  "duration": 17053,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"D D D D D\" and \"2 2 4 5 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2585260,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1505478,
  "status": "passed"
});
formatter.before({
  "duration": 15940,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"H H H H H\" and \"2 2 4 5 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2913680,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1675027,
  "status": "passed"
});
formatter.before({
  "duration": 16272,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 4 6 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3192749,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1545221,
  "status": "passed"
});
formatter.before({
  "duration": 16035,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 4 6 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2816656,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 1533303,
  "status": "passed"
});
formatter.before({
  "duration": 16669,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 4 8 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2939196,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 489213,
  "status": "passed"
});
formatter.before({
  "duration": 16206,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 4 8 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3057389,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 401083,
  "status": "passed"
});
formatter.before({
  "duration": 16092,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 4 9 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2946773,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 443312,
  "status": "passed"
});
formatter.before({
  "duration": 16515,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 4 9 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2863644,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 538915,
  "status": "passed"
});
formatter.before({
  "duration": 23272,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 6 4 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3116736,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 437510,
  "status": "passed"
});
formatter.before({
  "duration": 16064,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 6 4 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2844566,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 587018,
  "status": "passed"
});
formatter.before({
  "duration": 20327,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 6 8 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2969665,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 422686,
  "status": "passed"
});
formatter.before({
  "duration": 16448,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 6 8 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4125166,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 271961,
  "status": "passed"
});
formatter.before({
  "duration": 20335,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 6 9 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4107619,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 362263,
  "status": "passed"
});
formatter.before({
  "duration": 19503,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 6 9 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2870216,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 347191,
  "status": "passed"
});
formatter.before({
  "duration": 20296,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 8 4 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3015805,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 650541,
  "status": "passed"
});
formatter.before({
  "duration": 18519,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 8 4 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4441143,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 231104,
  "status": "passed"
});
formatter.before({
  "duration": 16086,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 8 6 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4589886,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 242561,
  "status": "passed"
});
formatter.before({
  "duration": 17175,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 8 6 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4839036,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 263574,
  "status": "passed"
});
formatter.before({
  "duration": 17392,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 8 9 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4638163,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 233419,
  "status": "passed"
});
formatter.before({
  "duration": 20187,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 8 9 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4390608,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 356943,
  "status": "passed"
});
formatter.before({
  "duration": 16188,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 9 4 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4516279,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 232885,
  "status": "passed"
});
formatter.before({
  "duration": 16813,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 9 4 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4357238,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 358425,
  "status": "passed"
});
formatter.before({
  "duration": 30631,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 9 6 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4468392,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 340918,
  "status": "passed"
});
formatter.before({
  "duration": 29251,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 9 6 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4276439,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 378016,
  "status": "passed"
});
formatter.before({
  "duration": 16804,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 9 8 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4331089,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221792,
  "status": "passed"
});
formatter.before({
  "duration": 15546,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"2 9 8 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4278135,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 384172,
  "status": "passed"
});
formatter.before({
  "duration": 16185,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 2 6 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4254389,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 325883,
  "status": "passed"
});
formatter.before({
  "duration": 19044,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 2 6 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4222693,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 371747,
  "status": "passed"
});
formatter.before({
  "duration": 16258,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 2 8 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4366434,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 339860,
  "status": "passed"
});
formatter.before({
  "duration": 15420,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 2 8 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4198702,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 299806,
  "status": "passed"
});
formatter.before({
  "duration": 21162,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 2 9 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4705562,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 352772,
  "status": "passed"
});
formatter.before({
  "duration": 16919,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 2 9 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4477396,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 212389,
  "status": "passed"
});
formatter.before({
  "duration": 15181,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 6 2 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4315612,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 419703,
  "status": "passed"
});
formatter.before({
  "duration": 18851,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 6 2 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4280981,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 301031,
  "status": "passed"
});
formatter.before({
  "duration": 15807,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 6 8 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4167629,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 323221,
  "status": "passed"
});
formatter.before({
  "duration": 15209,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 6 8 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4138819,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 337011,
  "status": "passed"
});
formatter.before({
  "duration": 17619,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 6 9 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4371690,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 204207,
  "status": "passed"
});
formatter.before({
  "duration": 15818,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 6 9 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4168107,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 246019,
  "status": "passed"
});
formatter.before({
  "duration": 14109,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 8 2 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4263653,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 256835,
  "status": "passed"
});
formatter.before({
  "duration": 15135,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;42",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 8 2 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4067455,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 305079,
  "status": "passed"
});
formatter.before({
  "duration": 22933,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;43",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 8 6 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4035763,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 313234,
  "status": "passed"
});
formatter.before({
  "duration": 22453,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;44",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 8 6 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4277120,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 202427,
  "status": "passed"
});
formatter.before({
  "duration": 15482,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;45",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 8 9 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4111306,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 283492,
  "status": "passed"
});
formatter.before({
  "duration": 15125,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;46",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 8 9 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4000964,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 268511,
  "status": "passed"
});
formatter.before({
  "duration": 17982,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;47",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 9 2 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4389248,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 347472,
  "status": "passed"
});
formatter.before({
  "duration": 20443,
  "status": "passed"
});
formatter.scenario({
  "line": 144,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;48",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 9 2 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4378652,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 212441,
  "status": "passed"
});
formatter.before({
  "duration": 18085,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;49",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 9 6 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4372138,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 214103,
  "status": "passed"
});
formatter.before({
  "duration": 16010,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;50",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 9 6 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 8658496,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 215842,
  "status": "passed"
});
formatter.before({
  "duration": 19849,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;51",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 9 8 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2733028,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 188647,
  "status": "passed"
});
formatter.before({
  "duration": 15897,
  "status": "passed"
});
formatter.scenario({
  "line": 148,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;52",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"4 9 8 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2835120,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 200693,
  "status": "passed"
});
formatter.before({
  "duration": 15975,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;53",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 2 4 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2740909,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 188014,
  "status": "passed"
});
formatter.before({
  "duration": 13730,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;54",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 2 4 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2879591,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 329143,
  "status": "passed"
});
formatter.before({
  "duration": 17599,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;55",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 2 8 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2920916,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 271014,
  "status": "passed"
});
formatter.before({
  "duration": 18710,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;56",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 2 8 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2833097,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 278444,
  "status": "passed"
});
formatter.before({
  "duration": 18154,
  "status": "passed"
});
formatter.scenario({
  "line": 153,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;57",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 2 9 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2885441,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 194322,
  "status": "passed"
});
formatter.before({
  "duration": 14596,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;58",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 2 9 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2812425,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 206237,
  "status": "passed"
});
formatter.before({
  "duration": 24034,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;59",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 4 2 8 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2788800,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 194238,
  "status": "passed"
});
formatter.before({
  "duration": 15016,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;60",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 4 2 9 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2892166,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 340457,
  "status": "passed"
});
formatter.before({
  "duration": 16165,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;61",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 4 8 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2816353,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 239797,
  "status": "passed"
});
formatter.before({
  "duration": 15375,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;62",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 4 8 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2864340,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 225904,
  "status": "passed"
});
formatter.before({
  "duration": 16933,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;63",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 4 9 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2773586,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 201211,
  "status": "passed"
});
formatter.before({
  "duration": 15997,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;64",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 4 9 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2770178,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 203267,
  "status": "passed"
});
formatter.before({
  "duration": 16717,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;65",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 8 2 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2820495,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 202262,
  "status": "passed"
});
formatter.before({
  "duration": 16840,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;66",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 8 2 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2802291,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 241489,
  "status": "passed"
});
formatter.before({
  "duration": 16405,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;67",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 8 4 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2790316,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 198776,
  "status": "passed"
});
formatter.before({
  "duration": 15543,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;68",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 8 4 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2862770,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 204103,
  "status": "passed"
});
formatter.before({
  "duration": 17017,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;69",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 8 9 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2869524,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 196466,
  "status": "passed"
});
formatter.before({
  "duration": 15332,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;70",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 8 9 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 6006937,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 339262,
  "status": "passed"
});
formatter.before({
  "duration": 22002,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;71",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 9 2 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3675926,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 258146,
  "status": "passed"
});
formatter.before({
  "duration": 20469,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;72",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 9 2 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2830287,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 231753,
  "status": "passed"
});
formatter.before({
  "duration": 43311,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;73",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 9 4 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2818295,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 233111,
  "status": "passed"
});
formatter.before({
  "duration": 26562,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;74",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 9 4 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2800395,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 211720,
  "status": "passed"
});
formatter.before({
  "duration": 15919,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;75",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 9 8 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2815561,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 214116,
  "status": "passed"
});
formatter.before({
  "duration": 16155,
  "status": "passed"
});
formatter.scenario({
  "line": 172,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;76",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"6 9 8 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2999421,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 223571,
  "status": "passed"
});
formatter.before({
  "duration": 17532,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;77",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 2 4 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2846950,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 208520,
  "status": "passed"
});
formatter.before({
  "duration": 17225,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;78",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 2 4 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3225960,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 224209,
  "status": "passed"
});
formatter.before({
  "duration": 25393,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;79",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 2 6 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2852616,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 251757,
  "status": "passed"
});
formatter.before({
  "duration": 19426,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;80",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 2 6 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3686986,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 297389,
  "status": "passed"
});
formatter.before({
  "duration": 21006,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;81",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 2 9 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2970378,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 206602,
  "status": "passed"
});
formatter.before({
  "duration": 16053,
  "status": "passed"
});
formatter.scenario({
  "line": 178,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;82",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 2 9 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2822207,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 309558,
  "status": "passed"
});
formatter.before({
  "duration": 37716,
  "status": "passed"
});
formatter.scenario({
  "line": 179,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;83",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 4 2 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2899924,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 255653,
  "status": "passed"
});
formatter.before({
  "duration": 17603,
  "status": "passed"
});
formatter.scenario({
  "line": 180,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;84",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 4 2 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3081647,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221398,
  "status": "passed"
});
formatter.before({
  "duration": 17146,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;85",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 4 6 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3029076,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 218690,
  "status": "passed"
});
formatter.before({
  "duration": 17709,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;86",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 4 6 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2808070,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 292375,
  "status": "passed"
});
formatter.before({
  "duration": 19163,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;87",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 4 9 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2885993,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 340287,
  "status": "passed"
});
formatter.before({
  "duration": 16582,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;88",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 4 9 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3236675,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 219178,
  "status": "passed"
});
formatter.before({
  "duration": 23654,
  "status": "passed"
});
formatter.scenario({
  "line": 185,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;89",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 6 2 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3234073,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 232272,
  "status": "passed"
});
formatter.before({
  "duration": 22031,
  "status": "passed"
});
formatter.scenario({
  "line": 186,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;90",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 6 2 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3124304,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 230794,
  "status": "passed"
});
formatter.before({
  "duration": 18316,
  "status": "passed"
});
formatter.scenario({
  "line": 187,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;91",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 6 4 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2972350,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 216848,
  "status": "passed"
});
formatter.before({
  "duration": 18484,
  "status": "passed"
});
formatter.scenario({
  "line": 188,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;92",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 6 4 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2877309,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 228710,
  "status": "passed"
});
formatter.before({
  "duration": 17588,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;93",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 6 9 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2851032,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 217983,
  "status": "passed"
});
formatter.before({
  "duration": 17474,
  "status": "passed"
});
formatter.scenario({
  "line": 190,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;94",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 6 9 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 5206910,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 229193,
  "status": "passed"
});
formatter.before({
  "duration": 18004,
  "status": "passed"
});
formatter.scenario({
  "line": 191,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;95",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 9 2 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3946736,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 864065,
  "status": "passed"
});
formatter.before({
  "duration": 33157,
  "status": "passed"
});
formatter.scenario({
  "line": 192,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;96",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 9 2 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3201792,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 276088,
  "status": "passed"
});
formatter.before({
  "duration": 18567,
  "status": "passed"
});
formatter.scenario({
  "line": 193,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;97",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 9 4 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2980925,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 218640,
  "status": "passed"
});
formatter.before({
  "duration": 17793,
  "status": "passed"
});
formatter.scenario({
  "line": 194,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;98",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 9 4 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3006789,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 257123,
  "status": "passed"
});
formatter.before({
  "duration": 18685,
  "status": "passed"
});
formatter.scenario({
  "line": 195,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;99",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 9 6 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2990765,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 213762,
  "status": "passed"
});
formatter.before({
  "duration": 19443,
  "status": "passed"
});
formatter.scenario({
  "line": 196,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;100",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"8 9 6 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3046079,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 224218,
  "status": "passed"
});
formatter.before({
  "duration": 18713,
  "status": "passed"
});
formatter.scenario({
  "line": 197,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;101",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 2 4 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3083391,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 221594,
  "status": "passed"
});
formatter.before({
  "duration": 17518,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;102",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 2 4 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2867730,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 213704,
  "status": "passed"
});
formatter.before({
  "duration": 20418,
  "status": "passed"
});
formatter.scenario({
  "line": 199,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;103",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 2 6 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 4387426,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 216053,
  "status": "passed"
});
formatter.before({
  "duration": 17912,
  "status": "passed"
});
formatter.scenario({
  "line": 200,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;104",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 2 6 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2929675,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 206096,
  "status": "passed"
});
formatter.before({
  "duration": 16127,
  "status": "passed"
});
formatter.scenario({
  "line": 201,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;105",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 2 8 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2908349,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 201183,
  "status": "passed"
});
formatter.before({
  "duration": 27013,
  "status": "passed"
});
formatter.scenario({
  "line": 202,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;106",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 2 8 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2786618,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 389789,
  "status": "passed"
});
formatter.before({
  "duration": 16586,
  "status": "passed"
});
formatter.scenario({
  "line": 203,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;107",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 4 2 6 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3556294,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 542285,
  "status": "passed"
});
formatter.before({
  "duration": 29867,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;108",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 4 2 8 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 3925219,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 748436,
  "status": "passed"
});
formatter.before({
  "duration": 75590,
  "status": "passed"
});
formatter.scenario({
  "line": 205,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;109",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 4 6 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2935430,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 223407,
  "status": "passed"
});
formatter.before({
  "duration": 17199,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;110",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 4 6 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2902472,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 353642,
  "status": "passed"
});
formatter.before({
  "duration": 18528,
  "status": "passed"
});
formatter.scenario({
  "line": 207,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;111",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 4 8 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2817125,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 254946,
  "status": "passed"
});
formatter.before({
  "duration": 16885,
  "status": "passed"
});
formatter.scenario({
  "line": 208,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;112",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 4 8 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2791007,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 208787,
  "status": "passed"
});
formatter.before({
  "duration": 16384,
  "status": "passed"
});
formatter.scenario({
  "line": 209,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;113",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 6 2 4 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2838049,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 236320,
  "status": "passed"
});
formatter.before({
  "duration": 17270,
  "status": "passed"
});
formatter.scenario({
  "line": 210,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;114",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 6 2 8 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2891561,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 219332,
  "status": "passed"
});
formatter.before({
  "duration": 30043,
  "status": "passed"
});
formatter.scenario({
  "line": 211,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;115",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 6 4 2 8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2825376,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 215750,
  "status": "passed"
});
formatter.before({
  "duration": 34739,
  "status": "passed"
});
formatter.scenario({
  "line": 212,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;116",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 6 4 8 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2903926,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 366849,
  "status": "passed"
});
formatter.before({
  "duration": 15739,
  "status": "passed"
});
formatter.scenario({
  "line": 213,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;117",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 6 8 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2834140,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 326101,
  "status": "passed"
});
formatter.before({
  "duration": 15128,
  "status": "passed"
});
formatter.scenario({
  "line": 214,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;118",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 6 8 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2811031,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 211895,
  "status": "passed"
});
formatter.before({
  "duration": 18014,
  "status": "passed"
});
formatter.scenario({
  "line": 215,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;119",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 8 2 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2958482,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 217205,
  "status": "passed"
});
formatter.before({
  "duration": 16714,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;120",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 8 2 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2777444,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 228990,
  "status": "passed"
});
formatter.before({
  "duration": 17379,
  "status": "passed"
});
formatter.scenario({
  "line": 217,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;121",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 8 4 2 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2786265,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 200287,
  "status": "passed"
});
formatter.before({
  "duration": 14349,
  "status": "passed"
});
formatter.scenario({
  "line": 218,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;122",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 8 4 6 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2775758,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 208088,
  "status": "passed"
});
formatter.before({
  "duration": 15523,
  "status": "passed"
});
formatter.scenario({
  "line": 219,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;123",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 8 6 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2881900,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 210665,
  "status": "passed"
});
formatter.before({
  "duration": 15532,
  "status": "passed"
});
formatter.scenario({
  "line": 220,
  "name": "A flush can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-flush-can-be-determined-given-any-order;;124",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "A set of cards with \"C C C C C\" and \"9 8 6 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
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
  "duration": 2863776,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_flush_in_any_order()"
});
formatter.result({
  "duration": 211137,
  "status": "passed"
});
formatter.before({
  "duration": 15408,
  "status": "passed"
});
formatter.scenario({
  "line": 228,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 4 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3085027,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 8786695,
  "status": "passed"
});
formatter.before({
  "duration": 26866,
  "status": "passed"
});
formatter.scenario({
  "line": 229,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 4 5 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3613236,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3139622,
  "status": "passed"
});
formatter.before({
  "duration": 16946,
  "status": "passed"
});
formatter.scenario({
  "line": 230,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 4 6 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3056956,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2812716,
  "status": "passed"
});
formatter.before({
  "duration": 18390,
  "status": "passed"
});
formatter.scenario({
  "line": 231,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 4 6 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3269409,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3464453,
  "status": "passed"
});
formatter.before({
  "duration": 20698,
  "status": "passed"
});
formatter.scenario({
  "line": 232,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 4 7 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3542322,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2333249,
  "status": "passed"
});
formatter.before({
  "duration": 15684,
  "status": "passed"
});
formatter.scenario({
  "line": 233,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 4 7 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3134871,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1842025,
  "status": "passed"
});
formatter.before({
  "duration": 15308,
  "status": "passed"
});
formatter.scenario({
  "line": 234,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 5 4 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3077601,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1850283,
  "status": "passed"
});
formatter.before({
  "duration": 17104,
  "status": "passed"
});
formatter.scenario({
  "line": 235,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 5 4 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3406239,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2237494,
  "status": "passed"
});
formatter.before({
  "duration": 19995,
  "status": "passed"
});
formatter.scenario({
  "line": 236,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 5 6 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3383517,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2266849,
  "status": "passed"
});
formatter.before({
  "duration": 19471,
  "status": "passed"
});
formatter.scenario({
  "line": 237,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 5 6 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3442427,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2423751,
  "status": "passed"
});
formatter.before({
  "duration": 24294,
  "status": "passed"
});
formatter.scenario({
  "line": 238,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 5 7 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4638191,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2635863,
  "status": "passed"
});
formatter.before({
  "duration": 23968,
  "status": "passed"
});
formatter.scenario({
  "line": 239,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 5 7 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4845655,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2806897,
  "status": "passed"
});
formatter.before({
  "duration": 23529,
  "status": "passed"
});
formatter.scenario({
  "line": 240,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 6 4 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4869843,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2810790,
  "status": "passed"
});
formatter.before({
  "duration": 26267,
  "status": "passed"
});
formatter.scenario({
  "line": 241,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 6 4 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4812595,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2784109,
  "status": "passed"
});
formatter.before({
  "duration": 31550,
  "status": "passed"
});
formatter.scenario({
  "line": 242,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 6 5 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3378473,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2144062,
  "status": "passed"
});
formatter.before({
  "duration": 21840,
  "status": "passed"
});
formatter.scenario({
  "line": 243,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 6 5 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3449350,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1965350,
  "status": "passed"
});
formatter.before({
  "duration": 18426,
  "status": "passed"
});
formatter.scenario({
  "line": 244,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 6 7 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3239373,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1643913,
  "status": "passed"
});
formatter.before({
  "duration": 18710,
  "status": "passed"
});
formatter.scenario({
  "line": 245,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 6 7 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3260757,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1601767,
  "status": "passed"
});
formatter.before({
  "duration": 24121,
  "status": "passed"
});
formatter.scenario({
  "line": 246,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 7 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3395010,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1879546,
  "status": "passed"
});
formatter.before({
  "duration": 18693,
  "status": "passed"
});
formatter.scenario({
  "line": 247,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 7 4 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3778398,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1581196,
  "status": "passed"
});
formatter.before({
  "duration": 15749,
  "status": "passed"
});
formatter.scenario({
  "line": 248,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 7 5 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3286343,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1578206,
  "status": "passed"
});
formatter.before({
  "duration": 15559,
  "status": "passed"
});
formatter.scenario({
  "line": 249,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 7 5 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3062472,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1593439,
  "status": "passed"
});
formatter.before({
  "duration": 17834,
  "status": "passed"
});
formatter.scenario({
  "line": 250,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 7 6 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3037375,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1622045,
  "status": "passed"
});
formatter.before({
  "duration": 20375,
  "status": "passed"
});
formatter.scenario({
  "line": 251,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"3 7 6 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3082074,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1585078,
  "status": "passed"
});
formatter.before({
  "duration": 15689,
  "status": "passed"
});
formatter.scenario({
  "line": 252,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 3 5 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3036887,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1547464,
  "status": "passed"
});
formatter.before({
  "duration": 19837,
  "status": "passed"
});
formatter.scenario({
  "line": 253,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 3 5 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3273610,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1620128,
  "status": "passed"
});
formatter.before({
  "duration": 16719,
  "status": "passed"
});
formatter.scenario({
  "line": 254,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 3 6 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3020306,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1643245,
  "status": "passed"
});
formatter.before({
  "duration": 27106,
  "status": "passed"
});
formatter.scenario({
  "line": 255,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 3 6 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3338757,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1797197,
  "status": "passed"
});
formatter.before({
  "duration": 16718,
  "status": "passed"
});
formatter.scenario({
  "line": 256,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 3 7 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3148702,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1546590,
  "status": "passed"
});
formatter.before({
  "duration": 15912,
  "status": "passed"
});
formatter.scenario({
  "line": 257,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 3 7 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3031399,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1718309,
  "status": "passed"
});
formatter.before({
  "duration": 15135,
  "status": "passed"
});
formatter.scenario({
  "line": 258,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 5 3 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3250207,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1530820,
  "status": "passed"
});
formatter.before({
  "duration": 16362,
  "status": "passed"
});
formatter.scenario({
  "line": 259,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 5 3 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3064935,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1660110,
  "status": "passed"
});
formatter.before({
  "duration": 17017,
  "status": "passed"
});
formatter.scenario({
  "line": 260,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 5 6 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3059314,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1698403,
  "status": "passed"
});
formatter.before({
  "duration": 17431,
  "status": "passed"
});
formatter.scenario({
  "line": 261,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 5 6 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3253371,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1521221,
  "status": "passed"
});
formatter.before({
  "duration": 17295,
  "status": "passed"
});
formatter.scenario({
  "line": 262,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 5 7 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3832219,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1643726,
  "status": "passed"
});
formatter.before({
  "duration": 16603,
  "status": "passed"
});
formatter.scenario({
  "line": 263,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 5 7 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3099315,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2964622,
  "status": "passed"
});
formatter.before({
  "duration": 18920,
  "status": "passed"
});
formatter.scenario({
  "line": 264,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 6 3 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3899680,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1617498,
  "status": "passed"
});
formatter.before({
  "duration": 22884,
  "status": "passed"
});
formatter.scenario({
  "line": 265,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 6 3 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4042054,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3818125,
  "status": "passed"
});
formatter.before({
  "duration": 18920,
  "status": "passed"
});
formatter.scenario({
  "line": 266,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 6 5 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4758069,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3585566,
  "status": "passed"
});
formatter.before({
  "duration": 18846,
  "status": "passed"
});
formatter.scenario({
  "line": 267,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 6 5 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5014037,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3608708,
  "status": "passed"
});
formatter.before({
  "duration": 20097,
  "status": "passed"
});
formatter.scenario({
  "line": 268,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;42",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 6 7 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4821988,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3523034,
  "status": "passed"
});
formatter.before({
  "duration": 18365,
  "status": "passed"
});
formatter.scenario({
  "line": 269,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;43",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 6 7 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4625355,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3868962,
  "status": "passed"
});
formatter.before({
  "duration": 17157,
  "status": "passed"
});
formatter.scenario({
  "line": 270,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;44",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 7 3 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5531277,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5386479,
  "status": "passed"
});
formatter.before({
  "duration": 28407,
  "status": "passed"
});
formatter.scenario({
  "line": 271,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;45",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 7 3 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5913203,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4513151,
  "status": "passed"
});
formatter.before({
  "duration": 46174,
  "status": "passed"
});
formatter.scenario({
  "line": 272,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;46",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 7 5 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 6602561,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4132554,
  "status": "passed"
});
formatter.before({
  "duration": 19879,
  "status": "passed"
});
formatter.scenario({
  "line": 273,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;47",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 7 5 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5437767,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4189992,
  "status": "passed"
});
formatter.before({
  "duration": 28096,
  "status": "passed"
});
formatter.scenario({
  "line": 274,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;48",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 7 6 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5430669,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3564773,
  "status": "passed"
});
formatter.before({
  "duration": 19355,
  "status": "passed"
});
formatter.scenario({
  "line": 275,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;49",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"4 7 6 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4588124,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3521985,
  "status": "passed"
});
formatter.before({
  "duration": 18893,
  "status": "passed"
});
formatter.scenario({
  "line": 276,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;50",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 3 4 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5344940,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3517881,
  "status": "passed"
});
formatter.before({
  "duration": 29984,
  "status": "passed"
});
formatter.scenario({
  "line": 277,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;51",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 3 4 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4562374,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3896857,
  "status": "passed"
});
formatter.before({
  "duration": 19997,
  "status": "passed"
});
formatter.scenario({
  "line": 278,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;52",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 3 6 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5221933,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3828490,
  "status": "passed"
});
formatter.before({
  "duration": 20238,
  "status": "passed"
});
formatter.scenario({
  "line": 279,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;53",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 3 6 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4610842,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3786907,
  "status": "passed"
});
formatter.before({
  "duration": 18955,
  "status": "passed"
});
formatter.scenario({
  "line": 280,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;54",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 3 7 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4587184,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3675581,
  "status": "passed"
});
formatter.before({
  "duration": 19274,
  "status": "passed"
});
formatter.scenario({
  "line": 281,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;55",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 3 7 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5074136,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3649789,
  "status": "passed"
});
formatter.before({
  "duration": 25050,
  "status": "passed"
});
formatter.scenario({
  "line": 282,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;56",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 4 3 6 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4961610,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3801914,
  "status": "passed"
});
formatter.before({
  "duration": 19595,
  "status": "passed"
});
formatter.scenario({
  "line": 283,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;57",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 4 3 7 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4932548,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3808443,
  "status": "passed"
});
formatter.before({
  "duration": 18013,
  "status": "passed"
});
formatter.scenario({
  "line": 284,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;58",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 4 6 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5543879,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3484471,
  "status": "passed"
});
formatter.before({
  "duration": 23252,
  "status": "passed"
});
formatter.scenario({
  "line": 285,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;59",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 4 6 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5589745,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3655024,
  "status": "passed"
});
formatter.before({
  "duration": 23655,
  "status": "passed"
});
formatter.scenario({
  "line": 286,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;60",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 4 7 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5431841,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4403339,
  "status": "passed"
});
formatter.before({
  "duration": 20321,
  "status": "passed"
});
formatter.scenario({
  "line": 287,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;61",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 4 7 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4544668,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3718350,
  "status": "passed"
});
formatter.before({
  "duration": 25941,
  "status": "passed"
});
formatter.scenario({
  "line": 288,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;62",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 6 3 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4767273,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3649696,
  "status": "passed"
});
formatter.before({
  "duration": 18270,
  "status": "passed"
});
formatter.scenario({
  "line": 289,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;63",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 6 3 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4472322,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3642317,
  "status": "passed"
});
formatter.before({
  "duration": 37767,
  "status": "passed"
});
formatter.scenario({
  "line": 290,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;64",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 6 4 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5980964,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 4230041,
  "status": "passed"
});
formatter.before({
  "duration": 41546,
  "status": "passed"
});
formatter.scenario({
  "line": 291,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;65",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 6 4 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5125494,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3764224,
  "status": "passed"
});
formatter.before({
  "duration": 16885,
  "status": "passed"
});
formatter.scenario({
  "line": 292,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;66",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 6 7 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4892943,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3589126,
  "status": "passed"
});
formatter.before({
  "duration": 17643,
  "status": "passed"
});
formatter.scenario({
  "line": 293,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;67",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 6 7 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4837341,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 5074174,
  "status": "passed"
});
formatter.before({
  "duration": 27230,
  "status": "passed"
});
formatter.scenario({
  "line": 294,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;68",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 7 3 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4861572,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3663352,
  "status": "passed"
});
formatter.before({
  "duration": 18363,
  "status": "passed"
});
formatter.scenario({
  "line": 295,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;69",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 7 3 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5174158,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 3747202,
  "status": "passed"
});
formatter.before({
  "duration": 17173,
  "status": "passed"
});
formatter.scenario({
  "line": 296,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;70",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 7 4 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 5000243,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 9490709,
  "status": "passed"
});
formatter.before({
  "duration": 23070,
  "status": "passed"
});
formatter.scenario({
  "line": 297,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;71",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 7 4 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3067750,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1734269,
  "status": "passed"
});
formatter.before({
  "duration": 25987,
  "status": "passed"
});
formatter.scenario({
  "line": 298,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;72",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 7 6 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3294450,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1597649,
  "status": "passed"
});
formatter.before({
  "duration": 19106,
  "status": "passed"
});
formatter.scenario({
  "line": 299,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;73",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"5 7 6 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4537766,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1602443,
  "status": "passed"
});
formatter.before({
  "duration": 17559,
  "status": "passed"
});
formatter.scenario({
  "line": 300,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;74",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 3 4 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3111548,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1630023,
  "status": "passed"
});
formatter.before({
  "duration": 16907,
  "status": "passed"
});
formatter.scenario({
  "line": 301,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;75",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 3 4 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3101771,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 2106242,
  "status": "passed"
});
formatter.before({
  "duration": 17402,
  "status": "passed"
});
formatter.scenario({
  "line": 302,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;76",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 3 5 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 4380403,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1581262,
  "status": "passed"
});
formatter.before({
  "duration": 18309,
  "status": "passed"
});
formatter.scenario({
  "line": 303,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;77",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 3 5 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3168839,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1604914,
  "status": "passed"
});
formatter.before({
  "duration": 31022,
  "status": "passed"
});
formatter.scenario({
  "line": 304,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;78",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 3 7 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3088621,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1682017,
  "status": "passed"
});
formatter.before({
  "duration": 18840,
  "status": "passed"
});
formatter.scenario({
  "line": 305,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;79",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 3 7 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3143797,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1565594,
  "status": "passed"
});
formatter.before({
  "duration": 48382,
  "status": "passed"
});
formatter.scenario({
  "line": 306,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;80",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 4 3 5 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3215129,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1642606,
  "status": "passed"
});
formatter.before({
  "duration": 17289,
  "status": "passed"
});
formatter.scenario({
  "line": 307,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;81",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 4 3 7 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3072917,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1605433,
  "status": "passed"
});
formatter.before({
  "duration": 17575,
  "status": "passed"
});
formatter.scenario({
  "line": 308,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;82",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 4 5 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3201272,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1580791,
  "status": "passed"
});
formatter.before({
  "duration": 16589,
  "status": "passed"
});
formatter.scenario({
  "line": 309,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;83",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 4 5 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3084664,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1587839,
  "status": "passed"
});
formatter.before({
  "duration": 15542,
  "status": "passed"
});
formatter.scenario({
  "line": 310,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;84",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 4 7 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3087887,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1538936,
  "status": "passed"
});
formatter.before({
  "duration": 15150,
  "status": "passed"
});
formatter.scenario({
  "line": 311,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;85",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 4 7 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3049996,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1640623,
  "status": "passed"
});
formatter.before({
  "duration": 15849,
  "status": "passed"
});
formatter.scenario({
  "line": 312,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;86",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 5 3 4 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3081732,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1589016,
  "status": "passed"
});
formatter.before({
  "duration": 16305,
  "status": "passed"
});
formatter.scenario({
  "line": 313,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;87",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 5 3 7 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3135212,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1741883,
  "status": "passed"
});
formatter.before({
  "duration": 17282,
  "status": "passed"
});
formatter.scenario({
  "line": 314,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;88",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 5 4 3 7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3171431,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1711196,
  "status": "passed"
});
formatter.before({
  "duration": 15027,
  "status": "passed"
});
formatter.scenario({
  "line": 315,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;89",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 5 4 7 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3065167,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1571983,
  "status": "passed"
});
formatter.before({
  "duration": 16249,
  "status": "passed"
});
formatter.scenario({
  "line": 316,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;90",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 5 7 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3122980,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1607765,
  "status": "passed"
});
formatter.before({
  "duration": 15515,
  "status": "passed"
});
formatter.scenario({
  "line": 317,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;91",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 5 7 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3030273,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1564347,
  "status": "passed"
});
formatter.before({
  "duration": 15656,
  "status": "passed"
});
formatter.scenario({
  "line": 318,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;92",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 7 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3094447,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1610633,
  "status": "passed"
});
formatter.before({
  "duration": 15272,
  "status": "passed"
});
formatter.scenario({
  "line": 319,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;93",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 7 3 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3091275,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1594348,
  "status": "passed"
});
formatter.before({
  "duration": 15983,
  "status": "passed"
});
formatter.scenario({
  "line": 320,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;94",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 7 4 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3184536,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1589236,
  "status": "passed"
});
formatter.before({
  "duration": 16341,
  "status": "passed"
});
formatter.scenario({
  "line": 321,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;95",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 7 4 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3043258,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1575847,
  "status": "passed"
});
formatter.before({
  "duration": 15563,
  "status": "passed"
});
formatter.scenario({
  "line": 322,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;96",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 7 5 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3173753,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1582859,
  "status": "passed"
});
formatter.before({
  "duration": 15558,
  "status": "passed"
});
formatter.scenario({
  "line": 323,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;97",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"6 7 5 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3151204,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1745214,
  "status": "passed"
});
formatter.before({
  "duration": 16727,
  "status": "passed"
});
formatter.scenario({
  "line": 324,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;98",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 3 4 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3245304,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1577389,
  "status": "passed"
});
formatter.before({
  "duration": 17434,
  "status": "passed"
});
formatter.scenario({
  "line": 325,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;99",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 3 4 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3111917,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1587493,
  "status": "passed"
});
formatter.before({
  "duration": 15637,
  "status": "passed"
});
formatter.scenario({
  "line": 326,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;100",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 3 5 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3116429,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1571969,
  "status": "passed"
});
formatter.before({
  "duration": 15600,
  "status": "passed"
});
formatter.scenario({
  "line": 327,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;101",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 3 5 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3410601,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1572674,
  "status": "passed"
});
formatter.before({
  "duration": 15863,
  "status": "passed"
});
formatter.scenario({
  "line": 328,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;102",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 3 6 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3160142,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1625925,
  "status": "passed"
});
formatter.before({
  "duration": 16426,
  "status": "passed"
});
formatter.scenario({
  "line": 329,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;103",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 3 6 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3083224,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1577723,
  "status": "passed"
});
formatter.before({
  "duration": 16277,
  "status": "passed"
});
formatter.scenario({
  "line": 330,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;104",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 4 3 5 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3120322,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1583282,
  "status": "passed"
});
formatter.before({
  "duration": 14917,
  "status": "passed"
});
formatter.scenario({
  "line": 331,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;105",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 4 3 6 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3146020,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1703171,
  "status": "passed"
});
formatter.before({
  "duration": 39056,
  "status": "passed"
});
formatter.scenario({
  "line": 332,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;106",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 4 5 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3200913,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1565759,
  "status": "passed"
});
formatter.before({
  "duration": 17538,
  "status": "passed"
});
formatter.scenario({
  "line": 333,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;107",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 4 5 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3181465,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1713846,
  "status": "passed"
});
formatter.before({
  "duration": 17109,
  "status": "passed"
});
formatter.scenario({
  "line": 334,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;108",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 4 6 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3040127,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1724593,
  "status": "passed"
});
formatter.before({
  "duration": 17094,
  "status": "passed"
});
formatter.scenario({
  "line": 335,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;109",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 4 6 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3076913,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1989325,
  "status": "passed"
});
formatter.before({
  "duration": 16889,
  "status": "passed"
});
formatter.scenario({
  "line": 336,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;110",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 5 3 4 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3108659,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1562897,
  "status": "passed"
});
formatter.before({
  "duration": 15026,
  "status": "passed"
});
formatter.scenario({
  "line": 337,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;111",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 5 3 6 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3096220,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1613830,
  "status": "passed"
});
formatter.before({
  "duration": 15846,
  "status": "passed"
});
formatter.scenario({
  "line": 338,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;112",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 5 4 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3064402,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1666845,
  "status": "passed"
});
formatter.before({
  "duration": 16302,
  "status": "passed"
});
formatter.scenario({
  "line": 339,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;113",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 5 4 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3176825,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1569657,
  "status": "passed"
});
formatter.before({
  "duration": 15616,
  "status": "passed"
});
formatter.scenario({
  "line": 340,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;114",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 5 6 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3132347,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1559061,
  "status": "passed"
});
formatter.before({
  "duration": 14232,
  "status": "passed"
});
formatter.scenario({
  "line": 341,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;115",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 5 6 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3034471,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1577891,
  "status": "passed"
});
formatter.before({
  "duration": 13989,
  "status": "passed"
});
formatter.scenario({
  "line": 342,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;116",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 6 3 4 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 2993610,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1805244,
  "status": "passed"
});
formatter.before({
  "duration": 15287,
  "status": "passed"
});
formatter.scenario({
  "line": 343,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;117",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 6 3 5 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3227547,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1587273,
  "status": "passed"
});
formatter.before({
  "duration": 14849,
  "status": "passed"
});
formatter.scenario({
  "line": 344,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;118",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 6 4 3 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3081508,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1536715,
  "status": "passed"
});
formatter.before({
  "duration": 14564,
  "status": "passed"
});
formatter.scenario({
  "line": 345,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;119",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 6 4 5 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3114804,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1529147,
  "status": "passed"
});
formatter.before({
  "duration": 13698,
  "status": "passed"
});
formatter.scenario({
  "line": 346,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;120",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 6 5 3 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3084127,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1721013,
  "status": "passed"
});
formatter.before({
  "duration": 15707,
  "status": "passed"
});
formatter.scenario({
  "line": 347,
  "name": "A straight can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-straight-can-be-determined-given-any-order;;121",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 223,
  "name": "A set of cards with \"C D H S C\" and \"7 6 5 4 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 224,
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
  "duration": 3019747,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_straight_in_any_order()"
});
formatter.result({
  "duration": 1546485,
  "status": "passed"
});
formatter.before({
  "duration": 24387,
  "status": "passed"
});
formatter.scenario({
  "line": 356,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 2 2 10 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2395688,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1742470,
  "status": "passed"
});
formatter.before({
  "duration": 16074,
  "status": "passed"
});
formatter.scenario({
  "line": 357,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 2 2 5 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2374095,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1650120,
  "status": "passed"
});
formatter.before({
  "duration": 15106,
  "status": "passed"
});
formatter.scenario({
  "line": 358,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 2 2 10 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2440106,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1630163,
  "status": "passed"
});
formatter.before({
  "duration": 14516,
  "status": "passed"
});
formatter.scenario({
  "line": 359,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 2 5 2 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2360075,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1625312,
  "status": "passed"
});
formatter.before({
  "duration": 15118,
  "status": "passed"
});
formatter.scenario({
  "line": 360,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 2 5 10 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2530478,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1295687,
  "status": "passed"
});
formatter.before({
  "duration": 20908,
  "status": "passed"
});
formatter.scenario({
  "line": 361,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 2 10 2 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2365845,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 515392,
  "status": "passed"
});
formatter.before({
  "duration": 15407,
  "status": "passed"
});
formatter.scenario({
  "line": 362,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 2 10 5 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2397103,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 518260,
  "status": "passed"
});
formatter.before({
  "duration": 29115,
  "status": "passed"
});
formatter.scenario({
  "line": 363,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 5 2 2 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2420866,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 545249,
  "status": "passed"
});
formatter.before({
  "duration": 14034,
  "status": "passed"
});
formatter.scenario({
  "line": 364,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 5 2 10 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2923886,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 652028,
  "status": "passed"
});
formatter.before({
  "duration": 15612,
  "status": "passed"
});
formatter.scenario({
  "line": 365,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 5 10 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2378055,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 513475,
  "status": "passed"
});
formatter.before({
  "duration": 13879,
  "status": "passed"
});
formatter.scenario({
  "line": 366,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 10 2 2 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2733237,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 534484,
  "status": "passed"
});
formatter.before({
  "duration": 15363,
  "status": "passed"
});
formatter.scenario({
  "line": 367,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 10 2 5 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2632977,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 524064,
  "status": "passed"
});
formatter.before({
  "duration": 15513,
  "status": "passed"
});
formatter.scenario({
  "line": 368,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"2 10 5 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2381459,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 278251,
  "status": "passed"
});
formatter.before({
  "duration": 15501,
  "status": "passed"
});
formatter.scenario({
  "line": 369,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"5 2 2 2 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2513365,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 284868,
  "status": "passed"
});
formatter.before({
  "duration": 16268,
  "status": "passed"
});
formatter.scenario({
  "line": 370,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"5 2 2 10 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2417793,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 273790,
  "status": "passed"
});
formatter.before({
  "duration": 14443,
  "status": "passed"
});
formatter.scenario({
  "line": 371,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"5 2 10 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2455598,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 584228,
  "status": "passed"
});
formatter.before({
  "duration": 13493,
  "status": "passed"
});
formatter.scenario({
  "line": 372,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"5 10 2 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2432863,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 287093,
  "status": "passed"
});
formatter.before({
  "duration": 14816,
  "status": "passed"
});
formatter.scenario({
  "line": 373,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"10 2 2 2 5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2431706,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 275076,
  "status": "passed"
});
formatter.before({
  "duration": 14553,
  "status": "passed"
});
formatter.scenario({
  "line": 374,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"10 2 2 5 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2443223,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 277471,
  "status": "passed"
});
formatter.before({
  "duration": 14221,
  "status": "passed"
});
formatter.scenario({
  "line": 375,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"10 2 5 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2437762,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 290355,
  "status": "passed"
});
formatter.before({
  "duration": 15463,
  "status": "passed"
});
formatter.scenario({
  "line": 376,
  "name": "A three of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-three-of-a-kind-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 351,
  "name": "A set of cards with \"C H S S D\" and \"10 5 2 2 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 352,
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
  "duration": 2398939,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_three_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 279612,
  "status": "passed"
});
formatter.before({
  "duration": 15425,
  "status": "passed"
});
formatter.scenario({
  "line": 384,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"2 4 4 9 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3183630,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 3913776,
  "status": "passed"
});
formatter.before({
  "duration": 15930,
  "status": "passed"
});
formatter.scenario({
  "line": 385,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"2 4 9 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3125555,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 2200040,
  "status": "passed"
});
formatter.before({
  "duration": 15248,
  "status": "passed"
});
formatter.scenario({
  "line": 386,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"2 4 9 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2883907,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 2070438,
  "status": "passed"
});
formatter.before({
  "duration": 15581,
  "status": "passed"
});
formatter.scenario({
  "line": 387,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"2 9 4 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3018356,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 2236439,
  "status": "passed"
});
formatter.before({
  "duration": 16380,
  "status": "passed"
});
formatter.scenario({
  "line": 388,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"2 9 4 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3066925,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1567156,
  "status": "passed"
});
formatter.before({
  "duration": 15727,
  "status": "passed"
});
formatter.scenario({
  "line": 389,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"2 9 9 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2943797,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 899008,
  "status": "passed"
});
formatter.before({
  "duration": 21857,
  "status": "passed"
});
formatter.scenario({
  "line": 390,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 2 4 9 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2956948,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 896975,
  "status": "passed"
});
formatter.before({
  "duration": 15565,
  "status": "passed"
});
formatter.scenario({
  "line": 391,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 2 9 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2945883,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 891844,
  "status": "passed"
});
formatter.before({
  "duration": 20748,
  "status": "passed"
});
formatter.scenario({
  "line": 392,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 2 9 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3248849,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 885966,
  "status": "passed"
});
formatter.before({
  "duration": 16092,
  "status": "passed"
});
formatter.scenario({
  "line": 393,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 4 2 9 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2876329,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 907552,
  "status": "passed"
});
formatter.before({
  "duration": 14356,
  "status": "passed"
});
formatter.scenario({
  "line": 394,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 4 9 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3037905,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 919210,
  "status": "passed"
});
formatter.before({
  "duration": 15353,
  "status": "passed"
});
formatter.scenario({
  "line": 395,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 4 9 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3339336,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 1045700,
  "status": "passed"
});
formatter.before({
  "duration": 15195,
  "status": "passed"
});
formatter.scenario({
  "line": 396,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 9 2 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3098264,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 891583,
  "status": "passed"
});
formatter.before({
  "duration": 14801,
  "status": "passed"
});
formatter.scenario({
  "line": 397,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 9 2 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2844989,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 703430,
  "status": "passed"
});
formatter.before({
  "duration": 12705,
  "status": "passed"
});
formatter.scenario({
  "line": 398,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 9 4 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2947101,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 699784,
  "status": "passed"
});
formatter.before({
  "duration": 16315,
  "status": "passed"
});
formatter.scenario({
  "line": 399,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 9 4 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3071869,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 988050,
  "status": "passed"
});
formatter.before({
  "duration": 14514,
  "status": "passed"
});
formatter.scenario({
  "line": 400,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 9 9 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 5104612,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 883819,
  "status": "passed"
});
formatter.before({
  "duration": 15719,
  "status": "passed"
});
formatter.scenario({
  "line": 401,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"4 9 9 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2894994,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 832304,
  "status": "passed"
});
formatter.before({
  "duration": 15929,
  "status": "passed"
});
formatter.scenario({
  "line": 402,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 2 4 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2946466,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 852689,
  "status": "passed"
});
formatter.before({
  "duration": 15972,
  "status": "passed"
});
formatter.scenario({
  "line": 403,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 2 4 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2947408,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 835620,
  "status": "passed"
});
formatter.before({
  "duration": 25301,
  "status": "passed"
});
formatter.scenario({
  "line": 404,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 2 9 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2929394,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 837353,
  "status": "passed"
});
formatter.before({
  "duration": 16443,
  "status": "passed"
});
formatter.scenario({
  "line": 405,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 4 2 4 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2980572,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 906589,
  "status": "passed"
});
formatter.before({
  "duration": 18377,
  "status": "passed"
});
formatter.scenario({
  "line": 406,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 4 2 9 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2997388,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 846223,
  "status": "passed"
});
formatter.before({
  "duration": 15455,
  "status": "passed"
});
formatter.scenario({
  "line": 407,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 4 4 2 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2886676,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 669308,
  "status": "passed"
});
formatter.before({
  "duration": 14838,
  "status": "passed"
});
formatter.scenario({
  "line": 408,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 4 4 9 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2899700,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 739858,
  "status": "passed"
});
formatter.before({
  "duration": 14674,
  "status": "passed"
});
formatter.scenario({
  "line": 409,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 4 9 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2867716,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 665112,
  "status": "passed"
});
formatter.before({
  "duration": 13114,
  "status": "passed"
});
formatter.scenario({
  "line": 410,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 4 9 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 3046109,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 698142,
  "status": "passed"
});
formatter.before({
  "duration": 14974,
  "status": "passed"
});
formatter.scenario({
  "line": 411,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 9 2 4 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2813487,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 688399,
  "status": "passed"
});
formatter.before({
  "duration": 14328,
  "status": "passed"
});
formatter.scenario({
  "line": 412,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 9 4 2 4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2960669,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 670110,
  "status": "passed"
});
formatter.before({
  "duration": 14140,
  "status": "passed"
});
formatter.scenario({
  "line": 413,
  "name": "A two pair hand can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-pair-hand-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 379,
  "name": "A set of cards with \"C S H D C\" and \"9 9 4 4 2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 380,
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
  "duration": 2916130,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_pair_in_any_order()"
});
formatter.result({
  "duration": 665840,
  "status": "passed"
});
formatter.before({
  "duration": 13275,
  "status": "passed"
});
formatter.scenario({
  "line": 421,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 3 6 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3356479,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1990857,
  "status": "passed"
});
formatter.before({
  "duration": 16884,
  "status": "passed"
});
formatter.scenario({
  "line": 422,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 3 6 10 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3204879,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1816609,
  "status": "passed"
});
formatter.before({
  "duration": 15405,
  "status": "passed"
});
formatter.scenario({
  "line": 423,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 3 9 6 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3473082,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1708048,
  "status": "passed"
});
formatter.before({
  "duration": 52113,
  "status": "passed"
});
formatter.scenario({
  "line": 424,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 3 9 10 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3142316,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 2583699,
  "status": "passed"
});
formatter.before({
  "duration": 119922,
  "status": "passed"
});
formatter.scenario({
  "line": 425,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 3 10 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 5417973,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 1507019,
  "status": "passed"
});
formatter.before({
  "duration": 17337,
  "status": "passed"
});
formatter.scenario({
  "line": 426,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 3 10 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3211446,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 623979,
  "status": "passed"
});
formatter.before({
  "duration": 32427,
  "status": "passed"
});
formatter.scenario({
  "line": 427,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 6 3 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2989950,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 630249,
  "status": "passed"
});
formatter.before({
  "duration": 12576,
  "status": "passed"
});
formatter.scenario({
  "line": 428,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 6 3 10 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3114425,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 609883,
  "status": "passed"
});
formatter.before({
  "duration": 13130,
  "status": "passed"
});
formatter.scenario({
  "line": 429,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 6 9 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2991725,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 592857,
  "status": "passed"
});
formatter.before({
  "duration": 13086,
  "status": "passed"
});
formatter.scenario({
  "line": 430,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 6 9 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3123888,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 597434,
  "status": "passed"
});
formatter.before({
  "duration": 14889,
  "status": "passed"
});
formatter.scenario({
  "line": 431,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 6 10 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3042632,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 566081,
  "status": "passed"
});
formatter.before({
  "duration": 12399,
  "status": "passed"
});
formatter.scenario({
  "line": 432,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 6 10 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2985822,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 623229,
  "status": "passed"
});
formatter.before({
  "duration": 14138,
  "status": "passed"
});
formatter.scenario({
  "line": 433,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 9 3 6 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3038941,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 321523,
  "status": "passed"
});
formatter.before({
  "duration": 13473,
  "status": "passed"
});
formatter.scenario({
  "line": 434,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 9 3 10 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3161461,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 352033,
  "status": "passed"
});
formatter.before({
  "duration": 14060,
  "status": "passed"
});
formatter.scenario({
  "line": 435,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 9 6 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3302021,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 322697,
  "status": "passed"
});
formatter.before({
  "duration": 13776,
  "status": "passed"
});
formatter.scenario({
  "line": 436,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 9 6 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3104463,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 634685,
  "status": "passed"
});
formatter.before({
  "duration": 11837,
  "status": "passed"
});
formatter.scenario({
  "line": 437,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 9 10 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3256092,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 338929,
  "status": "passed"
});
formatter.before({
  "duration": 12332,
  "status": "passed"
});
formatter.scenario({
  "line": 438,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 9 10 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3123126,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 599901,
  "status": "passed"
});
formatter.before({
  "duration": 16011,
  "status": "passed"
});
formatter.scenario({
  "line": 439,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 10 3 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3187955,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 353578,
  "status": "passed"
});
formatter.before({
  "duration": 39955,
  "status": "passed"
});
formatter.scenario({
  "line": 440,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 10 3 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3323895,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 530767,
  "status": "passed"
});
formatter.before({
  "duration": 17533,
  "status": "passed"
});
formatter.scenario({
  "line": 441,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 10 6 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2939392,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 477390,
  "status": "passed"
});
formatter.before({
  "duration": 11017,
  "status": "passed"
});
formatter.scenario({
  "line": 442,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 10 6 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2997996,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 523132,
  "status": "passed"
});
formatter.before({
  "duration": 12531,
  "status": "passed"
});
formatter.scenario({
  "line": 443,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 10 9 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3003777,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 439544,
  "status": "passed"
});
formatter.before({
  "duration": 9943,
  "status": "passed"
});
formatter.scenario({
  "line": 444,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"3 10 9 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2991039,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 542029,
  "status": "passed"
});
formatter.before({
  "duration": 14434,
  "status": "passed"
});
formatter.scenario({
  "line": 445,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 3 3 9 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3485965,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 378031,
  "status": "passed"
});
formatter.before({
  "duration": 13349,
  "status": "passed"
});
formatter.scenario({
  "line": 446,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 3 3 10 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3168549,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 354895,
  "status": "passed"
});
formatter.before({
  "duration": 12765,
  "status": "passed"
});
formatter.scenario({
  "line": 447,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 3 9 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3344204,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 453305,
  "status": "passed"
});
formatter.before({
  "duration": 11662,
  "status": "passed"
});
formatter.scenario({
  "line": 448,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 3 9 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3050162,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 474675,
  "status": "passed"
});
formatter.before({
  "duration": 12007,
  "status": "passed"
});
formatter.scenario({
  "line": 449,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 3 10 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2979887,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 323125,
  "status": "passed"
});
formatter.before({
  "duration": 9659,
  "status": "passed"
});
formatter.scenario({
  "line": 450,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 3 10 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2981646,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 451200,
  "status": "passed"
});
formatter.before({
  "duration": 16997,
  "status": "passed"
});
formatter.scenario({
  "line": 451,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 9 3 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3061857,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 317905,
  "status": "passed"
});
formatter.before({
  "duration": 11036,
  "status": "passed"
});
formatter.scenario({
  "line": 452,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 9 3 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2960328,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 339855,
  "status": "passed"
});
formatter.before({
  "duration": 11174,
  "status": "passed"
});
formatter.scenario({
  "line": 453,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 9 10 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3139136,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 318624,
  "status": "passed"
});
formatter.before({
  "duration": 11692,
  "status": "passed"
});
formatter.scenario({
  "line": 454,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 10 3 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2929455,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 425260,
  "status": "passed"
});
formatter.before({
  "duration": 13872,
  "status": "passed"
});
formatter.scenario({
  "line": 455,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 10 3 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3172272,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 367695,
  "status": "passed"
});
formatter.before({
  "duration": 15716,
  "status": "passed"
});
formatter.scenario({
  "line": 456,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"6 10 9 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2948181,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 327436,
  "status": "passed"
});
formatter.before({
  "duration": 11475,
  "status": "passed"
});
formatter.scenario({
  "line": 457,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 3 3 6 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3670521,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 565065,
  "status": "passed"
});
formatter.before({
  "duration": 14544,
  "status": "passed"
});
formatter.scenario({
  "line": 458,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 3 3 10 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3373043,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 472706,
  "status": "passed"
});
formatter.before({
  "duration": 12059,
  "status": "passed"
});
formatter.scenario({
  "line": 459,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 3 6 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3035307,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 341503,
  "status": "passed"
});
formatter.before({
  "duration": 10381,
  "status": "passed"
});
formatter.scenario({
  "line": 460,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 3 6 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3038162,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 316338,
  "status": "passed"
});
formatter.before({
  "duration": 10181,
  "status": "passed"
});
formatter.scenario({
  "line": 461,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;42",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 3 10 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3024180,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 425622,
  "status": "passed"
});
formatter.before({
  "duration": 13577,
  "status": "passed"
});
formatter.scenario({
  "line": 462,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;43",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 3 10 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3026884,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 423498,
  "status": "passed"
});
formatter.before({
  "duration": 14202,
  "status": "passed"
});
formatter.scenario({
  "line": 463,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;44",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 6 3 3 10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3194484,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 519941,
  "status": "passed"
});
formatter.before({
  "duration": 12916,
  "status": "passed"
});
formatter.scenario({
  "line": 464,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;45",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 6 3 10 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3022887,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 476636,
  "status": "passed"
});
formatter.before({
  "duration": 23157,
  "status": "passed"
});
formatter.scenario({
  "line": 465,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;46",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 6 10 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3024480,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 461430,
  "status": "passed"
});
formatter.before({
  "duration": 10506,
  "status": "passed"
});
formatter.scenario({
  "line": 466,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;47",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 10 3 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2961325,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 464926,
  "status": "passed"
});
formatter.before({
  "duration": 52533,
  "status": "passed"
});
formatter.scenario({
  "line": 467,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;48",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 10 3 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3057824,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 325079,
  "status": "passed"
});
formatter.before({
  "duration": 11466,
  "status": "passed"
});
formatter.scenario({
  "line": 468,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;49",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"9 10 6 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2960918,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 374175,
  "status": "passed"
});
formatter.before({
  "duration": 12729,
  "status": "passed"
});
formatter.scenario({
  "line": 469,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;50",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 3 3 6 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3426471,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 411401,
  "status": "passed"
});
formatter.before({
  "duration": 17823,
  "status": "passed"
});
formatter.scenario({
  "line": 470,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;51",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 3 3 9 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3495852,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 384347,
  "status": "passed"
});
formatter.before({
  "duration": 11331,
  "status": "passed"
});
formatter.scenario({
  "line": 471,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;52",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 3 6 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3030149,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 319840,
  "status": "passed"
});
formatter.before({
  "duration": 10659,
  "status": "passed"
});
formatter.scenario({
  "line": 472,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;53",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 3 6 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2968022,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 314217,
  "status": "passed"
});
formatter.before({
  "duration": 10688,
  "status": "passed"
});
formatter.scenario({
  "line": 473,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;54",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 3 9 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3131261,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 344249,
  "status": "passed"
});
formatter.before({
  "duration": 13126,
  "status": "passed"
});
formatter.scenario({
  "line": 474,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;55",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 3 9 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2999979,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 387901,
  "status": "passed"
});
formatter.before({
  "duration": 14394,
  "status": "passed"
});
formatter.scenario({
  "line": 475,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;56",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 6 3 3 9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3042121,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 352444,
  "status": "passed"
});
formatter.before({
  "duration": 13219,
  "status": "passed"
});
formatter.scenario({
  "line": 476,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;57",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 6 3 9 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2971670,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 387215,
  "status": "passed"
});
formatter.before({
  "duration": 17652,
  "status": "passed"
});
formatter.scenario({
  "line": 477,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;58",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 6 9 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2961776,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 361591,
  "status": "passed"
});
formatter.before({
  "duration": 10477,
  "status": "passed"
});
formatter.scenario({
  "line": 478,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;59",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 9 3 3 6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2931772,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 320925,
  "status": "passed"
});
formatter.before({
  "duration": 10525,
  "status": "passed"
});
formatter.scenario({
  "line": 479,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;60",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 9 3 6 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 3147264,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 381921,
  "status": "passed"
});
formatter.before({
  "duration": 10290,
  "status": "passed"
});
formatter.scenario({
  "line": 480,
  "name": "A two of a kind can be determined given any order",
  "description": "",
  "id": "all-hands-can-be-identified-regardless-of-card-order;a-two-of-a-kind-can-be-determined-given-any-order;;61",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 416,
  "name": "A set of cards with \"C C D H S\" and \"10 9 6 3 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 417,
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
  "duration": 2958138,
  "status": "passed"
});
formatter.match({
  "location": "AnyOrder.the_hand_should_be_a_two_of_a_kind_in_any_order()"
});
formatter.result({
  "duration": 366927,
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
  "duration": 13448,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "A royal flush beats straight flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-straight-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "S9 S10 SJ SQ SK"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 1103982,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 115683,
  "status": "passed"
});
formatter.before({
  "duration": 23999,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "A royal flush beats four of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-four-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA CA HA DA SK"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 63777,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 44014,
  "status": "passed"
});
formatter.before({
  "duration": 10931,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A royal flush beats full house",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-full-house",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA CA HA SK DK"
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 42450,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 19465,
  "status": "passed"
});
formatter.before({
  "duration": 8909,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "A royal flush beats flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "S4 S5 S6 S7 S10"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 28372,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 27802,
  "status": "passed"
});
formatter.before({
  "duration": 8292,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "A royal flush beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "S4 C5 D6 S7 H8"
      ],
      "line": 25
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 45154,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 70395,
  "status": "passed"
});
formatter.before({
  "duration": 9140,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "A royal flush beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA HA DA C5 D8"
      ],
      "line": 30
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 37497,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 20374,
  "status": "passed"
});
formatter.before({
  "duration": 8648,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "A royal flush beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA CA SK CK H8"
      ],
      "line": 35
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 28771,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 20391,
  "status": "passed"
});
formatter.before({
  "duration": 8465,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "A royal flush beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA CA D8 D10 C2"
      ],
      "line": 40
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 28681,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 55543,
  "status": "passed"
});
formatter.before({
  "duration": 12599,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "A royal flush beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-royal-flush-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C10 CJ CQ CK CA",
        "SA H3 D10 SJ CQ"
      ],
      "line": 45
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 30348,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 21858,
  "status": "passed"
});
formatter.before({
  "duration": 8703,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "A straight flush beats four of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-four-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA CA HA DA SK"
      ],
      "line": 50
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 30150,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 15997,
  "status": "passed"
});
formatter.before({
  "duration": 9216,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "A straight flush beats full house",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-full-house",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA CA HA SK DK"
      ],
      "line": 55
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 28816,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 41905,
  "status": "passed"
});
formatter.before({
  "duration": 10170,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "A straight flush beats flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "S4 S5 S6 S7 S10"
      ],
      "line": 60
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 29148,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 17942,
  "status": "passed"
});
formatter.before({
  "duration": 8626,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "A straight flush beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "S4 C5 D6 S7 H8"
      ],
      "line": 65
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 32420,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 15110,
  "status": "passed"
});
formatter.before({
  "duration": 61592,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "A straight flush beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA HA DA C5 D8"
      ],
      "line": 70
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 36462,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 16405,
  "status": "passed"
});
formatter.before({
  "duration": 9408,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "A straight flush beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA CA SK CK H8"
      ],
      "line": 75
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 29292,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 17312,
  "status": "passed"
});
formatter.before({
  "duration": 8858,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "A straight flush beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA CA D8 D10 C2"
      ],
      "line": 80
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 487378,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 244494,
  "status": "passed"
});
formatter.before({
  "duration": 10396,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "A straight flush beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-flush-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C3 C4 C5 C6",
        "SA H3 D10 SJ CQ"
      ],
      "line": 85
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 42680,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 64539,
  "status": "passed"
});
formatter.before({
  "duration": 51014,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "A four of a kind beats full house",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-full-house",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA CA HA SK DK"
      ],
      "line": 90
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 44593,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14167,
  "status": "passed"
});
formatter.before({
  "duration": 13951,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "A four of a kind beats flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 94,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "S4 S5 S6 S7 S10"
      ],
      "line": 95
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 37096,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13510,
  "status": "passed"
});
formatter.before({
  "duration": 13857,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "A four of a kind beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "S4 C5 D6 S7 H8"
      ],
      "line": 100
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 39658,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 17515,
  "status": "passed"
});
formatter.before({
  "duration": 14029,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "A four of a kind beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 104,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA HA DA C5 D8"
      ],
      "line": 105
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 40108,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 11368,
  "status": "passed"
});
formatter.before({
  "duration": 9721,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "A four of a kind beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 109,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA CA SK CK H8"
      ],
      "line": 110
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 27591,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12461,
  "status": "passed"
});
formatter.before({
  "duration": 8589,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "A four of a kind beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 114,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA CA D8 D10 C2"
      ],
      "line": 115
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 27169,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13497,
  "status": "passed"
});
formatter.before({
  "duration": 9335,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "A four of a kind beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-four-of-a-kind-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 119,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 D2 S3",
        "SA H3 D10 SJ CQ"
      ],
      "line": 120
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26597,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12439,
  "status": "passed"
});
formatter.before({
  "duration": 8498,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "A full house beats flush",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-flush",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 124,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "S4 S5 S6 S7 S10"
      ],
      "line": 125
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25845,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 9215,
  "status": "passed"
});
formatter.before({
  "duration": 8481,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "A full house beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 129,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "S4 C5 D6 S7 H8"
      ],
      "line": 130
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24219,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 11830,
  "status": "passed"
});
formatter.before({
  "duration": 8328,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "A full house beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 134,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "SA HA DA C5 D8"
      ],
      "line": 135
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24280,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 9850,
  "status": "passed"
});
formatter.before({
  "duration": 8348,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "A full house beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 139,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "SA CA SK CK H8"
      ],
      "line": 140
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 141,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25958,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13050,
  "status": "passed"
});
formatter.before({
  "duration": 18474,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "A full house beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 144,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "SA CA D8 D10 C2"
      ],
      "line": 145
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 146,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 28246,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13372,
  "status": "passed"
});
formatter.before({
  "duration": 8904,
  "status": "passed"
});
formatter.scenario({
  "line": 148,
  "name": "A full house beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-full-house-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 149,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 H2 S3 C3",
        "SA H3 D10 SJ CQ"
      ],
      "line": 150
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23336,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 11881,
  "status": "passed"
});
formatter.before({
  "duration": 8229,
  "status": "passed"
});
formatter.scenario({
  "line": 153,
  "name": "A flush beats straight",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-straight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 154,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "S4 C5 D6 S7 H8"
      ],
      "line": 155
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 156,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24051,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 11739,
  "status": "passed"
});
formatter.before({
  "duration": 8237,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "A flush beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 159,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "SA HA DA C5 D8"
      ],
      "line": 160
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 161,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 22812,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 9931,
  "status": "passed"
});
formatter.before({
  "duration": 8346,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "A flush beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 164,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "SA CA SK CK H8"
      ],
      "line": 165
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23775,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12108,
  "status": "passed"
});
formatter.before({
  "duration": 8221,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "A flush beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 169,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "SA CA D8 D10 C2"
      ],
      "line": 170
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 171,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23013,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14366,
  "status": "passed"
});
formatter.before({
  "duration": 8299,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "A flush beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-flush-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 174,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 C4 C6 C7 C9",
        "SA H3 D10 SJ CQ"
      ],
      "line": 175
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 176,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25056,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12371,
  "status": "passed"
});
formatter.before({
  "duration": 8322,
  "status": "passed"
});
formatter.scenario({
  "line": 178,
  "name": "A straight beats three of a kind",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-beats-three-of-a-kind",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 179,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CA C2 C3 C4 C5",
        "SA HA DA C5 D8"
      ],
      "line": 180
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 181,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24102,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 13353,
  "status": "passed"
});
formatter.before({
  "duration": 14814,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "A straight beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 184,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CA C2 C3 C4 C5",
        "SA CA SK CK H8"
      ],
      "line": 185
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 186,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23353,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14552,
  "status": "passed"
});
formatter.before({
  "duration": 14445,
  "status": "passed"
});
formatter.scenario({
  "line": 188,
  "name": "A straight beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 189,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CA C2 C3 C4 C5",
        "SA CA D8 D10 C2"
      ],
      "line": 190
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 191,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23820,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 15058,
  "status": "passed"
});
formatter.before({
  "duration": 7929,
  "status": "passed"
});
formatter.scenario({
  "line": 193,
  "name": "A straight beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-straight-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 194,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CA C2 C3 C4 C5",
        "SA H3 D10 SJ CQ"
      ],
      "line": 195
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 196,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 22903,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14649,
  "status": "passed"
});
formatter.before({
  "duration": 8190,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "A three of a kind beats two pairs",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-three-of-a-kind-beats-two-pairs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 199,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 D2 S3 C6",
        "SA CA SK CK H8"
      ],
      "line": 200
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 201,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23920,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12449,
  "status": "passed"
});
formatter.before({
  "duration": 7940,
  "status": "passed"
});
formatter.scenario({
  "line": 203,
  "name": "A three of a kind beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-three-of-a-kind-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 204,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 D2 S3 C6",
        "SA CA D8 D10 C2"
      ],
      "line": 205
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 35152,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 23548,
  "status": "passed"
});
formatter.before({
  "duration": 8280,
  "status": "passed"
});
formatter.scenario({
  "line": 208,
  "name": "A three of a kind beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-three-of-a-kind-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 209,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 D2 S3 C6",
        "SA H3 D10 SJ CQ"
      ],
      "line": 210
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 211,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24369,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12738,
  "status": "passed"
});
formatter.before({
  "duration": 7899,
  "status": "passed"
});
formatter.scenario({
  "line": 213,
  "name": "A two pairs beats one pair",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-two-pairs-beats-one-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 214,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 C3 H3 S7",
        "SA CA D8 D10 C2"
      ],
      "line": 215
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 216,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 22648,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12903,
  "status": "passed"
});
formatter.before({
  "duration": 7593,
  "status": "passed"
});
formatter.scenario({
  "line": 218,
  "name": "A two pairs beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;a-two-pairs-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 219,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 C3 H3 S7",
        "SA H3 D10 SJ CQ"
      ],
      "line": 220
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26534,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 25413,
  "status": "passed"
});
formatter.before({
  "duration": 8362,
  "status": "passed"
});
formatter.scenario({
  "line": 223,
  "name": "One pair beats high card",
  "description": "",
  "id": "all-given-hands-beat-hands-of-lesser-value;one-pair-beats-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 224,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 H2 C4 S6 H9",
        "SA H3 D10 SJ CQ"
      ],
      "line": 225
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 226,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26658,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 14448,
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
  "duration": 11531,
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
  "duration": 47476,
  "status": "passed"
});
formatter.match({
  "location": "RunProgramSteps.i_run_the_program()"
});
formatter.result({
  "duration": 9325,
  "status": "passed"
});
formatter.match({
  "location": "RunProgramSteps.the_result_should_be_that_the_program_is_run()"
});
formatter.result({
  "duration": 8185,
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
  "duration": 9502,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "A royal flush is determined by suit",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;a-royal-flush-is-determined-by-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D10 DJ DQ DK DA",
        "C10 CJ CQ CK CA"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 30129,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 28799,
  "status": "passed"
});
formatter.before({
  "duration": 8140,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Straight flush wins with highest ranked card",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;straight-flush-wins-with-highest-ranked-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 C4 C5 C6 C7",
        "S2 S3 S4 S5 S6"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 64009,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 45835,
  "status": "passed"
});
formatter.before({
  "duration": 8234,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Straight flush with the same highest card wins by suit",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;straight-flush-with-the-same-highest-card-wins-by-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "H2 H3 H4 H5 H6",
        "C2 C3 C4 C5 C6"
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24940,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 43322,
  "status": "passed"
});
formatter.before({
  "duration": 8247,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Four of a kind is decided by highest card of the four of a kinds",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;four-of-a-kind-is-decided-by-highest-card-of-the-four-of-a-kinds",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 D3 H3 S3 C4",
        "C2 D2 H2 S2 SA"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24630,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 28313,
  "status": "passed"
});
formatter.before({
  "duration": 8101,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Highest card of two triplets in a full house is the winner",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;highest-card-of-two-triplets-in-a-full-house-is-the-winner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "CK DK C3 H3 S3",
        "SA HA C2 H2 S2"
      ],
      "line": 25
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23905,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 36109,
  "status": "passed"
});
formatter.before({
  "duration": 7969,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Highest card of triplets wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;highest-card-of-triplets-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 H3 S3 C2 H5",
        "D2 S2 H2 SA SK"
      ],
      "line": 30
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24932,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 15286,
  "status": "passed"
});
formatter.before({
  "duration": 8077,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Straight with same rank of highest card is determined by suit of highest card",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;straight-with-same-rank-of-highest-card-is-determined-by-suit-of-highest-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 C4 D5 H6 S7",
        "D3 H4 S5 S6 C7"
      ],
      "line": 35
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25917,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 16047,
  "status": "passed"
});
formatter.before({
  "duration": 8409,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Straight with differently ranked highest cards are win based off the rank of the high card",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;straight-with-differently-ranked-highest-cards-are-win-based-off-the-rank-of-the-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D3 H4 D5 H6 D7",
        "S2 C3 S4 C5 S6"
      ],
      "line": 40
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23716,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 12362,
  "status": "passed"
});
formatter.before({
  "duration": 8073,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "If there are two pairs in each hand then the highest suit of the highest ranked one wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;if-there-are-two-pairs-in-each-hand-then-the-highest-suit-of-the-highest-ranked-one-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D2 C2 H5 S5 SK",
        "S2 H2 C5 D5 SA"
      ],
      "line": 45
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 23468,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 115938,
  "status": "passed"
});
formatter.before({
  "duration": 8405,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "If there are two pairs in each hand then the highest ranked wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;if-there-are-two-pairs-in-each-hand-then-the-highest-ranked-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D2 C2 S10 C10 SK",
        "H8 D8 S9 C9 SA"
      ],
      "line": 50
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25233,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 95769,
  "status": "passed"
});
formatter.before({
  "duration": 8631,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Both hands with same ranked pair then highest suit wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;both-hands-with-same-ranked-pair-then-highest-suit-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S2 C2 CQ CK CA",
        "D2 H2 SQ SK SA"
      ],
      "line": 55
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24670,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 55694,
  "status": "passed"
});
formatter.before({
  "duration": 8083,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Both hands with different ranked pair then highest rank of pair wins",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;both-hands-with-different-ranked-pair-then-highest-rank-of-pair-wins",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "S3 C3 CQ CK CA",
        "C2 D2 SQ SK SA"
      ],
      "line": 60
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25190,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 46210,
  "status": "passed"
});
formatter.before({
  "duration": 8187,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "High card hands are determined by suit if highest cards have same rank",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;high-card-hands-are-determined-by-suit-if-highest-cards-have-same-rank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 S4 H5 D7 D8",
        "S2 S3 H6 S7 C8"
      ],
      "line": 65
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 34838,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 21117,
  "status": "passed"
});
formatter.before({
  "duration": 13098,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "High card wins based off rank regardless of suit",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;high-card-wins-based-off-rank-regardless-of-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C2 D3 CK CQ CA",
        "S2 H3 SJ SQ SK"
      ],
      "line": 70
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 45147,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 21573,
  "status": "passed"
});
formatter.before({
  "duration": 9725,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Flush with 5 cards of the same rank is determined by suit",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-5-cards-of-the-same-rank-is-determined-by-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "D2 D4 D6 D8 D10",
        "C2 C4 C6 C8 C10"
      ],
      "line": 75
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 26062,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 39727,
  "status": "passed"
});
formatter.before({
  "duration": 8539,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Flush with 4 highest cards being the same rank then the 5th is the determining one",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-4-highest-cards-being-the-same-rank-then-the-5th-is-the-determining-one",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C3 C4 C6 C8 C10",
        "D2 D4 D6 D8 D10"
      ],
      "line": 80
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24905,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 27234,
  "status": "passed"
});
formatter.before({
  "duration": 8287,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Flush with 3 highest cards being the same rank then the best of remaining 4 win",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-3-highest-cards-being-the-same-rank-then-the-best-of-remaining-4-win",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C4 C6 C7 C9 C10",
        "S4 S5 S7 S9 S10"
      ],
      "line": 85
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 25618,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 40218,
  "status": "passed"
});
formatter.before({
  "duration": 8767,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Flush with 2 highest cards being the same rank then the best of remaining 6 win",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-2-highest-cards-being-the-same-rank-then-the-best-of-remaining-6-win",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C4 C5 C7 C9 C10",
        "S4 S5 S6 S9 S10"
      ],
      "line": 90
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24721,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 26526,
  "status": "passed"
});
formatter.before({
  "duration": 11521,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Flush with 1 highest card being the same rank then the best of remaining 8 win",
  "description": "",
  "id": "hands-with-the-same-ranking-have-their-own-rules-to-distinguish-which-is-better.-i.e.-a-royal-flush-is-evaluated-as-better-based-off-of-suit.;flush-with-1-highest-card-being-the-same-rank-then-the-best-of-remaining-8-win",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 94,
  "name": "two hands",
  "rows": [
    {
      "cells": [
        "C4 C5 C7 C9 C10",
        "S4 S5 S7 S8 S10"
      ],
      "line": 95
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "hand one beats hand two whether it belongs to AIP or HTB",
  "keyword": "Then "
});
formatter.match({
  "location": "HandPriorites.two_hands(DataTable)"
});
formatter.result({
  "duration": 24356,
  "status": "passed"
});
formatter.match({
  "location": "HandPriorites.hand_one_beats_hand_two_whether_it_belongs_to_AIP_or_HTB()"
});
formatter.result({
  "duration": 22825,
  "status": "passed"
});
});