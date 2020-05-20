import React from 'react';
import Main from "./containers/Main/Main";

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>By Koval Vlad pmi-72</h1>
                <h2>Interface for managing entities in the database</h2>
            </header>
            <main className="main">
                <Main/>
            </main>
        </div>
    );
}

export default App;
