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

const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id" , "c"+indice)
    novoElemento.setAttribute("class" , "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click" , (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}
cursos.map((el , chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener("click" , (evt)=>{
    try {
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    } catch (ex) {
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener("click" , (evt)=>{
    const cs = cursoSelecionado()
    if (cs != undefined) {
        cs.remove()
    } else {
        alert("Selecione um curso")
    }
    
})

btnAntes.addEventListener("click" , (evt)=>{
    try {
        if (nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        } else {
            alert('Por favor, digite um curso.')
        }
    } catch(ex) {
        alert('Por favor, selecione um curso.')
    }
})

btnDepois.addEventListener("click" , (evt)=>{
    try {
        if (nomeCurso.value != ""){
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        } else {
            alert('Por favor, digite um curso.')
        }
    } catch(ex) {
        alert('Por favor, selecione um curso.')
    }
})