function madlibs(template) {
  // adjectives: quick lazy sleepy noisy hungry
  // nouns: fox dog head leg tail cat
  // verbs: jumps lifts bites licks pats
  // adverbs: easily lazily noisily excitedly

  //Start with declaring templates:

  //construct an object
  let randomObject = {
    adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    noun: ["fox", "dog", "head", "leg", "tail", "cat"],
    verb: ["jumps", "lifts", "bites", "licks", "pats"],
    adverb: ["easily", "lazily", "noisily", "excitedly"],
  };

  let wordArray = template.split(/\s+|'[\]'/g/);

  console.log(wordArray);

  let string = wordArray.reduce((acc, curr) => {
    if (curr === "adjective") {
      acc +=
        randomObject.adjective[
          Math.floor(Math.random() * randomObject.adjective.length)
        ];
    } else if (curr === "noun") {
      acc +=
        randomObject.noun[Math.floor(Math.random() * randomObject.noun.length)];
    } else if (curr === "verb") {
      acc +=
        randomObject.verb[Math.floor(Math.random() * randomObject.verb.length)];
    } else if (curr === "adverb") {
      acc +=
        randomObject.adverb[
          Math.floor(Math.random() * randomObject.adverb.length)
        ];
    } else acc += curr;
    return acc;
  }, "");

  return string;
}

let template1 =
  "The adjective brown noun adverb verb the adjective yellow noun who adverb verb his noun's and looks around";
// let template2 = "The noun verb the noun's noun";

// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly

console.log(madlibs(template1));

//madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

// madlibs(template2); // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2); // The "cat" "pats" the "cat"'s "head".
