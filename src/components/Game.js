import React from 'react';



class Game extends React.Component{
    state ={
        b: [1,2,3,4,5,6,7,8,0],

        canGo: [ [2,4],
                [1,3,5],
                [2,6],
                [1,5,7],
                [2,4,6,8],
                [3,5,9],
                [4,8],
                [5,7,9],
                [6,8]
            ],

        position: [ [0,0],
                    [100,0],
                    [200,0],
                    [0,100],
                    [100,100],
                    [200,100],
                    [0,200],
                    [100,200],
                    [200,200]
                ]
    }

    // initState = ()=>{
    //     let  position = new Array();
    //     position[0] = [0,0];
    //     position[1] = [100,0];
    //     position[2] = [200,0];
    //     position[3] = [0,100];
    //     position[4] = [100,100];
    //     position[5] = [200,100];
    //     position[6] = [0,200];
    //     position[7] = [100,200];
    //     position[8] = [200,200];  
    //     this.setState({'position': position});

    //     let canGo = new Array();
    //     canGo[0] = [2,4];
    //     canGo[1] = [1,3,5];
    //     canGo[2] = [2,6];
    //     canGo[3] = [1,5,7];
    //     canGo[4] = [2,4,6,8];
    //     canGo[5] = [3,5,9];
    //     canGo[6] = [4,8];
    //     canGo[7] = [5,7,9];
    //     canGo[8] = [6,8];
    //     this.setState({'canGo': canGo});
    // }

    move = (id) =>{
        let i=1;
        for( i; i<10; i++){
            if(this.state.b[i-1] == id){
               break;
            }
        }
        console.log(i);

        let target = 0;
        target = this.whereCanGo(i);
        console.log(target);
        if(target !== 0){
            let newList =  this.state.b.map((el,index) => {
                if( index === i-1 ){
                    return 0;
                }else if( index === target-1){
                    return id;
                }else{
                    return el;
                }
            })
            this.setState({'b': newList});
            
            document.getElementById("b" + id).style.left=this.state.position[target-1][0] + "px";
            document.getElementById("b" + id).style.top=this.state.position[target-1][1] + "px";
        }

        // let isFinish = false;
        // for(let k=1; k<9; k++){
        //     if(this.state.b[k-1] != k){
        //         isFinish =false;
        //         break;
        //     }else{
        //         isFinish = true;
        //         alert('Congratulation!');
        //     }
        // }
    }    

    whereCanGo = (i) =>{
        let j;
        let canMove = false;
        
        // console.log(this.state.canGo[i-1][j])
        for(j=0; j < this.state.canGo[i-1].length; j++){
            // console.log(this.state.b[this.state.canGo[i-1][j]-1])
            let test = this.state.b[this.state.canGo[i-1][j]-1] 
        //     console.log(this.state.b[this.state.canGo[i-1][j]]  );
            if(test === 0){
                canMove = true;
                break;
             }
        }
        if(canMove === true){
            // console.log(this.state.canGo[i-1][j]);
            return this.state.canGo[i-1][j];
        }else{
            return 0;
        }
    }


    random = ()=> {
        for(let i=8; i>1; i--){
            // let to =parseInt(Math.random()*(i+1)) ;
            let to = parseInt(Math.random()*(i-1)+1);
            console.log('random'+to);
            console.log('i=' +i);
            if(this.state.b[i-1] !== 0){
                document.getElementById("b" + this.state.b[i-1]).style.left=this.state.position[to-1][0] + "px";
                document.getElementById("b" + this.state.b[i-1]).style.top=this.state.position[to-1][1] + "px";
            }
            if(this.state.b[to-1] !== 0){
                document.getElementById("b" + this.state.b[to-1]).style.left=this.state.position[i-1][0] + "px";
                document.getElementById("b" + this.state.b[to-1]).style.top=this.state.position[i-1][1] + "px";
            }
            let temp = this.state.b.map((el,index)=>{
                if(index === to-1){
                    return this.state.b[i-1];
                }else if (index === i-1){
                    return this.state.b[to-1];
                }else{
                    return el;
                }
            })
            console.log('temp='+temp);
            this.setState({'b': temp});
        }
    }

    render(){
        // window.addEventListener('DOMContentLoaded', this.initState)
        console.log(this.state.b);
        let isFinish = true;
        for(let k=1; k<9; k++){
            if(this.state.b[k-1] != k){
                isFinish =false;
                break;
            }
        }
        if(isFinish === true){
            console.log('pass');
        }
        
        return(
            <React.Fragment>
            <div className='container'>
                <div className='block' id='b1' onClick={()=>this.move(1)}>1</div>
                <div className='block' id='b2' onClick={()=>this.move(2)}>2</div>
                <div className='block' id='b3' onClick={()=>this.move(3)}>3</div>
                <div className='block' id='b4' onClick={()=>this.move(4)}>4</div>
                <div className='block' id='b5' onClick={()=>this.move(5)}>5</div>
                <div className='block' id='b6' onClick={()=>this.move(6)}>6</div>
                <div className='block' id='b7' onClick={()=>this.move(7)}>7</div>
                <div className='block' id='b8' onClick={()=>this.move(8)}>8</div>
                {/* <div className='block' id='b9'>9</div> */}
            </div>
            <button onClick={this.random}>click</button>
            </React.Fragment>
        )
    }
}

export default Game;