let RandomNumber = Math.floor(Math.random() * 50) + 1;

    function generate() {
      document.getElementById('section1').style.display = 'none';
      document.getElementById('section2').style.display = 'none';
      document.getElementById('section3').style.display = 'block';
      setTimeout(fadeOut, 2000);
      function fadeOut() {
        document.getElementById('section1').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
        document.getElementById('section3').style.display = 'none';
      }
    }
    let btn = document.getElementById('btn2');
    let output = document.getElementById('heading2');
    btn.addEventListener('click', function () {
      let input = document.getElementById('user').value;
      if (input == RandomNumber) {
        output.innerHTML = `" YOU WIN "`;
        output.style.color = 'green';
        setTimeout(win, 2000);
        function win() {
          document.getElementById('section1').style.display = 'block';
          document.getElementById('section2').style.display = 'none';
          document.getElementById('section3').style.display = 'none';
          document.getElementById('heading2').innerHTML = 'Enter Number Below';
        }
      }

      if (input > RandomNumber) {
        output.innerHTML = 'You guessed High';
        output.style.color = 'red';
      }
      if (input < RandomNumber) {
        output.innerHTML = 'You guessed Low';
        output.style.color = 'yellow';
      }
      document.getElementById('user').value = '';
    });