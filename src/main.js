import './main.css'
// import './app.css'
import 'bulma/css/bulma.css';

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
