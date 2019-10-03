
function convertNoteModelToHTML(){
 nameOfFunc = arguments.callee.name
 var note = new Note("Dancing on the ceiling by Lionel Richie")
 var singlenoteview = new SingleNoteView(note)
 console.log(singlenoteview.returnsView())
 console.log("<div>Dancing on the ceiling by Lionel Richie</div>")
 assert.isTrue(singlenoteview.returnsView() === "<div>Dancing on the ceiling by Lionel Richie</div>", nameOfFunc)

}

convertNoteModelToHTML()
