import { createContext, useContext, useState } from "react";

const JobsContext = createContext();

export function JobsProvider({ children }) {
    const [jobs, setJobs] = useState([
        { id: 1, title: "Frontend Developer", location: "Bengaluru", description: "Build amazing UIs", applicants: 8, posted: "Jan 15, 2026" },
        { id: 2, title: "Backend Engineer", location: "Remote", description: "Build scalable APIs", applicants: 5, posted: "Jan 20, 2026" },
    ]);

    const addJob = (job) => {
        const newJob = {
            id: Date.now(),
            ...job,
            applicants: 0,
            posted: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        };
        setJobs([newJob, ...jobs]);
    };

    const deleteJob = (id) => {
        setJobs(jobs.filter(j => j.id !== id));
    };

    return (
        <JobsContext.Provider value={{ jobs, addJob, deleteJob }}>
            {children}
        </JobsContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useJobs = () => useContext(JobsContext);
