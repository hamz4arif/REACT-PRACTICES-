import {useRouteMatch ,Link} from 'react-router-dom'
const Profile=()=>{
    let {url}=useRouteMatch();
    console.log("nested",url)
    return(
        <div>
            <ul>
                <li><Link to={`${url}/person-1`}>person 1</Link></li>
                <li><Link to={`${url}/person-2`}>person 2</Link></li>
                <li><Link to={`${url}/person-3`}>person 3</Link></li>
            </ul>
        </div>
    )
}
export default Profile;