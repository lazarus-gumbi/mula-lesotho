import React from 'react';

function ServiceStatus(props) {
    return (
        <div className="serv-status">
            <div className="cont"><div className='light-indicator' style={{ backgroundColor: props.main  ? 'green' : 'red' }}></div><p>main service</p></div> | 
            <div className="cont"><div className='light-indicator' style={{ backgroundColor: props.sms_reader  ? 'green' : 'red' }}></div><p>sms reader service</p></div>
        </div>
    );
}

export default ServiceStatus