let myForm = document.querySelector("#myForm")

const nom = document.querySelector("#name")
const last_name = document.querySelector("#last_name")
const birth_date = document.querySelector("#birth_date")
const birth_place = document.querySelector("#birth_place")
const level = document.querySelector("#level")
const diplome_year = document.querySelector("#diplome_year")
const diplome = document.querySelector("#diplome")
const school = document.querySelector("#school")
const filiere = document.querySelector("#filiere")
const national = document.querySelector("#national")

const bgcol = document.querySelector(".bgcol")
const bod = document.querySelector(".bod")
const container = document.querySelector(".container")
const suivant = document.querySelector(".suivant")

bgcol.addEventListener('click',()=>{
    container.classList.toggle("bg-green")
    bod.classList.toggle("bg-yellow")
})

let req = new Array(nom,last_name,birth_date,birth_place,national,diplome_year,school)
let chp = new Array("Nom","Prenom","Date de naissance","Lieu de naissance","Nationalité","Année d'obtention du diplome","Etablissement d'origine")
let dis_alert = new Array("n_alert","l_alert","d_naiss_alerte","l_naiss_alert","nat_alert","ann_alert","sc_alert",)

const err = document.querySelector('.error')
const alert = document.querySelector('.alert')

function overed(variable){
    variable.classList.add("input-over")
}
function outing(variable){
    variable.classList.remove("input-over")
}

const flech = document.querySelector('.flech')

function after_active(){
    flech.classList.add("flech-active")
}

myForm.addEventListener('submit',(e)=>{
    let myRegex = /^[a-zA-Z-\s]+$/;
    for(let i in req){
        if(req[i].value.trim()==""){
            e.preventDefault()
            err.style.color = '#b43535'
            err.innerHTML = "Le champ \"" +chp[i]+ "\" est obligatoire"
            document.querySelector(`.${dis_alert[i]}`).classList.add("disp_alert")
            break
        }else if(myRegex.test(req[i].value)==false){
            e.preventDefault()
            err.style.color = '#b43535'
            err.innerHTML = "Les caractères autorisés pour le champ \""+chp[i]+"\" sont les lettres, les tirets et les espaces"
            document.querySelector(`.${dis_alert[i]}`).classList.add("disp_alert")
            break
        }else{
            document.querySelector(`.${dis_alert[i]}`).classList.remove("disp_alert")
            suivant.classList.add('follow')
            container.classList.add('masquer')
        }
    }
 })

 function retourner(){
    container.classList.remove('masquer')
    suivant.classList.remove('follow')
 }