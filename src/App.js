import logo from "./logo.svg";
import "./App.css";
import facturas from "./facturas.json";

console.log(facturas);

function App() {
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


  return (
    <div className="App">
      <h1>Facturas Recibidas</h1>
      <select>{facturasRecibidas}</select>
    </div>
  );
}

export default App;
