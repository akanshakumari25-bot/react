function JobCard({details}){

const {title,company,location,isNew}=details;


return (
    <div className="container">
        <div className="Box">
            <h2>{title} {isNew &&<span>New!</span> }</h2> 
            
            </div>
            <p>Company:{company}</p>
           <p>location:{location}</p>
        

     </div>
)




} 

export default JobCard;