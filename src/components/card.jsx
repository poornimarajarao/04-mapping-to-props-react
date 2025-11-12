function Card(props){
    let{name,id,qlfn}=props.data
    return(
        <>
        <div className="col-md-3">
            <div className="card">
                <div className="card-header">
                    <h1>Student Details</h1>
                </div>
                <div className="card-body">
                    <h4>Name: {name}</h4>
                    <h5>ID: {id}</h5>
                    <h5>Qualification: {qlfn}</h5>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;