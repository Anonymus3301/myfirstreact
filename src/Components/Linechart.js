import React,{Component} from 'react';
import {Line} from 'react-chartjs-2'

class Linechart extends Component{
	render(){
		const labels =['','','','','','','',''];
		const data={
			labels:labels,
			datasets:[{
				label:"Earnings",
				data: [46,54,44,55,49,52,42.5,43.41],
				fill:true,
				backgroundColor:['rgba(54,162,235,0.4'],
				pointBackgroundColor:'rgba(54,162,235,0.5',
				pointBorderColor:'rgba(54,162,235,0.5',
				borderColor: ['purple'],
				borderWidth: 1.5
			  }]
		}
		const options={
			scales: {
				xAxes: [{
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					gridLines: {
						display:false
					}   
				}]
			}
	}
		
		return(
			
				<Line height={130}data={data} options={options} />
			
		)
	}
}
export default Linechart;