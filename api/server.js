const express = require("express");
const app = express();
const fileUpload = require('express-fileUpload');
const bcrypt = require('bcrypt');
const Product = require("./models/Product");
const conn = require("./models/connection")
const jwt = require("jsonwebtoken");
const session = require("express-session");
const User = require("./models/User");
const ShoppingSession = require("./models/Shopping-Session");
const CartItems = require("./models/Cart-Item");

const sess = {
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp' }))
app.use(session(sess))




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



app.post("/register", async(req, res)=>{
  try {
    let body = req.body
  const saltRounds = 10
    let user = new User({...body, verify: "N",});
  bcrypt.hash(req.body.password, saltRounds, async(err, hash)=>{
    user.password = hash;
    await user.save()
  })

  res.status(200)
  } catch (error) {
    res.status(401).json(error.message)
  }
  
})

app.post("/login", async(req, res)=>{

  try {
  let { email, password } = req.body
  let user = await User.find([email, email])

  if(user && bcrypt.compare(password, user.password)){
    req.session.userId = user.id
    const {password, ...other} = user
    let authUser = new ShoppingSession({
      user_id: user.id,
      guest_user: "N",
      uuid: req.session.id
    })
    await authUser.save()
    res.status(200).json(other)

  }else{
    res.status(404).json("Wrong username or password")
  }   
  } catch (error) {
    res.status(503).json(error.message)
  }
})

app.post("/shopping-sess", async(req, res)=>{
  try {
   if(!req.session.userId){
    let user = new ShoppingSession({guest_user: "Y", uuid: req.session.id});
    await user.save()
    res.status(200).json(req.session.id)
  }
  
  } catch (error) {
    res.status(500).json(error.message);
  }
 
})

app.post("/addToCart", async(req, res)=>{
  let cart = new CartItems(req.body)
  await cart.save()
})

app.get("/getCartItems/:id", async(req, res)=>{
  try {
  let id = req.params.id
    let sql = `SELECT * FROM products JOIN cart_items on product_id = products.id WHERE session_id = ?`
    let result = await conn.execute(sql, [id])   
    res.status(200).json(result[0])
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message)
  }

})

app.post("/logout", (req, res)=>{
  delete req.session.userId;
  res.status(200).json("User has been logged out.")
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
