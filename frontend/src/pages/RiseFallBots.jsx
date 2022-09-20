import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Filter,
  GridComponent,
  Inject,
  Page,
  Resize,
  Sort,
} from '@syncfusion/ej2-react-grids';
import React from 'react';
import Modal from '../components/Modal';
import RobotForm from '../components/RobotForm';
import { contextMenuItems, robotsData, robotsGrid } from '../data/data';

const RiseFallBots = () => {
  const clickHandler = () => {};
  return (
    <div className="mt-3 mb-9">
      <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 m-3">
        <h2 className="font-semibold text-3xl mb-5">
          Welcome to your robots section
        </h2>
        <p>
          You are allowed to set up your robots and view their performance here.
          You can add your account and adjust settings.
        </p>
        <hr className="my-6 border-gray-300" />
        <p className="mb-3">
          Algorithm trading is the best option for all busy traders.
        </p>
        <Modal
          openModalBtn="Connect Account"
          modalTitle="Connect Robot"
          submitBtnText="Connect"
        >
          <RobotForm />
        </Modal>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded symbol p-3 bg-green-600">
                  <img src="/images/eurusd-2.png" alt="" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
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
      <hr className="border-b-2 border-gray-600 my-8 mx-4"></hr>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <GridComponent
          id="gridcomp"
          dataSource={robotsData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
        >
          <ColumnsDirective>
            {robotsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default RiseFallBots;
