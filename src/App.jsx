import { useState } from "react";
import './App.css';

export default function App() {
  const [person, setPerson] = useState({
    name: 'Nicss',
    beautyLvl: 10000000,
    address: 'Tubigon'
  });

  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [beautyLvlInput, setBeautyLvlInput] = useState('');

  function handeNameChange(event) {
    setNameInput(event.target.value);
  }

  function handeAddressChange(event) {
    setAddressInput(event.target.value);
  }

  function handeBeautyLvlChange(event) {
    setBeautyLvlInput(event.target.value);
  }

  function handleSubmit() {

    setPerson(prevPerson => {
      return {
        ...prevPerson,
        name: nameInput || prevPerson.name,
        address: addressInput || prevPerson.address,
        beautyLvl: beautyLvlInput || prevPerson.beautyLvl
      };
    });
    
   
    setNameInput('');
    setAddressInput('');
    setBeautyLvlInput('');
  }

  return (
    <div className="GWAPO">
      <h1>GF Info</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{person.name}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{person.address}</td>
          </tr>
          <tr>
            <th>Beauty Level</th>
            <td>{person.beautyLvl}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={nameInput} onChange={handeNameChange} /><br />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={addressInput} onChange={handeAddressChange} /><br />
          <label htmlFor="beautyLvl">Beauty Level</label>
          <input type="text" id="beautyLvl" value={beautyLvlInput} onChange={handeBeautyLvlChange} />
        </div>
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
    
  );
}