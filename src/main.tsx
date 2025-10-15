import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure the root element exists before rendering
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Add error boundary for React rendering
try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Failed to render React app:", error);
  // Fallback content
  rootElement.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #000;
      color: #fff;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    ">
      <h1 style="color: #ff1744; margin-bottom: 20px;">TEDxAhlconIntlSchool</h1>
      <p style="margin-bottom: 30px;">Something went wrong. Please refresh the page.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkzkzO1tpNbt7-L6QMA7eW7tB745nKK0Sxcl0ByUpyaUnv4w/viewform?usp=dialog" 
         target="_blank" 
         rel="noopener noreferrer"
         style="
           background: #ff1744;
           color: white;
           padding: 12px 24px;
           border-radius: 25px;
           text-decoration: none;
           font-weight: bold;
           transition: all 0.3s ease;
         "
         onmouseover="this.style.transform='scale(1.1)'"
         onmouseout="this.style.transform='scale(1)'"
      >
        Buy Tickets Now
      </a>
    </div>
  `;
}
