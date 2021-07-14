import React, { useState } from 'react';
import './Login.css'
import Title from './components/title/Title';
import Label from './components/label/Label';
import Input from './components/input/Input'

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    function handleChange(name, value) {
        if(name === 'user') {
             setUser(value)
        }else{
            if(value.length < 6) {
                setPasswordError(true)
            }else{
                setPasswordError(false)
                setPassword(value)
            }
        }
    };

    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'usuario' && param.password === '123456') {
                const {user, password} = param;
                let ac = { user, password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true)
            }
        }else{
            setIsLogin(false);
            setHasError(true)
        }
    }

    function handleSubmit() {
        let account = { user, password }
        if(account) {
            ifMatch(account)
        }
    }

    return (
        <div className="loginForm">
            { isLogin ? 
            <div>
                <h2>Bienvenido {user}</h2>
            </div>
            :
            <div>
                <Title text="Bienvenido" />
                { hasError &&
                    <label className="labelAlert"> Tu contraseña y/o usuario son incorrectos </label>
                }
                <Label text="Usuario" />
                <Input 
                    attribute={{
                        id: 'user',
                        name: 'user',
                        type: 'text',
                        placeholder: 'Introduce tu usuario'
                    }}
                    handleChange={handleChange}
                />
                <Label text="Contraseña" />
                <Input 
                    attribute={{
                        id: 'contraseña',
                        name: 'contraseña',
                        type: 'password',
                        placeholder: 'Introduce tu contraseña'
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />
                {passwordError && 
                    <label className='labelError'> 
                        Tu contraseña debe contener mas de 6 caracteres
                    </label>
                }
                <div>
                    <button onClick={handleSubmit}>
                        Iniciar sesión
                    </button>
                </div>
            </div>
            }
        </div>
    )
};

export default Login;