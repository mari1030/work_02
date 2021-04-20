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
      return;
    }

    else if(fizz.value.match(/^-?[0-9]+\.[0-9]+$/) || buzz.value.match(/^-?[0-9]+\.[0-9]+$/)) {
      output.appendChild(p);
      return;
    }

    else if(fizz.value === "" || buzz.value === "") {
      output.appendChild(p);
      return;
    }

    let fizzValue = "";
    let buzzValue = "";

    for(let i = 1, x = 1; fizzValue < 100, buzzValue < 100; i++, x++) {
      
      fizzValue = (fizz.value)*i;
      buzzValue = (buzz.value)*x;

      if(fizzValue%(fizz.value) === 0 && fizzValue%(buzz.value) === 0){
        const fizz = document.createElement("p");
        fizz.innerText = `FizzBuzz${fizzValue}`;
        output.appendChild(fizz);
        const buzz = document.createElement("p");
        buzz.innerText = `Buzz${buzzValue}`;
        output.appendChild(buzz);
      }
      
      else if(buzzValue%(fizz.value) === 0 && buzzValue%(buzz.value) === 0) {
        const fizz = document.createElement("p");
        fizz.innerText = `Fizz${fizzValue}`;
        output.appendChild(fizz);
        const buzz = document.createElement("p");
        buzz.innerText = `FizzBuzz${buzzValue}`;
        output.appendChild(buzz);
      }
      
      else {
        const fizz = document.createElement("p");
        fizz.innerText = `Fizz${fizzValue}`;
        output.appendChild(fizz);
        const buzz = document.createElement("p");
        buzz.innerText = `Buzz${buzzValue}`;
        output.appendChild(buzz);
      }
    }
  });
});