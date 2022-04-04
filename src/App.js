import logo from './logo.svg';
import './App.css';
//import Message from './MessageComponent';
import  {Message} from './FunctionalMessageComponent';



function App() {

  let active = false;

  return (
    <div className="App">

      <Message title="Message 1" text="This is message 1" active={active}/>

      <Message title="Message 2" text="This is message 2" active={true}/>

    </div>
  );
}

export default App;
