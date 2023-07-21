import './style.css'
import { charmander } from './bases/04-injection'

charmander

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.name} ${charmander.id}</h1>
`
