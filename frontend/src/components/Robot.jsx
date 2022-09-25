import axios from "axios";
import React, { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import CircleLoader from "react-spinners/CircleLoader";
import moment from "moment";
import Modal from "./Modal";
import RobotForm from "./RobotForm";

const Robot = ({ id }) => {
  const [bot, setBot] = useState([]);
  const [active, setActive] = useState(false);
  const [activeEntry, setActiveEntry] = useState(false);
  const getData = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_SERVER + "/robots-settings/" + id
    );
    setBot(data.settings);
    setActive(data.settings.active ? true : false);
  };
  const activateBot = () => {
    const url = process.env.REACT_APP_DEV_SERVER + "/robots-settings/start";
    axios.patch(url, { id: id }).then((response) => {
      setActive(true);
    });
  };
  const deactivateBot = () => {
    const url = process.env.REACT_APP_DEV_SERVER + "/robots-settings/stop";
    axios.patch(url, { id: id }).then((response) => {
      setActive(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex justify-center m-3">
      <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div className="py-3 px-6 border-b border-gray-300">
          {bot.account_name}
          <Modal
            openModalBtn="Connect Account"
            modalTitle="Connect Robot"
            submitBtnText="Connect"
            endpoint="setRobot"
            mode="edit"
            id={id}
          >
            <RobotForm mode="edit" id={id} />
          </Modal>
        </div>
        <div className="flex justify-center m-3">
          {active && activeEntry && (
            <PacmanLoader
              color="#364ad6"
              cssOverride={{}}
              loading
              size={10}
              speedMultiplier={2}
            />
          )}
          {active && !activeEntry && <CircleLoader color="#36d7b7" />}
          {!active && (
            <span className="flex justify-center items-center  text-2xl">
              <i
                className="pi pi-stop-circle mr-2"
                style={{ fontSize: "1.5rem" }}
              ></i>
              STOPPED
            </span>
          )}
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">
            We are going to display running positions here
          </p>

          {active ? (
            <button
              onClick={deactivateBot}
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <span>
                <i className="pi pi-stop-circle mr-2"></i>
                STOP
              </span>
            </button>
          ) : (
            <button
              onClick={activateBot}
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <span>
                <i className="pi pi-play mr-2"></i>
                START
              </span>
            </button>
          )}
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          {moment(bot.updatedAt).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default Robot;
