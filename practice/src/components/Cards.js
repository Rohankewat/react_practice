function Cards (prompt) {
    return (
        <div>
<div className="card" style={{width: "5rem;"}}>
  <img className="card-img-top" src={prompt.src} alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">{prompt.title}</h5>
    <p className="card-text">{prompt.prag}</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    )
}

export default Cards