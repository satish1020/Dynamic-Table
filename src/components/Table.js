import React,{useState} from 'react';
import {mockTableData} from '../mockData';
import '../styles/Table.css';

export default function Table() {

    const [eventInfo, setEventInfo] = useState(mockTableData);

    const [eventName, setEventName] = useState('');
    const [startDate, setStartData] = useState('');
    const [endDate, setEndData] = useState('');

    const [tableVisibility, setIsTableVisibility] = useState(false);

    const handleAdd = () =>
    {
        setIsTableVisibility(true);
    }

    const  handleEventName = (event) =>{
      setEventName(event.target.value);
    }

    const  handleStartDate = (event) =>{
      setStartData(event.target.value);
    }

    const  handleEndDate = (event) =>{
      setEndData(event.target.value);
    }

    const addNewRow = () => {
      return(
        <div>
        <button className='btnAdd' onClick= {() => handleAdd()}> AddNew </button>
        {tableVisibility && <form>
            <input type='text'  name='eventName' required='required' placeholder='Enter an event Name' onChange= {(e) => handleEventName(e)}/>
            <input type='text'  name='startDate' required='required' placeholder='Enter start Date' onChange= {(e) => handleStartDate(e)}/>
            <input type='text'  name='endDate' required='required' placeholder='Enter end Date' onChange= {(e) => handleEndDate(e)}/>
            <button onClick= 'handleSave'>Save</button>
            <button> Cancel</button>
            </form>}
        </div>
      )
    }

    const getTable = () => {
      return(
        <table>
        <tr>
        <th>Event Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        </tr>
        <tbody>
              {eventInfo.map((item) => (
                   <tr>
                     <td>{item.eventName}</td> 
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                  </tr>
              ))
              }
        </tbody>
      </table>   
      )
    }

    return (
        <div className = 'tableContainer'>
        {addNewRow()}
        {getTable()}
        </div>
    )
}
