import './signin.css';

export default function Signin(){
  return(
    <div className="body text-center">
    
<main className="form-signin">
  <form>
    <img className="mb-4" src="./images/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</main>
  </div>
  )
}