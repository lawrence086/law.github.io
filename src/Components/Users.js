import React, { Component } from 'react'
import '../Css/user.css';
import img4 from '../images/user.jfif';
export default class Users extends Component {
    //array values 
  state = {
    display: 'Users Information',
        Users : [
          { 
            user_name: 'L.s',
            user_surname: 'Sekgoka',
            user_age: 26,
            user_location: 'Flora Park'
          },
          {
            user_name: 'MD',
            user_surname: 'Mawasha',
            user_age: 30,
            user_location: 'Ladanna'
          },
          {
            user_name: 'T.D',
            user_surname: 'Sebola',
            user_age: 45,
            user_location: 'Ivy Park'
          },
          {
            user_name: 'L.J',
            user_surname: 'Johnson',
            user_age: 52,
            user_location: 'Polokwane'
          },
          {
            user_name: 'K',
            user_surname: 'Sams',
            user_age: 61,
            user_location: 'Seshego'
          }
            
        ]
      }

  //render info
	render() {
		return (
            <div className="title">
                <img src={img4}
                        alt="" width="100"/>
                        <hr/>
			<ul>
            {/* Display User Info */}
            <h1>{ this.state.display }</h1>
            {this.state.Users.map(element =><li>{element.user_name + '  |  ' + element.user_surname + ', ' + element.user_location + '  -  ' + element.user_age}</li>)}
      </ul>
      </div>
      
      );
}

//Function
//Verify User Age
checkAge(user_age){
  if(user_age >= 18){
    return 'You are allowed to code';
  }
  else{
    return 'You are not allowed to code';
  }
    }
}
