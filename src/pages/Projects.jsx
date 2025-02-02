function Projects() {
    return (
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Proyectos</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Proyecto 1" />
                <div className="card-body">
                  <h5 className="card-title">Proyecto 1</h5>
                  <p className="card-text">Descripción breve de tu proyecto.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Proyecto 2" />
                <div className="card-body">
                  <h5 className="card-title">Proyecto 2</h5>
                  <p className="card-text">Descripción breve de tu proyecto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  