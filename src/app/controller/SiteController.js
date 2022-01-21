class SiteController {

    //[GET] 
    index(req, res) {
        res.send("true");
    }
}

module.exports = new SiteController;