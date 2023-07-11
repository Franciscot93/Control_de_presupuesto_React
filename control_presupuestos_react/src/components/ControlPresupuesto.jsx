import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
    const formatearPresupuesto=(cantidad)=>{
        const dinero=cantidad.toLocaleString('en-US',{
            style:'currency',
            currency: 'USD'
        })
        return dinero }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafico</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
            <span>Presupuesto: </span> {formatearPresupuesto(presupuesto)}
        </p>
      </div>

    </div>
  )
}

export default ControlPresupuesto
