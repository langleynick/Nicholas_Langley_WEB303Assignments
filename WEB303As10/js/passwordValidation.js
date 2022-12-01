(function () {
    var password1 = document.getElementById('password1');
    var password2 = document.getElementById('password2');
   
    function setErrorHighlighter(e) {
      var target = e.target || e.srcElement;
      if (target.value.length < 8) {
        target.className = 'fail';
      } else {                                         
        target.className = 'pass';
      }
    }
  
    function removeErrorHighlighter(e) {
      var target = e.target || e.srcElement;
      if (target.className === 'fail') {
        target.className = '';        
      }
    }
  
    function passwordsMatch(e) {
      var target = e.target || e.srcElement;
      if ((password1.value === target.value) && target.value.length >= 8) { 
        target.className = 'pass';
      } else {                                      
        target.className = 'fail';
      }
    }
  
    addEvent(password1, 'focus', removeErrorHighlighter); 
    addEvent(password1, 'blur', setErrorHighlighter);
    addEvent(password2, 'focus', removeErrorHighlighter);
    addEvent(password2, 'blur', passwordsMatch);
  }());