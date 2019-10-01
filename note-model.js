(function(exports){
  function Notes (text){
    this.text = text;
  };
  Notes.prototype.returnText = function(){
      return this.text
      console.log("hello")
  }
  exports.Notes = Notes;
})(this)
