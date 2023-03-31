import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdLibraryAdd } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';

export const JobEditPage = ({ job }) => {

    const [jobTitle, setJobTitle] = useState(job.jobTitle);
    const [jobDescription, setJobDescription] = useState(job.jobDescription);
    const [jobRank, setJobRank] = useState(job.jobRank);
    const [startDate, setStartDate] = useState(job.startDate.slice(0, 10));
    const [endDate, setEndDate] = useState(job.endDate.slice(0, 10));
    const navigate = useNavigate()
    const editJob = async () => {

        const response = await fetch("https://portfolio-webs.herokuapp.com", {
            method: "PUT",
            body: JSON.stringify({
                _id: job._id,
                jobTitle: jobTitle,
                jobDescription: jobDescription,
                jobRank: jobRank,
                startDate: startDate,
                endDate: endDate
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            navigate("/jobLog");
            alert("The job entry has been updated.")
        } else {
            navigate("/jobLog");
            alert("The job log could not be updated because of missing fields.")
        }
    };

    return (
        <>
            <h2>Current and Past Roles</h2>

            <article>
                <p>Please use the section below to edit a job on your resume.</p>

                <table className="teamMembersTable">
                    <caption>Edit a Current or Past Role.</caption>

                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Description</th>
                            <th>Tech Rank</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th><Link to="../add-job"><i><MdLibraryAdd title="Log a Job" /></i></Link></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <label for="jobTitle">
                                    <input type="text" autocomplete="off" value={jobTitle}
                                        id="jobTitle" name="jobTitle" onChange={e => setJobTitle(e.target.value)} required
                                        autoFocus />
                                </label>
                            </td>

                            <td>
                                <label for="jobDescription">
                                    <input type="text" autocomplete="off" value={jobDescription}
                                        id="jobDescription" name="jobDescription" onChange={e => setJobDescription(e.target.value)} required
                                        autoFocus />
                                </label>
                            </td>

                            <td>
                                <label for="jobRank">
                                    <input type="number" value={jobRank} min="1" max="3"
                                        id="jobRank" name="jobRank" onChange={e => setJobRank(e.target.value)} required
                                        autoFocus />
                                </label>
                            </td>

                            <td>
                                <label for="startDate">
                                <input type="date" value={startDate}
                                    id="startDate" name="startDate" onChange={e => setStartDate(e.target.value)} required
                                    pattern="\d{2}-\d{2}-\d{2}" />
                            </label>
                            </td>

                            <td>
                                <label for="endDate">
                                <input type="date" value={endDate}
                                    id="endDate" name="endDate" onChange={e => setEndDate(e.target.value)} required
                                    pattern="\d{2}-\d{2}-\d{2}" />
                            </label>
                            </td>

                            <td></td>
                            <td></td>

                            <td>
                                <button className='save' onClick={editJob}><i><BiSave /></i></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </article>
        </>
    );
}

export default JobEditPage;