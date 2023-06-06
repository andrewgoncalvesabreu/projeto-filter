const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML" , "CSS" , "JavaScript" , "PHP" , "React" , "Node.JS" , "Python"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id" , "c"+indice)
    novoElemento.setAttribute("class" , "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class" , "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type" , "radio")
    rb.setAttribute("name" , "rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    return novoElemento
}
cursos.map((el , chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSelecionado = ()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click" , (evt)=>{
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert('Curso selecionado: '+cursoSelecionado)
    } else {
        alert('Por favor, selecione um curso.')
    }
    
    
})

btnRemoverCurso.addEventListener("click" , (evt)=>{
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    } catch(ex) {
        alert('Por favor, selecione um curso.')
    }
    
})

btnAntes.addEventListener("click" , (evt)=>{
    const rs = radioSelecionado()
    try {
        if (nomeCurso.value != ""){
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        } else {
            alert('Por favor, digite um curso.')
        }
    } catch(ex) {
        alert('Por favor, selecione um curso.')
    }
})

btnDepois.addEventListener("click" , (evt)=>{
    const rs = radioSelecionado()
    try {
        if (nomeCurso.value != ""){
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        } else {
            alert('Por favor, digite um curso.')
        }
    } catch(ex) {
        alert('Por favor, selecione um curso.')
    }
})