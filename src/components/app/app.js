import {Component} from "react";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:
                [
                    {name: "Jong S", salary: 300, inCrease: false, id: 1, star: false},
                    {name: "Alex M", salary: 700, inCrease: true, id: 2, star: false},
                    {name: "Mary A", salary: 1000, inCrease: true, id: 3, star: false},
                ],
            term: "",
            filter: "all",
        }
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onAddItem = (newItem) => {
        this.setState(({data}) => {
                if (newItem.name.length > 3 && newItem.name.length !== "" && newItem.salary.length !== 0 && newItem.salary.length > 2) {
                    return {
                        data: [...data, newItem]
                    }
                } else {
                    alert("Ошибка")
                }
            }
        )
    }

//1) взять объект, с которым работает пользователь
//2) сделать его копию
//3) поменять в нем свойство, которое он изменяет
//4) создать новый стэйт и поменять его уже в компоненте

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        // const index = data.findIndex(elem => elem.id === id); //получаем индекс элемента с которым будет работать
        // const old = data[index];

        // const newItem = {
        //     ...old,
        //     inCrease: !old.inCrease
        // };

        // const newArr = [
        //     ...data.slice(0, index),
        //     newItem,
        //    ...data.slice(index + 1)
        // ];
        // return {
        //     data: newArr
        // }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, inCrease: !item.inCrease};
                }
                return item;
            })
        }))
    }

    onToggleStar = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, star: !item.star};
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    searchFilterEmp = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000': {
                return items.filter(item => item.salary > 1000);
            }
            default:
                return items;
        }
    }


    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        let visibleData = this.searchEmp(data, term);
        visibleData = this.searchFilterEmp(visibleData, filter);

        return (
            <div className="app">
                <AppInfo
                    data={this.state.data}
                />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleStar={this.onToggleStar}
                />

                <EmployeesAddForm
                    onAddItem={this.onAddItem}
                    id={Math.max(...this.state.data.map(item => item.id)) + 1}
                />
            </div>
        );
    }
}

export default App;
