import React, { useState } from 'react';
import menu from "./Menu.module.css"
import menuIcon from "../../icons/menu.svg"
import close from '../../icons/close-gallery-phone.svg'
import arrow from '../../icons/arrow-right.svg'

function Menu () {
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
            <div className={menu.modalOverly} onClick={handleOverlyClick}></div>
          )}

        <img src={menuIcon} alt="icon menu" className={menu.icon_menu} onClick={openModal} />
      
        {isModalOpen && (
           <>
           <img src={close} alt="icon close" className={menu.icon_close} onClick={closeModal}/>
            <div className={menu.modalUserContent}>
              <ul className={menu.menu_list}>
                <li className={menu.menu_list_item}>
                  <a href="" className={menu.menu_list_item_link}>Home</a>
                  <img src={arrow} alt="icon arrow" className={menu.icon__arrow}/>
                </li>
                <li className={menu.menu_list_item}><a href="" className={menu.menu_list_item_link}>Portfolio</a><img src={arrow} alt="icon arrow" className={menu.icon__arrow}/></li>
                <li className={menu.menu_list_item}><a href="" className={menu.menu_list_item_link}>Catalog</a><img src={arrow} alt="icon arrow" className={menu.icon__arrow}/></li>
                <li className={menu.menu_list_item}><a href="" className={menu.menu_list_item_link}>Cost</a><img src={arrow} alt="icon arrow" className={menu.icon__arrow}/></li>
                <li className={menu.menu_list_item}><a href="" className={menu.menu_list_item_link}>Scheduler</a><img src={arrow} alt="icon arrow" className={menu.icon__arrow}/></li>
              </ul>
            </div>
           </>
          )}
      </div>
    )
}

export default Menu;