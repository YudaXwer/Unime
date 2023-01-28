import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "swiper/css/bundle"
import "./index.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "react-loading-skeleton/dist/skeleton.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./override.css"

const root = createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
