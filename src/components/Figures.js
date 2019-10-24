import React from 'react'

const Figures = ({ figures }) => {
    return (
        <div>
            <h1>The Tech List - Influential Figures in Tech</h1>
            {figures.map((figure) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{figure.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{figure.email}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Figures