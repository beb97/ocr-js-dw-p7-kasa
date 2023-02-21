import { Link } from "react-router-dom";
import "../styles/error.scss";

function Error() {
  return (
    <main>
      <h2 id="not-found">404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default Error;
