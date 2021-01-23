import { Link, useParams, useRouteMatch } from "react-router-dom";

const SideBar = () => {
    let { url } = useRouteMatch();
    console.log("url", url)
    return (
        <div>
            <ul>
                <li><Link to={`${url}/profile`}>Profile</Link></li>
                <li><Link to={`${url}/admin`}>Admin</Link></li>
                <li><Link to={`${url}/logout`}>Logout</Link></li>
            </ul>
        </div>
    )
}
export default SideBar