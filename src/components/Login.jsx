import { useState } from "react";
import "./login.css";
import { HiUser, HiLockClosed } from "react-icons/hi2";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container text-center ">
      <div className="row row-cols-1">
        <h1>Inicie sesión</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="col p-3">
            <InputGroup
              className="mb-3"
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
            >
              <InputGroup.Text id="basic-addon1">
                <HiUser />
              </InputGroup.Text>
              <Form.Control
                placeholder="Usuario"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="col p-3">
            <InputGroup
              className="mb-3"
              onChange={(e) => {
                setContrasenia(e.target.value);
              }}
            >
              <InputGroup.Text id="basic-addon1">
                <HiLockClosed />
              </InputGroup.Text>
              <Form.Control
                placeholder="Contraseña"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="col p-3">
            <button type="button" class="btn btn-light">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
