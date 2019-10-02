// var nl = new NoteList()
var element = document.getElementById("app");
console.log(element);

function changeGreeting(){
  return element.innerHTML = "howdy";
}

changeGreeting();

(function(exports){
  function NoteController(NoteList){
    this.NoteList = NoteList;
  }

  NoteController.prototype.addNote = function(text){
    var note = this.NoteList.createNote(text)
    return note
  }

  NoteController.prototype.view = function(){
    var note = new NoteListView(this.NoteList)
    note.returnsView()
    return element.innerHTML = note.returnsView()
  }
  exports.NoteController = NoteController
})(this)


// console.log("nl = " + nl)
// var newcontrol = new NoteController(nl)
// newcontrol.addNote("Favourite drink: seltzer")
// newcontrol.view()
// console.log(newcontrol.view())



