import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale,PointElement,LineElement,Filler,Tooltip,Legend);



const CharracterChart = ({data, setShowStats}) => {
    
    const thisData = {
        labels: ['Strength','Dexterity','Defence','Speed'],
        datasets: [
            {
                label: data.name,
                data: [data.strength, data.dexterity, data.defence,data.speed],
                backgroundColor: (data.gender === 'Female') ? ('rgba(217, 20, 69, 0.5)') : ('rgba(20, 66, 217,0.5)'),
                borderColor: (data.gender === 'Female') ? ('rgba(217, 20, 69,1)') : ('rgba(20, 66, 217,1)'),
                borderWidth: 1,
                
            },
        ],
    }
    
  return (
    <div className="stats">
        <div className="iconBack">
            <i className="fa-solid fa-arrow-left" onClick={() => setShowStats(false)}></i>
            <div className="statbox">
                <h1>{data.name}</h1>
                <div className="gender">
                     {
                    (data.gender === 'Male') ? (
                        <>
                        <i class="fa-solid fa-mars"></i><span>Male</span>
                        </>
                    ) : (
                        <>
                        <i class="fa-solid fa-venus"></i><span>Female</span>
                        </>
                    )
                } 
                </div>
                <h2>Price: <span>{data.price}</span></h2>

                <Radar data={thisData}
                options = {
                    {
                        scales: {
                            r: {
                                angleLines: {
                                    display: true
                                },
                                suggestedMin: 5,
                                suggestedMax: 7,
                            }
                        }
                    }
                }
                 redraw />     
            </div>
           
        </div>
    </div>
  )
}

export default CharracterChart