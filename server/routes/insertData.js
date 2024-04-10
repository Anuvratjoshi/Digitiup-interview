const express = require("express");
const TempModel = require("../schema/tempSchema");
const router = express.Router()

router.post("/insertDataInDb", async (req, res) => {
    const data = req.body
    try {
        const newData = new TempModel(data)
        await newData.save()
        return res.status(200).json({ success: true, message: "Data inserted successfully", newData: newData })
    } catch (error) {
        console.log("error", error.message)
        return res.status(500).json({ success: false, message: error })
    }
})


module.exports = router