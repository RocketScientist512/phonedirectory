import React, {Component} from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscriberList: [{
                id: 1,
                name: 'Rohan Shorey', 
                phone: '9910430954'
            },
            {
                id:2,
                name: 'Pranav Shorey',
                phone: '9999425988'
            }
            ]
        }
    }

    deleteSubscriberHandler = (subscriberId) =>{
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscriberList.forEach(function(subscriber, index){
            if(subscriber.id== subscriber.id){
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscriberList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    addSubscriberHandler = (newSubscriber) =>{
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length >0){
            newSubscriber.id = subscriberList[subscriberList.length-1].id + 1 ;
        }
        else{
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
        console.log("Phone Directory");
        console.log(this.state.subscriberList);
    }
    render(){
        return(
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            // <ShowSubscribers subscriberList={this.state.subscriberList}/>
            <BrowserRouter>
            <Routes>
            
                <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscriberList = {this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}/>                
                <Route exact path="/add" render={(props) => <AddSubscriber {...props} addSubscriberHandler = {this.addSubscriberHandler}/>}/>
            
            </Routes>
            </BrowserRouter>
            
        );
    }
}

export default PhoneDirectory;