"use client"
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import styles from './page.module.css';

export default function Home() {

    const [change, setChange] = useState(true)

    useEffect(() => {
        axios.get('https://json-server-swart-rho.vercel.app/agency').then((response) => {
            setPeople(response.data);
        });
    }, [change]);

    const [people, setPeople] = useState();

    const [newPerson, setNewPerson] = useState({
        name: '',
        age: '',
        position: '',
        maritalStatus: '',
        startDate: '',
        vacationStartDate: '',
        vacationEndDate: '',
        benefits: '',
        salary: ''
    });

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddPerson = () => {
        if (
            newPerson.name &&
            newPerson.age &&
            newPerson.position &&
            newPerson.maritalStatus &&
            newPerson.startDate &&
            newPerson.vacationStartDate &&
            newPerson.vacationEndDate &&
            newPerson.benefits &&
            newPerson.salary
        ) {
            axios.post(
                'https://json-server-swart-rho.vercel.app/agency',
                {...newPerson}
            ).then(() => setChange(!change));
        }
    };
    console.log(newPerson)
    const handleDeletePerson = (id) => {
        axios.delete(`https://json-server-swart-rho.vercel.app/agency/${id}`).then(() => setChange(!change));
    };

    const filteredPeople = people?.filter(person =>
        Object.values(person)
            .join(' ')
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="d-flex header bg-secondary text-light text-center py-3 mb-2 align-items-center">
                <img src="https://www.afipnpz.ru/bitrix/templates/main/img/elements/logo.png" alt="Bootstrap" width="100" height="100"/>
                <h1>Кадровое агентство</h1>
            </div>
            <div className="container">
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Поиск по всем параметрам"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
                <div className={styles.tableScroll}>
            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    <th>ФИО</th>
                    <th>Возраст</th>
                    <th>Должность</th>
                    <th>Семейное положение</th>
                    <th>Дата начала работы</th>
                    <th>Дата начала отпуска</th>
                    <th>Дата конца отпуска</th>
                    <th>Льготы</th>
                    <th>Заработная плата</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {filteredPeople?.map(person => (
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.position}</td>
                        <td>{person.maritalStatus}</td>
                        <td>{person.startDate}</td>
                        <td>{person.vacationStartDate}</td>
                        <td>{person.vacationEndDate}</td>
                        <td>{person.benefits}</td>
                        <td>{person.salary}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDeletePerson(person.id)}>Удалить</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <h2>Добавить сотрудника</h2>
            <input
                type="text"
                className="form-control mb-2"
                placeholder="ФИО"
                name="name"
                value={newPerson.name}
                onChange={handleInputChange}
            />
            <input
                type="number"
                className="form-control mb-2"
                placeholder="Возраст"
                name="age"
                value={newPerson.age}
                onChange={handleInputChange}
            />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Должность"
                name="position"
                value={newPerson.position}
                onChange={handleInputChange}
            />
                <select name="maritalStatus" size="1" onChange={handleInputChange} className="form-select mb-2">
                    <option selected value='нет'>Выберете смейное положение</option>
                    <option value="Женат">Женат</option>
                    <option value="Замужем">Замужем</option>
                    <option value="Холост">Холост</option>
                </select>
                <label htmlFor="startDate">Введите дату начала работы:</label>
            <input
                id = 'startDate'
                type="date"
                className="form-control mb-2"
                placeholder="Дата начала работы"
                name="startDate"
                value={newPerson.startDate}
                onChange={handleInputChange}
            />
                <label htmlFor="vacationStartDate">Введите дату начала отпуска:</label>
            <input
                id = 'vacationStartDate'
                type="date"
                className="form-control mb-2"
                placeholder="Дата начала отпуска"
                name="vacationStartDate"
                value={newPerson.vacationStartDate}
                onChange={handleInputChange}
            />
                <label htmlFor="vacationEndDate">Введите дату конца отпуска:</label>
            <input
                id = 'vacationEndDate'
                type="date"
                className="form-control mb-2"
                placeholder="Дата конца отпуска"
                name="vacationEndDate"
                value={newPerson.vacationEndDate}
                onChange={handleInputChange}
            />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Льготы"
                name="benefits"
                value={newPerson.benefits}
                onChange={handleInputChange}
            />
            <input
                type="number"
                className="form-control mb-2"
                placeholder="Заработная плата"
                name="salary"
                value={newPerson.salary}
                onChange={handleInputChange}
            />
            <button className="btn btn-warning" onClick={handleAddPerson}>Добавить</button>
            </div>
        </div>
    );
}