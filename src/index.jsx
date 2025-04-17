import reactDom from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'



reactDom.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Toaster/>
    <App />
    </BrowserRouter>
)

