import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }

        if(+enteredAge < 1){
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
        
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
        <Card>
            <form onSubmit={addUserHandler}>

                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username" 
                onChange={usernameChangeHandler}
                value={enteredUsername}
                />

                <label htmlFor="age">Age</label>
                <input 
                type="number" 
                id="age" 
                onChange={ageChangeHandler}
                value={enteredAge}
                />

                <Button type='submit'>Add User</Button>

            </form>
        </Card>
    )

}

export default AddUser