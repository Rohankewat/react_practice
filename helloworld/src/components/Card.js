function Cards (props) {
    return (
        <div>
<div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" src={props.src} alt="Card  cap"/>
  <div class="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.prag}</p>
    <a href="/" class="btn btn-primary">click</a>
  </div>
</div>
        </div>
    )
}

export default Cards 