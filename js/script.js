const multiplier = () => {
  const a = 5, b = 2;
  alert(`Multiplicação: ${a * b}`);
}

const changeHeading = () => {  
  const heading = document.getElementById('heading');
  heading.innerText = 'Here we go again!';
}

const changeStyle = () => {
  const heading = document.getElementById('heading');
  heading.style.fontWeight = 'bold';
  heading.style.fontSize = '48px';
  heading.style.textAlign = 'center';
  heading.style.color = '#004564';
}

setInterval(() => {
  const hex = Math.round(Math.random() * 16777215).toString(16);
  document.body.style.background = `#${hex}`;
}, 2000);