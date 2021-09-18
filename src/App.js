import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Person name="Rubel" niyka="Mousumi"></Person>
      <Person name="BappRaj" niyka="Chaka"></Person>
      <Person name="SakibKhan" niyka="Bubli"></Person>
      <Friend name="Abul" address="Andorkilla" age="20"></Friend>
      <Friend name="Kabul" address="Bandorbon" age="21"></Friend>
      <Friend name="Jolil" address="Rongpur" age="22"></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <h3>Hero of: {props.niyka}</h3>
    </div>
  )
}

function Friend(props) {
  const friend = {
    backgroundColor: 'lightgreen',
    padding: '10px',
    color: 'blue',
    width: '50%',
    margin: ' 10px auto',
    borderRadius: '10px',
    border: '2px solid red'
  }
  return (
    <div style={friend}>
      <h2>Name: {props.name}</h2>
      <h4>Address: {props.address}</h4>
      <h5>Age: {props.age}</h5>
    </div>
  )
}

export default App;
