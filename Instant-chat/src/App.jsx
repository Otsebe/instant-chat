import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import ChatRoom from "./pages/ChatRoom"


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/chat" element={<ChatRoom/>} />

    </Routes>
  
</div>
    )
}
export default App