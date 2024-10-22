import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const [count, setCount] = useState(0);
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const response = await fetch('/post-test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    }

    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    The Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                        <button onClick={handleClick}>{count}</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="first_name">First name:</label>
                        <input
                            id="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="last_name">Last name:</label>
                        <input
                            id="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
