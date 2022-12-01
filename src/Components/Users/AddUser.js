import React, {useState} from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';



const AddUser = props => {
        const [enteredUserName, setEnteredUserName] = useState('');
        const [enteredAge, setUserAge] = useState('');
        const [error, setError] = useState();

        const addUserHandler = (event) => {
            event.preventDefault();
            if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
                setError({
                    title : "Invalid Input",
                    message : "Please enter a valid name and age in years" 
                });
                return;
            }
            if(+enteredAge < 1){
                setError({
                    title : "Invalid Input",
                    message : "Please enter age > 0 in years" 
                });
                return;
            }
            console.log(enteredUserName + " " + enteredAge);
            props.onAddUser(enteredUserName,enteredAge);
            setEnteredUserName('');
            setUserAge('');
        }

        const userNameHandler= (event) => {
            setEnteredUserName(event.target.value);
        }

        const userAgeHandler= (event) => {
            setUserAge(event.target.value);
        }

        const errorHandler= () =>{
            setError(null);
        }

    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUserName} onChange={userNameHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" 
                value={enteredAge} onChange={userAgeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>
    );
};

export default AddUser;