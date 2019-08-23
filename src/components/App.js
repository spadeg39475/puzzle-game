import React from 'react';
import Nav from './Nav';
import Enter from './Enter';
import Game from './Game';


class App extends React.Component{
    state ={
       
    }

    

    render(){
        return(
            <React.Fragment>
                <Nav />
                <div className='main'>
                    <div className='view'>
                        <Enter />
                        <Game />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
