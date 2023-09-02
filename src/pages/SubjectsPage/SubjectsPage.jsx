import Header from "../../components/layouts/Header/Header";
import './SubjectsPage.scss'
import { useEffect, useState } from "react";
import axios from '../../axios.jsx';

const SubjectsPage = () =>{
	const [allSubjects, setAllSubjects] = useState([]);

    useEffect(() => {
		axios.get('/subjects')
			.then(response => {
				console.log(response.data);
				setAllSubjects(response.data);
			})
			.catch(error => {
				console.error('Error fetching subjects:', error.response ? error.response.data : error.message);
			});
	}, []);

    return(
        <div>
            <Header></Header>

            <div className="course-buttons-section">
                <button className="course-button">1 КУРС</button>
                <button className="course-button">2 КУРС</button>
                <button className="course-button">3 КУРС</button>
                <button className="course-button">4 КУРС</button>
            </div>

            <div className="subject-buttons-section">
                <ul>
                    {allSubjects.map(subject => (
                    <li key={subject.id}>
                        <Link to={`/subject/${subject.id}`}>
                        <button>{subject.name}</button>
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

        </div>
    )

}

export default SubjectsPage