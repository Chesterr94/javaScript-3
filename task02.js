const stringToRight = stringEditor => {
  return stringEditor.substring(0,1).toUpperCase() + stringEditor.substring(1).toLowerCase();
};

let stringEditor = prompt("Введите фразу");

console.log(stringToRight(stringEditor));

