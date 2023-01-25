import { useEffect, useState } from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"

function ProjectForm({ handleSubmit, btnText, projectData }) {
    //criação dos hooks de state
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])


    //func para puxar os dados da DB
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])


    // variavel com func para enviar os dados para o hook que usa o metodo post
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }


    // handle das caixas de texto que vão capturar o que foi digitado nas caixas de txt
    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }


    //handle para as options das categorias
    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }


    // estrutura do form em si
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name}

            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento do projeto"
                handleOnChange={handleChange}
                value={project.budget}
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm

