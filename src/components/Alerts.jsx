import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Alerts = (props) => {
    return (
        <>
            {props.alert && <Alert className='text-center' variant={`${props.alert.type}`}>
                <strong className='mb-0'>{props.alert.msg}</strong>
            </Alert>}

            {/* {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong className='mb-0'>{props.alert.msg}</strong>
            </div>} */}

        </>
    )
}

export default Alerts