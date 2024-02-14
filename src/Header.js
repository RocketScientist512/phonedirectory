import React, {Component} from 'react';
import './Header.css' ; 


const Header = function (){
    // const headerStyle = {textAlign:'center',padding:'20', background:'#000', color:'#fff', textTransform:'uppercase'};
    return (
        /* Earlier we were using 'style={{haederStyle}} in place of className'*/
        <div className='header'> 
        Phone Directory
      </div>
    )
}

//Writing as a class component now

// class Header extends Component{
//     render(){
//         return(
//             <div>
//              Phone Directory
//             </div>
//         )
//     }
// }


export default Header;