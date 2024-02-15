// Tipos basicos

const nombre: string = 'Alice'
const edad: number = 30
const esEstudiante: boolean = true
const valorNulo: null = null
const valorIndefinido: undefined = undefined
const identificadorUnico: symbol = Symbol('id')
const numeroGrande: bigint = 9007199254740991n

console.log(nombre) // Salida: Alice
console.log(edad) // Salida: 30
console.log(esEstudiante) // Salida: true
console.log(valorNulo) // Salida: null
console.log(valorIndefinido) // Salida: undefined
console.log(identificadorUnico) // Salida: Symbol(id)
console.log(numeroGrande) // Salida: 9007199254740991

// Tipos avanzados

// Unión de Tipos
let id: number | string
id = 101 // válido
id = '202' // también válido

// Intersección de Tipos
type Empleado = { nombre: string; salario: number }
type Estudiante = { nombre: string; curso: string }

const persona: Empleado & Estudiante = {
  nombre: 'Alice',
  salario: 30000,
  curso: 'TypeScript Avanzado'
}

console.log(persona) // Salida: { nombre: 'Alice', salario: 30000, curso: 'TypeScript Avanzado' }

// Enums
enum DiasDeLaSemana {
  Lunes = 'Lunes',
  Martes = 'Martes',
  Miercoles = 'Miercoles',
  Jueves = 'Jueves',
  Viernes = 'Viernes',
  Sabado = 'Sabado',
  Domingo = 'Domingo'
}

console.log(DiasDeLaSemana) // Salida: { Lunes: 'Lunes', Martes: 'Martes', Miercoles: 'Miercoles', Jueves: 'Jueves', Viernes: 'Viernes', Sabado: 'Sabado', Domingo: 'Domingo' }

const hoy: DiasDeLaSemana = DiasDeLaSemana.Jueves
console.log(hoy) // Salida: Miercoles
