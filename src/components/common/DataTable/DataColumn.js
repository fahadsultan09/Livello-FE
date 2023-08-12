const columnDefinitions = {
    users: [
        { id: 'id', label: 'ID' },
        { id: 'name', label: 'Name' },
        { id: 'age', label: 'Age' },
    ],
    hobbies: [
        { id: 'passionLevel', label: 'Passion Level' },
        { id: 'name', label: 'Hobby Name' },
        { id: 'year', label: 'Year' },
        { id: 'action', label: 'Action', action: 'delete' },
        // Add more columns as needed
    ],
    // Add more component definitions if necessary
};

export default columnDefinitions;