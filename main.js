// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let heartCheck = false;
// Your JavaScript code goes here!
const modal = document.querySelector('#modal')
modal.setAttribute('class', 'hidden');

let modalMessage = document.getElementById("modal-message")
let heartList = document.querySelectorAll('.like-glyph')
heartList.forEach((node) => {
  node.style.cursor = 'pointer';
  node.addEventListener('click', mimicServerHandler)
})

function mimicServerHandler(e) {
  mimicServerCall()  // success or rejected
    .then(handleHeart(e))
    .catch(error => {
      modalMessage.innerHTML = error
      modal.className = ''
      setTimeout(handleError, 3000)
    })
}

function handleHeart(e){
  heart = e.target;
  heart.setAttribute('class','')
  if (!heartCheck) {
    heart.innerHTML = FULL_HEART;
    heart.className = 'activated-heart';
    heartCheck = true
  }else{
    heart.innerHTML = EMPTY_HEART;
    heart.className = 'activated-heart'
    heartCheck = false
  }
  
  
}

function handleError() {
  modal.className = 'hidden';
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
