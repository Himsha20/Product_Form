

function validateform(){
    var name = document.contactForm.ProductName.value;
    var price =document.contactForm.ProductPrice.value;
    var dis = document.contactForm.Productdis.value;
  
    document.getElementById('Product_name').innerHTML = name;
    document.getElementById('Product_price').innerHTML = price;
    document.getElementById('Product_dis').innerHTML = dis;

    var vals = [];

    vals.push(name,price,dis,x);//Add the text 'item1' to vals
    
    localStorage.setItem('names', JSON.stringify(vals));

  

   
   

  var x= document.getElementById('output');

  imgData = getBase64Image(x);
localStorage.setItem("imgData", imgData);


function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    // canvas.width = img.width;
    // canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);


    var MAX_WIDTH = 400;
        var MAX_HEIGHT = 300;
        var width = img.width;
        var height = img.height;

        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

   if (x.style.visibility = "hidden") {
       x.style.visibility = "visible";
      } else {
        x.style.visibility = "visible";
      }
     

    return false;
}


var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
   
};


