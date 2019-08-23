import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Game from './Game';
import Ranking from './Ranking';


class App extends React.Component{
    state ={
       
    }

    render(){
        return(
            <React.Fragment>
            <BrowserRouter>
                <Nav />
                
                <div className='main'>
                    <div className='view'>
                      <Route path="/" exact component={Game}  />
                      <Route path="/ranking"  component={Ranking} />
                    </div>
                </div>
            </BrowserRouter>

            </React.Fragment>
        )
    }
}

export default App;
