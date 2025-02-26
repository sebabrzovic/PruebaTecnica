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

  const handleFacturaChange = (facturaId) => {
    setFacturaElegida(facturaId);
    setSeleccionado(true);
  };

  const handleCreditoChange = (creditoId) => {
    setCreditos(creditoId);
    setCreditoSeleccionado(true);
  }
  const facturaRecibidas = facturas.filter((factura) => factura.type === "received");
  const creditosRecibidos = facturas.filter((factura) => facturaElegida === factura.reference);

  console.log(facturaElegida);
  console.log(seleccionado);
  console.log(creditoSeleccionado);

  return (
    <div>
    <div className="App" >
      <h1>Selecciona una factura</h1>
      <div className="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Seleccionar</th>
            <th scope="col">ID</th>
            <th scope="col">Organizacion</th>
            <th scope="col">Monto</th>
            <th scope="col">Moneda</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {facturaRecibidas.map((factura, index) => (
            <tr key={factura.id} className="table-primary">
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={facturaElegida === factura.id}
                  value={factura.id}
                  onChange={() => handleFacturaChange(factura.id)}
                />
              </td>
              <td>{factura.id}</td>
              <td>{factura.organization_id}</td>
              <td>{factura.amount}</td>
              <td>{factura.currency}</td>
              <td>{factura.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    {seleccionado && (
      <div className="App">
        <h1>Selecciona una nota de credito</h1>
        <div className="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Seleccionar</th>
              <th scope="col">ID</th>
              <th scope="col">Organizacion</th>
              <th scope="col">Monto</th>
              <th scope="col">Moneda</th>
              <th scope="col">Referencia</th>
            </tr>
          </thead>
          <tbody>
            {creditosRecibidos.map((factura, index) => (
              <tr key={factura.id} className="table-primary">
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={factura.id}
                    onChange={() => handleCreditoChange(factura.id)}
                  />
                </td>
                <td>{factura.id}</td>
                <td>{factura.organization_id}</td>
                <td>{factura.amount}</td>
                <td>{factura.currency}</td>
                <td>{factura.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>)}

    
      <Modal show={creditoSeleccionado}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={e => {setCreditoSeleccionado(false); setSeleccionado (false); setFacturaElegida(null); setCreditos(null)}}>Seguir Asignando</Button>
        </Modal.Footer>
      </Modal>
    </div>
      );
}

export default App;
