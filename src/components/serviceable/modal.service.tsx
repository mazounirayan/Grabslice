import { useToast } from "@context/ToastManager";
import { ToastType } from "@enum/toast";
import { cloneElement, createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";

interface ModalOptions {
  title?: string;
  content: ReactNode;
  onSubmit?: (data: any) => void;
  validationRules?: {[key: string]: (value:any) => string | null}
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
  const [formData, setFormData] = useState<any>({}); // Store form data in provider
  const [errors, setErrors] = useState<any>({});
  const { addToast } = useToast(); 

  const openModal = (options: ModalOptions) => {
      setModalOptions(options);
      setFormData({}); // Reset form data when opening new modal
      setErrors({});
    };

  const closeModal = () => {
      setModalOptions(null);
      setFormData({}); // Clear form data on close
      setErrors({});
    };

  const validateForm = () => {
    const newErrors: any = {};
    if (modalOptions?.validationRules) {
      for (const [field, rule] of Object.entries(modalOptions.validationRules)) {
        const error = rule(formData[field]);
        if (error) {
          newErrors[field] = error;
        }
      }
    }
    if (Object.keys(newErrors).length > 0) {
      addToast("Please correct the errors in the form", ToastType.ERROR);
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
      if (validateForm() && modalOptions?.onSubmit) {
          modalOptions.onSubmit(formData); // Pass stored form data to onSubmit
          closeModal();
      }
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
                              <div className="py-4">
                                  {modalOptions.content &&
                                      cloneElement(modalOptions.content as React.ReactElement, {
                                          setFormData, 
                                          errors,
                                      })}
                              </div>
                              <div className="modal-action">
                                  <button className="btn" onClick={closeModal}>
                                      Close
                                  </button>
                                  {modalOptions.onSubmit && (
                                      <button className="btn btn-primary" onClick={handleSubmit}>
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
