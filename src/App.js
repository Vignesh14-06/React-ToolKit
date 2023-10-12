import './App.css';
import { useSelector } from 'react-redux';
import Forms from './Forms';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const {data} = useSelector((state)=> state.list)
  console.log(data,'data')
  return (
    <div className="App" >
     <Forms/>
     <UserList/>
    </div>
  );
}

export default App;
