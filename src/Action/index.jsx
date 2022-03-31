import React from "react";


const Add = (data) => {
    return {
        type : "ADD_TOODOO",
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

const Del = () => {
    return {
        type : "DEL_TOODOO"
    }
}

export {Add , Del}