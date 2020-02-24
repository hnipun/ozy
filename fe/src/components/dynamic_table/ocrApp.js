import React from "react";
import {Row, Col} from "react-bootstrap";
import DynamicTable from "./dynamicTable";
import {StyleSheet, css} from "aphrodite";
import ImageSlides from "./imageSlides";


class OcrApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [{name: "",},]

        };
        this.getLineClicked = this.getLineClicked.bind(this);
    }

    handleChange = idx => e => {
        const {name, value} = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };
    handleAddRow = () => {
        const item = {};
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };

    getLineClicked(line) {
        if (line === '') {
            return
        }

        if (this.state.rows[0].name === '') {
            this.setState({
                rows: [{name: line}]
            });
        } else {
            this.setState({
                rows: [...this.state.rows, {name: line,}]
            });
        }
    }

    render() {
        return <Row className={css(styles.crunchRow)}>
            <Col md="4">
                <ImageSlides getLineClick={this.getLineClicked}/>
            </Col>
            <Col sm="8">
                <DynamicTable handleChange={this.handleChange} handleAddRow={this.handleAddRow}
                              handleRemoveRow={this.handleRemoveRow} rows={this.state.rows}/>
            </Col>
        </Row>
    }
}

export default OcrApp;


const styles = StyleSheet.create({
    crunchRow: {
        maxHeight: "90vh",
        minHeight: "90vh"
    }
});
