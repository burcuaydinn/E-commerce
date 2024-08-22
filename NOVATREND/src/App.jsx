import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  

  return (
    <div>
      <ToastContainer />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button onClick={() => toast("Hello, World!")}>Show Toast</button>
    </div>
  )
}

export default App
