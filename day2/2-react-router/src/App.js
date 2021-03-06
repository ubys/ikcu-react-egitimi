import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import About from "./pages/About";
import Error404 from "./pages/Error404";

function App() {
	return (
		<>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about?lang=tr">About</Link>
							</li>
							<li>
								<Link to="/users">Users</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/users" exact component={Users} />
						<Route path="/users/:id" component={UserDetail} />
						<Route path="*" component={Error404} />
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
