import Header from "../../components/layouts/Header/Header";
import './MainPage.scss'

const MainPage = () =>{
    return(
        <div>
            <Header></Header>
            <div className="course-buttons-section">
                <button className="course-button">1 КУРС</button>
                <button className="course-button">2 КУРС</button>
                <button className="course-button">3 КУРС</button>
                <button className="course-button">4 КУРС</button>
            </div>
            

        </div>
    )
}

export default MainPage