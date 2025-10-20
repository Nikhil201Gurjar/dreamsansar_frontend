import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import App from './App.jsx'

import {Provider} from 'react-redux'
import store from './store/Store'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ChakraProvider>
<Provider store={store}>
      <BrowserRouter>
    <App />
      </BrowserRouter>

</Provider>

 </ChakraProvider>

  </StrictMode>,
)
