import { BASE_URL } from "../utils/backend_services";

export const postTodos = async({newTodo}) => {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo),
    });
    if(response.ok){
        const data = await response.json();
        console.log(data);
        return data;
    }else{
       // throw new Error(`Error fetching todos: ${response.status}`);
    }
    
}