import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const DynamicForm = ({ authToken }) => {
    const { data, isLoading, isError } = useQuery('formFields', () =>
        axios.get('https://your-api-url.com/form', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(res => res.data)
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await axios.post('https://your-api-url.com/submit', formData, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Form submission response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching form fields!</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-md rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold text-gray-900 mb-3">Dynamic Form</h1>
                            <p className="text-gray-500">This form is dynamically generated from API.</p>
                        </div>
                        <form className="py-8 text-base leading-6 space-y-4 text-gray-700" onSubmit={handleSubmit}>
                            {data.fields.map((field) => (
                                <div key={field.id} className="relative">
                                    <input
                                        type="text"
                                        name={field.name}
                                        placeholder={field.label}
                                        className="w-full border rounded-md pl-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                            ))}
                            <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-6 hover:bg-blue-600 transition-colors duration-300">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicForm;
