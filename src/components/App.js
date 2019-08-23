import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Game from './Game';


class App extends React.Component{
    state ={
       
    }

    render(){
        return(
            <React.Fragment>
            <BrowserRouter>
                <Nav />
                <Route path="/" exact component={Game}  />
                <div className='main'>
                    <div className='view'>
                        <Game />
                    </div>
                </div>
            </BrowserRouter>

            </React.Fragment>
        )
    }
}

export default App;
