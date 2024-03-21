import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserProfileDoc } from "../../utils/firebase/firebase.utils";
import './sign-up-form.styles.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SignUpForm=()=>{
    const defaultFormFields= {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    const handleChange=(event) => {
        const {name,value}=event.target;
        setFormFields({...formFields,[name]: value})
    }


    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match!");
            return
        }
        try{
            const {user}=await createAuthUserWithEmailAndPassword(email,password);
            const createdUser=await createUserProfileDoc(user,{"displayName": displayName});
            console.log(createdUser);
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Email already in use! Try signing up with a different email address.")
            }
            else{
                console.log(error);
            }
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Signup with Email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Display Name"}
                    additionalProps={
                        {
                            type: "text",
                            name: "displayName",
                            value:displayName,
                            onChange: handleChange
                        }
                    }
                />
                <FormInput
                    label={"Email"}
                    additionalProps={
                        {
                            type:"email",
                            name: "email",
                            value:email,
                            onChange: handleChange
                        }
                    }
                />
                <FormInput
                    label={"Password"}
                    additionalProps={
                        {
                            type: "password",
                            name: "password",
                            value: password,
                            onChange: handleChange
                        }
                    }
                />
                <FormInput
                    label={"Confirm Password"}
                    additionalProps={
                        {
                            type: "password",
                            name: "confirmPassword",
                            value: confirmPassword,
                            onChange: handleChange
                        }
                    }
                />

                <Button
                    children={"SUBMIT"}
                    buttonType={"inverted"}
                    additionalProps={
                        {
                            type: "submit"
                        }
                    }
                />
            </form>
        </div>
    )
}

export default SignUpForm;