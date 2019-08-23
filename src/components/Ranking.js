import React from 'react';

class Ranking extends React.Component{

    // init = () =>{
    //     let rankingList = JSON.parse(localStorage.getItem('RankingList'));
    //     let list = rankingList.map(el=>{
    //         return (
    //             <div>
    //                 <div>{el.user}</div>
    //                 <div>{el.stepCount}</div>
    //             </div>    
    //         )
    //     })
    // }

    render(){
        // window.addEventListener('load', this.init);
        return(
            <div>
                <h2 className='title'>Rank</h2>
            </div>
            
        )
    }
}

export default Ranking;