import "./app-info.css";


const AppInfo = (props) => {

    const {
        data,
    } = props;


    const people = data.filter(user => user.inCrease === true);
    const mainPeople = data.length;

    return (

        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {mainPeople}</h2>
            <h2>Премию получат: {people.length}</h2>
        </div>
    )
}

export default AppInfo;