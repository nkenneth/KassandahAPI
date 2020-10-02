

const documentFilter = function(req, file, cb) {
  // Accept images, pdf and word documents only
  if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|pdf|PDF|doc|DOC|docx|DOCX)$/)) {
    return cb(null, true);
  } 
  req.fileValidationError = 'Only images, pdf and word documents are allowed!';
  cb(null, false);
};



module.exports.documentFilter = documentFilter;