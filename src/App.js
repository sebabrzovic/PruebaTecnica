import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import facturas from "./facturas.json";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

console.log(facturas);

function App() {
  const [facturaElegida, setFacturaElegida] = useState(null);
  const [creditos, setCreditos] = useState(null);
  const [seleccionado, setSeleccionado] = useState(false);
  const [creditoSeleccionado, setCreditoSeleccionado] = useState(false);
  const facturasRecibidas = facturas.map((factura, index) => {
    if (factura.type === "received") {
      return (
        <option value={factura.id} class="form-check-input" type="checkbox">
            <tr>
              <td>inv_{index + 1}</td>
              <td>{factura.organization_id}</td>
              <td>{factura.amount}</td>
              <td>{factura.currency}</td>
              <td>{factura.type}</td>
            </tr>
        </option>
      );
    }
  });
  const creditosRecibidos = facturas.map((factura, index)=>{
    if (facturaElegida === factura.reference){
      return (
        <option value={factura.id}>
            <tr>
              <td>inv_{index + 1}</td>
              <td>{factura.organization_id}</td>
              <td>{factura.amount}</td>
              <td>{factura.currency}</td>
              <td>{facturaElegida}</td>
            </tr>
            </option>
      )
    }

  })
  console.log(facturaElegida);
  console.log(seleccionado);
  console.log(creditoSeleccionado);

  return (
    <div>
    <div className="App" class="form-check">
      <h1>Selecciona una factura</h1>
      <select
        value = {facturaElegida}
        onChange={e => {setFacturaElegida(e.target.value); setSeleccionado(true)}}

      >{facturasRecibidas}</select>
    </div>
    <div className="App" style= {{display : seleccionado ? "block" : "none"}}>
      <h1>Selecciona una nota de credito</h1>
      <select
        value = {creditos}
        onChange={e => {setCreditos(e.target.value); setCreditoSeleccionado(true)}}
      >{creditosRecibidos}</select>
    </div>
    
      <Modal show={creditoSeleccionado}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={e => {setCreditoSeleccionado(false); setSeleccionado (false)}}>Seguir Asignando</Button>
        </Modal.Footer>
      </Modal>
    </div>
      );
}

export default App;
