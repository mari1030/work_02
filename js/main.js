document.addEventListener('DOMContentLoaded', function() {
	let fizz = document.querySelector("#fizz");
  let buzz = document.querySelector("#buzz");
  const button = document.querySelector("#button");

  button.addEventListener('click' , function(){
    let output = document.querySelector("#output");
    output.innerHTML = "";
    let p = document.createElement("p");
    p.innerText = "整数値を入力してください";

    if (fizz.value.match(/[a-z]+/i) || buzz.value.match(/[a-z]+/i) ){
      output.appendChild(p);
      return false;
    }

    else if(fizz.value.match(/^-?[0-9]+\.[0-9]+$/) || buzz.value.match(/^-?[0-9]+\.[0-9]+$/)) {
      output.appendChild(p);
      return false;
    }

    else if(fizz.value == "" || buzz.value == "") {
      output.appendChild(p);
      return false;
    }

    let fizzValue = "";
    let buzzValue = "";
    const fizzP = [];
    const buzzP = [];
    for(let i = 1, x = 1; fizzValue < 100, buzzValue < 100; i++, x++) {

      fizzP[i] = document.createElement("p");
      buzzP[i] = document.createElement("p");
      
      fizzValue = (fizz.value)*i;
      buzzValue = (buzz.value)*x;

      if(fizzValue%(fizz.value) === 0 && fizzValue%(buzz.value) === 0){
        fizzP[i].innerText = `FizzBuzz${fizzValue}`;
        output.appendChild(fizzP[i]);
        buzzP[i].innerText = `Buzz${buzzValue}`;
        output.appendChild(buzzP[i]);
      }
      
      else if(buzzValue%(fizz.value) === 0 && buzzValue%(buzz.value) === 0) {
        fizzP[i].innerText = `Fizz${fizzValue}`;
        output.appendChild(fizzP[i]);
        buzzP[i].innerText = `FizzBuzz${buzzValue}`;
        output.appendChild(buzzP[i]);
      }
      
      else {
        fizzP[i].innerText = `Fizz${fizzValue}`;
        output.appendChild(fizzP[i]);
        buzzP[i].innerText = `Buzz${buzzValue}`;
        output.appendChild(buzzP[i]);
      }
    }
  });
});