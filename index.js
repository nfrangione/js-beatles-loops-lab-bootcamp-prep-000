// add solution here

function theBeatlesPlay(musicians, instruments) {
  var musicianInstrument = [];
  for (let i = 0; i < musicians.length; i++) {
    musicianInstrument.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musicianInstrument;
}

function johnLennonFacts(array) {
  var facts = [];
  let i = 0;
  while (facts.length < array.length) {
    facts.push(array[i] + "!!!");
    i++
  }
  return facts;
}

function iLoveTheBeatles() {
  
}
