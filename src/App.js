import React, {useState, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import User from './components/users/User'
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import './App.css';

 const App = () => {
   
 const [alert, setAlerts] = useState(null);



//  async componentDidMount(){
//   this.setState({loading: true});
   

//   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
//   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//   this.setState({users: res.data, loading: false});
//  }

 const setAlert = (msg,type) => {
   setAlerts({msg,type});

   setTimeout(() => setAlerts(null),5000)
 }


   return (
    <GithubState>
    <Router> 
     <div className="App">
      <Navbar title="Github Finder"/>
      <div className="container">
      <Alert alert={alert}/>
      <Switch>
       <Route 
        exact path='/'
        render={props => (
          <Fragment>
          <Search  
          setAlert={setAlert} 
          />
           <Users /> 
          </Fragment>
        )}
       />
       <Route exact path='/about' component={About}/>
       <Route exact path='/user/:login' component={User} />
      </Switch>     
      </div>
     </div>
    </Router>
    </GithubState>
   )
}

export default App;
