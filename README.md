# Employee Accounting

A React application for managing and displaying employee information.

The project was created as part of a Udemy Frontend Development course to practice **React fundamentals**, component-based architecture, state management, props, event handling, search, and filtering.

## Features

* Display employee information
* Add new employees
* Delete employees
* Search employees by name
* Filter employees by promotion status
* Filter employees by salary
* Mark employees for promotion
* Mark employees as favorites
* Display the total number of employees
* Display the number of employees receiving a bonus

## Technologies

* **React**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

## React Concepts

### Components

The application is divided into reusable functional and class components:

* `App`
* `AppInfo`
* `AppFilter`
* `SearchPanel`
* `EmployeesList`
* `EmployeesAddForm`

### State Management

The main application state is managed in the `App` class component using `this.state` and `this.setState()`.

The state contains:

```js
{
    data: [],
    term: "",
    filter: "all"
}
```

Employee data is updated using React state methods and array methods such as `map()` and `filter()`.

### Props

Components communicate with each other through props.

For example, `App` passes event handlers to child components:

```jsx
<EmployeesList
    data={visibleData}
    onDelete={this.deleteItem}
    onToggleIncrease={this.onToggleIncrease}
    onToggleStar={this.onToggleStar}
/>
```

### Search

Employees can be searched by name.

The search functionality uses `filter()` and `indexOf()` to find matching employee names.

### Filtering

The application supports several filters:

* All employees
* Employees selected for promotion
* Employees with a salary above `$1000`

The visible employee list is calculated based on the current search term and selected filter.

## Data Manipulation

The project demonstrates working with JavaScript arrays and objects without directly mutating the existing state.

For example, employee properties are updated by creating a new object:

```js
return {
    ...item,
    inCrease: !item.inCrease
};
```

The employee list is then updated using `map()`:

```js
data: data.map(item => {
    if (item.id === id) {
        return {
            ...item,
            inCrease: !item.inCrease
        };
    }

    return item;
})
```

## Project Structure

```text
src/
├── app/
├── app-filter/
├── app-info/
├── employees-add-form/
├── employees-list/
├── search-panel/
└── ...
```

## Project Goals

This project was created to practice the fundamentals of **React and JavaScript** through a small employee management application.

The main focus was understanding:

* React components
* Props
* State management
* Event handling
* Rendering dynamic data
* Array methods
* Search and filtering
* Updating objects and arrays without direct mutation

## Future Improvements

* Migrate class components to functional components
* Replace class state with React Hooks
* Add persistent data storage
* Improve form validation
* Add editing functionality for employees
* Add automated tests
<img width="1020" height="748" src="https://github.com/user-attachments/assets/96e5d3bf-a6f9-4798-a1c2-dfe368b46dc8" />

