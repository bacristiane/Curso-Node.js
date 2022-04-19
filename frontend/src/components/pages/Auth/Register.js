import Input from '../../form/Input'

function Register() {

    function handleChange(e){

    }
    return(
        <section>
            <h1>Registrar</h1>
            <form>
                <Input 
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                handleOnChange={handleChange}
                />
                <Input 
                text="Telefone"
                type="text"
                name="phone"
                placeholder="Digite o seu telefone"
                handleOnChange={handleChange}
                />
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
                <Input 
                text="Confirmação de Senha"
                type="confirmpassword"
                name="confirmpassword"
                placeholder="Confirme a sua senha"
                handleOnChange={handleChange}
                />
                <Input 
                type="submit"
                value="Cadastrar"
                />
            </form>
        </section>
    )
    }
    
    export default Register