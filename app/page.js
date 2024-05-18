"use client"
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import styles from './page.module.css';
import Link from "next/link";


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
                    <Link className={styles.link} href=''>Дмитрий Сухов</Link>
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
                        <td><button type="button" className="btn btn-danger m-1">Откликнуться</button></td>
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
                <div className="text-start fs-3 fw-bold m-1">Расширенный поиск</div>
                <div>
                    <label>Должность:</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Должность"
                        value={searchTermPosition}
                        onChange={(e) => setSearchTermPosition(e.target.value)}
                    />
                    <label>Требуемое образование:</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Требуемое образование"
                        value={searchTermEducation}
                        onChange={(e) => setSearchTermEducation(e.target.value)}
                    />
                    <label>Опыт работы:</label>
                    <select name="maritalStatus" size="1" onChange={(e) => setSearchTermExperience(e.target.value)} className="form-select mb-2">
                        <option selected value='Не выбрано'>Не выбрано</option>
                        <option value="Нет">Нет</option>
                        <option value="От 1 года">От 1 года</option>
                        <option value="От 2 лет">От 2 лет</option>
                        <option value="От 3 лет">От 3 лет</option>
                        <option value="От 5 лет">От 5 лет</option>
                    </select>
                    <label>График работы:</label>
                    <select name="maritalStatus" size="1" onChange={(e) => setSearchTermSchedule(e.target.value)} className="form-select mb-2">
                        <option selected value='Полный день'>Полный день</option>
                        <option value="Сменный">Сменный</option>
                    </select>
                    <label>Льготы:</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Льготы"
                        value={searchTermBenefits}
                        onChange={(e) => setSearchTermBenefits(e.target.value)}
                    />
                    <label>Заработная плата:</label>
                    <select name="maritalStatus" size="1" onChange={(e) => setSearchTermSalary(e.target.value)} className="form-select mb-2">
                        <option selected value='Не выбрано'>Не выбрано</option>
                        <option value='от 30000'>от 30000</option>
                        <option value="от 40000">от 40000</option>
                        <option value="от 50000">от 50000</option>
                        <option value="от 80000">от 80000</option>
                    </select>
                </div>

            </div>
        </div>
    );
}