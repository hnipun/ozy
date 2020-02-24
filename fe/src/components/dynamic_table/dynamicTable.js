import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function DynamicTable({handleChange, handleAddRow, handleRemoveRow, rows}) {
    return (
        <div className="container">
            <div className="row clearfix">
                <Table
                    className="table table-bordered table-hover"
                    id="tab_logic"
                >
                    <thead>
                    <tr>
                        <th className="text-center"> #</th>
                        <th className="text-center"> Description</th>
                        <th className="text-center"> Rate</th>
                        <th className="text-center"> Amount</th>
                        <th className="text-center">''</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((item, idx) => (
                        <tr id="addr0" key={idx}>
                            <td>{idx}</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={rows[idx].name}
                                    onChange={handleChange(idx)}
                                    className="form-control"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="mobile"
                                    //value={this.state.rows[idx].mobile}
                                    onChange={handleChange(idx)}
                                    className="form-control"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="mobile"
                                    //value={this.state.rows[idx].mobile}
                                    onChange={handleChange(idx)}
                                    className="form-control"
                                />
                            </td>
                            <td>
                                <Button
                                    onClick={handleAddRow}
                                    className="pull-left"
                                    variant="primary"
                                >
                                    +
                                </Button>
                                <Button
                                    onClick={handleRemoveRow}
                                    className="pull-right"
                                    variant="danger"
                                >
                                    -
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

            </div>
        </div>
    );
}


export default DynamicTable;
