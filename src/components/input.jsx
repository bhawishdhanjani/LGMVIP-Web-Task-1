import { Button } from "@mui/material"
import { useState } from "react"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TodoList from "./todolist"
function Input() {

    const [input, setinput] = useState('')

    // const[btn,setbtn]=useState()

    const [list, setlist] = useState([])


    const inputitem = (event) => {


        setinput(event.target.value)
        console.log(input)

    }

    const addItem = (e) => {
        // e.preventDefault();
        // setlist(...list)
        console.log(input)
        setinput('')
        setlist((previousdata) => {
            return [...previousdata, input]
        })
    }

    const deleteitem = (id) => {
        setlist((previousdata) => {
            return previousdata.filter((array, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <div className="input_div">
                    <input type="text" placeholder="Enter Todo  Item" value={input} className="input" onChange={inputitem}  required/></div>
                <div className="add_div">

                    <AddCircleOutlineIcon className="addbtn" onClick={addItem} />

                </div>

            </div>

            <div className="list">

                <ol>
                    {

                        list.map((item, index) => {
                            console.log(list)
                            if (item !== '') {
                                return (<>


                                    <TodoList item={item} key={index} id={index} Selectitem={deleteitem} />
                                </>
                                )
                            }

                        })

                    }
                </ol>
            </div>

        </>
    )
}
export default Input