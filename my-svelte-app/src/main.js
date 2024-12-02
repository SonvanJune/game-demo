import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import Game from './Game.svelte'

const app = mount(Game, {
  target: document.getElementById('app'),
})

export default app
