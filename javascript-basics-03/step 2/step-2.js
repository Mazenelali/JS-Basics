
   let text = document.getElementById('texte')
   let hide =  document.getElementById('hide')
   let show = document.getElementById('show')


   function toggle_show(show , hide ,target) {
    show.onclick = function (){
        target.style.display = "block"
    }
    hide.onclick = function() {
        target.style.display = "none"
    }
   }

   toggle_show(show , hide , text)

