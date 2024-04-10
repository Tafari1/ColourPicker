let btnC = document.createElement("button");
btnC.id = "btnC";
btnC.textContent = "Press me";

document.body.append(btnC);

let colours = [
  { name: "red", value: "#780707" },
  { name: "blue", value: "#4F57D1" },
  { name: "pink", value: "#EC2DDF" },
  { name: "green", value: "#2BE12B" },
  { name: "Purple", value: "#8A2BE2" },
  { name: "Gold", value: "#EFBD0A" },
  { name: "Yellow", value: "#E7EF0A" },
  { name: "Orange", value: "#EF620A" },
  { name: "black", value: "#00000A" },
  { name: "Grey", value: "#616161" },
  { name: "White", value: "#FFFFFF" },
];

let currentColourIndex = 0;

btnC.addEventListener("click", function () {
  document.body.style.background = colours[currentColourIndex].value;
  btnC.textContent = colours[currentColourIndex].name;

  //incrementing
  currentColourIndex++;

  /*if the current colour index is greater than the length of 
  the array start again at position 0*/
  if (currentColourIndex >= colours.length) {
    currentColourIndex = 0;
  }
});
