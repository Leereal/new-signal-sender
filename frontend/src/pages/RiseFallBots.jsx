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
} from "@syncfusion/ej2-react-grids";
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import RobotForm from "../components/RobotForm";
import { contextMenuItems, robotsData, robotsGrid } from "../data/data";
import { useStateContext } from "../contexts/ContextProvider";
import Submit from "../components/Submit";
import axios from "axios";
import Robot from "../components/Robot";
import { ConfirmPopup } from "primereact/confirmpopup";

const RiseFallBots = () => {
  const { socket, currentColor, handleSubmit } = useStateContext();
  const handleClick = () => {
    socket.emit("connection");
  };
  const [bots, setBots] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_SERVER + "/robots-settings"
    );
    setBots(data.settings);
  };
  useEffect(() => {
    getData();
  }, []);
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
        <div className="flex justify-between">
          <Modal
            openModalBtn="Connect Account"
            modalTitle="Connect Robot"
            submitBtnText="Connect"
            endpoint="setRobot"
          >
            <RobotForm />
          </Modal>
          <Submit
            color="white"
            bgColor="blue"
            text={"Start Server"}
            borderRadius="10px"
            btnClick={() => handleSubmit("startServer")}
          />
          <Submit
            color="white"
            bgColor="red"
            text={"Stop Server"}
            borderRadius="10px"
            btnClick={() => handleSubmit("stopServer")}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-10">
        {Array.isArray(bots) ? (
          bots.map((bot) => <Robot key={bot.id} id={bot.id} />)
        ) : (
          <h5>You are not connected to any bot. You can rent and connect</h5>
        )}
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
