module.exports.middleware = (req, res, next) => {
    let { path } = req.params
    path !== "student" ? res.redirect("/") : res.redirect("/student")
}