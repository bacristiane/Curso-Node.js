import api from '../../utils/api'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Home.module.css'

function Home() {

    const [pets, setPets] = useState([])

    useEffect(() => {
        api.get('/pets').then((response) => {
            setPets(response.data.pets)
        })
    }, [])


    return (
        <section>
            <div>
                <h1>Adote um pet</h1>
                <p>Veja os detalhes de cada um e conheça o tutor dele.</p>
            </div>
            <div>
                {pets.length > 0 && 
                    pets.map((pet) => (
                        <div>
                            <p> Imagem do PET</p>
                            <h3>{pet.name}</h3>
                            <p><span className='bold'>Peso:</span>{pet.weight}kg</p>
                           {pet.available ? (
                               <Link to={`pet/${pet._id}`}>Mais detalhes</Link>
                           ) : (
                               <p>Adotado</p>
                           ) }
                        </div>

                ))}
                {pets.length === 0 && (
                    <p> Não há pets cadastrados ou disponíveis para adoção</p>
                )}
            </div>
        </section>
    )
}

export default Home