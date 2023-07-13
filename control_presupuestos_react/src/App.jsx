import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  
  const [modal,setModal]=useState(false)
  const [animarModal, setAnimarModal]=useState(false)
  const handleNuevoGasto=()=>{
    setModal(true)

    setTimeout(()=>{
      setAnimarModal(true)

    },3000)
  }
  
  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      />

      {presupuestoValido ? (
        <div className="nuevo-gasto">
          <img onClick={handleNuevoGasto} src={IconoNuevoGasto} alt=" icono nuevo gasto" />
        </div>
      ) : null}

      {modal ? <Modal animarModal={animarModal} setAnimarModal={setAnimarModal} setModal={setModal}/>:null}
    </>
  );
}

export default App;
