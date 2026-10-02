import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: '',
        }
    }

    onNameChange = (e) => { //принимает e - аргумент объекта события
        this.setState({
            name: e.target.value,
        })
    }

    onSalaryChange = (e) => {
        this.setState({
            salary: e.target.value,
        })
    }

    addNewPerson = () => {
        const newItem = {
            name: this.state.name,
            salary: this.state.salary,
            id: this.props.id,
            star: false,
            inCrease: false
        };

        console.log(newItem);

        this.props.onAddItem(newItem)
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <div
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.onNameChange}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onSalaryChange}
                    />

                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.addNewPerson}>
                        Добавить
                    </button>
                </div>
            </div>
        )
    }
}

export default EmployeesAddForm;