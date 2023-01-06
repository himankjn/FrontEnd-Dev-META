import { useState } from "react";

export default function RegisterHooks(){
    const [form, setForm]= useState({
        fname:"mike",
        email:"mike123@gmail.com"
    })

    function handlename(e){
        setForm({
            ...form,
            fname:e.target.value
        }
        )
    }
    function handlemail(e){
        setForm({
            ...form,
            email:e.target.value
        }
        )
    }
    return(
        <div id="register_form">
            <label>Name: 
            <input value={form.fname} onChange={handlename}/>
            </label>

            <br />
            
            <label >E-mail: 
            <input value={form.email} onChange={handlemail}/>
            </label>

            <h1>{form.fname}{' '}{form.email}</h1>

        </div>
    );
}