import React ,{useRef, useEffect, useState} from "react";
import "./A001.css";
import{select, line ,curveCardinal} from "d3";
import patientData from '../Data/A014.json';
import Sketch from 'react-p5'
import axios from "axios";
import p5 from "p5";
import Table from 'react-bootstrap/Table'
// import P5Wrapper from 'react-p5-wrapper';



const PatientCard = (patientData) => {
  return(
    <div>
  <Table responsive="sm" style={{}}> 
  <tr>
    
  </tr>
    <tbody>
     <tr>
       {/* <td>{patientData.key}</td> */}
       <td>{patientData.id}</td>
       <td>{patientData.location}</td>
       <td>{patientData.tissue_type}</td>
       <td>{patientData.area}</td>
      </tr>
    </tbody>
  </Table>
  </div>
     
     
   ) 
}





const Data = () => {



const [display, setDisplay] = useState("notdisplayed");
  const [filterBy, setFilterBy] = useState(0)
  const [filterByTissu, setFilterByTissu] = useState(0)
  // const [filterByData, setFilterByData] = useState(0)
  const [data, setData] = useState([]);
  const getData =()=>{
    fetch(patientData)
     console.log(patientData)
  }
  getData();



    


    
    let filteredLocation;

    switch(filterBy) {
      case 0:
          filteredLocation = patientData.filter(patient => patient.Location === "Descending")
        break;
      case 1:
          filteredLocation = patientData.filter(patient => patient.Location === "Transverse")
          break;
      case 2:
          filteredLocation = patientData.filter(patient => patient.Location === "Ascending")
        break;
        case 3:
          filteredLocation = patientData.filter(patient => patient)
        break;
      default:
        console.log("please choose your option")
        break;
    }
    console.log(filteredLocation)
    



    let filteredTissueType;

    switch(filterByTissu) {
      case 4:
        filteredTissueType = patientData.filter(patient => patient.tissue_type === "Polyp")
        break;
      case 5:
        filteredTissueType = patientData.filter(patient => patient.tissue_type === "Normal")
          break;
      case 6:
        filteredTissueType = patientData.filter(patient => patient)
         break;
      default:
        console.log("please choose your option")
        break;
    }
    console.log(filteredTissueType)


    //Location
    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(1500, 500).parent(canvasParentRef);
      
    }
    const draw = p5 => {
      p5.background(220, 300)
      for(var pindex in filteredLocation) {
        p5.point(filteredLocation[pindex]["x (cm bahareh)"]*10, filteredLocation[pindex]["y (cm bahareh)"]*10);
      }
      p5.stroke('purple'); // Change the color
      p5.strokeWeight(10);
    }

    //Polyp
    const setupOne = (p5, canvasParentRef) => {
      p5.createCanvas(1500, 500).parent(canvasParentRef);
      
    }
    const drawOne = p5 => {
      p5.background(220, 300)
      for(var pindex in filteredTissueType) {
        p5.point(filteredTissueType[pindex]["x (cm bahareh)"]*10, filteredTissueType[pindex]["y (cm bahareh)"]*10);
      }
      p5.stroke('red'); // Change the color
      p5.strokeWeight(10);
    }
    


    //show id
      const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
      };
    
      const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
      };
    

  return (
  <div >
    <h2>A014</h2>            
      {/* <Sketch setup={setup} draw={draw} ></Sketch>  */}
      <Sketch setup={setup} draw={draw} drawOne={drawOne} setupOne={setupOne}></Sketch>
      <div 
        className = "sketch"
        onMouseEnter={e => showButton(e)}
        onMouseLeave={e => hideButton(e)}>
        <button className={display}>{patientData.id}</button>    
      </div>

  <div style={{width:"900px", float:"right"}}>
    <Table >
     <thead>
       <th>
         <tr style={{width:"900px", float:"right"}}> 
           <th style={{paddingLeft:"150px"}}>ID  </th>     
           <th style={{paddingLeft:"250px"}}>Location </th>   
           <th style={{paddingLeft:"150px"}}>Tissue_type </th>
           <th style={{paddingLeft:"50px"}}>Area of polyp</th>
          </tr>
        </th>
      </thead>    
    <tbody>{filteredLocation.map(dataPatient =>
      <PatientCard key={dataPatient.id} id ={dataPatient.id} location={dataPatient.Location} tissue_type={dataPatient.tissue_type} x={dataPatient["x (cm bahareh)"]} y={dataPatient["y (cm bahareh)"]} area={dataPatient["Area of polyp"]}/>
        )}
    </tbody>
    </Table>
  </div>

  <div>
    <div>
       <label style={{float:"left",paddingLeft:"15px"}}>Locations:</label>
        <select  style={{float:"left"}}onChange={event => setFilterBy(parseInt(event.target.value))} value={filterBy}>
          <option value={0}>Location Descending</option>
          <option value={1}>Location Transverse</option>
          <option value={2}>Location Ascending</option>
          <option value={3}>All</option>
        </select>
    </div>
   <div>
      <label style={{float:"left",paddingLeft:"15px"}}>Tissue_type:</label>
        <select  style={{float:"left"}}onChange={event => setFilterByTissu(parseInt(event.target.value))} value={filterByTissu}>
         <option value={4}>Polyp</option>
         <option value={5}>Normal</option>
         <option value={6}>All</option>
        </select>
     </div>
  </div>
        
       

       

 </div>  
  );
}

export default Data;