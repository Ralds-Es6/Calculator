var bg = document.getElementsByClassName("bg");
      var button = document.getElementsByClassName("button");
      var main = document.getElementsByClassName("main");
      var ta = document.getElementsByClassName("ta");
      var tb = document.getElementsByClassName("tb");
      var tc = document.getElementsByClassName("tc");
      var td = document.getElementsByClassName("td");

      function fta() {
        bg[0].style.background = "linear-gradient(#6e05ff, #100417)";
        main[0].style.backgroundColor = "#1a0430";
        for(i = 0 ;i<button.length;i++) {
          button[i].setAttribute("class","button");
        }
      }
      function ftb() {
        bg[0].style.background = "linear-gradient(rgb(16, 190, 16), rgb(0, 0, 0))";
        main[0].style.backgroundColor = "rgb(3, 126, 3)";
        for(i = 0 ;i<button.length;i++) {
          button[i].setAttribute("class","button buttonb");
        }
      }
      function ftc() {
        bg[0].style.background = "linear-gradient(rgb(238, 45, 45), rgb(16, 4, 23))";
        main[0].style.backgroundColor = "rgb(238, 45, 45)";
        for(i = 0 ;i<button.length;i++) {
          button[i].setAttribute("class","button buttonc");
        }
      }
      function ftd() {
        bg[0].style.background = "linear-gradient(#3344ff, #000000)";
        main[0].style.backgroundColor = "#3344ff";
        for(i = 0 ;i<button.length;i++) {
          button[i].setAttribute("class","button buttond");
        }
      }
      function insert(num) {
        document.forms[0].elements.textview.value = document.forms[0].elements.textview.value + num;
      }
      function equal() {
        var exp = document.forms[0].elements.textview.value;
        if(exp) {
          exp = eval(document.forms[0].elements.textview.value);
          document.forms[0].elements.textview.value = exp;
        }
      }
      function clean() {
        document.forms[0].elements.textview.value = "";
      }
      function back() {
        var exp = document.forms[0].elements.textview.value;
        document.forms[0].elements.textview.value = exp.substring(0,exp.length-1);
      }