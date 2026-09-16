import JobCard from "./components/JobCard"



const Jobs =[

{ id: 1, 
  title: "Frontend Dev", 
  company: "TechCorp", 
  location: "Remote", 
  isNew: true, 
},
{ id: 2, 
  title: "Backend Dev", 
  company: "Google",
   location: "Delhi", 
   isNew: false, 
  },
  { id: 3, 
    title: "React Developer", 
    company: "Microsoft", 
    location: "Pune", 
    isNew: true,
   },

]


function JobBoard() { 
  return ( 
  <div> 
    <h1>Job Board</h1>
     {Jobs.map((job) => ( 
      <JobCard key={job.id} 
      title={job.title} 
      company={job.company} 
      location={job.location}
       isNew={job.isNew} 
       /> 
      ))} 
      </div> 
      ); 
    }
    
    function App() { 
      return <JobBoard
       />;
     } 
     
     export default App;