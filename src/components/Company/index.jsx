import { useParams , Link } from "react-router-dom/cjs/react-router-dom.min";
import { members } from "../Members";
import "./style.css"

const Company = () => {
    const params = useParams();
    const company = members.find((company) => company.id === params.id)

    return(
        <div className="detalhesempresa">
  <h1>Detalhes da Empresa</h1>

  <p>
    Nome da empresa: {company && company.name}
  </p>

  <Link  className="linkvoltar" to="/">
    Voltar
  </Link>
</div>
    )
}
export default Company;