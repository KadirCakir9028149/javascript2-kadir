const container = document.getElementById('container')


const rekening = {
    eigenaar: "Jayden de Vries",
    saldo: 20,
    rekeningnummer: "NL10RABO123123123",
    geblokkeerd: false,
    pincode: "9090",
    dagLimiet: 800,
    transacties: [],
    toonSaldo(){
        return this.saldo
    },

    changeSaldo(amount){
    this.saldo += amount

    this.transacties.push(amount)
    return `Het bedrag ${amount} is goegevoegt aan je rekening `
    }
}
console.log(rekening.transacties)
console.log(rekening.changeSaldo(900))


console.log(rekening.toonSaldo())

container.innerHTML = `
<h2>${rekening.eigenaar}<h2>

`
