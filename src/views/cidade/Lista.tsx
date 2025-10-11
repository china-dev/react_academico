import axios from "axios";
import { useEffect, useState } from "react";
import type { Cidade } from "../../type/Cidade";
import { Link } from "react-router-dom";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";

const buscarTodasCidades = async (): Promise<Cidade[] | null> => {
  try {
    const response =   await axios
        .get("http://localhost:8000/rest/sistema/cidade/listar")
  
    return response.data.dados;
  }
  catch (error: any){
    console.error('erro');
  }
  return null;
}

export default function ListarCidade() {
  // useState = hook - gancho - função
  // reagir as alterações na variável
  // renderiza -
  const [models, setModels] = useState<Cidade[] | null>(null);

  //hook - função - reagir, quando carregar a página
  //pela primeira vez, quando o array for vázio.
  useEffect(() => {
    async function getCidades() {
      const cidades = await buscarTodasCidades();
      if(cidades) {
        setModels(cidades);
      }
    }
    getCidades();
  }, []);

  console.log(models);

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Lista de Cidades</h1>
          <Link to="/sistema/cidade/criar" className="btn btn-add">
            <span className="btn-icon">
              <i>
                <FaPlus />  
              </i>
            </span>
             Novo
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th className="center actions">Açôes</th>
            </tr>
          </thead>
          <tbody>
            {models?.map((model) => (
              <tr>
                <td>{model.codCidade}</td>
                <td>{model.nomeCidade}</td>
                <td className="center actions">
                  <Link to="/sistema/cidade/alterar" className="btn btn-edit">
                    <span className="btn-icon">
                      <i>
                        <BsPencilSquare />
                      </i>
                    </span>
                   Atualizar
                  </Link>
                  <Link to="/sistema/cidade/excluir" className=" btn btn-delete">
                    <span className="btn-icon">
                      <i>
                        <FaRegTrashAlt />
                      </i>
                    </span>
                    Excluir
                  </Link>
                  <Link to="/sistema/cidade/consultar" className="btn btn-show">
                    <span className="btn-icon">
                      <i>
                        <FaMagnifyingGlass />
                      </i>
                    </span>
                    Consulta
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
