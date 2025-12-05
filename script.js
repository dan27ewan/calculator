function addValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = "";
  document.getElementById('twistImage').style.display = "none";
}

function calculate() {
  const display = document.getElementById('display');
  const twistImage = document.getElementById('twistImage');

  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }

  const images = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","ewan.jpg"];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  twistImage.src = randomImage;
  twistImage.style.display = "block";
}