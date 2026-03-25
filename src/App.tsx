
import './App.css'
import Button, { ButtonVariant } from './Button'

function App() {


  return (
    <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
      <Button  variant={ButtonVariant.Standard}>Standard Button</Button>
      <Button variant={ButtonVariant.Outlined} color="blue">Outlined Button</Button>
      <Button variant={ButtonVariant.Flat} bgcolor="lightgray" color="black">Flat Button</Button>
    </div>
  )
}

export default App
