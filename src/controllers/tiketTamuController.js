const { TiketTamu, TiketAntrean, Bagian, SubBag } = require('../models')

// Get All TiketTamus
exports.getAllTiketTamus = async (req, res) => {
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await TiketTamu.findAll(
        {include: [TiketAntrean, Bagian, SubBag]}
      )
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

// Get a Single TiketTamu by id
exports.getTiketTamu = async (req, res) => {
  const id = req.params.id;
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await TiketTamu.findByPk(id),
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

// Create TiketTamu
exports.createTiketTamu = async (req, res) => {
  try {
    newTiketTamu = await TiketTamu.create({ ...req.body })
    if (newTiketTamu) {
      res.send({
        statusCode: 200,
        statusText: "success",
        statusMessage: `${req.body.NoTiket} berhasil ditambahkan`,
        data: newTiketTamu,
      });
    }
  } catch (error) {
    res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: `Gagal menambahkan TiketTamu`,
    });
  }
}

// Update TiketTamu by id
exports.updateTiketTamu = async (req, res) => {
  const id = req.params.id
  const dataTiketTamu = await TiketTamu.findByPk(id)
  if (!dataTiketTamu) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `TiketTamu dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      const updateTiketTamu = await TiketTamu.update({...req.body}, { where: { id } })
      if (updateTiketTamu) {
        res.send({
          statusCode: 200,
          statusText: "success",
          statusMessage: `TiketTamu dengan ID ${id} berhasil di update`,
          data: await TiketTamu.findByPk(id)
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

// Delete TiketTamu
exports.deleteTiketTamu = async (req, res) => {
  const id = req.params.id
  dataTiketTamu = await TiketTamu.findByPk(id)
  if (!dataTiketTamu) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `TiketTamu dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      deleteTiketTamu = await TiketTamu.destroy({ where: { id } })
      if (deleteTiketTamu) {
        res.send({
            statusCode: 200,
            statusText: "success",
            statusMessage: `TiketTamu dengan ID ${id} berhasil di hapus`,
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
