import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../lib/firebase.prod';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async (email, password, firstName, lastName) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = updateProfile(res.user, {
      displayName: `${firstName} ${lastName}`,
    });

    return user;
  };

  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);

    return res;
  };

  const logout = async () => {
    const res = await signOut(auth);

    return res;
  };

  const resetPassword = async email => {
    const res = await sendPasswordResetEmail(auth, email);

    return res;
  };

  // const updateEmail = async email => {
  //   const res = await user.updateEmail(email);

  //   return res;
  // };

  // const updatePassword = async password => {
  //   const res = await user.updatePassword(password);

  //   return res;
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);

      setLoad(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        login,
        logout,
        resetPassword,
        err,
        setErr,
        loading,
        setLoading,
      }}>
      {!load && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
