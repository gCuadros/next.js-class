const nombre: string = 'Alice' // String
const edad: number = 30 // Number
const esEstudiante: boolean = true // Boolean

function saluda(nombre) {
  return `Hola, ${nombre}!`
}

interface Persona {
  nombre: string,
  apellido: string,
  estadoCivil: string,
  edad: number,
  esEstudiante: boolean
}

const persona: Persona = {
  nombre: 'Alice',
  apellido: 'Smith',
  estadoCivil: 'soltera',
  edad: 30,
  esEstudiante: true
}

interface Estudiante extends Persona {
  universidad: string,
  matricula: number,
  curso: number,
  clase: string
}

const estudiante = {
  nombre: 'Alice',
  apellido: 'Smith',
  estadoCivil: 'soltera',
  edad: 30,
  universidad: 'UCLA'
  matricula: '123456'
  curso: 1
  clase : 'A'
}

const trabajadora = {
  nombre: 'Alice',
  apellido: 'Smith',
  estadoCivil: 'soltera',
  edad: 30,
  empresa: 'Google',
  cargo: 'Software Engineer'
}
