const descuentos = [
  {
    categoria: 'estudiante',
    descuento: (100 - 80) / 100
  },
  {
    categoria: 'trainee',
    descuento: (100 - 50) / 100
  },
  {
    categoria: 'junior',
    descuento: (100 - 15) / 100
  }
];

const precioUnitario = 200;

function totalAPagar() {
  let cantidad = document.getElementById('inputCantidad').value; //traigo todo pero le pido solo el texto que ingrese, value  para que me de el valor ingresado
  let categoria = document.getElementById('inputState').value;
  let precioTotal = cantidad * precioUnitario;


  switch (categoria) {
    case 'estudiante':
      precioTotal = precioTotal * descuentos[0].descuento;
      break

    case 'trainee':
      precioTotal = precioTotal * descuentos[1].descuento;
      break

    case 'junior':
      precioTotal = precioTotal * descuentos[2].descuento;
      break

  }
  let total = document.getElementById('total');
  total.value = "Total a Pagar: $"+precioTotal;
}

let resumen = document.getElementById('resumen');
resumen.addEventListener('click', totalAPagar);


