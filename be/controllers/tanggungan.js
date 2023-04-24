const {Tanggungan} = require('../models/tanggungan')
const PesertaPensiunController = require('../controllers/pesertaPensiun')
const { PesertaPensiun } = require('../models/pesertaPensiun')
class TanggunganController{
    //create tanggungan
    static async createTanggungan (req, res){
        // const tanggungan = new Tanggungan({
        //     nipen: req.body.nipen,
        //     nama_pensiun: req.body.nama_pensiun,
        //     nik_tanggungan: req.body.nik_tanggungan,
        //     nama_tanggungan: req.body.nama_tanggungan,
        //     relasi: req.body.relasi
        // })
        // let nipen = tanggungan.nipen
        // let nama_pensiun = tanggungan.nama_pensiun
        // if(nipen){
        //     nama_pensiun = PesertaPensiunController.nama_peserta
        // }

        // try{
        //     const tanggunganData = await tanggungan.save()
        //     res.status(200).json({message: 'Data Tanggunga Created'})
        // } catch(error){
        //     res.status(500).json(error)
        // }

        const { nipen,
            nama_pensiun} = req.body

        const nipenExists = await PesertaPensiun.findOne().populate('nama_peserta')

        const id = await PesertaPensiun.find({nipen}).populate('_id')
        const tanggunganData = new Tanggungan({
            nipen: id,
            nama_pensiun: nipenExists,
            nik_tanggungan: req.body.nik_tanggungan,
            nama_tanggungan: req.body.nama_tanggungan
        })
        console.log(id);
        console.log(tanggunganData);
        const saveTanggungan = await tanggunganData.save()

        if(saveTanggungan){
            res.status(200)
        } else{
            res.status(500)
        }
    }
}

module.exports = TanggunganController