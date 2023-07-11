import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto,setPresupuestoValido}) => {
  const [mensaje, setMensaje]=useState('')


  const handlePresupuesto=(e)=>{
    e.preventDefault()
    if(!presupuesto|| presupuesto<0){
      setMensaje('No es un presupuesto valido')
      return
    }
    setMensaje('')
    setPresupuestoValido(true)
    
    

  }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
            <label >Definir Presupuesto</label>
            <input className='nuevo-presupuesto' placeholder='Añade tu presupuesto' type="number"value={presupuesto}
            onChange={e=>setPresupuesto(Number(e.target.value))}
            />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje ? <Mensaje tipo='error' children={mensaje}/>:null}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
