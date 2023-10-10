function getLetterFrequency(words) {
  // Start coding here
  let obj = {};
  for (let i of words.toLowerCase()) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  } return obj;
}

const str = "Techupth";

console.log(getLetterFrequency(str));

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/