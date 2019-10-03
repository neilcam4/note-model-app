function returnsListOfNotes(){
  nameOfFunc = arguments.callee.name
    noteList = new NoteList();
    noteList.createNote("This is my new note")

    noteList.createNote("This is the second note")
    var array = noteList.listOfNotes()
    console.log("array = " + array[0].text)
    noteListView = new NoteListView(noteList)
    console.log("noteListView = " + noteListView)
    assert.isTrue(noteListView.returnsView() === "<ul><li><div>This is my new note</div></li><li><div>This is the second n</div></li></ul>",nameOfFunc )
  }


returnsListOfNotes();
