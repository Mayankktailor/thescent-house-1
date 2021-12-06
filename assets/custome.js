$(document).ready(function(){
console.log("Called!");
    
      $('.box-inner-div').slick({
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
      });
    
      $('.candles-cup-inner-div').slick({
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
      });
     
    
      $('.hand-wash-inner-div').slick({
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
      });

      $('.coll-sort-title').click(function(){
        $('.sort-type').toggle();
      });
    
      $('.product_media_image').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 2561,
            settings: 'unslick'
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
      });
    

      $('.prd-item-title').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.prd-i').toggleClass('prd-i-active');
        $(this).parent().find('.prd-item-content').toggle();
      });


      $('.related-product-inner-div').slick({
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2.3,
              slidesToScroll: 1
            }
          }
      ]
      });

    });
    
    
    