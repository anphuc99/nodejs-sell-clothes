import React from "react";
import Index from "./views/Index";
import Checkout from "./views/Checkout";
import Login from "./views/Login";
import Products from "./views/Products";
import Single from "./views/single";
import Register from "./views/Register";
import p from "./views/js/path";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
function App() {
	let path = p.public
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Index/>}/>
                <Route path={path.products} element={<Products/>}/>
                <Route path={path.register} element={<Register/>}/>
                <Route path={path.login} element={<Login/>}/>
                <Route path={path.checkout} element={<Checkout/>}/>
                <Route path={path.category} element={<Products/>}/>
                <Route path={path.single} exact element={<Single/>}/>    		
			</Routes>
		</Router>
	);
}

export default App;
