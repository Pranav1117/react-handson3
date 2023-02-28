import{Component} from "react";
//import ClassCompo from './Classcompo'

class Data extends Component{
constructor (props){
    super();
    this.state={}
}

    render(){
        return(
            <>
            <h1>Employee Data</h1>

            <div id='data_container'>
                {this.props.data.map((ele,index)=>{
                    return(
                    <div id='inner_container' key={index}>
                        <span>Name:{ele.name} |
                        Department: {ele.department} |
                        Rating :{ele.rating}</span>
                    </div>
                    );
                })
                }
            </div>
            <button className='dyn_btn' onClick={this.props.toggleFunc}>Go Back</button>
            </>
        )
    }
}

export default Data;