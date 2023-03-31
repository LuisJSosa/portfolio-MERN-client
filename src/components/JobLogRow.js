import React from 'react';
import { MdEditNote } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';



function JobLogRow({ job, onDelete, onEdit }) {

    return (

        <tr>
            <td title="Your Job Title."> {job.jobTitle}</td>
            <td title="Your Job Description."> {job.jobDescription}</td>
            <td title="The rank of how techy this job is on a 1-3 scale."> {job.jobRank}</td>
            <td title="The date when you started this job."> {job.startDate.slice(0,10)}</td>
            <td title="The date when you stopped working at this job"> {job.endDate.slice(0,10)}</td>
            <td><i><MdEditNote onClick={() => onEdit(job)} title="Click here to edit this job."/></i></td>
            <td><i><TiDeleteOutline onClick={() => onDelete(job._id)} title="Click here to delete this job from the log."/></i></td>
            <td></td>
        </tr>
    );
}

export default JobLogRow;