import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { UserContext } from '../../App';
import './NavBar.css';
import firebaseConfig from '../Login/firebase.config';

const NavBar = ({ logo }) => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}

	const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
	const handleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(function (res) {
				setLoggedInUser({});
			})
			.catch(function (error) {
				console.log(error.message);
			});
	};
	return (
		<nav className="container py-2">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-2">
					<Link to="/">
						<img src={logo} alt="logo" className="img-fluid logo" />
					</Link>
				</div>
				<div className="col-lg-4">
					<input className="form-control" type="text" />
				</div>

				<div className="col-lg-5">
					<ul className="nav">
						<li>
							<a href="#/news">News</a>
						</li>
						<li>
							<a href="#/destination">Destination</a>
						</li>
						<li>
							<a href="#/blog">Blog</a>
						</li>
						<li>
							<a href="#/contact">Contact</a>
						</li>
						<li>
							{loggedInUser.email ? (
								<Link to="/" onClick={handleSignOut}>
									Logout
								</Link>
							) : (
								<Link to="/loginA">Login</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;


// import React, { useContext } from 'react';
// import logo from '../../images/logo.jpg';
// import './NavBar.css';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import { UserContext } from '../../App';
// import { Navbar, Nav, FormControl, Form, Button  } from 'react-bootstrap';

// const NavBar = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     return (
//         <section>

//             <Navbar bg="primary" variant="dark">
//                 <Navbar.Brand href="#home">Movie Club</Navbar.Brand>
//                 <Nav className="mr-auto">
//                     <Nav.Link href="#home">Home</Nav.Link>
//                     <Nav.Link href="#features">Features</Nav.Link>
//                     <Nav.Link href="#pricing">Pricing</Nav.Link>
//                 </Nav>
//                 <Form inline>
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-light">Search</Button>
//                 </Form>
//             </Navbar>
//             {/* <nav className="navbar navbar-expand-lg navbar-light">
//                 <Link className="navbar-brand" to="/">
//                     <img id="main-logo" src={logo} alt=""/>
//                 </Link>
                
//                 <div className="collapse navbar-collapse" id="navbarText">
//                     <ul className="navbar-nav ml-auto navigation-item">
//                         <li className="nav-item">
                            
//                             <h5 className="nav-link" to="/home">name</h5>

//                         </li>
                    
//                         <li class="nav-item active">
//                             <Link className="nav-link" to="/home">Home<span class="sr-only">(current)</span></Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/home">Contact Us</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/login">
//                                 <button type="button" className="btn btn-dark login-btn">Login</button>
//                             </Link>
//                         </li>
                        
//                     </ul>
                    
//                 </div>
//             </nav> */}
//         </section>
//     );
// };

// export default NavBar;
