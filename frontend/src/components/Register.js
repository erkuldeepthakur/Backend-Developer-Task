import { useState } from "react";
import api from "../api";

export default function Register() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const submit = async () => {

    try{

      await api.post("/auth/register",form);

      alert("Registered successfully");

      setForm({
        name:"",
        email:"",
        password:""
      });

    }catch(err){

      if(err.response){
        alert(err.response.data.message);
      }else{
        alert("Server error");
      }

    }

  };

  return (

    <div style={{marginBottom:"30px"}}>

      <h2>Register</h2>

      <input
      placeholder="Name"
      value={form.name}
      onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <br/><br/>

      <input
      placeholder="Email"
      value={form.email}
      onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <br/><br/>

      <input
      type="password"
      placeholder="Password"
      value={form.password}
      onChange={(e)=>setForm({...form,password:e.target.value})}
      />

      <br/><br/>

      <button onClick={submit}>
        Register
      </button>

    </div>

  );

}