const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes.js');
const zookeperRoutes = require('../apiRoutes/zookeeperRoutes.js');

router.use(animalRoutes);
router.use(zookeperRoutes);

module.exports = router;