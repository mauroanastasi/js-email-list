// faccio chiamata http per creare randomicamente una email

axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
    console.log(resp.data.response)
})

// creo funziona che genererà 10 volte la chiamata(quindi 10 email)

const generaEmail = () => {
    for(let i=0; i<10; i++){
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
            console.log(resp.data.response)
        })
    }
}
generaEmail()
console.log(generaEmail)