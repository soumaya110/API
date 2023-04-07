import UserList from "./UserList/UserList";
import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [listOfUSer,setListOfUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      axios(`https://jsonplaceholder.typicode.com/users`)
      .then(result => { setListOfUser(result.data); setIsLoading(false);})
    }
    fetchItems();
  },[]);
  return (
    <div>

      <div className="list">
      <UserList listOfUSer={listOfUSer} isLoading={isLoading} />
      </div>

    </div>
  );
}

export default App;
