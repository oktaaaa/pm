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
    rt:{
        type: String,
        required:true
    },
    rw:{
        type: String,
        required:true
    },
    kecamatan:{
        type: String,
        required:true
    },
    kota:{
        type: String,
        required:true
    },
    kodepos:{
        type: String,
        required:true
    },
    provinsi:{
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
    npwp:{
        type: String,
        required:true
    },
    unit_pln:{
        type: String,
        required:true
    }
})

module.exports = { PesertaPensiun }