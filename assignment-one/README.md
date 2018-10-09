## Software Quality Assurance - Assigment #1

- *Class*: COMP4004
- *Author*: Matthew Fors

### How to run

Step #1: Clone the directory and navigate into assignment-one directory. 

```
git clone https://github.com/enforser/comp4004.git
cd comp4004/assignment-one
```

Step #2: Install mvn dependencies and build executable jar file

```
mvn clean install
```

Step #3: Run the jar file

```
java -jar target/assignment-one-1.0-SNAPSHOT.jar /Path/To/Cards.txt
```

### Configuring the Cards input file

When running the app you must provide a file which represents the initial hands of both the AI and user players. 
An example structure of this file is as follows: 

```
C3 C5 C10 D3 HA SJ SK SQ SA S10
```

The first 5 cards represent the hand of the AI, while the final 5 represent the hand of the User. 

Any exchanged cards are drawn from a deck that includes all 52 cards minus those which are in either the AI or User hands.

Each card is represented by the first letter of their suit (clubs => C, diamonds => D, spades => S, hearts => H). 
Following the suit is the "rank" of the card, which can be from the set of *{ 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A }*.

**Any deviation from this structure has potential to cause unknown errors.** 

### Running the tests

Provided you are in the `assignment-one` directory, and have already installed dependencies then simply run `mvn test`. 

Note that the text files used by the tests live inside the `src/main/resources` directory. 
The file which provides a majority of the tests with hands is `src/main/resources/testInputFile.txt`. 
This file contains all of the hands which are used for acceptance testing, and the other files we're used for specific
use cases in the TDD unit tests.
