// =============== Credit: iAmNathanJ - https://codepen.io/iAmNathanJ/full/WbjWYN ================

(function() {

  $(document).ready(function() {

    var $background = $('div.background'),
      backgroundWidth = $background.width(),
      backgroundHeight = $background.height(),
      canvasBack = document.getElementById('canvas-back'),
      canvasMid = document.getElementById('canvas-mid'),
      canvasFront = document.getElementById('canvas-front');

    canvasBack.width = backgroundWidth + 100;
    canvasMid.width = backgroundWidth + 200;
    canvasFront.width = backgroundWidth + 400;

    canvasBack.height = backgroundHeight + 100;
    canvasMid.height = backgroundHeight + 200;
    canvasFront.height = backgroundHeight + 400;

    createBackground(canvasBack, 5000, 100, 0.7);
    createBackground(canvasMid, 4000, 100, 1.5);
    createBackground(canvasFront, 2000, 100, 2);

    function createBackground(canvas, arcCount, alpha, maxArcSize) {

      var context = canvas.getContext('2d'),
          sarcX, arcY, arcR, arcS, arcE, r, g, b, a, color;

      for (var i = 0; i < arcCount; i++) {

        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        a = Math.round(Math.random() * alpha) / 100;

        color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
        context.fillStyle = color;

        arcX = Math.floor(Math.random() * canvas.width);
        arcY = Math.floor(Math.random() * canvas.height);
        arcR = Math.random() * maxArcSize;
        arcS = Math.ceil(Math.random() * 360);
        arcE = Math.random() * 2;

        context.beginPath();
        context.arc(arcX, arcY, arcR, arcS, arcE * Math.PI);
        context.fill();
      }
    }

    document.addEventListener('mousemove', handleBackground);

    function handleBackground(e) {
      var mouseX = -(Math.round((e.clientX / backgroundWidth) * 100)),
        mouseY = -(Math.round((e.clientY / backgroundHeight) * 100));

      // ==========================MY CODE========================================
      // To stop the background when cursor is not on the landingView section
      var x = event.clientX, y = event.clientY,
        elementMouseIsOver = document.elementFromPoint(x, y);
      let landingView = document.querySelectorAll(".landingView *, .landingView");
      landingView.forEach(element => {
          if (element == elementMouseIsOver) {
            positionBackground($('div.canvas.back'), 1, mouseX, mouseY);
            positionBackground($('div.canvas.mid'), 2, mouseX, mouseY);
            positionBackground($('div.canvas.front'), 4, mouseX, mouseY);
          }
          console.log("True");
      });

      console.log(landingView);
      // =========================================================================
    }

    function positionBackground(div, offset, mouseX, mouseY) {
      var offsetX = String(mouseX * offset) + 'px',
        offsetY = String(mouseY * offset) + 'px';

      div.css({
        left: offsetX,
        top: offsetY
      });
    }

  });

})();

// ===============================================================================================