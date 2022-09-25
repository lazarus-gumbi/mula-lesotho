import React from "react";
import { useState } from "react";
import ServiceStatus from "./servicesStatus";
import axios from "axios";

function App() {
  const [mainService, setMainService] = useState(false)
  const [smsReaderService, setSmsReaderService] = useState(false)
  const [Progress, setProgress] = useState('Start Main Service.')
  function startMain() {
    setProgress('Starting Main Service...')
    axios({
      method: 'POST',
      url: '/start_main_service',
    }).then((response) => {
      let service_status = response.data.status;
      if (service_status === 'success') {
        setMainService(true);
        setProgress('Start SMS Reader Service')
      }
      else {
        setMainService(false)
        setProgress(response.data.response)
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)

      }
    }

    )
  }

  function startSMSReader() {
    setProgress('Starting SMS Reader Service...')
    axios({
      method: 'POST',
      url: '/start_sms_reader_service',
    }).then((response) => {
      let service_status = response.data.status;
      if (service_status === 'success') {
        setSmsReaderService(true);
        setProgress('Started SMS Reader Service Successfully')
      } else {
        setSmsReaderService(false)
        setProgress(response.data.response)
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)

      }
    })
  }

  return (
    <section className="main-body">
      <div className="status-rep">
        <h1>{Progress}</h1>
      </div>
      <div className="status">
        <ServiceStatus main={mainService} sms_reader={smsReaderService} />

      </div>
      <div className="buttons">
        <button onClick={startMain}>Start Main Service</button>
        <button onClick={startSMSReader}>Start SMS Reader Service</button>
      </div>
    </section>
  );
}

export default App;
