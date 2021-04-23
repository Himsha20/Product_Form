var dataImage = localStorage.getItem('imgData');
bannerImg = document.getElementById('tableBanner');
bannerImg.src = "data:image/png;base64," + dataImage;


document.getElementById('Name').innerHTML = JSON.parse(localStorage.getItem('names'));
document.getElementById('Price').innerHTML = JSON.parse(localStorage.getItem('prices'));
document.getElementById('Dis').innerHTML = JSON.parse(localStorage.getItem('dis'));