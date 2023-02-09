const express = require("express");
const app = express();
const fileUpload = require('express-fileUpload');
const Product = require("./models/Product");



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp' }))
app.use(express.static('uploads'))




app.post("/addProduct", async(req, res)=>{

  try {
    let data = req.body
    console.log(data);
    let product = new Product(data)


    if(req.files){
      let image = req.files.image
      let audio = req.files.audio
      if(audio.mimetype.startsWith("audio/")){
        let audioExt = `.${audio.name.split(".").pop()}`
        let audioFileName = Number(new Date()).toString(36) + Math.floor((Math.random() + 1) * 10 * 6) + audioExt

        let imageExt = `.${audio.name.split(".").pop()}`
        let imageFileName = Number(new Date()).toString(36) + Math.floor((Math.random() + 1) * 10 * 6) + audioExt


        audio.mv('uploads/' + audioFileName, async ()=>{
          if (!err)
            product.audio = audioFileName
            else
            product.audio = null
        })

        image.mv('uploads/' + imageFileName, async ()=>{
          if (!err)
            product.image = imageFileName
            else
            product.image = null
        })

        await product.save();

      }

    } else{
      await product.save()
    }

  } catch (error) {
    console.log(error.message) 
  }


})


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
