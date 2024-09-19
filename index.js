const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const formContainer = document.querySelector(".containerPizza");
const resultContainer = document.querySelector(".resultContainer");
const addForm = document.querySelector(".add-Form");
const pizzaInput = document.querySelector(".inputpizza");

const init = () => {
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
  });

  // Cuando cargue, mostrar la ultima pizza encontrada
  const savedPizza = localStorage.getItem("ultimatePizza");
  const pizza = JSON.parse(savedPizza);
  if (savedPizza) {
    renderizarPizza(pizza);
  }
};

function addTask() {
  const pizzaId = pizzaInput.value.trim();
  //Si esta vacio el campo, no permite continuar
  if (!pizzaId) {
    resultContainer.innerHTML = "<h4>ERROR: Campo imcompleto</h4>";
    return;
  }

  const pizzaIdNumber = parseInt(pizzaId, 10); // Convertir a número
  const pizza = pizzas.find((pizza) => pizza.id === pizzaIdNumber); // Buscar la pizza por ID

  if (pizza) {
    // Renderizar la pizza encontrada
    renderizarPizza(pizza);

    // Guardardo la pizza en LocalStorage
    localStorage.setItem("ultimatePizza", JSON.stringify(pizza));
  } else {
    // Msj de error
    resultContainer.innerHTML =
      "<h4>ERROR:<br>No se encontró una pizza. Ingrese un número del 1 al 5</h4>";
  }
}

function renderizarPizza(pizza) {
  // Función para mostrar la pizza en la página
  resultContainer.innerHTML = `
     <div class="pizza-card-container">
       <div class="pizza-card">
         <h2>${pizza.nombre}</h2>
         <p>Precio: $${pizza.precio}</p>
         <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
         <img src="${pizza.imagen}">
       </div>
     </div>
   `;
}
init();
