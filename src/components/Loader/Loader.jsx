import { useEffect, useState } from "react";

import "./Loader.scss"; 

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish();
          return 100;
        }
        return prev + 1; 
      });
    }, 40); 

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <p>Welcome to My Portfolio!</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
};

export default Loader;
