import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {

  
  render() {
    let subscribers = [
      {
        id: 1,
        name: 'Rohan Shorey',
        phone: '9090909090'
      },
      {
        id: 2,
        name: 'Pranav Shorey',
        phone:'8989898989'
      }
    ]
    return (
      <div>
        {/* <Header/>
        <button>Add</button>
        
          <span>Name</span><br />
          <span>Phone</span> */}
          <div>
        <Header />
          <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>

            <div className="grid-container heading-container">
                <span className="grid-item name-heading">Name</span>
                <span className="grid-item phone-heading">Phone</span>
                
              </div>

              {
                subscribers.map(sub =>{
                  return <div key={sub.id} className='grid-container'>
                    <span className='grid-item'>{sub.name}</span>
                    <span className='grid-item'>{sub.phone}</span>
                    <span className='delete-item'>Delete</span>
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
export default App;