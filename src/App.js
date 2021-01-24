import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component';
import PostsList from './components/postsList.component';
import EditPost from './components/postEdit.component';
import CreatePost from './components/postCreate.component';
import ViewPost from './components/postView.component';

function App() {
  return (
    <Router>
      <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={PostsList} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/create" component={CreatePost} />
          <Route path="/view/:id" component={ViewPost} />
      </div>
    </Router>
    
  );
}

export default App;
