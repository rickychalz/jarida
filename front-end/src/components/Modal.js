import React from 'react';
import { X } from 'lucide-react';


function Modal({isOpen, onClose, children}) {
  const modalClasses = isOpen
  ? "modal fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-150"
  : "modal fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-150 opacity-0 pointer-events-none";


  return (
    <div className ={modalClasses} onClick={onClose}>
      <div className='modal-overlay fixed inset-0 bg-white/95'></div>
      <div onClick={(e) => e.stopPropagation()} className='modal-container bg-white w-11/12 md:max-w-md  lg:max-w-5xl mx-auto rounded shadow-md z-50 overflow-y-auto'>
        <div className='modal-content py-4 text-left px-6 border'>
          <div className='modal-header pb-3 flex justify-end'>
            <button className='modal-close' onClick={onClose}><X/></button>
          </div>
          <div className='modal-body'>
            {children}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Modal