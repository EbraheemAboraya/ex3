
let arr=[];
function return_random_letter() {                       ////////random_letter
  const letters = "abcdefghijklnopqrstuvwxyz";
  const index = Math.floor(Math.random() * letters.length);
  return letters[index];
}

let new_size = 80;
function black_boxes() {                      ////////////create a new boxes
  const lastbox = document.createElement("div");
  lastbox.style.width = new_size + "px";
  lastbox.style.height = new_size + "px";
  lastbox.style.marginRight = "132px";
  lastbox.style.marginTop = "123px";
  lastbox.style.backgroundColor = "black";
  lastbox.style.display = "flex";
  lastbox.style.justifyContent = "center";
  lastbox.style.alignItems = "center";


  const letterElement = document.createElement("span"); //////////create a letter
  const P_letter = return_random_letter();
  letterElement.innerHTML = P_letter;
  letterElement.classList.add("alphaet");
    ////add to the box

  
    
  

      lastbox.addEventListener("click", function () {

      if(arr.length === 0){
        arr.push(lastbox);
        letterElement.style.visibility = "visible";
      }
      else if(arr[0]!=lastbox && arr.length < 2){
          arr.push(lastbox);
          letterElement.style.visibility = "visible";
          compareBoxes(arr[0],arr[1]);
          arr=[];
        }  
      });
      lastbox.appendChild(letterElement);   
  document.getElementsByClassName("squarebox")[0].appendChild(lastbox); ////add to big_box
}





function print_first_boxes() {     ////////////print the first 7 boxes
  let num = 7;
  for (let i = 0; i < num; i++) {
  black_boxes();
  new_size+=20;
  }  
}

function add_boxes() {                                               //////add 2  new boxes 
  let myInput = document.getElementsByClassName("black-layout3")[0];
  myInput.addEventListener("click", function () {
    for (let i = 0; i < 2; i++) {
      black_boxes();
     new_size+=20;
     }
  });
}



function compareBoxes(first_box, second_box) {
  let first_letter = first_box.textContent.trim();

  let second_letter = second_box.textContent.trim();



  if (first_letter === second_letter) {
    const color_=generateRandomColor();
    first_box.style.backgroundColor = color_;
    second_box.style.backgroundColor = color_;
  } 
  else {
    setTimeout(function () {
      
      first_box.firstChild.style.visibility = "hidden";
      second_box.firstChild.style.visibility = "hidden";


    }, 500);
  }
}

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}


window.onload = () => {
  print_first_boxes();
  add_boxes();
}




