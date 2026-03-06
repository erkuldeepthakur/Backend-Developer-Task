import { useState, useEffect } from "react";
import api from "../api";

export default function Dashboard() {

const [tasks,setTasks] = useState([]);
const [title,setTitle] = useState("");

const token = localStorage.getItem("token");

const loadTasks = () => {
 api.get("/tasks",{
  headers:{authorization:token}
 }).then(res => setTasks(res.data));
};

useEffect(()=>{
 loadTasks();
},[]);

const createTask = async () => {

 await api.post("/tasks",
 { title },
 { headers:{authorization:token} }
 );

 setTitle("");
 loadTasks();
};

return(
<div>

<h2>Tasks</h2>

<input
placeholder="New Task"
value={title}
onChange={e=>setTitle(e.target.value)}
/>

<button onClick={createTask}>Add Task</button>

{tasks.map(t=>(
<p key={t._id}>{t.title}</p>
))}

</div>
);

}