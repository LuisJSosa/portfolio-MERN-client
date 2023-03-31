import JobLogRow from './JobLogRow';
import { Link } from 'react-router-dom';
import { MdLibraryAdd } from 'react-icons/md';


function JobLogTable({ jobs, onDelete, onEdit }) {

    return (
        <table>
            <caption>Add your job history here.</caption>

            <thead className='space'>
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
                {jobs.map((job, index) => <JobLogRow job={job} key={index} onDelete={onDelete} onEdit={onEdit} />)}
            </tbody>
        </table>
    );
}

export default JobLogTable