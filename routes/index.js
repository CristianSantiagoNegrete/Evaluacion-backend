var express = require('express');
var router = express.Router();
const cloudinary = require('cloudinary').v2;

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dcftrqwqt', 
        api_key: '945565938629946', 
        api_secret: '<fd7aVs0pf4tQ0lgHkpKtExkAW_0>' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('admin/login') 
});



module.exports = router;
