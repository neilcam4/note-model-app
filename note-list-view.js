(function (exports){
  function NoteListView(noteList){
    this.noteList = noteList;
  }
  NoteListView.prototype.returnsView = function(){
    
    var array = this.noteList.listOfNotes();
    var before = "<ul>"
    array.forEach(function(item){
      before += "<li><div>" +  item.returnText() + "</div></li>"
    })
    return before += "</ul>" 
  }
  exports.NoteListView = NoteListView
})(this)


