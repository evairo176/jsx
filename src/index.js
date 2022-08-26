// 1. import react 
import React from "react";
import ReactDOM from "react-dom/client";

// 2. get id root
const el = document.getElementById('root');

// 3. pengendalian komponen react 
const root = ReactDOM.createRoot(el);

// 4. buat komponen
function App(){
    let message  = 'yohohoh';
    if(Math.random() > 0.5){
        message = 'yoro';
    }
    return <h1>{message}</h1>;
}

// 5. tampilkan komponen
root.render(<App/>);