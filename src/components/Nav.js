import React from 'react';
import { Link, NavLink } from 'react-router-dom';



class Nav extends React.Component{
    // state ={
       
    // }

    

    render(){
        return(
            <div className='nav'>
                <Link to='/'><div className='game'>Game</div></Link> 
                <Link to='/ranking'><div className='ranking'>Ranking</div></Link>
            </div>
        )
    }
}

export default Nav;