const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.menuMo');

btnCall.onclick = function (e) {
	e.preventDefault();

	btnCall.classList.toggle('on');
	menuMo.classList.toggle('on');
};



/* main page */
let nowUrl = window.location.href;

  function copyUrl(){ 
    navigator.clipboard.writeText(nowUrl).then(res=>{
    //alert("Copyed!");
  })
}


/* accordion */
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('#gnbMo > li > a');
    menuItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('sub_menuMo')) {
          event.preventDefault();
          document.querySelectorAll('.sub_menuMo').forEach(function(sub) {
            if (sub !== submenu) {
                sub.style.display = 'none';
            }
          });
          submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
        }
      });
    });
  });




