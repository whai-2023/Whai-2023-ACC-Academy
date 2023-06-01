import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'

  import App from './components/App'


  export const routes = createRoutesFromElements(
    <Route path="/" element={<App />}>
        {/* <Route path='questionnaire' element={<Questionnaire />} />
         */}
    </Route>
)


export const router = createBrowserRouter(routes)