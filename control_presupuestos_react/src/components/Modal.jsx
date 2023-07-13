import React from 'react'
import BotonCerrarModal from '../img/cerrar.svg'

const Modal = ({setModal,animarModal, setAnimarModal}) => {
    const handleCerrarNuevoGasto=()=>{
        setModal(false)
    }
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img onClick={handleCerrarNuevoGasto} src={BotonCerrarModal} alt="boton para cerrar ventana modal" />

        
      </div>
      <form className={`formulario ${animarModal? "animar":''}`} action="">
            <legend>NUEVO GASTO</legend>
        </form>
    </div>
  )
}

export default Modal
