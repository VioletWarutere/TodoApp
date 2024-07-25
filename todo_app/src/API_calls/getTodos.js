import { BASE_URL } from "../utils/backend_services";

export const getTodos = async() => {
    const response = await fetch(`${BASE_URL}/todos`,{
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            
        }
    });
    if(response.ok){
        const data = await response.json();
        console.log(data.todos);
        return data.todos;
    }else{
        throw new Error(`Error fetching todos: ${response.status}`);
    }
}