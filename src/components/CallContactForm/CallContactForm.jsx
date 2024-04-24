import React, { useState } from 'react';
import callForm from './CallContactForm.module.css'
import call from '../../icons/phone.svg'
import close from '../../icons/close-gallery-phone.svg'
import arrow from '../../icons/arrow-right.svg'

function CallContactForm (){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleOnClose = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
  
    window.addEventListener('keydown', handleOnClose);

    const handleOverlyClick = e => {
        if (e.currentTarget === e.target) {
          closeModal();
        }
    };

    return(
        <div>
            
        {(isModalOpen) && (
            <div className={callForm.modalOverly} onClick={handleOverlyClick}></div>
          )}

        <div className={callForm.call_element} onClick={openModal} >
        <p className={callForm.call_text}>request for a call</p>
        <div className={callForm.pulse_call}>
           <img src={call} alt="call svg"/> 
        </div>
       </div>
      
        {isModalOpen && (
           <>
           <img src={close} alt="icon close" className={callForm.icon_close} onClick={closeModal}/>
            <div className={callForm.modalUserContent}>
                <input type="text" placeholder='Your name' className={callForm.form_input}/>
                <input type="text" placeholder='Your number' className={callForm.form_input}/>
                <div className={callForm.call_all_form}>
                  <button className={callForm.form_button}>discuss a project</button>
                  <img src={arrow} alt="icon arrow" />
                </div>
                
            </div>
           </>
          )}
      </div>
       
    )
}

export default CallContactForm;