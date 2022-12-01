import React , {useState} from 'react';
import UsersList from './Components/Users/UsersList';
import AddUser from './Components/Users/AddUser';


function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (userName, age) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age:age, id:Math.random().toString()}];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
