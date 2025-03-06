import { createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";

interface ModalOptions {
  title?: string;
  content: ReactNode;
  onSubmit?: (data: any) => void;
}

interface ModalContextProps {
  openModal: (options: ModalOptions) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalOptions, setModalOptions] = useState<ModalOptions | null>(null);

  const openModal = (options: ModalOptions) => {
    setModalOptions(options);
  };

  const closeModal = () => {
    setModalOptions(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalOptions &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal modal-open">
              <div className="modal-box">
                <h2 className="text-lg font-bold">{modalOptions.title}</h2>
                <div className="py-4">{modalOptions.content}</div>
                <div className="modal-action">
                  <button className="btn" onClick={closeModal}>
                    Close
                  </button>
                  {modalOptions.onSubmit && (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        modalOptions.onSubmit?.("Submitted Data");
                        closeModal();
                      }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </ModalContext.Provider>
  );
};
