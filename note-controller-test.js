

function insertHTMLIntoDom(){
    nameOfFunc = arguments.callee.name
    var notecon = new NoteController(new NoteList())
    
    notecon.view()
    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favorite drink: Selt</div></li></ul>", nameOfFunc)    
}

insertHTMLIntoDom()
