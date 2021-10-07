import React from 'react'

export default function Alart(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }

    let alartStyle = {
        width: "35rem",
        marginLeft: "28rem",
    }
    return (
       props.alart && <div className={`alert alert-${props.alart.type} `} role="alert" style={alartStyle}>
        <div className="text-align-center">
        {capitalize(props.alart.type)} : {props.alart.text};
        </div>
      </div>
    )
}
