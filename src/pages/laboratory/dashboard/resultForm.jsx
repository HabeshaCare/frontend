import React, { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux/authSlice';
import { selectLaboratoryId } from "@/redux/laboratorySlice";

const submitTestValues = async ({ token, testData, id, requestId }) => {
    const response = await axios.put(`http://localhost:5072/api/Laboratory/${id}/test-requests/${requestId}`, testData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

const TestRequestCard = ({ data }) => {
    console.log("dataaa", data)
    const { doctorName, laboratoryName, requestedDate, tests, id: requestId } = data;


    const [testValues, setTestValues] = useState(
        tests.reduce((acc, test) => {
            acc[test.id] = test.testValue || '';
            return acc;
        }, {})
    );
    const token = useSelector(selectToken);
    const id = useSelector(selectLaboratoryId);
    const mutation = useMutation( submitTestValues);

    const handleChange = (e, testId) => {
        setTestValues({
            ...testValues,
            [testId]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const testData = tests.map(test => ({
            id: test.id,
            testName: test.testName,
            testValue: testValues[test.id],
        }));
        const data = {results: testData}
        console.log("tdata",testData)
        mutation.mutate({ token, testData: data, id, requestId });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-bold">{doctorName}</h2>
                </div>
                <div>
                    <p className="text-sm text-gray-600 mb-2">Laboratory: <span className="font-bold">{laboratoryName}</span></p>
                    <p className="text-sm text-gray-600 mb-2">Requested Date: <span className="font-bold">{new Date(requestedDate).toLocaleDateString()}</span></p>
                    <div className="mb-4">
                        <h3 className="text-sm text-gray-600 font-bold mb-2">Tests:</h3>
                        <ul className="text-sm text-gray-600">
                            {tests.map((test, index) => (
                                <li key={index} className="mb-2">
                                    <span className="font-bold">{test.testName}:</span>
                                    <input
                                        type="text"
                                        value={testValues[test.id]}
                                        onChange={(e) => handleChange(e, test.id)}
                                        placeholder={`Enter value for ${test.testName}`}
                                        className="ml-2 border rounded-md px-2 py-1"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    disabled={mutation.isLoading}
                >
                    {mutation.isLoading ? 'Submitting...' : 'Submit'}
                </button>
                {mutation.isError && <div className="text-red-500 mt-2">Error: {mutation.error.message}</div>}
                {mutation.isSuccess && <div className="text-green-500 mt-2">Successfully submitted!</div>}
            </form>
        </div>
    );
};

export default TestRequestCard;
