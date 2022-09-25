import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";

const RobotForm = ({ mode, id }) => {
  const { handleChange } = useStateContext();
  const [robots, setRobots] = useState([]);
  const [bot, setBot] = useState(null);
  const getBot = async () => {
    return axios.get(
      process.env.REACT_APP_DEV_SERVER + "/robots-settings/" + id
    );
  };
  const getRobots = async () => {
    return axios.get(process.env.REACT_APP_DEV_SERVER + "/robots");
  };
  useEffect(() => {
    Promise.all([getBot(), getRobots()]).then(function (results) {
      setBot(results[0].data.settings);
      setRobots(results[1].data.robots);
    });
  }, []);
  return (
    <form>
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="account_name"
              className="block text-sm font-medium text-gray-700"
            >
              Account Name
            </label>
            <input
              defaultValue={bot && bot.account_name}
              type="text"
              name="account_name"
              id="account_name"
              placeholder="e.g: John Doe - Real"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="token"
              className="block text-sm font-medium text-gray-700"
            >
              API Token
            </label>
            <input
              defaultValue={bot && bot.token}
              type="text"
              name="token"
              id="token"
              placeholder="e.g: A5WQ7hbdg"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="robot_id"
              className="block text-sm font-medium text-gray-700"
            >
              Robot
            </label>
            <select
              value={(bot && bot.robot_id) || ""}
              id="robot_id"
              name="robot_id"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option>Select Robot</option>
              {Array.isArray(robots)
                ? robots.map((robot) => (
                    <option key={robot.id} value={robot.id}>
                      {robot.name}
                    </option>
                  ))
                : null}
            </select>
          </div>

          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="stake"
              className="block text-sm font-medium text-gray-700"
            >
              Stake
            </label>
            <input
              defaultValue={bot && bot.stake}
              type="text"
              name="stake"
              id="stake"
              placeholder="e.g: 0.35"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="expiration"
              className="block text-sm font-medium text-gray-700"
            >
              Expiration
            </label>
            <input
              defaultValue={bot && bot.expiration}
              type="text"
              name="expiration"
              id="expiration"
              placeholder="e.g: 310"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="current_payout"
              className="block text-sm font-medium text-gray-700"
            >
              Current Payout
            </label>
            <input
              defaultValue={bot && bot.payout}
              type="text"
              name="payout"
              id="payout"
              placeholder="e.g: 0.95"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="current_level"
              className="block text-sm font-medium text-gray-700"
            >
              Current Level
            </label>
            <input
              defaultValue={bot && bot.current_level}
              type="text"
              name="current_level"
              id="current_level"
              placeholder="e.g: 1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="target"
              className="block text-sm font-medium text-gray-700"
            >
              Target
            </label>
            <input
              defaultValue={bot && bot.target_percentage}
              type="text"
              name="target_percentage"
              id="target_percentage"
              placeholder="e.g:10"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="strategy"
              className="block text-sm font-medium text-gray-700"
            >
              Strategy
            </label>
            <select
              id="strategy"
              name="strategy"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                handleChange(e);
              }}
              disabled
            >
              {/* <option>Select Strategy</option> */}
              <option value={1}>Martingale</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RobotForm;
