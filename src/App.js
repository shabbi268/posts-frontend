import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/navbar.component';
import PostsList from './components/PostsList/postsList.component';
import EditPost from './components/PostEdit/postEdit.component';
import CreatePost from './components/PostCreate/postCreate.component';
import ViewPost from './components/PostView/postView.component';
import Welcome from './components/Welcome/welcome.component';

function App() {
  return (
    <Router>
      <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={Welcome} />
          <Route path="/posts" exact component={PostsList} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/create" component={CreatePost} />
          <Route path="/view/:id" component={ViewPost} />
      </div>
    </Router>
    
  );
}

export default App;
