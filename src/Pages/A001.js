import React ,{ useState} from "react";
import "./A001.css";
import{select} from "d3";
import patientData from '../Data/A001.json';
import Sketch from 'react-p5';
import Table from 'react-bootstrap/Table';
// import P5Wrapper from 'react-p5-wrapper';



const PatientCard = (patientData) => {
  return(
    <div>
     <Table responsive="sm" style={{ display:"inline-block", width:"600px"}}> 
      <tbody style={{ position:"absolute"}}>
        <tr>
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
  // const [data, setData] = useState([]);

  const getData =()=> {
    fetch(patientData)
    console.log(patientData)
  }
  getData();



    


    
    let filtered;

    if (filterBy === 0 && filterByTissu === 0) {
        filtered = patientData.filter(patient => patient.Location !== "")
    } else if (filterBy === 0 && filterByTissu === 1) {
        filtered = patientData.filter(patient => patient.tissue_type === "Polyp")
    } else if (filterBy === 0 && filterByTissu === 2) {
        filtered = patientData.filter(patient => patient.tissue_type === "Normal")
    } else if (filterBy === 1 && filterByTissu === 0) {
        filtered = patientData.filter(patient => patient.Location === "Descending")
    } else if (filterBy === 1 && filterByTissu === 1) {
        filtered = patientData.filter(patient => patient.tissue_type === "Polyp" && patient.Location === "Descending")
    } else if (filterBy === 1 && filterByTissu === 2) {
        filtered = patientData.filter(patient => patient.tissue_type === "Normal" && patient.Location === "Descending")
    } else if (filterBy === 2 && filterByTissu === 0) {
        filtered = patientData.filter(patient => patient.Location === "Transverse")
    } else if (filterBy === 2 && filterByTissu === 1) {
        filtered = patientData.filter(patient => patient.tissue_type === "Polyp" && patient.Location === "Transverse")
    } else if (filterBy === 2 && filterByTissu === 2) {
        filtered = patientData.filter(patient => patient.tissue_type === "Normal" && patient.Location === "Transverse")
    } else if (filterBy === 3 && filterByTissu === 0) {
        filtered = patientData.filter(patient => patient.Location === "Ascending")
    } else if (filterBy === 3 && filterByTissu === 1) {
        filtered = patientData.filter(patient => patient.tissue_type === "Polyp" && patient.Location === "Ascending")
    } else if (filterBy === 3 && filterByTissu === 2) {
        filtered = patientData.filter(patient => patient.tissue_type === "Normal" && patient.Location === "Ascending")
    }




    // switch(filterBy) {
    //   case 1:
    //     filteredLocation = patientData.filter(patient => patient)
    //     break;
    //   case 2:
    //       filteredLocation = patientData.filter(patient => patient && patient.tissue_type === "Normal")
    //       break; 
    //   case 3:
    //         filteredLocation = patientData.filter(patient => patient && patient.tissue_type === "Polyp")
    //         break;     
    //   case 4:
    //     filteredLocation = patientData.filter(patient => patient.Location === "Descending" && patient.tissue_type === "Polyp")
    //     break;
    //   case 5:
    //       filteredLocation = patientData.filter(patient => patient.Location === "Descending" && patient.tissue_type === "Normal")
    //     break;
    //   case 6:
    //     filteredLocation = patientData.filter(patient => patient.Location === "Transverse" && patient.tissue_type === "Polyp")
    //     break;
    //   case 7:
    //     filteredLocation = patientData.filter(patient => patient.Location === "Transverse" && patient.tissue_type === "Normal")
    //     break;
    //   case 8:
    //     filteredLocation = patientData.filter(patient => patient.Location === "Ascending" && patient.tissue_type === "Polyp")
    //     break;
    //   case 9:
    //     filteredLocation = patientData.filter(patient => patient.Location === "Ascending" && patient.tissue_type === "Normal")
    //     break;
    //   default:
    //     console.log("please choose your option")
    // }
    // console.log(filteredLocation)
    



    // switch(filterByTissu) {
    //   case 4:
    //     filteredTissueType = patientData.filter(patient => patient.tissue_type === "Polyp")
    //     break;
    //   case 5:
    //     filteredTissueType = patientData.filter(patient => patient.tissue_type === "Normal")
    //       break;
    //   case 6:
    //     filteredTissueType = patientData.filter(patient => patient)
    //     break;
    //   default:
    //     console.log("please choose your option")
    // }
    // console.log(filteredTissueType)


    //Location
    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(1200, 300).parent(canvasParentRef);
      
    }
    const draw = p5 => {
      p5.background(220, 300)
      for(var pindex in filtered) {
        p5.point(filtered[pindex]["x (cm bahareh)"]*10, filtered[pindex]["y (cm bahareh)"]*10);
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
    <h2>A001</h2>            
      {/* <Sketch setup={setup} draw={draw} ></Sketch>  */}
      <Sketch setup={setup} draw={draw}></Sketch>

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
         <tr style={{}}> 
           <th style={{paddingLeft:"150px"}}>ID  </th>     
           <th style={{paddingLeft:"250px"}}>Location </th>   
           <th style={{paddingLeft:"150px"}}>Tissue_type </th>
           <th style={{paddingLeft:"50px"}}>Area of polyp</th>
          </tr>
        </th>
      </thead>    
    <tbody style={{ position:"absolute"}}>{filtered.map(dataPatient =>
      <PatientCard key={dataPatient.id} id ={dataPatient.id} location={dataPatient.Location} tissue_type={dataPatient.tissue_type} x={dataPatient["x (cm bahareh)"]} y={dataPatient["y (cm bahareh)"]} area={dataPatient["Area of polyp"]}/>
        )}
    </tbody>
    </Table>
  </div>

  <div>
    <div>
       <label style={{float:"left",paddingLeft:"15px"}}>Locations:</label>
        <select  style={{float:"left"}}onChange={event => setFilterBy(parseInt(event.target.value))} value={filterBy}>
          <option value={0}>All</option>
          <option value={1}>Location Descending</option>
          <option value={2}>Location Transverse</option>
          <option value={3}>Location Ascending</option>
        </select>
    </div>
   <div>
      <label style={{float:"left",paddingLeft:"15px"}}>Tissue_type:</label>
        <select  style={{float:"left"}}onChange={event => setFilterByTissu(parseInt(event.target.value))} value={filterByTissu}>
        <option value={0}>All</option>
         <option value={1}>Polyp</option>
         <option value={2}>Normal</option>
        </select>
     </div>
  </div>
        
       

       

 </div>  
  );
}

export default Data;