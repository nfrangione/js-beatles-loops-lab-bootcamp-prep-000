// add solution here

function theBeatlesPlay(musicians, instruments) {
  var musicianInstrument = [];
  for (let i = 0; i < musicians.length; i++) {
    musicianInstrument.push(`${musicians[i]} plays ${instrument[i]}`);
  }
  return musicianInstrument;
}
