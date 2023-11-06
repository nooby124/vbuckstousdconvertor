function convert() {
    document.getElementById("theamountinvbucks").innerHTML = ("The amount in ILS: " + 0.032 * Number(document.getElementById("numberofmoney").value))
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }
  
setInputFilter(document.getElementById("numberofmoney"), function(value) {
    return /^\d*$/.test(value);
  });
document.getElementById("submit").addEventListener("click", convert, false);