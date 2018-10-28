# User Stories

## Overview

This document will outline the user stories and their corresponding feature files which are located at `PROJECT_HOME/src/test/resources/cucumber/`. The file is divided into categories of user stories to provide an easier method of understanding which features are broken down into smaller features and/or user stories.

### To be Removed - Example

|User Story|Corresponding Feature File|
|:---|:---|
|As a *role* I can *function* so that *rationale*.|`feature.feature`|

### Running the Program

|User Story|Corresponding Feature File|
|:---|:---|
|As a user I can input hands for AIP and the User players.||
|As a user I want the AI player to apply the hand improvement strategy||
|As a user I want the players hand to be the same no matter what order the cards are provided, as long as they are the same set of cards.|

### Hand and Card Comparisons

|User Story|Corresponding Feature File|
|:---|:---|
|As a user I want the the winner of the game to be determined.||
|As a user I want highest card comparisons to consider rank as the primary indicator of value||
|As a user I want the highest card to be determined by suit as the secondary indicator, after value||
|As a user I want an Ace to count as the lowest card in a straight containing A, 2, 3, 4, 5.||

### AI Player hand improvement

|User Story|Corresponding Feature File|
|:---|:---|
|The AI player will not change it's hand if it has a straight or better||
|The AI player will exchange the one card that makes it one away from a Straight or better||
|The AI player will exchange 2 odd cards if it has 3 cards in sequence.| |
|The AI player will exchange the 2 odd cards if it has 3 cards in sequence. ||
|The AI player will exchange it's three other cards if it just has a one pair. ||
|The AI player will keep it's two highest ranked cards and exchange the rest||
