import React from 'react'

export default function Alert(props) {
    return (

        <div style={{minHeight: '60px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {/* && is used because default state of alert is null it provides logic that if prop.alert is "not null" then execute this. */}
                <strong>{props.alert.type}</strong> : {props.alert.msg} {/*it will display the output in the form of "success: message"*/}
            </div>}
        </div>

    )
}
