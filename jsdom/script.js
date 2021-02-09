const chars = document.getElementsByClassName('chars');
const selected = document.getElementById('selected');

window.addEventListener('load', () => {
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
  
    // char.addEventListener('mouseover', () => {
    //   char.style.height = '110px';
    // });
    
    // char.addEventListener('mouseout', () => {
    //   char.style.height = '100px';
    // });
  
    char.addEventListener('click', () => {
      selected.innerText = char.innerHTML;
    });
  }
})