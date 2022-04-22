import api from '../../../utils/api'

import {useState, useEffect} from 'react'

import formStyles from '../../form/Form.module.css'
import styles from './Profile.module.css'

import Input from '../../form/Input'
import useFlashMessage from '../../../hooks/useFlashMessage'



function Profile() {

    const [token] = useState(localStorage.getItem('token') || '')
    const [user,setUser] = useState({})
    const {setFlashMessage} = useFlashMessage()

    useEffect(()=>{
        api.get('/users/checkUser',{
            headers:{
                token: `${JSON.parse(token)}`
            }
        }).then((response)=>{
            setUser(response.data)
        })

    },[token])

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})

    }
    function onFileChange(e){
        setUser({...user, [e.target.name]: e.target.files[0]})

    }

   async function handleSubmit(e){
        e.preventDefault()
        //editar usuário
        let msgType = 'sucess'

        const formData = new FormData()

        await Object.keys(user).forEach((key) =>
        formData.append(key, user[key])  
        )

        const data = await api.patch(`/users/edit/${user._id}`, formData, {
            headers:{
                token: `${JSON.parse(token)}`
            }
        }).then((response) => {
            return response.data
        }).catch((err)=>{
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message,msgType)
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