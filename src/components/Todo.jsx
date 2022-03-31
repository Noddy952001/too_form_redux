import React, { useState } from "react";
import { Add , Del } from "../Action";
import { useDispatch ,useSelector } from "react-redux";

export const Todo = () => {

    const[data, setData] = useState("");
    const list = useSelector((state) => state.todooruducer.list)
    const Dispatch = useDispatch()

    return (
        <div>
            <h1>Too Doo List</h1>

            <div>
                <input type="text" placeholder="Enter here"
                    value={data}
                    onChange={(e) => setData(e.target.value)} 
                />
            </div>

            <div>
                <button onClick={() => Dispatch(Add(data),setData(""))}>Add</button>
            </div>

            <div>

                {
                    list.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <h3 style={{
                                    display: 'inline',
                                }}>{elem.data}</h3>

                                <button onClick={() => Dispatch(Del(elem.id)) }>del</button>
                            </div>
                        )

            
                    })
                }
                
                    {/* <i onClick={() => Dispatch(Del(data),setData(""))}></i> */}

                </div>
        </div>  
    )
}
