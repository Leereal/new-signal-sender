import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const RobotForm = () => {
  const { handleChange } = useStateContext();
  return (
    <form>
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="api_token"
              className="block text-sm font-medium text-gray-700"
            >
              API Token
            </label>
            <input
              type="text"
              name="api_token"
              id="api_token"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="robot"
              className="block text-sm font-medium text-gray-700"
            >
              Robot
            </label>
            <select
              id="robot"
              name="robot"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
            >
              <option>Select Robot</option>
              <option value={1}>Quickbucks</option>
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
              type="text"
              name="stake"
              id="stake"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
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
              type="text"
              name="expiration"
              id="expiration"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
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
              type="text"
              name="current_payout"
              id="current_payout"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="target"
              className="block text-sm font-medium text-gray-700"
            >
              Target
            </label>
            <input
              type="text"
              name="target"
              id="target"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
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
              onChange={handleChange}
            >
              <option>Select Strategy</option>
              <option value={1}>Martingale</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RobotForm;
