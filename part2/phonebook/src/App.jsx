import { useState, useEffect } from "react";
import "./components/Persons";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {

  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearchName, setSearchName] = useState("");
  const [newMessage, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");



  useEffect(() => {
      personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const personsToShow =
    newSearchName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newSearchName.toLowerCase())
        );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber
    };

    if (persons.some((person) => person.name === newName)) {
      alert(
        `${newName} is already added to the phonebook, replace the old number with the new one?`
      );
      const personId = persons.find((person) => person.name === newName).id;
      personService.update(personId, personObject).then((returnedPersons) => {
        setPersons(
          persons.map((person) =>
            person.id !== personId ? person : returnedPersons
        ));
        setNewName("");
        setNewNumber("");
      });
    } else {
      personService.create(personObject).then((returnedPersons) => {
        console.log("Added")

        setPersons(persons.concat(returnedPersons));
        console.log(persons)
        setNewName("");
        setNewNumber("");
      });
    }
    setMessageType("success");
    setMessage(`Added ${personObject.name}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);

    if (window.confirm("Delete " + personToDelete.name + "?")) {
      personService
        .deleteObject(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log(error);
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
    setMessageType("error");
    setMessage(
      `Information of ${personToDelete.name} has already remove from server`
    );
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage}  messageType={messageType} />
      <Filter
        newSearchName={newSearchName}
        handleSearchNameChange={handleSearchNameChange}
      />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
