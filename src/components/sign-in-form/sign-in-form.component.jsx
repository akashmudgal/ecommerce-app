import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component";
import { signInWithGooglePopup,createUserProfileDoc,signInUserwithCredential } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import './sign-in-form.styles.scss'
const SignInForm= ()=>{
    const defaultFormFields={
        email: '',
        password: ''
    }
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields=()=>setFormFields(defaultFormFields);

    const handleChange=(event) => {
        const {name,value}=event.target;
        setFormFields({...formFields,[name]: value})
    }

    const handleSubmit= (event)=>{
        event.preventDefault();
        signInUserwithCredential(email,password)
        .then(()=>{
            resetFormFields();
            alert("Signed In Successfully!");
        })
        .catch((error)=>{
            switch (error.code) {
                case 'auth/invalid-credential':
                  alert('Username or Password Incorrect. Please try again.');
                  break;
                default:
                  console.log(error);
            }
        })
    }

    const signInGoogle = ()=>{
        signInWithGooglePopup()
        .then(async (result)=>{
            const {user}=result;
            await createUserProfileDoc(user);
        })
        .catch((error)=>{
            switch(error.code) {
                case "auth/popup-closed-by-user":
                    alert("Authentication Cancelled by User")
                    break;
                default:
                    console.log(error);
            }
        });

    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    additionalProps={
                        {
                            type: "email",
                            name: "email",
                            value: email,
                            onChange: handleChange,
                            required: true,
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
                            onChange: handleChange,
                            required: true,
                        }
                    }
                />
                <div className="buttons-container">
                    <Button
                        buttonType={"inverted"}
                        children={"SIGN IN"}
                        additionalProps={{
                            type: "submit"
                        }}
                    />
                    <Button
                        buttonType={"google"}
                        children={"SIGN IN WITH GOOGLE"}
                        additionalProps={
                            {
                                onClick: signInGoogle
                            }
                        }
                    />
                </div>

            </form>


        </div>
    )
}

export default SignInForm;