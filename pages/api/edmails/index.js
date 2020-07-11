const fs = require('fs');
const path = require('path');

export default async (req, res) => {
  res.status(200).json(posts);
};
