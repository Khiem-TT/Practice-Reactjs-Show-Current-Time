import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

const tick = () => {
    const currentTime = <div>
        <h1>Hello, World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    root.render(currentTime);
};

setInterval(tick, 1000);