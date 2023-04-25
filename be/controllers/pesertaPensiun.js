const { PesertaPensiun } = require('../models/pesertaPensiun')

class PesertaPensiunController{
    //create/add peserta
    static async createPesertaPensiun(req, res){
        const pesertapensiun = new PesertaPensiun({
            nipen: req.body.nipen,
            nama_peserta: req.body.nama_peserta,
            tgl_lahir: req.body.tgl_lahir,
            alamat: req.body.alamat,
            rt: req.body.rt,
            rw: req.body.rw,
            kecamatan: req.body.kecamatan,
            kota: req.body.kota,
            kodepos: req.body.kodepos,
            provinsi: req.body.provinsi,
            nohp: req.body.nohp,
            email: req.body.email,
            npwp: req.body.npwp,
            unit_pln: req.body.unit_pln
        })

        try{
            const pesertasData = await pesertapensiun.save()
            res.status(200).json({message: 'Peserta Pensiun Created'})
        } catch(error){
            res.status(500).json(error)
        }
    }

    static async getPesertaPensiun(req, res){
        try{
            const peserta = await PesertaPensiun.find()
            res.status(200).json(peserta)
        }catch(error){
            res.status(500).json(error)
        }
    }

    static async getPesertaPensiunById(req, res){
        try{
            const peserta = await PesertaPensiun.findById(req.params.id)
            res.status(200).json(peserta)
        }catch{
            res.status(500).json(error)
        }
    }

    // update
    static async updatePesertaPensiun(req, res){
        try{
            const peserta = await PesertaPensiun.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json({
                message: "Peserta Updated",
                Data: peserta
            })
        }catch (error){
            res.status(500).json(error)
        }
    }

    // delete
    static async deletePesertaPensiun(req, res){
        try{
            const peserta = await PesertaPensiun.findByIdAndRemove(req.params.id)
            res.status(200).json({
                message: "Peserta Deleted"
            })
        }catch(error){
            res.status(500).json(error)
        }
    }
}
// export the module yeee
module.exports = PesertaPensiunController