AOS.init();

function scrollToPro(){
    var e = document.getElementById("project"); 
    e.scrollIntoView({ 
        block: 'start', 
        behavior: 'smooth', 
        inline: 'start'
    }); 
}

function scrollToCont() { 
    var e = document.getElementById("contact"); 
    e.scrollIntoView({ 
        block: 'start', 
        behavior: 'smooth', 
        inline: 'start'
    }); 
} 

function scrollToDes() { 
    var e = document.getElementById("design"); 
    e.scrollIntoView({ 
        block: 'start', 
        behavior: 'smooth', 
        inline: 'start'
    }); 
} 

function scrollToAbt() { 
    var e = document.getElementById("about"); 
    e.scrollIntoView({ 
        block: 'start', 
        behavior: 'smooth', 
        inline: 'start'
    }); 
} 


// TYPEWRITING
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// Get the modal1
var modal = document.getElementById("myModal");
// Get the modal2
var modal2 = document.getElementById("myModal2");
// Get the modal3
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myImg")[0];
var modalImg = document.getElementsByClassName("theimg")[0];
var captionText = document.getElementsByClassName("caption")[0];

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the 2nd image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementsByClassName("myImg")[1];
var modalImg2 = document.getElementsByClassName("theimg")[1];
var captionText2 = document.getElementsByClassName("caption")[1];
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the 3rd image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementsByClassName("myImg")[2];
var modalImg3 = document.getElementsByClassName("theimg")[2];
var captionText3 = document.getElementsByClassName("caption")[2];
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
  modal3.style.display = "none";
}
