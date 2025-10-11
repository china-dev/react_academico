import type { ReactNode } from "react";
import '../../assets/css/index.css';
import '../../assets/css/main.css';
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/sistema/dashboard">
          Dashboard
        </Link>
        <Link to="/sistema/cidade/listar">
          Cidade
        </Link>
      </aside>
      <div className="content">
        <header>
          <div className="system-title">
            <b>
              Sistema Acadêmico
            </b>
          </div>
          <div className="user-info">
            <span className="user-name">
              <b>Lucas</b>
            </span>
            <a href="#" className="btn btn-logout">
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
