import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    DatasetChartOptions, ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale
);

export const options: ChartOptions = {
    responsive: true,
};

const labels = new Array(7).fill(null).map(() => (
    `@${faker.internet.userName().toLowerCase().slice(0, 5)}`
))
export const data = {
    labels,
    datasets: [
        {
            label: 'Score',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'red',
            borderWidth: 2,
            borderRadius: 100,
            width: 5,
            barThickness: 10,
        },
    ],
};

const RankingChart = () => {
    return <Bar options={options} data={data} />;
}

export default RankingChart