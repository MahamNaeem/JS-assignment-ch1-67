var modalId = $('#image-gallery');

$(document)
    .ready(function () {

      loadGallery(true, 'a.thumbnail');

      function loadGallery(setIDs, setClickAttr) {
        let current_image,
            selector,
            counter = 0;


        function updateGallery(selector) {
          let $sel = selector;
          current_image = $sel.data('image-id');
          $('#image-gallery-title')
              .text($sel.data('title'));
          $('#image-gallery-image')
              .attr('src', $sel.data('image'));
          disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true) {
          $('[data-image-id]')
              .each(function () {
                counter++;
                $(this)
                    .attr('data-image-id', counter);
              });
        }
        $(setClickAttr)
            .on('click', function () {
              updateGallery($(this));
            });
      }
    });









var showImages ='';
var images = [
  { id: '1' ,name: 'weather', image: 'img/14.png' },
  { id: '2' ,name: 'mountain', image: 'img/13.jpg' },
  { id: '3', name: 'mountain', image: 'img/1.jpg' },
  { id: '4', name: 'mountain', image: 'img/4.png' },
  { id: '5', name: 'mountain', image: 'img/3.jpg' },
  { id: '6',  name: 'mountain', image: 'img/5.jpg' },
  { id: '7', name: 'mountain', image: 'img/6.jpg' },
  { id: '8', name: 'mountain', image: 'img/9.jpg' },
  { id: '9', name: 'mountain', image: 'img/10.jpg' },
  { id: '10', name: 'mountain', image: 'img/11.jpg' },
];

//   $('#showImages').html('');

$.each(images, function (arrayId, element) {
  console.log(element.image)

   showImages+=`<div class="row">
		<div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 thumb">
           
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""
                   data-image=${element.image}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src=${element.image}
                         alt="Another alt text">
                </a>
      

      </div>
  </div>`
  
  
});

document.getElementById("showImages").innerHTML =showImages;