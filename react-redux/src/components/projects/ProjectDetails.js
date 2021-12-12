import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}       </span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, possimus? Porro autem, fugit doloribus ab impedit corporis voluptas odio libero in perferendis qui laudantium consequatur? Reprehenderit, consectetur! Quo, quis rerum!</p>
                </div>
                <div className="card-action">
                    <div>Posted by </div>
                    <div>2nd September, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails


