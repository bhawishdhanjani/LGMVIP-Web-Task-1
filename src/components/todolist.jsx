// import { useState } from "react"
import { Button } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function TodoList(props) {
    const Selectitem = (id) => {
        console.log(props.id + "delete")
        props.setlist = ((previousitem) => {
            return previousitem.filter((element, index) => {
                return  index != id;
            })
        })
    }
    return (
        <>

            <div style={{ display: "flex", marginTop: "10px" }} >
                <div style={{ width: "70%" }} className="list_div">
                    <li>{props.item}</li>
                    
                </div>
                <div style={{ width: "29%" }}>
                    <DeleteOutlineIcon className="itembtn" onClick={() => { props.Selectitem(props.id) }}/>

                  
                </div>
            </div>

        </>
    )
}

export default TodoList