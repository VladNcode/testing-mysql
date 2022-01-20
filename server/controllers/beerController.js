const db = require('../db/database');

exports.getAll = async (req, res, next) => {
  try {
    const results = await db.getAll();
    res.status(200).json({
      status: 'success',
      results: results.length,
      data: {
        beers: results,
      },
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const results = await db.getOne(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        beer: results,
      },
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

exports.create = async (req, res, next) => {
  try {
    await db.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        beer: req.body,
      },
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { name, tagline, description, image } = req.body;
    await db.update(req.params.id, name, tagline, description, image);
    res.status(200).json({
      status: 'success',
      data: {
        beer: req.body,
      },
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await db.delete(req.params.id);
    res.status(204).json({
      status: 'success',
      message: 'deleted',
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
