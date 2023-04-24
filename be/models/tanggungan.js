const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Tanggungan = mongoose.model('Tanggungan', {
    nipen: {
        type: Schema.Types.ObjectId, ref: 'PesertaPensiun',
        required: true
    },
    nama_pensiun:{
        type: String,
        required:true
    },
    nik_tanggungan:{
        type: String,
        required:true
    },
    nama_tanggungan:{
        type: String,
        required:true
    },
    relasi:{
        type: String,
        required:true
    }
})

module.exports = { Tanggungan }