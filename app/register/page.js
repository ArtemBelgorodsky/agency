import React from 'react';
import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
    return (
        <>
            <div className="d-flex header bg-secondary text-light text-center py-3 mb-2 align-items-center">

                <img src="https://www.afipnpz.ru/bitrix/templates/main/img/elements/logo.png" alt="Bootstrap" width="100" height="100"/>
                <h1>Кадровое агентство</h1>

                <div className='d-flex flex-grow-1 justify-content-end align-items-center'>
                    <Link href='/about'>
                        <button type="button" className="btn btn-light m-1">О нас/Контакты</button>
                    </Link>
                </div>

            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Регистрация</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="reg-username" className="form-label">Имя пользователя</label>
                                        <input type="text" className="form-control" id="reg-username"
                                               placeholder="Введите имя пользователя"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="reg-email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="reg-email"
                                               placeholder="Введите email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="reg-password" className="form-label">Пароль</label>
                                        <input type="password" className="form-control" id="reg-password"
                                               placeholder="Введите пароль"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="reg-password-confirm" className="form-label">Подтвердите
                                            пароль</label>
                                        <input type="password" className="form-control" id="reg-password-confirm"
                                               placeholder="Подтвердите пароль"/>
                                    </div>
                                    <div className="text-center">
                                        <Link href='/'>
                                        <button type="submit" className="btn btn-success">Зарегистрироваться</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;