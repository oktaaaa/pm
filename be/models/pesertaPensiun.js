const mongoose = require('mongoose')

const PesertaPensiun = mongoose.model('PesertaPensiun', {
    nipen:{
        type: String,
        required:true
    },
    nama_peserta:{
        type: String,
        required:true
    },
    tgl_lahir:{
        type: Date,
        required: true
    },
    alamat:{
        type: String,
        required:true
    },
    nohp:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    nama_bank:{
        type: String,
        required:true
    },
    no_rek:{
        type: String,
        required:true
    },
    besar_mp:{
        type: String,
        required:true
    },
    unit_pln:{
        type: String,
        required:true
    }
})

module.exports = { PesertaPensiun }