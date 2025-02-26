import logo from "./logo.svg";
import "./App.css";
import facturas from "./facturas.json";
import { useState } from "react";

console.log(facturas);

function App() {
  const [facturaElegida, setFacturaElegida] = useState(null);
  const [creditos, setCreditos] = useState(null);
  const [seleccionado, setSeleccionado] = useState(false);
  const facturasRecibidas = facturas.map((factura, index) => {
    if (factura.type === "received") {
      return (
        <option value={factura.id}>
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

  return (
    <div>
    <div className="App">
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
        onChange={e => setCreditos(e.target.value)}
      >{creditosRecibidos}</select>
    </div>
    </div>
      );
}

export default App;
