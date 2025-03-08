import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)

// import { StrictMode } from 'react'
// import ReactDOM from 'react-dom';
// import './index.css'
// import App from './App.jsx'

// ReactDOM.render(
//   <StrictMode>
//     <App/>
//   </StrictMode>,
//   document.getElementById('root')
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
