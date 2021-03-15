import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderForm from "./component/OrderForm";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <Container>
      <div className="w-50 border border-primary">
        <OrderForm />
      </div>
    </Container>
  );
}

export default App;
