import type { RouteObject } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import ListarCidade from "../../views/cidade/Lista";
import Dashboard from "../../views/Dashboard";
import CriarCidade from "../../views/cidade/Criar";
import AlterarCidade from "../../views/cidade/Alterar";
import ExcluirCidade from "../../views/cidade/Excluir";
import ConsultarCidade from "../../views/cidade/Consultar";

export const routes: RouteObject[] = [
    {
        path: '/sistema',
        element: <Layout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {

                path: 'cidade/listar', 
                element: <ListarCidade />
            },
            {
                path: 'cidade/criar', 
                element: <CriarCidade />
            },
            {
                path: 'cidade/alterar', 
                element: <AlterarCidade />
            },
            {
                path: 'cidade/excluir', 
                element: <ExcluirCidade />
            },
            {
                path: 'cidade/consultar', 
                element: <ConsultarCidade />
            }
        ]
    }
];