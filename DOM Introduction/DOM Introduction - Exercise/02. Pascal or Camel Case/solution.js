function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById(`naming-convention`).value;
  let result = document.getElementById(`result`);


  let selector = {
    "Camel Case"(str) {
      str = str.split(/\s/g).reduce((acc, el, loc) => {
        if(loc === 0){
          acc+= el.toLowerCase();
        }else{
          acc+= el[0].toUpperCase();
          acc+= el.slice(1, el.length).toLowerCase();
        }
        return acc;
      }, "");
      return str;
    },
    "Pascal Case"(str){
      str = str.split(/\s/g).reduce((acc, el) => {
        acc += el[0].toUpperCase();
        acc += el.slice(1, el.length).toLowerCase();

        return acc;
      }, "");
      return str;
    },
  };


  if(selector.hasOwnProperty(currentCase)){
    result.innerText = selector[currentCase](input);
  }else{
    result.innerText = "Error!";
  }
}