// @description: Get all Bootcamps
// @route: GET /api/v1/bootcamps
// @access: Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, data: { msg: "Get all bootcamps" } });
};

// @description: Get a single Bootcamp with a specified ID
// @route: GET /api/v1/bootcamps/:id
// @access: Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: { msg: `Get the bootcamp with ID ${req.params.id}` },
  });
};

// @description: Create a new Bootcamp
// @route: POST /api/v1/bootcamps
// @access: Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: { msg: `Create a new Bootcamp` },
  });
};

// @description: Update a bootcamp with a specific ID
// @route: PUT /api/v1/bootcamps/:id
// @access: Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: { msg: `Update the bootcamp with ID ${req.params.id}` },
  });
};

// @description: Delete a bootcamp with a specific ID
// @route: DELETE /api/v1/bootcamps/:id
// @access: Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: { msg: `Delete the bootcamp with ID ${req.params.id}` },
  });
};
 