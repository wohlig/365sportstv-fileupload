app.post("/api/upload/", (req, res) => {
  global.upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.status(500).json(err);
    } else if (err) {
      res.status(500).json(err);
    } else {
      if (!req.file) return res.status(400).send("No files were uploaded.");
      if (storageCloud === "AWS") {
        res.json({ file: AWSUrlPath + req.file.key });
      } else if (storageCloud === "GCP") {
        res.json({ file: gcUrlPath + req.file.filename });
      }
    }
  });
});

app.get("/", function (req, res) {
  res.send(storageCloud.toUpperCase() + " File Upload");
});
