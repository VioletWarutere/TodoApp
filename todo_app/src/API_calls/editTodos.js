import { BASE_URL } from "../utils/backend_services";

export const editTodos = async({updatedTodo, id}) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
    });
    if(response.ok){
        const data = await response.json();
        console.log(data);
        alert("Todo updated successfully");
        return data;
    }else{
        throw new Error(`Error fetching todos: ${response.status}`);
    }
    
}