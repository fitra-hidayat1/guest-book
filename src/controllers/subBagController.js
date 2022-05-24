const { SubBag, Bagian } = require('../models')

// Get All SubBagians
exports.getAllSubBagians = async (req, res) => {
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await SubBag.findAll(
        {include: [Bagian]}
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

// Get a Single Bagian by id
exports.getSubBagian = async (req, res) => {
  const id = req.params.id;
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await SubBag.findByPk(id),
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
exports.createSubBagian = async (req, res) => {
  try {
    newSubBagian = await SubBag.create({ ...req.body })
    if (newSubBagian) {
      res.send({
        statusCode: 200,
        statusText: "success",
        statusMessage: `${req.body.Jabatan} berhasil ditambahkan`,
        data: newSubBagian,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: `Gagal menambahkan bagian`,
    });
  }
}

// Update Bagian by id
exports.updateSubBagian = async (req, res) => {
  const id = req.params.id
  const dataSubBagian = await SubBag.findByPk(id)
  if (!dataSubBagian) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `Bagian dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      const updateSubBagian = await SubBag.update({...req.body}, { where: { id } })
      if (updateSubBagian) {
        res.send({
          statusCode: 200,
          statusText: "success",
          statusMessage: `Bagian dengan ID ${id} berhasil di update`,
          data: await SubBag.findByPk(id)
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
exports.deleteSubBagian = async (req, res) => {
  const id = req.params.id
  dataSubBagian = await SubBag.findByPk(id)
  if (!dataSubBagian) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `Sub Bagian dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      deleteSubBagian = await SubBag.destroy({ where: { id } })
      if (deleteSubBagian) {
        res.send({
            statusCode: 200,
            statusText: "success",
            statusMessage: `Sub Bagian dengan ID ${id} berhasil di hapus`,
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
