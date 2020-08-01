import React, { useState } from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [saveContact, addContact] = useState();

  function hanldeContact(payload) {
    console.log(payload);
    addContact(() => {
      return {
        fName: payload.fName,
        lName: payload.lName,
        email: payload.email,
      };
    });
  }

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    // Shorter alternative:
    
    
    const { value, name } = event.target;

    setContact(previousValue => {
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  const [welcome, setWelcome] = useState(true);
  

  function submitContact(event) {

    event.preventDefault();
    setWelcome(false);
    hanldeContact(contact);
      setContact({
          fName: "",
          lName: "",
          email: ""
      });
      
      setShowText(!showText);
  }

  const [showText, setShowText] = useState(true);


  const [color, setColor] = useState("");
  const styles = {
    backgroundColor: color
  };

  return (
    <div className="container">
      <div>
        { welcome ? <h1>Hello</h1> : <div><h1>Welcome {saveContact.fName} {saveContact.lName}.</h1> <h1>You are successfully registered.</h1> <h1><CheckCircleIcon fontSize="large" /></h1> </div> }
      </div>
      {showText && 
      
      (<form onSubmit={submitContact} >
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={styles}
          onMouseOver={() => setColor("black")}
          onMouseOut={() => setColor("")}
          onClick={()=> submitContact}
        >
          Submit
        </button>
      </form>)
      
      }
    </div>
  );
}

export default App;



