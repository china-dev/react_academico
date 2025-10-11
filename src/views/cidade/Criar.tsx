import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


export default function CriarCidade () {
  const getInputClass = () => {
    return "form-control app-label mt-2";
  };

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <h2>Nova cidade</h2>

        <form action="">
          <div className="mb-2 mt-4">
            <label htmlFor="CodCidade" className="app-label" >
              Código
            </label>
            <input
              className={getInputClass()}
              type="text"
              name="CodCidade" 
              id="CodCidade"
              readOnly={false}
              disabled={false}
              autoComplete="off"
            />
          </div>
          <div className="mb-2 mt-4">
            <label htmlFor="NomeCidade" className="app-label" >
              Nome
            </label>
            <input
              className={getInputClass()}
              type="text"
              name="NomeCidade" 
              id="NomeCidade"
              readOnly={false}
              disabled={false}
              autoComplete="off"
            />
          </div>
          <div className="btn-content mt-4">
            <button 
              id="submit" 
              type="submit"
              className="btn btn-success"
            >
              <span className="btn-icon">
                <i>
                  <FaSave/>
                </i>
              </span>
              Salvar
            </button>

            <button 
              id="cancel" 
              type="submit"
              className="btn btn-cancel"
            >
              <span className="btn-icon">
                <i>
                  <MdCancel/>
                </i>
              </span>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}