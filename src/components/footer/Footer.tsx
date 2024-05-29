import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer(){

    const { usuario } = useContext(AuthContext);

    let component: ReactNode

    if (usuario.token !== ""){
        component = (
            <section className="flex flex-col items-center bg-indigo-900 text-white py-3">
                <h2>Blog Pessoal Michel Cavalcante | Copyright &copy;</h2>
                <p>Acesse minhas redes sociais</p>
                <div className="flex flex-row gap-2">
                    <a href="https://www.linkedin.com/in/dev-cavalcante/" target="_blank"><LinkedinLogo size={48} weight='bold' /></a>
                    <a href="https://www.instagram.com/_michel.cavalcante/" target="_blank"><InstagramLogo size={48} weight='bold' /></a>
                    <a href="https://github.com/mcavalcantedesouza" target="_blank"><GithubLogo size={48} weight='bold' /></a>
                </div>
            </section>
        )
    }



    return (
        <>
           { component } 
        </>
    )
}

export default Footer;
