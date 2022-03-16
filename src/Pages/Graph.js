import patientData from '../Data/A001.json';
import React,{component} from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import { render } from '@testing-library/react';

const Chart = () => {
    console.log("it is correct")
    return ( 
        <div className="chart">
            
            <Bar
            data={patientData}
            options = {{
                maintainAspectRatio: false
            }}
        />
            Chaert Component
        </div>
     );
}
 
export default Chart;

    

 

