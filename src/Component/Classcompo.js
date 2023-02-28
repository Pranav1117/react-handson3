import {Component} from 'react';
import Data from './Data'


export default class ClassCompo extends  Component{
constructor(){
    super();
    this.state={
        clicked:false,
        name:"",
        department:"",
        rating:0,
        array:[]
    }
}


Change=(event)=>{
this.setState({
    [event.target.name]:event.target.value})
//console.log(e.target.value)
//console.log(this.name)


}
    handleClick=()=>{
        const saveData={
          name:this.state.name,
          department:this.state.department,
          rating:this.state.rating,
          clicked:this.state.clicked,
        }

        const arr = this.state.data;
        arr.push(saveData);
        this.setState({array:arr,data:arr})
    }

    toggleFormClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }

    onFormSubmit=(event)=>{
        let temp_obj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        this.state.array.push(temp_obj);

        this.setState({
            clicked:true,
            name:"",
            department:"",
            rating:'' ,
        })
    }

    render(){
        return(
        <div className='maindiv'>
        { ! this.state.clicked ?
        <>
         <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
         <form>
         <div className='inputdiv1'>Name:<input type='text' className='input1' name='name' 
          placeholder='Enter Your Name'  onChange={this.Change}/>          </div>
         <br/>

         <div className='inputdiv2'>Department :<input type='text' className='input1' 
          name='department' placeholder='Enter Department'  onChange={this.Change}/></div>
         <br/>
         
         <div className='inputdiv3'>Rating :<input type='number' className='input1' 
          name='rating' placeholder='Enter Rating'  onClick={this.Change}/></div>
         <br/>

         <button className='btn' onClick={this.onFormSubmit}>Submit</button>
         </form>
         
         </> :
        <Data data={this.state.array} toggleFunc={this.toggleFormClick}/>
    }
        </div>

       
       
        )
        
    }
}