window.onload = () => {
/*  var elem = document.getElementById("eventclick");
  elem.addEventListener('click', (event)=> {
      console.log(event)
  });*/
/*

  elem.addEventListener('mouseover', (event) => {
      console.log('hovering');
  });
*/
/*


  var items = document.querySelectorAll('article section P');
  items.forEach(item => item.addEventListener('mouseover', (evt) => {
    console.log(evt)
  }));
*/

  document.getElementsByTagName("article")[0].addEventListener('mouseover', (evt) => {

      if (evt.target.tagName == 'P') {
          console.log(evt.target.textContent);
          evt.stopPropagation();
          evt.preventDefault();
      }
  });

  document.getElementsByTagName("body")[0].addEventListener('mouseover', (evt) => {
      console.log('body hover');
  });
}
