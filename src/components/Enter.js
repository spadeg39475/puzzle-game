import React from 'react';



class Enter extends React.Component{
    state ={
       text: '',
       stepCount: 0
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
        this.setState({
            text: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleItemSubmit}>
                <input className='inputName' type="text" placeholder="Please enter your name" onChange={this.handleInputChange} value={this.state.text}></input>
                <button className='start'>Game Start !</button>
                <div className='stepCount'>Step count: <span id='stepCount'>{this.state.stepCount}</span></div>
            </form>
        )
    }
}

export default Enter;