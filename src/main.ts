import './style.css'
import { charmander } from './bases/05-decorators'

charmander

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.name} ${charmander.id}</h1>
`
