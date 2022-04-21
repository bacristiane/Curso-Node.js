import Input from '../../form/Input'
import styles from '../../form/Form.module.css'
import {Link} from 'react-router-dom'

import { useState } from 'react'
import { useContext } from 'react'

//context
import { Context } from '../../../context/UserContext'


function Login() {

    const [user,setUser] = useState({})
    const {login} =useContext(Context)

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})

    }
    function handleSubmit(e){
        e.preventDefault()
        //login do usuario
        login(user)
    }
    return(
        <section className={styles.form_container}>
            <h1>Entrar</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                text="Email"
                type="email"
                name="email"
                placeholder="Digite o seu email"
                handleOnChange={handleChange}
                />
                <Input 
                text="Senha"
                type="password"
                name="password"
                placeholder="Digite o sua senha"
                handleOnChange={handleChange}
                />
                <input
                type="submit"
                value="Acessar"
                />
            </form>
            <p>
                Não tem conta? <Link to="/register"> Clique aqui.</Link>
            </p>
        </section>
    )
    }
    
    export default Login