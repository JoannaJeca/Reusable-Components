import { useDispatch, useSelector } from "react-redux"
import { changeToggle } from "../Global/reduxState"

const Hamburger = () => {
  const dispatch = useDispatch()
    const readToggle = useSelector((state:any)=>{
        return state.toggle
    })

  return (
    <>
    <div className={`flex w-[50px] h-[50px] rounded-full bg-red-300 justify-center items-center cursor-pointer`}>

      {readToggle ? (<div onClick={()=>{
        dispatch(changeToggle(false))
      }}> Close!</div>) : (<div onClick={()=>{
        dispatch(changeToggle(true))
      }}>Open!</div>) }


    </div>
     </>
  )
}

export default Hamburger