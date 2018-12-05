import React from 'react';

export const FormAddLabResultPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Lab Result Pasien</h2>
            <input type="hidden" name="id" value={props.pasien.id} />
            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis" />
            </div>
            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil" />
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan" />
            </div>
            <button className="btn btn-success" value="submit">Add Result</button>
        </form>
    )
}