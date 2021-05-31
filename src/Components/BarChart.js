import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2'

class Barchart extends Component{
	render(){
		const labels =['','','','','','','',''];
		const data={
			labels:labels,
			datasets:[{
				label:"New Users",
				data: [46,54,24,55,49,32,50,43.41],
				fill:true,
				backgroundColor:['blue'],
				pointBackgroundColor:'rgba(54,162,235,0.5',
				pointBorderColor:'rgba(54,162,235,0.5',
				borderColor: ['purple'],
				borderWidth: 1.5
			  }]
		}
		const options={
			scales: {
				xAxes: [{
					gridBars: {
						display:false
					}
				}],
				yAxes: [{
					gridBars: {
						display:false
					}   
				}]
			}
	}
		
		return(
			
				<Bar height={80} data={data} options={options} />
			
		)
	}
}
export default Barchart;