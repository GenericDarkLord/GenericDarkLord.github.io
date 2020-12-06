let photosData = [{
    photo: 'img/IMG_7800.JPG', 
    title: '01', 
    description: '---'
}, 
{
    photo: 'img/IMG_7801.JPG', 
    title: '02', 
    description: '---'
}, 
{
    photo: 'img/IMG_7802.JPG', 
    title: '03', 
    description: '---'
}, 
{
    photo: 'img/IMG_7803.JPG', 
    title: '04', 
    description: '---'
}, 
{
    photo: 'img/IMG_7804.JPG', 
    title: '05', 
    description: '---'
}, 
{
    photo: 'img/IMG_7805.JPG', 
    title: '06', 
    description: '---'
}, 
{
    photo: './img/IMG_7806.JPG', 
    title: '07', 
    description: '---'
}, 
{
    photo: 'img/IMG_7807.JPG', 
    title: '08', 
    description: '---'
}, 
{
    photo: 'img/IMG_7808.JPG', 
    title: '09', 
    description: '---'
}, 
{
    photo: 'img/IMG_7809.JPG', 
    title: '10', 
    description: '---'
}];
let currentPhoto = 0;

/*$('#photo').attr('src', photosData[currentPhoto].photo);
$('#photo-title').text(photosData[currentPhoto].title);
$('#photo-description').text(photosData[currentPhoto].description);*/

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', photosData[photoNumber].photo);
    $('[class="thumbnail box-' + photoNumber + '"]').css('border-color', '#bbb');
    $('[class!="thumbnail box-' + photoNumber + '"]').css('border-color', '#444');
    $('#photo-title').text(photosData[photoNumber].title);
    $('#photo-description').text(photosData[photoNumber].description);
}


photosData.forEach((element, index) => {

    $('#thumbnails').append('<div class="thumbnail box-' + index + '"><img src="' + element.photo + '" class="thumb" data-number="' + index + '"></div>');
    console.log(element);
    $('#titles').append('<div clas="titlebox"><p class="title number-' + index + '">' + element.title + '</p></div>');
    console.log(element);
    
    //photosData[element].photo
    
});
  



loadPhoto(currentPhoto);

$('.title').hide();




  
$('#left').click(() =>{
    currentPhoto--;
    if (currentPhoto < 0){
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
    /*$('#photo').attr('src', photosData[currentPhoto].photo);
    $('#photo-title').text(photosData[currentPhoto].title);
    $('#photo-description').text(photosData[currentPhoto].description);*/
});
$('#right').click(() =>{
    currentPhoto++;
    if (currentPhoto > 9){
        currentPhoto = 9;
    }
    loadPhoto(currentPhoto);

    /*$('#photo').attr('src', photosData[currentPhoto].photo);
    $('#photo-title').text(photosData[currentPhoto].title);
    $('#photo-description').text(photosData[currentPhoto].description);*/
});

/*$('#photo').attr('src', photosData[currentPhoto].photo);
$('#photo-title').text(photosData[currentPhoto].title);
$('#photo-description').text(photosData[currentPhoto].description);*/



/*for (i=0; i<=photosData.length;  i++){
    $('#thumbnails').append('<div class="thumbnail"><img src="' + photosData[i].photo + '" class="thumb" data-number="' + i + '" ></div>');
    console.log(photosData[i].photo);
}*/

$('.thumbnail').click((event) => {
    let clickedPhoto = $(event.target).attr('data-number');
    //let numberIndex = parseInt(clickedPhoto);
    currentPhoto = Number(clickedPhoto);
    loadPhoto(currentPhoto);
    console.log(clickedPhoto)
})
//$(selector).hover(inFunction,outFunction)

$('.thumb').hover( function()
    {
       let slectedImg = $(this).attr('data-number');
       console.log (slectedImg);
       $('[class="title number-' + slectedImg + '"]').show();
    }, function() {
        let slectedImg = $(this).attr('data-number');
        $('[class="title number-' + slectedImg + '"]').hide();
     }

);