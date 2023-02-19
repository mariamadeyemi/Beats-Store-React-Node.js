const express = require("express");
const app = express();
const fileUpload = require('express-fileUpload');
const Product = require("./models/Product");
const conn = require("./models/connection")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken");


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp' }))
app.use(cookieParser())

app.post("/upload", async(req, res)=>{
 try {
  let files = {}
  let image = req.files.image
  let audio = req.files.audio
  let imageName = req.files.image.name
  let audioName = req.files.audio.name

   if(audio.mimetype.startsWith("audio/")){
  let audioExt = `.${audioName.split(".").pop()}`
  let audioFileName = Number(new Date()).toString(36) + Math.floor((Math.random() + 1) * 10 * 6) + audioExt

  audioUploadPath = __dirname + '/../client/src/uploads/' + audioFileName

  audio.mv(audioUploadPath, (err)=>{
    if (!err)
     audio = audioFileName
     else
     audio = null
     console.log("File uploaded");

})

Object.assign(files, {audio: audioFileName})    
   }

   if(image.mimetype.startsWith("image/")){
let imageExt = `.${imageName.split(".").pop()}`
  let imageFileName = Number(new Date()).toString(36) + Math.floor((Math.random() + 1) * 10 * 6) + imageExt
 
  imageUploadPath = __dirname + '/../client/src/uploads/' + imageFileName

  image.mv(imageUploadPath, (err)=>{
    if (!err)
          image = imageFileName
          else
          image = null
         console.log("File uploaded");
  })

Object.assign(files, {image: imageFileName})    

   }
  
  
  res.status(200).json(files)
    
 } catch (error) {
  console.log(error.message)
  res.status(500).json(error.message)
 }
  
})

app.post("/addProduct", async(req, res)=>{

  try {
    let data = req.body
    console.log(data);
    let product = new Product(data)
    await product.save()

  } catch (error) {
    console.log(error.message) 
  }


})

app.get("/products", async(req, res)=>{
  try {
    let result;
    if(req.query.cat){
      result = await conn.execute(`SELECT * FROM products WHERE product_cat=?`, [req.query.cat]) 
    }else{
      result = await conn.execute(`SELECT * FROM products`)
    }
  //  let query = req.query.cat 
  //    ? `SELECT * FROM products WHERE product_cat=?` 
  //    : `SELECT * FROM products`
  //   let [rows] = await conn.execute(query, [req.query.cat])
    res.status(200).json(result[0])
  } catch (error) {
    res.status(500).json(error.message)
  }
    
})

app.get("/product/:id", async(req, res)=>{
  try {
  let id = req.params.id;
let product = await Product.findById(id);



  res.status(200).json(product)

  } catch (error) {
    console.log(error.message)
  }

})





const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
