import React from 'react';
import { GrLocation } from 'react-icons/gr';
import Spinner from '../components/Spinner';

const ForexSignals = () => {
  return (
    <div className="mt-24">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded symbol p-3 bg-green-600">
                  <img src="/images/eurusd-2.png" alt="" />
                </div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <div className=" flex font-bold uppercase text-gray-500 dark:text-gray-400 justify-around">
                  <span>EURUSD | BUY</span>
                </div>
                <hr />
                <div className="font-bold signal dark:text-gray-600 flex justify-around">
                  <div className="text-gray-600 dark:text-white ">
                    <span className="flex justify-between signal-line ">
                      <p className="text-left">Entry: </p>
                      <p className="text-right">1.21222</p>
                    </span>
                    <span className="flex justify-between signal-line ">
                      <p className="text-left">SL: </p>
                      <p className="text-right">1.21222</p>
                    </span>
                    <span className="flex justify-between ">
                      <p className="text-left ">Time: </p>
                      <p className="text-right text-green-600">5 minutes ago</p>
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-white">
                    <span className="flex justify-between signal-line">
                      <p className="text-left">TP 1: </p>
                      <p className="text-right">1.21222</p>
                    </span>
                    <span className="flex justify-between signal-line">
                      <p className="text-left">TP 2: </p>
                      <p className="text-right">1.21222</p>
                    </span>
                    <span className="flex justify-between ">
                      <p className="text-left">TP 3: </p>
                      <p className="text-right">1.232</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
    </div>
  );
};

export default ForexSignals;
