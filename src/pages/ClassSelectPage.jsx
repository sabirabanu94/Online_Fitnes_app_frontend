import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassSelectionPage = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const response = await axios.get('http://localhost:5000/api/classes');
            setClasses(response.data);
        };
        fetchClasses();
    }, []);

    return (
        <div>
            <h2>Select a Class</h2>
            <ul>
                {classes.map((classItem) => (
                    <li key={classItem.id}>
                        {classItem.name} - {classItem.trainer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassSelectionPage;