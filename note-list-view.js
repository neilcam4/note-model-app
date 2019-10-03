(function (exports){
  function NoteListView(noteList){
    this.noteList = noteList;
  }
  NoteListView.prototype.returnsView = function(){
    // console.log("new notelist"  + new NoteList())
    var array = this.noteList.listOfNotes();
  
    console.log(array)
  
    var before = "<ul>"
   
    array.forEach(function(item){
      before += "<li><div>" +  item.returnText() + "</div></li>"
    })
    console.log(before);
    return before += "</ul>"
    
  }
  exports.NoteListView = NoteListView
})(this)


