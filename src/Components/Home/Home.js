import React from 'react';
import NavBar from '../Navbar/NavBar';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import logo from '../Icon/black.png';
const Home = () => {
    return (
        <section className="container">
            <NavBar logo={logo} />
            <Header />
            <Footer />
        </section>
    );
};

export default Home;