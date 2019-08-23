import React from 'react';



class Game extends React.Component{
    state ={
        text: '',
        stepCount: 0,
        isStart: false,
        isFinish: false,
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

    handleInputChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    handleItemSubmit= (e) => {
        e.preventDefault();
        let userName = this.state.text;
        localStorage.setItem('userName', userName);
    }

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

            let count = this.state.stepCount;
             count=count+1;
            this.setState({'stepCount': count});
            
            document.getElementById("b" + id).style.left=this.state.position[target-1][0] + "px";
            document.getElementById("b" + id).style.top=this.state.position[target-1][1] + "px";
        }

        for(let k=1; k<9; k++){
            if(this.state.b[k-1] != k){
                this.setState({'isFinish': false});
                break;
            }else{
                this.setState({'isFinish': true});
            }
        }
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


    randomsort = (a,b)=> {

        return Math.random() >.5? -1: 1;
    }

    random = ()=>{
        if(this.state.text===''){
            alert('Please enter your name');
        }else{
            this.setState({'isStart': true});
            let userName = this.state.text;
            localStorage.setItem('userName', userName)

            this.setState({'stepCount': 0 });

            let random = this.state.b.sort(this.randomsort);
            // console.log(random);
            this.setState({'b': random});

            for(let i=0 ; i<9; i++) {
                document.getElementById("b" + this.state.b[i]).style.left=this.state.position[i][0] + "px";
                document.getElementById("b" + this.state.b[i]).style.top=this.state.position[i][1] + "px";
            }
        }
    }

    render(){
        
        
        // this.setState({'isFinish': isFinish});
        if(this.state.isFinish === true && this.state.isStart === true){
            console.log('pass');
            localStorage.setItem('stepCount', this.state.stepCount);
            // let rankinglist =JSON.parse(localStorage.getItem('RankingList'));
            let user =this.state.text;
            let count = this.state.stepCount;

            if(localStorage.RankingList){
                let rankingList = JSON.parse(localStorage.getItem('RankingList'));
                console.log(rankingList);
                rankingList.push({user: user, stepCount:count});
                localStorage.setItem('RankingList',JSON.stringify(rankingList));
            }else{
                let rankingList =[{
                    user: user,
                    stepCount: count
            }]
            localStorage.setItem('RankingList',JSON.stringify(rankingList));
            }
            
        }
        
        return(
            <React.Fragment>
            <form onSubmit={this.handleItemSubmit}>
                <input className='inputName' type="text" placeholder="Please enter your name" onChange={this.handleInputChange} value={this.state.text}></input>
            </form>
            <div className='stepCount'>Step count: <span id='stepCount'>{this.state.stepCount}</span></div>
            <div className='container'>
                <div className='block' id='b1' onClick={()=>this.move(1)}>1</div>
                <div className='block' id='b2' onClick={()=>this.move(2)}>2</div>
                <div className='block' id='b3' onClick={()=>this.move(3)}>3</div>
                <div className='block' id='b4' onClick={()=>this.move(4)}>4</div>
                <div className='block' id='b5' onClick={()=>this.move(5)}>5</div>
                <div className='block' id='b6' onClick={()=>this.move(6)}>6</div>
                <div className='block' id='b7' onClick={()=>this.move(7)}>7</div>
                <div className='block' id='b8' onClick={()=>this.move(8)}>8</div>
                <div className='block' id='b0'></div>
            </div>
            <button className='start' onClick={this.random}>Game Start !</button>
            </React.Fragment>
        )
    }
}

export default Game;