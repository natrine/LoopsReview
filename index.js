// Let's review our loops

// While loops

// Write a while loop that outputs all integers from 0 to 100

while (0 == 1) {

}


// Write a while loop that outputs all integers from 10 to 0 and outputs Done!

n = 10
while (n >= 0) {
  console.log(n);
  n--;
}



// For loops - Great for outputing

// Write a for loop that outputs all integers from 0 to 50

for (i = 0; i <= 50; i++) {
  console.log(i);
}


// Write a for loop that outputs all even integers from 0 to 300.

for (i = 0; i <= 300; i+=2) {
  console.log(i);
}


// For each loops (great for outputting a content of list)

// Write a for each loop that outputs all elements of an array (list)
animals = ["dog", "cat", "bear", "bird"]

for (var i of animals) {
  console.log(i);
}

