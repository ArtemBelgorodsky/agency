"use client"
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Link from "next/link";
import styles from "../page.module.css"


export default function Home() {

    const [change, setChange] = useState(true)

    useEffect(() => {
        axios.get('https://json-server-swart-rho.vercel.app/agency').then((response) => {
            setPeople(response.data);
        });
    }, [change]);

    const [people, setPeople] = useState();

    const [newPerson, setNewPerson] = useState({
        position: '',
        education: '',
        experience: '',
        schedule: '',
        benefits: '',
        salary: '',
        note: ''
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermPosition, setSearchTermPosition] = useState('');
    const [searchTermEducation, setSearchTermEducation] = useState('');
    const [searchTermExperience, setSearchTermExperience] = useState('');
    const [searchTermSchedule, setSearchTermSchedule] = useState('');
    const [searchTermBenefits, setSearchTermBenefits] = useState('');
    const [searchTermSalary, setSearchTermSalary] = useState('');


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddPerson = () => {
        if (
            newPerson.position &&
            newPerson.education &&
            newPerson.experience &&
            newPerson.schedule &&
            newPerson.benefits &&
            newPerson.salary &&
            newPerson.note
        ) {
            axios.post(
                'https://json-server-swart-rho.vercel.app/agency',
                {...newPerson}
            ).then(() => setChange(!change));
        }
    };
    const handleDeletePerson = (id) => {
        axios.delete(`https://json-server-swart-rho.vercel.app/agency/${id}`).then(() => setChange(!change));
    };

    const filteredPeople = people?.filter(person =>
        Object.values(person)
            .join(' ')
            .toLowerCase()
            .includes(searchTerm.toLowerCase() || searchTermPosition.toLowerCase() || searchTermEducation.toLowerCase() ||
                searchTermExperience.toLowerCase() || searchTermSchedule.toLowerCase() || searchTermBenefits.toLowerCase() ||
                searchTermSalary.toLowerCase())
    );

    return (
        <div>
            <div className="d-flex header bg-secondary text-light text-center py-3 mb-2 align-items-center">

                <img src="https://www.afipnpz.ru/bitrix/templates/main/img/elements/logo.png" alt="Bootstrap" width="100" height="100"/>
                <h1>Кадровое агентство</h1>

                <div className='d-flex flex-grow-1 justify-content-end align-items-center'>
                    <Link href='/about'>
                        <button type="button" className="btn btn-light m-1">О нас/Контакты</button>
                    </Link>
                </div>

            </div>
            <div className="container">
                <div className="text-center fs-1 fw-bold">Список требуемых вакансий на предприятие</div>
                <div className={styles.tableScroll}>
                    <table className="table table-hover m-3">
                        <thead className="thead-dark text-center">
                        <tr>
                            <th>Должность</th>
                            <th>Требуемое образование</th>
                            <th>Опыт работы</th>
                            <th>График работы</th>
                            <th>Льготы</th>
                            <th>Заработная плата</th>
                            <th>Примечание</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className='text-center'>
                        {filteredPeople?.map(person => (
                            <tr key={person.id}>
                                <td>{person.position}</td>
                                <td>{person.education}</td>
                                <td>{person.experience}</td>
                                <td>{person.schedule}</td>
                                <td>{person.benefits}</td>
                                <td>{person.salary}</td>
                                <td>{person.note}</td>
                                <td><button type="button" className="btn btn-danger m-1" onClick={() => handleDeletePerson(person.id)}>Удалить</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-start fs-3 fw-bold m-1">Поиск нужной вакансии</div>
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Найдите вакансию по любым параметрам"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="text-start fs-3 fw-bold m-1">Добавить вакансию</div>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Должность"
                    name="position"
                    value={newPerson.position}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Требуемое образование"
                    name="education"
                    value={newPerson.education}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Опыт работы"
                    name="experience"
                    value={newPerson.experience}
                    onChange={handleInputChange}
                />

                <input
                    id = 'startDate'
                    type="text"
                    className="form-control mb-2"
                    placeholder="График Работы"
                    name="schedule"
                    value={newPerson.schedule}
                    onChange={handleInputChange}
                />

                <input
                    id = 'vacationStartDate'
                    type="text"
                    className="form-control mb-2"
                    placeholder="Льготы"
                    name="benefits"
                    value={newPerson.benefits}
                    onChange={handleInputChange}
                />
                <input
                    id = 'vacationEndDate'
                    type="number"
                    className="form-control mb-2"
                    placeholder="Заработная плата"
                    name="salary"
                    value={newPerson.salary}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Примечание"
                    name="note"
                    value={newPerson.note}
                    onChange={handleInputChange}
                />
                <button className="btn btn-success" onClick={handleAddPerson}>Добавить вакансию</button>
                <Link href='/responds'>
                    <button className="btn btn-danger" >Откликнувшиеся</button>
                </Link>

            </div>

            </div>

    );
}