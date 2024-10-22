import { useState } from 'react';

interface TestProps {
    message: string;
    data: { name: string; id: number }[];
}
export default function Test({ message, data }: TestProps) {
    const [userList, setUserList] = useState(data);
    const [newUser, setNewUser] = useState('');

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewUser(e.target.value);
    }

    function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
        const newUserList = [
            ...userList,
            { name: newUser, id: userList.length + 1 },
        ];
        setUserList(newUserList);
        setNewUser('');
    }
    return (
        <div>
            <h1>{message}</h1>
            <ul>
                {userList.map((item) => (
                    <li key={item.id}>
                        {item.id} - {item.name}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                name="newUser"
                id="newUser"
                value={newUser}
                onChange={handleOnChange}
            />
            <button onClick={handleOnClick}>Add</button>
        </div>
    );
}
