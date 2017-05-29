;(function (win, doc) {
  if (document.all || document.getElementById) {
    var _rules = doc.getElementById('rules');
    win._rnd1 = win.Math.floor(win.Math.random() * (100 - 1 + 1)) + 1;
    win._rnd2 = win.Math.floor(win.Math.random() * (100 - win._rnd1 + 1)) + win._rnd1;

    if ('textContent' in Element.prototype) {
      _rules.getElementsByTagName('legend')[0].textContent = 'Prove yourself worthy!';
      _rules.getElementsByTagName('form')[0].removeAttribute('disabled');
      
    } else {
      _rules.getElementsByTagName('legend')[0].innerText = 'Prove yourself worthy!';
      _rules.getElementsByTagName('form')[0].removeAttribute('disabled');
    }

    doc.getElementById('lbl_no_js').style.display = 'none';
    doc.getElementById('lbl_js').insertAdjacentHTML('afterBegin','<b>Please solve the following problem:</b>');
    doc.getElementById('lbl_js').insertAdjacentHTML('afterEnd','<p id="question">What is ' + win._rnd1 + ' + ' + win._rnd2 + '?</p><input type="text" name="071115020F2A4F838D379A82DF1C5C92" style="margin-left:7px" size="25" maxlength="25" value="" />');
    _rules.getElementsByTagName('form')[0].onsubmit = process_form;
  }

  function process_form () {
    var the_form = this;
    var required_fields = {
      "071115020F2A4F838D379A82DF1C5C92": "Challenge"
    };

    if (document.all || document.getElementById) {
      for (var i = 0; i < the_form.length; ++i) {
        var elem = the_form.elements[i];

        if (elem.name && required_fields[elem.name] && !elem.value && elem.type && (/^(?:text(?:area)?|password|file)$/i.test(elem.type))){
          alert('"' + required_fields[elem.name] + '" is a required field in this form.');
          elem.focus();
          return false;

        } else if(doc.getElementsByName('071115020F2A4F838D379A82DF1C5C92')[0].value !== (win._rnd1 + win._rnd2).toString()){
          alert('Answer is incorrect');
          elem.focus();
          win._rnd1 = win.Math.floor(win.Math.random() * (100 - 1 + 1)) + 1;
          win._rnd2 = win.Math.floor(win.Math.random() * (100 - win._rnd1 + 1)) + win._rnd1;
          doc.getElementById('question').innerHTML = 'What is '+win._rnd1+' + '+win._rnd2+'?';
          return false;
        }
      }
    }
    return true;
  }
})(window, window.document);
