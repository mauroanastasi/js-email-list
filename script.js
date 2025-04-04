// recupero elementi
const extractEmail = document.getElementById(`extractEmail`)
const btn = document.querySelector(`.btn`)

// faccio chiamata http per creare randomicamente una email

axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
    console.log(resp.data.response)
})

// creo funziona che genererà 10 volte la chiamata(quindi 10 email)

const generaEmail = () => {
    // tolgo ogni volta le email precedenti
    extractEmail.innerHTML = '';
    // ciclo api 10 volte
    for(let i=0; i<10; i++){
        let email
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
            email =resp.data.response 
            // visualizzo in html le email generate
            extractEmail.innerHTML += `<li>${email}</li>`;
        })
    }
}
generaEmail()
console.log(generaEmail)


// pulsante
btn.addEventListener(`click`,generaEmail);

