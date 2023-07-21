import './style.css'
import { charmander } from './bases/06-decorators2'

charmander

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.name} ${charmander.id}</h1>
`
