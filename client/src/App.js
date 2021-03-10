import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Card, Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomePage} exact />
            <Route path="/product/:id" component={ProductPage} exact />
            <Route path="/cart/:id?" component={CartPage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
