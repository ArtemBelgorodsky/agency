import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <div>
                <div className="d-flex header bg-secondary text-light text-center py-3 mb-2 align-items-center">

                    <img src="https://www.afipnpz.ru/bitrix/templates/main/img/elements/logo.png" alt="Bootstrap" width="100" height="100"/>
                    <h1>Кадровое агентство</h1>

                    <div className='d-flex flex-grow-1 justify-content-end align-items-center'>
                        <Link href='/about'>
                            <button type="button" className="btn btn-light m-1">О нас/Контакты</button>
                        </Link>
                        <Link className='link-info' href='/admin'>
                            <button type="button" className="btn btn-light m-1">На главную</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h2 className="mb-4">Список откликнувшихся на работу</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ФИО</th>
                        <th scope="col">Номер телефона</th>
                        <th scope="col">Должность</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Иванов Иван Дмитриевич</td>
                        <td>+7 (123) 456-78-90</td>
                        <td>Главный инженер</td>
                    </tr>
                    <tr>
                        <td>Петров Петр Олегович</td>
                        <td>+7 (987) 654-32-10</td>
                        <td>Электрик</td>
                    </tr>
                    <tr>
                        <td>Сидоров Сидор Валентинович</td>
                        <td>+7 (234) 567-89-01</td>
                        <td>Менеджер</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;