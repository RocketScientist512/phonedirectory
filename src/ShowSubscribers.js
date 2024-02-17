import React, { Component } from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';

class ShowSubscribers extends Component {

  clickHandler(message){
    alert(message);
  }

  //We do not need this anymore as we are updating all of this in the PhoneDirectory.js file. 
  // constructor(){
  //   super();
  //   this.state={
  //     subscribersListToShow: []
  //   }
  //   console.log("Constructor Called");
  // }

  // componentDidMount(){
  //   console.log("Component Did Mount Called");
  //   let newSubscriber ={
  //     id: 1,
  //     name: 'Rohan Shorey',
  //     phone: '9910430954'
  //   }
  // let subscribersList = this.state.subscribersListToShow;
  // subscribersList.push(newSubscriber);

  // this.setState({subscribersListToShow: subscribersList})  ;
  // }

  //we are making ShowSubscriber.js into a dumb component as well

  onDeletedClick = (subscriberId) =>{
    this.props.deleteSubscriberHandler(subscriberId);
  }


  render() {
    console.log("Render Called");
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: 'Rohan Shorey',
    //     phone: '9090909090'
    //   },
    //   {
    //     id: 2,
    //     name: 'Pranav Shorey',
    //     phone:'8989898989'
    //   }
    // ]
    return (
      <div>
        {/* <Header/>
        <button>Add</button>
        
          <span>Name</span><br />
          <span>Phone</span> */}
          <div>
          
        <Header />
          <div className="component-body-container">
            <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>

            <div className="grid-container heading-container">
                <span className="grid-item name-heading">Name</span>
                <span className="grid-item phone-heading">Phone</span>
                
              </div>

              {
                this.props.subscriberList.map(sub =>{
                  return <div key={sub.id} className='grid-container'>
                    <span className='grid-item'>{sub.name}</span>
                    <span className='grid-item'>{sub.phone}</span>
                    <button className='delete-item' onClick={this.onDeletedClick.bind(this.sub.id)}>Delete</button>
                    </div>
                })
              }
              {/* <div className="grid-container heading-container">
                <span className="grid-item ">Shilpa</span>
                <span className="grid-item">+91-1231231231</span>
              </div>

              <div className="grid-container heading-container">
                <span className="grid-item ">Shrishti</span>
                <span className="grid-item ">+91-2132132131</span>
              </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default ShowSubscribers;