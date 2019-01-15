import { setGlobal } from 'reactn'
import App from './src'

setGlobal({
  quote:
    'It is recommended that you initialize the global state just prior to mounting with ReactDOM, the same way a Redux store would be initialized this way.',
  name: 'Tuan',
})

export default App
