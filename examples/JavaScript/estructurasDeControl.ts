// bucles

for (let i = 1; i <= 5; i++) {
  console.log(i)
}

const calificacion = 'A'

// Usando if-else
if (calificacion === 'A') {
  console.log('Excelente')
} else if (calificacion === 'B') {
  console.log('Buen trabajo')
} else {
  console.log('Necesitas mejorar')
}

// Usando switch
switch (calificacion) {
  case 'A':
    console.log('Excelente')
    break
  case 'B':
    console.log('Buen trabajo')
    break
  default:
    console.log('Necesitas mejorar')
}
