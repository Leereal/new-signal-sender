import React, { createContext, useContext, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

const API_SERVER =
  process.env.REACT_APP_ENV === "dev"
    ? process.env.REACT_APP_DEV_SERVER
    : process.env.REACT_APP__PROD_SERVER;

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);
  const [saved, setSaved] = useState(false);
  const socket = io.connect(process.env.REACT_APP_SOCKET_SERVER, {
    upgrade: false,
    transports: ["websockets"],
  });

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.id;
    setFormData((prevFormData) => {
      return { ...prevFormData, [field]: value };
    });
  };

  const handleSubmit = (endpoint, mode, id) => {
    let url = "";
    if (endpoint === "startServer") {
      url = process.env.REACT_APP_DEV_SERVER + "/robots-settings/start-server";
    } else if (endpoint === "stopServer") {
      url = process.env.REACT_APP_DEV_SERVER + "/robots-settings/stop-server";
    } else if (endpoint === "setRobot") {
      if (mode === "edit") {
        url = process.env.REACT_APP_DEV_SERVER + "/robots-settings/edit/" + id;
      } else {
        url = process.env.REACT_APP_DEV_SERVER + "/robots-settings/set";
      }
    } else {
      url = process.env.REACT_APP_DEV_SERVER;
    }
    mode === "edit"
      ? axios.patch(url, { formData }).then((response) => setSaved(true))
      : axios.post(url, { formData }).then((response) => setSaved(true));
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
        socket,
        saved,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
