const ProjectCard = ({ image, title, description, link }) => {
    return (
      <div className="card mb-4 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100">
            View Project
          </a>
        </div>
      </div>
    );
  };

export default ProjectCard;

