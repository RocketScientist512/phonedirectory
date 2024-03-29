import React, {Component} from "react";
import Header from "./Header";
import './AddSubscriber.css';
import { Link } from "react-router-dom";

class AddSubscriber extends Component{

    constructor(){
        super();
        this.state = {
            id:0,
            name: '',
            phone: ''
        }
    }
    inputChangeHandler= (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        
        this.setState(state);
        console.log(this.state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0, name:'', phone:''});
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className="component-body-container">
                   <Link to="/" ><button className="custom-btn">Back</button></Link><br/><br/>

                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name: </label><br/>
                        <input id="name" type='text' className="input-control" name='name' onChange={this.inputChangeHandler}/> <br/><br/>
                        <label htmlFor="phone" className="label-control" name='phone' />Phone: <br/>
                        <input id="phone" type='text' className="input-control" name='phone' onChange={this.inputChangeHandler} /> <br/><br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added: </span><br/>
                            <span className="subscriber-info">Name: {this.state.name}</span><br/>
                            <span className="subscriber-info">Phone: {this.state.phone}</span><br/>
                        </div>
                        <button type='submit' className="custom-btn add-btn">Add</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddSubscriber;