import React,{Component} from "react";

class AddPizza extends Component{

    state={
        name:"",
        description:""
    }

    handleChange = (e) => {
        console.log(e.target.value); 
        // this.state['name'] = name prop
        this.setState({
            // name: e.target.value,
            // description:e.target.value
            [e.target.id]:e.target.value
        })
        // this.setState({
        //     name:
        // })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state,this.props);
        this.props.addCard(this.state);
    }

    render(){
        return(
            <div id="add-pizza">
            <h2>Please fill the details</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Enter Name" onChange={this.handleChangeName}></input><br></br>

                <label forHtml="forHtml">Enter description</label><br></br>
                <textarea rows="4" cols = "20" id="description" placeholder="Enter description" onChange={this.handleChangeDescription}></textarea><br></br>

                <input type="submit" value="Add Card"></input>
            </form>
            </div>
        )
    }
}

export default AddPizza;



















