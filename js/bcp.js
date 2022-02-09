$(document).ready(function() {

  var sync1 = $("#sync1");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveRefreshRate: 200,
  });

  new WOW().init();

  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();
});
$('#operacion_bcp').click(function(){
  Swal.fire({
    title: '<strong>Puedes realizar:</strong>',
    width: '45em',
    confirmButtonColor: '#f57d31',
    cancelButtonColor: '#E3E4E5',
    confirmButtonText: 'Listo!',
    html:
      '<section style="padding-top: 0!important;padding-bottom: 0 !important;">\n' +
      '      <div class="timeline">\n' +
      '        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">\n' +
      '          <div class="timeline__event__icon ">\n' +
      '            💵\n' +
      '          </div>\n' +
      '          <div class="timeline__event__date">\n' +
      '            &nbsp;&nbsp;💵&nbsp;&nbsp;\n' +
      '          </div>\n' +
      '          <div class="timeline__event__content ">\n' +
      '            <div class="timeline__event__title">\n' +
      '              En cuenta de ahorro\n' +
      '            </div>\n' +
      '            <div class="timeline__event__description">\n' +
      '              <p><ul><li>Depósitos</li><li>Retiros</li></ul></p>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">\n' +
      '          <div class="timeline__event__icon">\n' +
      '            💡\n' +
      '\n' +
      '          </div>\n' +
      '          <div class="timeline__event__date">\n' +
      '            &nbsp;&nbsp;💡&nbsp;&nbsp;\n' +
      '          </div>\n' +
      '          <div class="timeline__event__content">\n' +
      '            <div class="timeline__event__title">\n' +
      '              Pago de Servicios\n' +
      '            </div>\n' +
      '            <div class="timeline__event__description">\n' +
      '              <p><ul><li>Servicios Básicos</li><li>Empresas de Belleza</li><li>Telefonía, celular, Tv Cable, Internet</li><li>Otras empresas</li></ul></p>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">\n' +
      '          <div class="timeline__event__icon">\n' +
      '            🔄\n' +
      '          </div>\n' +
      '          <div class="timeline__event__date">\n' +
      '            &nbsp;&nbsp;🔄&nbsp;&nbsp;\n' +
      '          </div>\n' +
      '          <div class="timeline__event__content">\n' +
      '            <div class="timeline__event__title">\n' +
      '              Transferencias\n' +
      '            </div>\n' +
      '            <div class="timeline__event__description">\n' +
      '              <p><ul><li>Entre cuentas propias y a terceros</li><li>Interbancarias</li></ul></p>\n' +
      '            </div>\n' +
      '\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="timeline__event animated fadeInUp timeline__event--type1">\n' +
      '          <div class="timeline__event__icon">\n' +
      '            💳\n' +
      '\n' +
      '          </div>\n' +
      '          <div class="timeline__event__date">\n' +
      '            &nbsp;&nbsp;💳&nbsp;&nbsp;\n' +
      '          </div>\n' +
      '          <div class="timeline__event__content">\n' +
      '            <div class="timeline__event__title">\n' +
      '              Pagos de créditos\n' +
      '            </div>\n' +
      '            <div class="timeline__event__description">\n' +
      '              <p><ul><li>Tarjetas de crédito</li><li>Créditos consumo</li><li>Créditos Hipotecarios</li><li>Créditos PyMe y Micro</li></ul></p>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">\n' +
      '          <div class="timeline__event__icon">\n' +
      '            💸\n' +
      '          </div>\n' +
      '          <div class="timeline__event__date">\n' +
      '            &nbsp;&nbsp; 💸 &nbsp;&nbsp;\n' +
      '          </div>\n' +
      '          <div class="timeline__event__content">\n' +
      '            <div class="timeline__event__title">\n' +
      '              Remesas Western Union\n' +
      '            </div>\n' +
      '            <div class="timeline__event__description">\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </section>',
    showCloseButton: true
  })

});
let negocio_propio_completo=false;
$(".check_propio").change(function(){
  if ($('.check_propio:checked').length === $('.check_propio').length) {
    negocio_propio_completo=true;
    Swal.fire({
      title: '<b>¡Felicidades! Cumples con los requisitos para ser Agente BCP en tu negocio propio</b>',
      width: 600,
      padding: '3em',
      confirmButtonColor: '#f57d31',
      confirmButtonText: 'Postúlate!',
      color: '#8d8c8c',
      background: '#fff url(https://image.freepik.com/vector-gratis/fondo-confeti-colores-espacio-texto_1017-32374.jpg)',
      backdrop: `
     rgb(0 0 0 / 40%)
    url("https://i.gifer.com/6k2.gif")
    repeat
  `
    })
  }else{
    negocio_propio_completo=false;
  }

});
$(".check_srl").change(function(){
  if($('.check_srl:checked').length===$('.check_srl').length && negocio_propio_completo) {
    Swal.fire({
      title: '<b>¡Felicidades! Cumples con los requisitos para ser Agente BCP en tu negocio SRL o SA</b>',
      width: 600,
      padding: '3em',
      color: '#8d8c8c',
      background: '#fff url(https://image.freepik.com/vector-gratis/fondo-confeti-colores-espacio-texto_1017-32374.jpg)',
      confirmButtonText: 'Postúlate!',
      showCancelButton: false,
      confirmButtonColor: '#f57d31',
      cancelButtonColor: '#E3E4E5',
      cancelButtonText: 'No por el momento',
      backdrop: `
      rgb(0 0 0 / 40%)
      url("https://i.gifer.com/6k2.gif")
      repeat
    `
    }).then((result) => {
      if (result.isConfirmed) {
        // var position = document.getElementById('formulario').offset().top;
        // $("body, html").animate({
        //   scrollTop: position
        // } /* speed */ );
        // window.scrollTo(0,1000);
      //
      // } else if (result.dismiss === Swal.DismissReason.cancel) {
      //   $('#2')[0].scrollIntoView();
      }
    })
  }
});


