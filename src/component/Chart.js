import { pie } from "d3-shape";
import React,{component} from "react";
import { Component } from "react";
import {Bar, Line} from 'react-chartjs-2';
import patientData from '../Data/A001.json';

const PatientCard = (patientData) => {
    return(
    
<div>
         {/* {patientData.id}
         {patientData.location}
         {patientData.tissue_type}
         {patientData.area} */}
       
    </div>
)}

class Chart extends Component{
    constructor(props){
        super(props);
        this.state ={
            chartData:{
                labels:['Ascending', 'Transverse','Descending','Rectum'],
                datasets:[
                    {
                        label:'A001 the number of Polyps in each Location',
                        data:[
                            20,
                            20,
                            19,
                            0
                        ],
                        backgroundColor:[
                            'rgba(225,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(225,206,86,0.6)',
                            'rgba(75,192,192,0.6)',
                           
                        ]
                    }
                ]

            }
        }
    }


    render(){
        return (
            <div className="chart"  >

{patientData.map(data =>
      <PatientCard key={data.id} id ={data.id} location={data.Location} tissue_type={data.tissue_type} x={data["x (cm bahareh)"]} y={data["y (cm bahareh)"]} area={data["Area of polyp"]} location={data.Location}/>
        )}
                <Bar
                style={{paddingBottom:"200px"}}
                data={this.state.chartData}
                options={{
                    title:{
                        display:true,
                        text:'Large IT IS THAT',
                        fontSize:25
                    },
                    legend:{
                        display:true,
                        position:'right',
                    }
                }}
                />


                <Line
                     data={this.state.chartData}
                     options={{
                        title:{
                        display:true,
                        text:'Large IT IS THAT',
                        fontSize:35
                        },
                    legend:{
                         display:this.props.displayLegend,
                         position:this.props.legendPosition
                     }
                    }}
                />
            </div>
        )
    }
}
export default Chart;