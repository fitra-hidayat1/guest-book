const { sequelize, IdentitasTamu } = require('../models')

// Get All IdentitasTamus
exports.getAllIdentitasTamus = async (req, res) => {
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await IdentitasTamu.findAll()
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

// Get a Single IdentitasTamu by id
exports.getIdentitasTamu = async (req, res) => {
  const id = req.params.id;
  try {
    res.send({
      statusCode: 200,
      statusText: 'success',
      data: await IdentitasTamu.findByPk(id),
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

// Create IdentitasTamu
exports.createIdentitasTamu = async (req, res) => {
  try {
    newIdentitasTamu = await IdentitasTamu.create({ ...req.body })
    if (newIdentitasTamu) {
      res.send({
        statusCode: 200,
        statusText: "success",
        statusMessage: `${req.body.NamaIdentitasTamu} berhasil ditambahkan`,
        data: newIdentitasTamu,
      });
    }
  } catch (error) {
    res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: `Gagal menambahkan IdentitasTamu`,
    });
  }
}

// Update IdentitasTamu by id
exports.updateIdentitasTamu = async (req, res) => {
  const id = req.params.id
  const dataIdentitasTamu = await IdentitasTamu.findByPk(id)
  if (!dataIdentitasTamu) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `IdentitasTamu dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      const updateIdentitasTamu = await IdentitasTamu.update({...req.body}, { where: { id } })
      if (updateIdentitasTamu) {
        res.send({
          statusCode: 200,
          statusText: "success",
          statusMessage: `IdentitasTamu dengan ID ${id} berhasil di update`,
          data: await IdentitasTamu.findByPk(id)
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

// Delete IdentitasTamu
exports.deleteIdentitasTamu = async (req, res) => {
  const id = req.params.id
  dataIdentitasTamu = await IdentitasTamu.findByPk(id)
  if (!dataIdentitasTamu) {
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: `IdentitasTamu dengan ID ${id} tidak ditemukan`,
    });
  } else {
    try {
      deleteIdentitasTamu = await IdentitasTamu.destroy({ where: { id } })
      if (deleteIdentitasTamu) {
        res.send({
            statusCode: 200,
            statusText: "success",
            statusMessage: `IdentitasTamu dengan ID ${id} berhasil di hapus`,
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
