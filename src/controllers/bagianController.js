const { sequelize, Bagian } = require('../models')

// Get All Bagians
exports.getAllBagians = async (req, res) => {
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await Bagian.findAll()
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

// Get a Single Bagian by id
exports.getBagian = async (req, res) => {
  const id = req.params.id;
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await Bagian.findByPk(id),
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

// Create Bagian
exports.createBagian = async (req, res) => {
  try {
    newBagian = await Bagian.create({ ...req.body })
    if (newBagian) {
      res.send({
        statusCode: 200,
        statusText: "success",
        statusMessage: `${req.body.NamaBagian} berhasil ditambahkan`,
        data: newBagian,
      });
    }
  } catch (error) {
    res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: `Gagal menambahkan bagian`,
    });
  }
}

// Update Bagian by id
exports.updateBagian = async (req, res) => {
  const id = req.params.id
  const dataBagian = await Bagian.findByPk(id)
  if (!dataBagian) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `Bagian dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      const updateBagian = await Bagian.update({...req.body}, { where: { id } })
      if (updateBagian) {
        res.send({
          statusCode: 200,
          statusText: "success",
          statusMessage: `Bagian dengan ID ${id} berhasil di update`,
          data: await Bagian.findByPk(id)
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

// Delete Bagian
exports.deleteBagian = async (req, res) => {
  const id = req.params.id
  dataBagian = await Bagian.findByPk(id)
  if (!dataBagian) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `Bagian dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      deleteBagian = await Bagian.destroy({ where: { id } })
      if (deleteBagian) {
        res.send({
            statusCode: 200,
            statusText: "success",
            statusMessage: `Bagian dengan ID ${id} berhasil di hapus`,
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
