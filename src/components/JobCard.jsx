function JobCard({details}){

const{ title,company, location,isNew}=details

return(
    <div className="JobBox">
        <h2>{title} {isNew && <span>New!</span>}</h2>
        <p>company:{company}</p>
        <p>location:{location}</p>
    </div>
)



}

export default JobCard;