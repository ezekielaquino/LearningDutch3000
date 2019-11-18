// Sentence composition
function makeDutchSentence({
  subject,
  verb,
  secondVerb = '',
  object = '',
  time,
  place,
}) {
  let sentence = '';

  if (!subject || !verb) {
    throw 'Sentences must absolutely have a subject and a verb!';
  }

  // # ALWAYS!
  sentence += `${subject} ${verb}`;

  if (object) {
    // note this are fantasical methods :D
    // What is specific? e.g.
    // The man (specific) vs A man (could be anyone)
    if (object.isSepecific) {
      sentence += `${object} ${time}`;
    } else {
      sentence += `${time} ${object};`
    }
  }

  sentence += `${place} ${secondVerb}`;
  return sentence;
}

// 'Ik werk morgen in amsterdam'
makeDutchSentence({
  subject: 'ik',
  verb: 'werk',
  time: 'morgen',
  place: 'in amsterdam',
}); 

// Mijn vrienden willen vanavond naar een Italiaanse restaurant gaan.
makeDutchSentence({
  subject: 'mijn vrienden',
  verb: 'willen',
  time: 'vanavond',
  place: 'een Italiaanse restaurant',
  secondVerb: 'gaan',
}); 

// Ik kijk die film ieder jaar – I watch the film every year.
// see here: we have an object that is specific, so its BEFORE time
makeDutchSentence({
  subject: 'ik',
  verb: 'kijk',
  object: 'die film',
  time: 'ieder jaar',
}); 



// Past tensify a word
function pastTensifyWord({ word }) {
  let pastTense = toIkForm(word); // get the word's ik form
  const suffixWithTe = [...'sftktchp'.split('')];
  
  // If the last letter in the verb en form (before "en") is included
  // in SoFTKeTCHup (ok this is a bit bullshit just imagine
  // "ch" is also a letter lol) then add "te" otherwise "de"
  if (suffixWithTe.includes(toEnForm(word).stripEn().lastLetter)) {
    pastTense + 'te';
  } else {
    pastTense + 'de';
  }

  return pastTense;
}

// In use
pastTensifyWord({ word: 'werk' }); // return "Werkte"
pastTensifyWord({ word: 'bouw' }); // returns "Bouwde(n)"