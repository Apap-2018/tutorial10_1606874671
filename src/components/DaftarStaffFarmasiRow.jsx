import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStaffFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStaffFarmasi.map(StaffFarmasi => {
                return (
                    <tr key={StaffFarmasi.id}>
                        <td>{StaffFarmasi.nama}</td>
                        <td>{StaffFarmasi.jenis}</td>
                        <td>
                            <Link to={`/update-StaffFarmasi/${StaffFarmasi.id}`} className="btn btn-info">Update</Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}