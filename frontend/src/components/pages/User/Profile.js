import {useState, useEffect} from 'react'

import formStyles from '../../form/Form.module.css'
import styles from './Profile.module.css'

import Input from '../../form/Input'



function Profile() {

    const [user,setUser] = useState({})

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})

    }
    function onFileChange(e){
        setUser({...user, [e.target.name]: e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault()
        //enviar usuário para o banco
        register(user)
    }

    return(
        <section>
            <div className={styles.profile_header}>
            <h1>Profile</h1>
            <h1>Preview Imagem</h1>
            </div>
            
            <form className={formStyles.form_container} onSubmit={handleSubmit}>
            <Input 
                text="Imagem"
                type="file"
                name="image"
                handleOnChange={onFileChange}
                />
                <Input
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                handleOnChange={handleChange}
                value={user.name || ''}
                />
                <Input 
                text="Email"
                type="email"
                name="email"
                placeholder="Digite o seu email"
                handleOnChange={handleChange}
                value={user.email || ''}
                />
                <Input 
                text="Telefone"
                type="text"
                name="phone"
                placeholder="Digite o seu telefone"
                handleOnChange={handleChange}
                value={user.phone || ''}
                />
                
                <Input 
                text="Senha"
                type="password"
                name="password"
                placeholder="Digite o sua senha"
                handleOnChange={handleChange}
                

                />
                <Input 
                text="Confirmação de Senha"
                type="password"
                name="confirmpassword"
                placeholder="Confirme a sua senha"
                handleOnChange={handleChange}
                />
                <input
                type="submit"
                value="Editar"
                />
            </form>
        </section>
    )
    }
    
    export default Profile