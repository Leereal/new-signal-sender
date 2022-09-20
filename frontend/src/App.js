import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Orders,
  Employees,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  ColorPicker,
} from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import ForexSignals from './pages/ForexSignals';
import BinarySignals from './pages/BinarySignals';
import VolaSignals from './pages/VolaSignals';
import BinaryBots from './pages/BinaryBots';
import RiseFallBots from './pages/RiseFallBots';
import Login from './pages/Login';
import MemberProfile from './pages/MemberProfile';

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    user,
  } = useStateContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user ? (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-11" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<MemberProfile />} />

                {/* signals  */}
                <Route path="/forex" element={<ForexSignals />} />
                <Route path="/binary-options" element={<BinarySignals />} />
                <Route path="/synthetic-indices" element={<VolaSignals />} />

                {/* robots  */}
                <Route path="/forex-bots" element={<BinarySignals />} />
                <Route path="/binary-bots" element={<BinaryBots />} />
                <Route path="/rise-and-fall-bots" element={<RiseFallBots />} />
                <Route
                  path="/synthetic-indices-bots"
                  element={<BinarySignals />}
                />

                {/* trading history  */}
                <Route path="/forex-history" element={<BinarySignals />} />
                <Route
                  path="/binary-options-history"
                  element={<BinarySignals />}
                />
                <Route
                  path="/rise-and-fall-history"
                  element={<BinarySignals />}
                />
                <Route
                  path="/synthetic-indices-history"
                  element={<BinarySignals />}
                />

                {/* admin section  */}
                <Route path="/members" element={<Members />} />
                <Route path="/users" element={<Employees />} />
                <Route path="/activities" element={<Employees />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  ) : (
    <Login />
  );
};

export default App;