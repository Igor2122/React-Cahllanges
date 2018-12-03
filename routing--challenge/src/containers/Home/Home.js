import React, {Component} from 'react';
// eslint-disable-next-line
import { Route, NavLink, Switch } from 'react-router-dom';
import Courses from '../Courses/Courses';
import User from '../Users/Users';
import Course from '../Course/Course';


class Home extends Component  {

   render() {
      return (
         <div>
            <ul>
               <li>
                  <NavLink to="/courses">Course</NavLink>
               </li> 
               <li>
                  <NavLink to="/users">Users</NavLink>
               </li> 
            </ul> 

            <Route path="/courses" component={Courses} />
            <Route path="/users" component={User} />
            

         </div>              
      );
   }
}



export default Home;