import logo from './logo.svg';
import './App.css';
//import Message from './MessageComponent';
import  {Message} from './FunctionalMessageComponent';


const Heading = ({text})=><h1>{text}</h1>;
function App() {

  const messages = [
    {title:"Message 1", text:"This is message 1", active:true},
    {title:"Message 2", text:"This is message 2", active:false},
    {title:"Message 3", text:"This is message 3", active:false}
  ]

  let active = false;

  return (
    <div className="App">

      <Heading text="Heading"/>

    {
      messages.map(messages => <Message {...messages}/>)
    }
      

      {/* <Message {...messages[0]}/>

      <Message title={messages[1].title} 
      text={messages[1].text} 
      active={messages[1].active}/>

      <Message title="Message 3" text="This is message 3" active={true}/> */}

    </div>
  );
}

export default App;
