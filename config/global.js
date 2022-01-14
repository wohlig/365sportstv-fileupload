global.env = process.env;
global.express = require("express");
global.app = express();
global._ = require("lodash");
global.cors = require("cors");

global.uuidv4 = require("uuid/v4");
global.bodyParser = require("body-parser");
global.multer = require("multer");
global.multerS3 = require("multer-s3");
global.multerGoogleStorage = require("multer-google-storage");

// Based on these storage will be decided
// aws or gc or azure
// Default is aws
global.storageCloud = process.env["STORAGE_CLOUD"];
global.StorageTypes = ["AWS", "GCP", "AZURE"];

// AWS Variables
global.AWS = require("aws-sdk");
global.AWSKey = env["AWS_ACCESS_KEY_ID"];
global.AWSSecret = env["AWS_SECRET_ACCESS_KEY"];
global.AWSRegion = env["AWS_REGION"];
global.AWSBucket = env["AWS_BUCKET"];
global.AWSUrlPath =
  "https://s3." + global.AWSRegion + ".amazonaws.com/" + global.AWSBucket + "/";
global.s3 = new AWS.S3({
  accessKeyId: global.AWSKey,
  secretAccessKey: global.AWSSecret,
  region: global.AWSRegion,
});

// GOOGLE CLOUD Variables
global.gcKey = "./storage.json";
global.gcBucket = "<Bucket Name>";
global.gcProjectId = "<Project Id>";
global.gcUrlPath = "https://storage.googleapis.com/" + global.gcBucket + "/";

// default options
var corsOptions = {
  origin: true,
  credentials: true,
};

global.upload = {};

if (storageCloud === "AWS") {
  global.upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: AWSBucket,
      acl: "public-read",
      key: function (req, file, cb) {
        if (!file) cb("No files were uploaded.");
        let fileInfo = file;
        var originalFilename = fileInfo.originalname;
        var extension = _.last(_.split(originalFilename, "."));
        const fileName = uuidv4() + "." + extension;
        cb(null, fileName);
      },
    }),
  }).single("file");
} else if (storageCloud === "GCP") {
  global.upload = multer({
    storage: multerGoogleStorage.storageEngine({
      keyFilename: gcKey,
      projectId: gcProjectId,
      bucket: gcBucket,
    }),
  }).single("file");
} else {
  //Azure coming soon
}

app.use(bodyParser.json({ limit: 50 * 1024 * 1024 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
