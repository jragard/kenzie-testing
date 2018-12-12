When rolling two six-sided dice, each die will show a number between 1 and 6\. When the numbers on the two dice are added together, they will sum to a number between 2 and 12\. Use JavaScript to simulate 1000 rolls of a pair of dice. _You will need to figure out how to generate random numbers in JavaScript - use your Google-Fu!_

For each possible roll (2 through 12), count how many times it occurred. You should use an array to keep track of these counts.

Initialize an array named "count" by filling it with zeros. Then, whenever the roll of the two dice adds up to, say, a seven, add one to the value in the 7th element of the counts array. For example if the variable rollOfDice holds the current roll, you could increment the count with code like:

<pre>count[rollOfDice] = count[rollOfDice] + 1;</pre>

After the 1000 rolls are finished, show the final counts in an HTML page.

Here's an example of the kind of output your program might produce:

<pre>2: 32  
3: 50  
4: 76  
5: 120  
6: 151  
7: 161  
8: 125  
9: 121  
10: 89  
11: 52  
12: 23</pre>

### Output formatting

In addition to the numeric output described above, display the final counts as a bar graph (using a DIV for each bar, and varying the dimensions in proportion with the counts).

### Grading

- Correctly rolling 1 die _(1 point)_
- Correctly rolling a pair of dice _(1 point)_
- Rolling 1000 times _(1 point)_
- Storing the frequency counts in an array _(1 point)_
- Displaying the counts in text _(1 point)_
- Displaying th counts as a bar graph _(1 point)_
