import React, { useState } from 'react';
import './Login.css'
import Title from './components/title/Title';
import Label from './components/label/Label';
import Input from './components/input/Input'

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword] = useState('');

    function handleChange(name, value) {
        if(name === 'user') {
             setUser(value)
        }else{
            setPassword(value)
        }
    };

    function handleSubmit() {
        let account = { user, password }
        if(account) {
            console.log('account: ', account)
        }
    }

    return (
        <div className="loginForm">
            <Title text="Título" />
            <Label text="Nombre" />
            <Input 
                attribute={{
                    id: 'user',
                    name: 'user',
                    type: 'text',
                    placeholder: 'Introduce tu usuario'
                }}
                handleChange={handleChange}
            />
            <Label text="Apellido" />
            <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Introduce tu contraseña'
                }}
                handleChange={handleChange}
            />
            <button onClick={handleSubmit}>
                Iniciar sesión
            </button>
        </div>
    )
};

export default Login;