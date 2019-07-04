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

        // r = Math.floor(Math.random() * 255);
        // g = Math.floor(Math.random() * 255);
        // b = Math.floor(Math.random() * 255);

        // ==========================MY CODE========================================
        // StarColors From http://www.vendian.org/mncharity/dir3/starcolor/
        var Starcolors = [[255, 245, 210], 
                          [155, 176, 255], 
                          [255, 204, 111], 
                          [255, 210, 161], 
                          [248, 247, 255], 
                          [202, 215, 255], 
                          [170, 191, 255], 
                          [073, 214, 255], 
                          [000, 255, 236]];

        var rgb = Starcolors[Math.floor(Math.random() * Starcolors.length)];
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];
        // =========================================================================

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
          // console.log("True");
      });

      // console.log(landingView);
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