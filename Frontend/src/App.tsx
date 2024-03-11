import Input from "./HOC/Input"
import Header from "./Static/Header"
import HomeScreen from "./Static/HomeScreen"
import Layout from "./Static/Layout"
import SideBar from "./Static/SideBar"


const App = () => {

  return (
    <>
    <Header/>
       <div className="flex">
            <SideBar/>
            <div className="w-full flex justify-end ">
              <div className="w-[calc(100%-200px)]">
            <HomeScreen/>
              </div>
            </div>
        </div>
    </>
  )
}

export default App
