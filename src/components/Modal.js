import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    const removal = () => {
      document.body.classList.remove('overflow-hidden')
    };

    return removal;
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div 
        onClick={ onClose } 
        className='fixed inset-0 bg-gray-300 opacity-85'>
      </div>
      <div className='fixed inset-40 p-10 bg-white'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div className='flex justify-end'>
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}


export default Modal;