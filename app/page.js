import { getData } from "./actions/neondb";

export default async function Page() {
    let data = await getData().then((data) => {
        console.log(data);
        return data;
    });
    return (
        <div>
            <h1>My Todos</h1>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}
