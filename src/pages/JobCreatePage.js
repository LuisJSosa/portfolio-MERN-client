import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdLibraryAdd } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';


export const JobCreatePage = () => {

    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobRank, setJobRank] = useState("1");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const navigate = useNavigate()
    const addJob = async () => {

        const createJob = { jobTitle, jobDescription, jobRank, startDate, endDate };

        const response = await fetch("/jobLog", {
            method: "POST",
            body: JSON.stringify(createJob),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 201) {
            alert("The job has been added to the log.")
        } else {
            alert("The job could not be added to the log, please enter all the required fields and try again.")
        }

        navigate("/jobLog");
    };

    return (
        <>
            <h2>Current and Past Roles</h2>

            <article>
                <p>Please use the section below to add a job to your resume.</p>

                <table>
                    <caption>Add a Current or Past Role.</caption>

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
                                <label for="jobTitle" class="required">
                                    <input type="text" autocomplete="off" value={jobTitle}
                                        id="jobTitle" name="jobTitle" onChange={e => setJobTitle(e.target.value)} required
                                        autoFocus />
                                </label>
                            </td>

                            <td>
                                <label for="jobDescription" class="required">
                                    <input type="text" autocomplete="off" value={jobDescription}
                                        id="jobDescription" name="jobDescription" onChange={e => setJobDescription(e.target.value)} required
                                        autoFocus />
                                </label>
                            </td>

                            <td>
                                <label for="jobRank" class="required">
                                    <input type="number" value={jobRank} min="1" max="3"
                                        id="jobRank" name="jobRank" onChange={e => setJobRank(e.target.value)} required
                                        autoFocus />
                                </label>
                            </td>

                            <td>
                                <label for="startDate" class="required">
                                <input type="date" value={startDate}
                                    id="startDate" name="startDate" onChange={e => setStartDate(e.target.value)} required
                                    pattern="\d{2}-\d{2}-\d{2}" />
                            </label>
                            </td>

                            <td>
                                <label for="endDate" class="required">
                                <input type="date" value={endDate}
                                    id="endDate" name="endDate" onChange={e => setEndDate(e.target.value)} required
                                    pattern="\d{2}-\d{2}-\d{2}" />
                            </label>
                            </td>

                            <td></td>
                            <td></td>

                            <td>
                                <button className='save' onClick={addJob}><i><BiSave /></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default JobCreatePage;