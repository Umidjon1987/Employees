import './app-info.css';

const AppInfo = ({numberOfEmployees, numberOfIncreased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Umid</h1>
            <h2>Общее число сотрудников: {numberOfEmployees}</h2>
            <h2>Премию получат: {numberOfIncreased} </h2>
        </div>
    )
}

export default AppInfo;