import api from '../../../utils/api'

import styles from './AddPet.module.css'

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

//component
import PetForm from '../../form/PetForm'

//hooks
import useFlashMessage from '../../../hooks/useFlashMessage'

function EditPet() {
    return(
        <section>
            <div className={styles.addpet_header}>
                <h1>Editando o Pet: 'pet.nam'</h1>
                <p>Depois da edição os dados serão atualizados no sistema</p>
            </div>
        </section>
    )
    }
    
    export default EditPet