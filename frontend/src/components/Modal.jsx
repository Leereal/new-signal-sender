import React from "react";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Submit from "./Submit";

export default function Modal({
  openModalBtn,
  modalTitle,
  submitBtnText,
  children,
  endpoint,
  mode = null,
  id = null,
}) {
  const [showModal, setShowModal] = useState(false);
  const { currentColor, handleSubmit, saved } = useStateContext();

  return (
    <>
      {mode === "edit" ? (
        <i
          className="pi pi-pencil ml-3 cursor-pointer"
          onClick={() => setShowModal(true)}
        ></i>
      ) : (
        <Submit
          color="white"
          bgColor={currentColor}
          text={openModalBtn}
          borderRadius="10px"
          btnClick={() => setShowModal(true)}
        />
      )}

      {showModal ? (
        <>
          <div className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-[80vh]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {mode === "edit" && "Edit "}
                    {modalTitle}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-4 h-6 w-6 text-lg block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-y-auto">
                  <div className="modal-content">{children}</div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Submit
                    color="white"
                    bgColor={currentColor}
                    text={mode === "edit" ? "Save Changes" : submitBtnText}
                    borderRadius="10px"
                    btnClick={() => {
                      handleSubmit(endpoint, mode, id);
                      if (saved) {
                        setShowModal(false);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
