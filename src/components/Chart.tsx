import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface State {
  series: { name: string, data: number[] }[];
  options: ApexOptions; // Use ApexOptions type
}

class ApexChart extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [{
        name: "Approved",
        data: [30, 15, 25, 30, 8, 45]
      },
      {
        name: "Submitted",
        data: [23, 15, 28, 27, 11, 30]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          colors: ['#E26169', '#5041BC']
        },
        title: {
          text: 'Claims Over the Years',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
        },
        markers: {
          colors: ['#E26169', '#5041BC']
        }
      },
    };
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 max-h-[350px]">
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
