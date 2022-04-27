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

    useEffect(() => {
        api.get(`/pets/${id}`, {
            headers:{
                token: `${JSON.parse(token)}`,
            }
        
    }).then((response) => {
        setPet(response.data.pet)
    })
    },[token,id])

    async function updatePet (pet) {}

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