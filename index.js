const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let button = document.getElementById("generatePasswordBtn");
let passwordPlaceholder1 = document.getElementById("passwordPlaceholder1");
let passwordPlaceholder2 = document.getElementById("passwordPlaceholder2");

button.addEventListener("click", () => {
  passwordPlaceholder1.textContent = "";
  passwordPlaceholder2.textContent = "";

  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    passwordPlaceholder1.textContent += characters[randomIndex];

    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    passwordPlaceholder2.textContent += characters[randomIndexTwo];
  }
});
// Función para copiar el contenido de un placeholder
function copyToClipboard(id) {
  // Obtener el contenido del passwordPlaceholder
  const passwordText = document.getElementById(id).textContent;

  // Crear un elemento temporal para copiar el texto
  const tempInput = document.createElement("input");
  tempInput.value = passwordText;
  document.body.appendChild(tempInput);

  // Seleccionar y copiar el texto
  tempInput.select();
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(tempInput);

  // Mostrar una alerta personalizada con SweetAlert2
  Swal.fire({
    title: "¡Copiado!",
    text: "La contraseña ha sido copiada al portapapeles.",
    icon: "success",
    confirmButtonColor: "#10b981",
    confirmButtonText: "OK",
    scrollbarPadding: false,
    heightAuto: false,
    customClass: {
      container: "my-swal-container",
      popup: "my-swal-popup",
      title: "my-swal-title",
      content: "my-swal-content",
      confirmButton: "my-swal-confirm-button",
    },
    hideClass: {
      popup: "", // Elimina la animación al ocultar
    },
  });
}

// Asociar la función de copiar con los botones
document.getElementById("copy-btn1").addEventListener("click", function () {
  copyToClipboard("passwordPlaceholder1");
});

document.getElementById("copy-btn2").addEventListener("click", function () {
  copyToClipboard("passwordPlaceholder2");
});
