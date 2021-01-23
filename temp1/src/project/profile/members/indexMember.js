import { Route, Switch, useRouteMatch } from "react-router-dom"
import Person1 from "./person1";
import Person2 from "./person2";
import Person3 from "./person3";
import Profile from "./profile"

const IndexMember=()=>{
    let {path}=useRouteMatch();
    console.log("memberpath",path)
return(
    <div>
        <Profile/>
        <Switch>
            <Route path={`${path}/person-1`}><Person1/></Route>
            <Route path={`${path}/person-2`}><Person2/></Route>
            <Route path={`${path}/person-3`}><Person3/></Route>
        </Switch>
    </div>
)
}
export default IndexMember;