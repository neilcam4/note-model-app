(function (exports){
  function NoteListView(noteList){
    this.noteList = noteList;
  }
  exports.NoteListView = NoteListView
})(this)

NoteListView.prototype.returnsView = function(){
  // console.log("new notelist"  + new NoteList())
  var array = this.noteList.listOfNotes();

  console.log(array)

  var before = "<ul>"
  array.forEach(function(item){
    return before += "<li><div>" +  item.returnText() + "</div></li>"
  })
  return before += "</ul>"
  console.log(before);
}
