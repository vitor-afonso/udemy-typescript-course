import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

interface Props {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, isModalOpen, setIsModalOpen }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isModalOpen ? openModal() : closeModal();
  }, [isModalOpen]);

  const openModal = () => {
    const modalContainer = modalRef.current;
    modalContainer!.className = '';
  };

  const closeModal = () => {
    const modalContainer = modalRef.current;
    modalContainer!.className = 'hide';
    setIsModalOpen(false);
  };

  return (
    <div ref={modalRef} className='hide'>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Edit task</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
