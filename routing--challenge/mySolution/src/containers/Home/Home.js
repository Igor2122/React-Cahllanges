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
            
            <Switch>
               <Route path="/courses" component={Courses} />
               <Route path="/users" component={User} />
               <Route render={() => <h1>Opps... this page not found</h1>} /> {/* should be inside the switch as we have nested routes on the page */}
            </Switch>
            

         </div>              
      );
   }
}



export default Home;