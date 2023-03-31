import React from "react";

function StaffRow({staff}) {
    return(

            <tr>

                <td>
                    <img src={staff.picture.thumbnail} alt="staff photo using random API" />
                </td>

                <td>
                    <a className="mailto" href={"mailto:" + staff.email}>
                    {staff.name.first}&nbsp;
                    {staff.name.last}</a>
                </td>

                <td>
                    {staff.phone}
                </td>

                <td>
                    {staff.location.city}
                </td>

            </tr>
    );
}

export default StaffRow;