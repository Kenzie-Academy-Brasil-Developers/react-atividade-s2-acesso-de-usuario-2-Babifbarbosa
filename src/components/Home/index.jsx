import {Link} from "react-router-dom"
import {members} from "./../Members/index"
import "./style.css"

const Home = () => {
    return members.map((member) => 
    <Link className="linkshome"  key={member.id} 
    to={member.type === "pj" 
    ? 
    `/company/${member.id}` 
    : 
    `/customer/${member.id}`}>
         {member.name} </Link>)
}
export default Home;