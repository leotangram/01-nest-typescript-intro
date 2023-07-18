export let name = 'Leonardo'
export const age = 30
export const isValid = true

name = 'Hellen'

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
o escapar caracteres \${hola}
expresiones ${1 + 1}
números: ${age}
booleanos: ${isValid}
`

console.log(templateString)
