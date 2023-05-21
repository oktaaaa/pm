const { RegistrasiUlang } = require('../models/registrasiulang')

class RegistrasiUlangController{
    static async createRegistrasiUlang(req, res){
        const registrasiulang = new RegistrasiUlang({
            nipen: req.body.nipen,
            nama_peserta: req.body.nama_peserta,
            ktpWajah: req.body.ktpWajah,
            ktp: req.body.ktp
        })

        try{
            const registrasiData = await registrasiulang.save()
            res.status(200).json({message: 'Peserta Pensiun Created'})
        } catch(error){
            res.status(500).json(error)
        }
    }

    static async getRegistrasiUlang(req, res){
        try{
            const registrasi = await RegistrasiUlang.find()
            res.status(200).json(unit)
        }catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = RegistrasiUlangController