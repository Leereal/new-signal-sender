import React, { createContext, useContext, useState } from 'react';
import io from 'socket.io-client';

const API_SERVER =
  process.env.REACT_APP_ENV === 'dev'
    ? process.env.REACT_APP_DEV_SERVER
    : process.env.REACT_APP__PROD_SERVER;
  const socket_data = (data)=>{
    
  }
const open_socket = (user) => {
  const socket = io.connect(process.env.REACT_APP_SOCKET_SERVER, {
    upgrade: false,
    transports: ['websockets'],
  });
  socket.on('server-data',socket_data)
};
const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.id;
    setFormData((prevFormData) => {
      return { ...prevFormData, [field]: value };
    });
    console.log(formData);
  };

  const handleSubmit = () => {
    console.log('Submit button clicked');
  };

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        user,
        setUser,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
