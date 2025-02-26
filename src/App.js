import logo from "./logo.svg";
import "./App.css";
import facturas from "./facturas.json";

console.log(facturas);

function App() {
  const facturasRecibidas = facturas.map((factura) => {
    if (factura.type === "received") {
      return (
        <li key={factura.id}>
          <table>
            <tr>
              <td>{factura.organization_id}</td>
              <td>{factura.amount}</td>
              <td>{factura.currency}</td>
              <td>{factura.type}</td>
            </tr>
          </table>
        </li>
      );
    }
  });

  
  return (
    <div className="App">
      <ul>{facturasRecibidas}</ul>
    </div>
  );
}

export default App;
