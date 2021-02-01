<template>
<div class="hero-box h-100">
    <div class="hero-image">
        <div class="hero-text" style="padding-left: 25%; padding-top: 15%">
            <span class="txt-rotate" data-period="2000" data-rotate='[ "programování", "blog", "sport" ]'></span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            greeting: '',
            intro: ''
        }
    }
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

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
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

// INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #cccccc }";
  document.body.appendChild(css);
</script>

<style>
.hero-box {
  overflow: hidden;
  filter: brightness(80%);
}

.hero-image {
  background-image: url("../assets/home.png");
  filter: grayscale(1);
  height: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  transition: transform .2s;
}

.hero-image:hover {
  transform: scale(1.2);
}

.hero-text {
  text-align: left;
  position: absolute; 
  top: 0;
  color: #cccccc;
  background: rgba(0, 0, 0, 0);
  width: 35%;
}
</style>