function countVowels(words) {
  // Start coding here
  let counter = 0;
  let vowels = 'aeiouAEIOU';
  for (let i of words) {
    if (vowels.includes(i)) {
      counter++;
    }
  } return counter;
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2