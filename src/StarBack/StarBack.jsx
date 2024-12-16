import React, { useEffect, useRef } from "react";

function StarBack() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current; // Get the canvas element
        const ctx = canvas.getContext("2d"); // Get the 2D rendering context

        // Set the initial canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = Array.from({ length: 200 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            twinkleSpeed: 0.5 + Math.random() * 0.8, // Twinkle speed of the each star
            offset: Math.random() * Math.PI * 2, // Random offset for the twinkle effect
        }));

        function animate() {
            // Erase the previous frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                // Set the opacity of the star
                const minOpacity = 0.3; // Minimum opacity of the star
                const opacity =
                    minOpacity +
                    (1 - minOpacity) *
                        (0.5 +
                            Math.sin(
                                (Date.now() / 1000) * star.twinkleSpeed +
                                    star.offset
                            ) *
                                0.5);
                // Draw the star
                ctx.beginPath();
                // Set the color and opacity of the star
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.arc(star.x, star.y, 1.4, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate); // Call the animate function recursively
        }

        animate();

        // Resize the canvas when the window is resized
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        return () => {
            window.removeEventListener("resize", () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed", // Fix the canvas element to the window
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "linear-gradient(#000000, #1a1a1a)",
                zIndex: -1, // Set the z-index to -1 to display the canvas behind other elements
            }}
        />
    );
}

export default StarBack;
