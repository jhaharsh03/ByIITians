import React, { createContext, useState, useContext, ReactNode, FC } from 'react';
import { Modal } from 'antd';
import './ModalStyles.css'; // Import the custom styles

interface ModalContextProps {
  showModal: (title: string, content: ReactNode) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (title: string, content: ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setModalTitle(null);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal
        visible={isModalVisible}
        onCancel={hideModal}
        footer={null}
        className='custom-modal'
        centered
      >
        <h2>{modalTitle}</h2>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
};
