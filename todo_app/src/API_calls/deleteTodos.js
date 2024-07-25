import { BASE_URL } from "../utils/backend_services";

export const deleteTodos = async( id ) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: "DELETE",  
    });
    if(response.ok){
        const data = await response.json();
        console.log(data);
        window.location.replace('/');
        alert('Congrats on completing your task!');
        return data;
    }else{
        throw new Error(`Error fetching todos: ${response.status}`);
    }
    
}