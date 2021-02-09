var express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const mangaPark = require("./mangaPark");
const mangaParkObj = new mangaPark();

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  request(
    "https://www.gogoanime1.com/search/topSearch?q=" + req.query.q,
    (error, response, html) => {
      res.send(response.body);
    }
  );
});

router.get("/mangasearch", async function (req, res, next) {
  let manga = await mangaParkObj.search(10, req.query.q, []);
  console.log(manga);
  // request.post(
  //   {
  //     url: "https://mangakakalot.com/home_json_search",
  //     formData: { searchword: req.query.q },
  //   },
  //   function (err, httpResponse, body) {
  //     if (err) {
  //       return console.error("upload failed:", err);
  //     }
  //     // console.log(body);
  //     res.send(body);
  //   }
  // );
  res.send(manga);
  
});

module.exports = router;
