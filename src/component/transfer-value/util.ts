import { ChartData, ChartOptions } from "chart.js";
import { Plugin } from "chart.js";

export const renderOptionChart: (
    currentValue: number
) => ChartOptions<"line"> = (currentValue) => {
    return {
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
                        borderWidth: 1,
                        borderDash: [2, 2],
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
                    dash: [2, 2],
                    dashOffset: 0,
                },
                grid: {
                    display: true,
                    color: "#DCA40766",
                    lineWidth: 1,
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
};

export const renderDataChart: (
    data: number[],
    labels: string[],
    gradient: any
) => ChartData<"line", number[], string> = (data, labels, gradient) => {
    return {
        labels,
        datasets: [
            {
                data: data,
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
};

const preloadIcons = (urls: string[]) => {
    const images: Record<number, HTMLImageElement> = {};
    urls.forEach((url, index) => {
        const img = new Image();
        img.src = url;
        images[index] = img;
    });
    return images;
};

export const renderIconPlugin: (iconUrls: string[]) => Plugin = (iconUrls) => {
    const icons = preloadIcons(iconUrls);
    return {
        id: "iconPlugin",
        afterRender: (chart) => {
            const { ctx, scales } = chart;
            const { x } = scales;

            // URL của icon (lá cờ)

            // Lấy dữ liệu và vẽ icon tại từng điểm
            chart.data.datasets[0].data.forEach((_, index) => {
                const xPos =
                    (x.getPixelForValue(index) +
                        x.getPixelForValue(index + 1)) /
                    2;
                const yPos = 30; // Tọa độ y của giá trị

                const icon = icons[index]; // Lấy icon đã tải trước
                const iconSize = 20; // Kích thước icon
                if (icon) {
                    ctx.drawImage(
                        icon,
                        xPos - iconSize / 2,
                        yPos - iconSize - 10,
                        iconSize,
                        iconSize
                    ); // Vẽ icon
                }
            });
        },
    };
};
