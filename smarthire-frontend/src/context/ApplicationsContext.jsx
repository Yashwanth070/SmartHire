import { createContext, useContext, useState } from "react";

const ApplicationsContext = createContext();

export function ApplicationsProvider({ children }) {
    const [applications, setApplications] = useState([
        { id: 1, jobId: 1, jobTitle: "Frontend Developer", company: "TechCorp", location: "Bengaluru", status: "APPLIED", appliedDate: "Feb 5, 2026" },
        { id: 2, jobId: 2, jobTitle: "Backend Engineer", company: "InnovateX", location: "Remote", status: "INTERVIEW", appliedDate: "Feb 3, 2026" },
    ]);

    const applyToJob = (job) => {
        // Check if already applied
        if (applications.some(a => a.jobId === job.id)) {
            return false;
        }

        const newApplication = {
            id: Date.now(),
            jobId: job.id,
            jobTitle: job.title,
            company: "SmartHire Inc",
            location: job.location,
            status: "APPLIED",
            appliedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        };

        setApplications([newApplication, ...applications]);
        return true;
    };

    const withdrawApplication = (id) => {
        setApplications(applications.filter(a => a.id !== id));
    };

    const hasApplied = (jobId) => {
        return applications.some(a => a.jobId === jobId);
    };

    return (
        <ApplicationsContext.Provider value={{ applications, applyToJob, withdrawApplication, hasApplied }}>
            {children}
        </ApplicationsContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useApplications = () => useContext(ApplicationsContext);
