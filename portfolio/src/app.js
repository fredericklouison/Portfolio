import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Acceuil from './Component/Acceuil/Acceuil'
import admin from './Component/admin/admin'
import About from './Component/apropos/About'
import Contact from './Component/Contact/Contact'
import Notfound from './Component/Notfound'
import Projet from './Component/Projet/Projet'


const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Acceuil} />
            <Route exact path='/about/' component={About} />
            <Route exact path='/Projets/' component={Projet} />
            <Route exact path='/Contact/' component={Contact} />
            <Route exact path='/admin' component={admin} />
            <Route   component={Notfound} />
            
        </Switch>
        </BrowserRouter>
    )
}

export default App