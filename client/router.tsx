import No from './components/no'

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'

  import App from './components/App'


  export const routes = createRoutesFromElements(
   <Route path="/">
      
        <Route path='no' element={<No />} />
        <Route path="/" element={<App />} />
        {/* <Route path='questionnaire' element={<Questionnaire />} />
        <Route path='result' element={<Results />} /> */}
        
    </Route>
)


export const router = createBrowserRouter(routes)