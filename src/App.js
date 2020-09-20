import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Form from './Components/Form'
function App(){
    return(
        <BrowserRouter>
            <div>
                <Route path='/' component={Form}/>
            </div>
        </BrowserRouter>
    )
}

export default App