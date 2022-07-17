// Exercise  1

function filterBadWords(sentence, badWords){
  words = sentence.split(" ")
  console.log("Input of words: " + words)
  let newwords = words.filter(word => !badWords.includes(word))
  console.log("Words after removing bad words: " + newwords)
  console.log("===Output===")
  return newwords.join(" ")
}

console.log(filterBadWords("I am not a nice person", ['not']))