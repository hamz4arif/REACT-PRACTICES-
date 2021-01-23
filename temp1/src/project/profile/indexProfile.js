import { Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import Admin from "./admin";
import Logout from "./logout";
import IndexMember from "./members/indexMember";
import Profile from "./members/profile";
import SideBar from "./sidebar";

const IndexUser=()=>{
    let {path}=useRouteMatch();
    console.log("path",path)
    return(
        <div>
            <SideBar/>
            <Switch>
                <Route path={`${path}/profile`} ><IndexMember/></Route>
                <Route path={`${path}/admin`} ><Admin/></Route>
                <Route path={`${path}/logout`} ><Logout/></Route>
            </Switch>
        </div>
    )
}
export default IndexUser;