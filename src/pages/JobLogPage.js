import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobLogTable from '../components/JobLogTable';


function JobLogPage({ setJob }) {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);

    const retrieveJobLog = async () => {
        const response = await fetch ("/jobLog");
        const jobs = await response.json();
        setJobs(jobs);}

    const editJobLog = async job => {
        setJob(job);
        navigate("/edit-job");}

    const deleteJob = async id => {
        const response = await fetch(`/jobLog/${id}`, { method: "DELETE"});

        if (response.status === 204) {
            const getResponse = await fetch("jobLog");
            const jobs = await getResponse.json();
            setJobs(jobs);
        } else {
            console.error(`The row with id: ${id} could not be deleted (status code = 204)`)
        }
    }
    useEffect(() => {
        retrieveJobLog();
    }, []);

    return (
        <>
            <h2>Job Log</h2>
            <article>
                <p>This is an interactive resume where you can add, edit, and delete your current and previous jobs.</p>

                <JobLogTable
                    jobs={jobs}
                    onDelete={deleteJob}
                    onEdit={editJobLog}/>
            </article>
        </>
    );
}

export default JobLogPage;