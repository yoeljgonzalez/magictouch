PAGE_HEIGHT = 4336;
STYLES_Y = 2330;

var slider = ["image2", "image3", "image4", "image5"];
var currentImage = 0;


function loadImage() {
  var image = new Image();
  image.addEventListener("load", function() {
    startSlider();
  }, false);
  image.src = "./images/home/device.png";
}

function startSlider() {
  setInterval(nextImage, 3000);
}

function init() {
  $("#burger").on("click", function(e) {
    e.preventDefault();
    toggleMenu();
  });
  $("#navbar_bg").on("click", function(e) {
    e.preventDefault();
    toggleMenu();
  });
  $("#download").on("click", function(e) {
    e.preventDefault();
    goToStore();
  });
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function toggleMenu() {
  $("#dropdown").slideToggle();
  $("#navbar_bg").fadeToggle();
  $("#burger_icon").toggleClass("open");
}

function goToStore() {
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1;
  var iOS = /ipad|iphone|ipod/.test(ua) && !window.MSStream;
  window.location = "https://itunes.apple.com/app/sticky-ai/id1234178923";
}

function nextImage() {
  var prev = currentImage;
  currentImage++;
  if (currentImage >= slider.length) {
    currentImage = 0;
  }
  $("[role=" + slider[currentImage] + "]").fadeIn(function() {
    $("[role=" + slider[prev] + "]").fadeOut();
  });
}

loadImage();
$(document).ready(function() {
  init();
});