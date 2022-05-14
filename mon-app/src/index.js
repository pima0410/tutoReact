import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
    
   
    render(props){
        return (<button className="square" onClick={ this.props.onClick} /> )
        //return(<div class="square">{this.props.value}</div>)
    }
}

class Game extends React.Component{
   constructor(props){
       super(props);
       this.state={
        orderLetter : "X"
       
       }
     
   }

   handleClick(e){
       let orderLetterTemp;
    e.currentTarget.innerHTML=this.state.orderLetter;
    this.state.orderLetter ==="X" ? orderLetterTemp="O"  : orderLetterTemp ="X";
   console.log(this.state.orderLetter)
   this.setState({
       orderLetter :orderLetterTemp
   })
    //useState.orderLetter ==="X" ? this.setState.orderLetter="O"  : this.setState.orderLetter ="X";
}

    render(){
        
        var divCell=[];
        var ret =[];
        for(let i = 0; i < 3; i++){
            divCell= [];
           for(let j = 0; j < 3; j++){
            divCell.push(<Square value={this.state.orderLetter} 
                            key={j}  
                            onClick={(e)=>this.handleClick(e)}
                            
                        />)  
           }
            ret.push([<div className="board-row" key={i} >{divCell}</div>]);
            
        }
       
      return (<div>{ret}</div>);
    }
} 
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);