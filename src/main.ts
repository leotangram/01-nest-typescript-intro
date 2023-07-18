import './style.css'
import { bulbasaur } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${bulbasaur.name}</h1>
`
