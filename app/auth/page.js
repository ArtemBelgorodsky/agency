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
                    <Link className='link-info' href='/register'>
                        <button type="button" className="btn btn-warning m-1">Регистрация</button>
                    </Link>
                </div>

            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Авторизация</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Имя пользователя</label>
                                        <input type="text" className="form-control" id="username"
                                               placeholder="Введите имя пользователя"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Пароль</label>
                                        <input type="password" className="form-control" id="password"
                                               placeholder="Введите пароль"/>
                                    </div>
                                    <div className="text-center">
                                        <Link href='/'>
                                        <button type="submit" className="btn btn-success">Войти</button>
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