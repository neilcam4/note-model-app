var note = new Notes("My favourite language is JavaScript");
function checkNewNoteInstantiated (){
  let expectation = "My favourite language is JavaScript";
  let actual = note.text
  assert.isTrue(actual===expectation, actual, expectation);
}
checkNewNoteInstantiated()

function checkReturnText (){
  let expectation = "My favourite language is JavaScript";
  let actual =  note.returnText()
  assert.isTrue(actual===expectation,actual, expectation);
}
checkReturnText()
