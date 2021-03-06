import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            chartData : {
                labels : ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets : [
                    {
                        label : 'population',
                        data : [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                          ]
                    }
                ]
            }
        }
    }

render(){
    return(
        <div className="Chart">
            <Bar
            data={this.state.chartData}
            options={{
                title:{
                    display:true,
                    text:'Largest Cities In Massachusetts',
                    fontSize:25
                  },
                  legend:{
                    display:true,
                    position:'right',
                    labels:{
                    fontColor:'#000'
                    }
                  }
            }}
             />

             <Line
            data={this.state.chartData}
            options={{
                title:{
                    display:true,
                    text:'Largest Cities In Massachusetts',
                    fontSize:25
                  },
                  legend:{
                    display:true,
                    position:'right',
                    labels:{
                    fontColor:'#000'
                    }
                  }
            }}
             />


             <Pie
            data={this.state.chartData}
            options={{
                title:{
                    display:true,
                    text:'Largest Cities In Massachusetts',
                    fontSize:25
                  },
                  legend:{
                    display:true,
                    position:'right',
                    labels:{
                    fontColor:'#000'
                    }
                  }
            }}
             />

             
        </div>

        
    );
}


}

export default Chart;