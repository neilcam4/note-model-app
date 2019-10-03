

function insertHTMLIntoDom(){
    nameOfFunc = arguments.callee.name
    var notecon = new NoteController(new NoteList())
    
    notecon.view()
    console.log(document.getElementById("app").innerHTML)
    console.log("<ul><li><div>Favorite drink: Seltzer</div></li></ul>")
    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favorite drink: Seltzer</div></li></ul>", nameOfFunc)    
}

insertHTMLIntoDom()
