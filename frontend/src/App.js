import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Article from "./pages/Article"
import Contact from "./pages/Contact"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"

class App extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/")
      const posts = await res.json()
      this.setState({
        posts,
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div id="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/article" element={<Article />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    )
  }
}

export default App
