(function (exports){
  function NoteListView(){

  }
  exports.NoteListView = NoteListView
})(this)

NoteListView.prototype.returnsView = function(){
  // console.log("new notelist"  + new NoteList())
  var noteList = new NoteList()
  var array = noteList.listOfNotes();

  console.log(array)
  var before = "<ul>"
  for (var i = 0;i< array.length;i++){
    return  before += "<li><div>" +  array[i].text + "</div></li></ul>"
  } 
  
  
}
