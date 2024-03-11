import { useDispatch, useSelector } from "react-redux"

const SideBar = () => {
  const dispatch = useDispatch()
    const readToggle = useSelector((state:any)=>{
        return state.toggle
    })
    
  return (
    <div className={`h-[90.5vh]  bg-purple-100 fixed border-r
    ${readToggle ? "w-[200px]" : "w-[50px]"}
    `}>SideBar</div>
  )
}

export default SideBar