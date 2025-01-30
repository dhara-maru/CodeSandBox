import "./styles.css";
import Function from './Function.js';

export default function App() {
  const handleSubmit = ()=>{
    alert("Form submitted successfully!")
  }

  const handleClick = ()=>{
    alert("you clicked on input!")
  }

  return (
    <div className="App">
<h1>Props demo form</h1>
  <form onSubmit={handleSubmit}>
<input type="text" onClick={handleClick} placeholder="Enter Email"/><br/><br/>
<input type="password" placeholder="Enter Password"/><br/><br/>
<button type="submit">Submit</button>

  </form>


<Function display={true}></Function>
    </div>
  );
}


