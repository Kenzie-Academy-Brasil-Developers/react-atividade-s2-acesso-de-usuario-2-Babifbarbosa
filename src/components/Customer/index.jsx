import { members } from "../Members"
import {Link, useParams} from "react-router-dom"
import "./style.css"

const Customer = () => {
    const params = useParams();
    const member = members.find((member) => member.id === params.id);
    
return(
<div className="detalhesempresa">
  <h1>Detalhes do cliente</h1>
  <p>
    Nome: {member && member.name}
  </p>

  <Link className="linkvoltar" to="/">
    Voltar
  </Link>
</div> 
)
}

export default Customer;