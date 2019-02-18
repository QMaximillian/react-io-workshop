import React, {useState, useEffect} from "react";
import {apiRequest, LOCAL_STORAGE_KEY} from "../../services/api";

export const AuthContext = React.createContext();

const Auth = ({children}) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [user, setUser] = useState(null);

  const setCurrentUser = newUser => {
    setUser(newUser);

    if (!user) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    }
  };

  const authenticate = async () => {
    try {
      const response = await apiRequest({path: "/auth/validate_token"});

      if ("success" in response && response.success) {
        setCurrentUser(response.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    authenticate();
  });

  if(initialLoading) {
    return null;
  }

  const context = {user, setCurrentUser};

  return (
      <AuthContext.Provider value={context}>
        {children(context.user)}
      </AuthContext.Provider>
  )
};

export default Auth;
