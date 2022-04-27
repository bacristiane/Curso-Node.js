import api from '../../../utils/api'

import styles from './AddPet.module.css'

import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

//component
import PetForm from '../../form/PetForm'

//hooks
import useFlashMessage from '../../../hooks/useFlashMessage'

function EditPet() {

    const [pet, setPet] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')
    const {id} = useParams()
    const {setFlashMessage} = useFlashMessage()
    const navigate = useNavigate()

    useEffect(() => {
        api.get(`/pets/${id}`, {
            headers:{
                token: `${JSON.parse(token)}`,
            }
        
    }).then((response) => {
        setPet(response.data.pet)
    })
    },[token,id])

    async function updatePet (pet) {

        let msgType = 'success'

        const formData = new FormData()

        await Object.keys(pet).forEach((key) => {
            if(key === 'images'){

            for (let i=0; i < pet[key].length; i++){
                formData.append('images', pet[key][i])
            }
            }else{
                formData.append(key, pet[key])
            }
        })

        const data = await api.patch(`pets/${pet._id}`, formData, {
            headers:{
                token: `${JSON.parse(token)}`,
                'Content-Type':'multipart/form-data',
            }  
        }).then((response) => {
            return response.data
        })
        .catch((err) => {
            msgType='error'
            return err.response.data
        },[token])

        setFlashMessage(data.message,msgType)

        if(msgType !== 'error'){
            navigate('/pet/mypets')
        }

   }

    return(
        <section>
            <div className={styles.addpet_header}>
                <h1>Editando o Pet: {pet.name}</h1>
                <p>Depois da edição os dados serão atualizados no sistema</p>
            </div>
            {pet.name && (
                <PetForm handleSubmit={updatePet} btnText="Atualizar" petData={pet}/>

            )}
        </section>
    )
    }
    
    export default EditPet