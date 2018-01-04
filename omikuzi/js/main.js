(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var results = ["引けず", "引けず", "引けた！"]
    var n = Math.floor(Math.random() * results.length)

    this.textContent = results[n];
    // switch (n) {
    //   case 0:
    //     this.textContent = '大吉';
    //     break;
    //   case 1:
    //     this.textContent = '中吉';
    //     break;
    //   case 2:
    //     this.textContent = "吉";
    //     break;
    // }

    // if (n === 0) {
    //   this.textContent = "大吉";
    // } else if (n === 1){
    //   this.textContent = "中吉";
    // } else {
    //   this.textContent = "吉";
    // }
    // this.textContent = n;
  });

  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });

  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();