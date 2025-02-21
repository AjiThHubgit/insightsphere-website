import React, { useRef, useEffect } from 'react';
import anychart from "anychart";

function ChartSection() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    
    useEffect(() => {
        if (chartRef.current) {
            if (!chartInstance.current) {
                // Create a Sunburst chart
                chartInstance.current = anychart.sunburst([
                    { name: "Website Overview", children: [
                        { name: "Users", children: [
                            { name: "Total Users", value: 50 },
                            { name: "Active Users", value: 20 },
                            { name: "New Sign-ups", value: 15 }
                        ]},
                        { name: "Content", children: [
                            { name: "Blogs", value: 10 },
                            { name: "Services", value: 10 },
                        ]}
                    ]}
                ], "as-tree");
                
                // Hide chart title
                chartInstance.current.title(false);
                
                // Set tooltip format
                chartInstance.current.tooltip().format("{%name}: {%value}");
                
                // Hide AnyChart watermark
                chartInstance.current.credits(false);
                
                // Set container and draw chart
                chartInstance.current.container(chartRef.current);
                chartInstance.current.draw();
            }
        }
    }, []);

    return (
        <div>
            <div ref={chartRef} style={{ width: "100%", height: "450px" }} />
            
        </div>
    );
}

export default ChartSection;
