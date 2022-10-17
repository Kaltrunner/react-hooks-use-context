import React from 'react';  

const UserContext = React.createContext();

function UserProvider({ children }) {
    const currentUser = [user, setUser] = useState(null);
    return ( 
    <UserContext.Provider value={{ user, setuser }}>
        {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };