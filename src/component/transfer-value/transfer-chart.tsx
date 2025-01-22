import { useEffect, useRef, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { renderDataChart, renderIconPlugin, renderOptionChart } from "./util";

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

    const iconUrls = [
        "https://flagcdn.com/w320/es.png", // Thay bằng URL cờ Tây Ban Nha
        "https://flagcdn.com/w320/es.png",
        "https://flagcdn.com/w320/es.png",
        "https://flagcdn.com/w320/es.png",
        "https://flagcdn.com/w320/es.png",
        "https://flagcdn.com/w320/es.png",
        "https://flagcdn.com/w320/es.png",
        "https://flagcdn.com/w320/es.png",
    ];

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

    const currentValue = 11.6;

    return (
        <Line
            ref={chartRef}
            options={renderOptionChart(currentValue)}
            data={renderDataChart(
                [0, 0, 43, 48, 20, 0, 66, 15, 0],
                labels,
                gradient
            )}
            plugins={[renderIconPlugin(iconUrls)]}
        />
    );
};
