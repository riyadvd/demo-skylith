$(document).ready(function(){
  $(this).scrollTop(0);
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


$(document).ready(function(){
  var h= $(window).height();
  $(".nav-height").height(h);
  $(".menu-btn").height(h-200);
})

$(document).ready(function(){
  
  $(".menu-btn").click(function(){
    $("#mySidenav").toggleClass("side-hide");
    $("#nav-overlay").toggleClass("overlay-add");
  });
});


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}

$(document).ready(function () {
  $(document).click(function (event) {
      var clickover = $(event.target);
      var _opened = $(".menu-btn").hasClass("menu-btn open");
      if (_opened === true && !clickover.hasClass("menu-btn")) {
          $("div.menu-btn").click();
      }
  });
});