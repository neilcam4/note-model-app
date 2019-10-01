(function(exports){
  function NoteList(){
    this.list = []
  }

  NoteList.prototype.listOfNotes = function(){
  return this.list
}
exports.NoteList = NoteList;
})(this);
