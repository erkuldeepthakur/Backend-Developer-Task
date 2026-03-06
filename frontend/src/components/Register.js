
import {useState} from "react";
import api from "../api";

export default function Register(){

 const [form,setForm]=useState({});

 const submit = async()=>{

  await api.post("/auth/register",form);

  alert("Registered");

 };

 return(
 <div>
 <h2>Register</h2>

 <input placeholder="name"
 onChange={e=>setForm({...form,name:e.target.value})}/>

 <input placeholder="email"
 onChange={e=>setForm({...form,email:e.target.value})}/>

 <input placeholder="password"
 type="password"
 onChange={e=>setForm({...form,password:e.target.value})}/>

 <button onClick={submit}>Register</button>

 </div>
 );

}
