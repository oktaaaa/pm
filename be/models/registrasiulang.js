const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RegistrasiUlang = mongoose.model('RegistrasiUlang', {
    nipen:{
        type: Schema.Types.ObjectId, ref: 'PesertaPensiun',
        required:true
    },
    nama_peserta:{
        type: String,
        required:true
    },
    ktpWajah:{
        data: Buffer,
        contentType: String
    },
    ktp:{
        data: Buffer,
        contentType: String
    }
})

module.exports = { RegistrasiUlang }