import React, { useEffect, useRef, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    Filler,
    ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
    annotationPlugin
);

export const TransferChart = () => {
    const chartRef = useRef<any>(null);

    const [gradient, setGradient] = useState<any>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = chartRef.current?.ctx;
            const newGradient = chart.createLinearGradient(
                0,
                0,
                0,
                chart.canvas.height - 100
            );
            newGradient.addColorStop(0, "#2187e540"); // Xanh đậm
            newGradient.addColorStop(1, "#ffffff00"); // Trắng dần
            setGradient(newGradient);
        }
    }, []);

    const labels = [
        "'10",
        "'13",
        "'14",
        "'16",
        "'17",
        "'19",
        "'20",
        "'23",
        "'22",
    ];

    const data: ChartData<"line", number[], string> = {
        labels,
        datasets: [
            {
                data: [0, 0, 43, 48, 20, 0, 66, 15, 0],
                borderColor: "rgba(0, 123, 255, 1)",
                borderWidth: 2,
                fill: true,
                backgroundColor: gradient,
                pointBackgroundColor: "#FFFFFF",
                pointBorderColor: "rgba(0, 123, 255, 1)",
                pointBorderWidth: 1,
                pointRadius: 5,
                pointHoverBackgroundColor: "#FFFFFF",
                pointHoverBorderColor: "rgba(0, 123, 255, 1)",
                pointHoverBorderWidth: 2,
                pointHoverRadius: 8,
            },
        ],
    };

    const maxValue = Math.max(...data.datasets[0].data);

    const currentValue = 12;
    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                mode: "nearest",
                intersect: false,
                callbacks: {
                    label: function (context) {
                        if (context.datasetIndex === 0) {
                            return `Value: ${context.raw}`;
                        }
                        return "";
                    },
                },
            },
            annotation: {
                annotations: {
                    currentValueLine: {
                        type: "line",
                        yMin: currentValue,
                        yMax: currentValue,
                        borderColor: "#DCA407",
                        borderWidth: 2,
                        borderDash: [4, 4],
                        borderDashOffset: 0,
                        label: {
                            content: "Current Value",
                            position: "center",
                            backgroundColor: "#DCA407",
                        },
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#FFFFFF",
                    font: {
                        size: 14,
                    },
                },
            },
            y: {
                position: "right",
                border: {
                    display: false,
                    dash: [4, 4],
                    dashOffset: 0,
                },
                grid: {
                    display: true,
                    color: "#DCA40766",
                    lineWidth: 2,
                },
                ticks: {
                    color: "#FFFFFF",
                    font: {
                        size: 14,
                    },
                    callback: function (value) {
                        return value + "M";
                    },
                },
            },
        },
    };

    return <Line ref={chartRef} options={options} data={data} />;
};
