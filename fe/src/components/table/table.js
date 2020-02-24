import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from "../form/form"

function Save(props) {
    return (
        <Button
            variant="primary"
            onClick={() => props.onClick()}
            size="lg"
        >
            Save
        </Button>
    );
}

function getTimeNow() {
    let currentDate = new Date();
    return "Last Sync: " + currentDate.getDate() + "/"
        + (currentDate.getMonth() + 1) + "/"
        + currentDate.getFullYear() + " @ "
        + currentDate.getHours() + ":"
        + currentDate.getMinutes() + ":"
        + currentDate.getSeconds();
}


function EmployeeRow(props) {
    return (
        <tr>
            <td>
                {props.data.name}
            </td>
            <td>
                <Form/>
            </td>
            <td>
                <Form/>
            </td>
            <td>
                <Form/>
            </td>
            <td>
                {getTimeNow()}
            </td>
            <td>
                <Save/>
            </td>
        </tr>
    )
}

function dictToArray(dict) {
    let array = [];
    for (let key in dict) {
        array.push(dict[key]);
    }

    return array;
}

class MainTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            1: {
                id: 1,
                name: "Kent Dodds",
                lastSync: '',
                location1: {},
                location2: {},
                location3: {}
            },
            2: {
                id: 2,
                name: "Trevor Ewen",
                lastSync: '',
                location1: {},
                location2: {},
                location3: {}
            },
            3: {
                id: 3,
                name: "Aaron Frost",
                lastSync: '',
                location1: {},
                location2: {},
                location3: {}
            },
            4: {
                id: 4,
                name: "Joel Hooks",
                lastSync: '',
                location1: {},
                location2: {},
                location3: {}
            }
        }
    }

    render() {
        let rows = dictToArray(this.state).map(person => {
            return <EmployeeRow data
                                    ={person}
            />
        });
        return <Table>
            <thead>
            <tr>
                <th>Employee</th>
                <th>Location 1</th>
                <th>Location 2</th>
                <th>Location 3</th>
                <th>Last Order Date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>{
                rows
            }
            </tbody>
        </Table>
    };

    saveDB(data) {
        console.log(data)

    }
}

export default MainTable;

