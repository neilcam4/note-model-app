function noteListHasTwoNotes(){

  note1 = new Notes("This is note 1");
  note2 = new Notes("This note 2");
  noteList = new NoteList();
  noteList.list.push(note1, note2);
  let expectation = noteList.list;
  let actual = noteList.listOfNotes()
  assert.isTrue(noteList.listOfNotes()=== noteList.list)
}
noteListHasTwoNotes();
