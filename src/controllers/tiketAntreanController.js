const { sequelize, TiketAntrean } = require('../models')

// Get All TiketAntreans
exports.getAllTiketAntreans = async (req, res) => {
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await TiketAntrean.findAll()
    })
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: error.message,
    })
  }
}

// Get a Single TiketAntrean by id
exports.getTiketAntrean = async (req, res) => {
  const id = req.params.id;
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await TiketAntrean.findByPk(id),
    })
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: error.message,
    })
  }
};

// Create TiketAntrean
exports.createTiketAntrean = async (req, res) => {
  try {
    newTiketAntrean = await TiketAntrean.create({ ...req.body })
    if (newTiketAntrean) {
      res.send({
        statusCode: 200,
        statusText: "success",
        statusMessage: `${req.body.NoTiket} berhasil ditambahkan`,
        data: newTiketAntrean,
      });
    }
  } catch (error) {
    res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: `Gagal menambahkan TiketAntrean`,
    });
  }
}

// Update TiketAntrean by id
exports.updateTiketAntrean = async (req, res) => {
  const id = req.params.id
  const dataTiketAntrean = await TiketAntrean.findByPk(id)
  if (!dataTiketAntrean) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `TiketAntrean dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      const updateTiketAntrean = await TiketAntrean.update({...req.body}, { where: { id } })
      if (updateTiketAntrean) {
        res.send({
          statusCode: 200,
          statusText: "success",
          statusMessage: `TiketAntrean dengan ID ${id} berhasil di update`,
          data: await TiketAntrean.findByPk(id)
        });
      }
    } catch (error) {
      res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: error,
      });
    }
  }
}

// Delete TiketAntrean
exports.deleteTiketAntrean = async (req, res) => {
  const id = req.params.id
  dataTiketAntrean = await TiketAntrean.findByPk(id)
  if (!dataTiketAntrean) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `TiketAntrean dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      deleteTiketAntrean = await TiketAntrean.destroy({ where: { id } })
      if (deleteTiketAntrean) {
        res.send({
            statusCode: 200,
            statusText: "success",
            statusMessage: `TiketAntrean dengan ID ${id} berhasil di hapus`,
        });
      }
    } catch (error) {
      res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: error,
      });
    }
  }
}
