new WOW().init();

wow = new WOW(
  {
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  }
)
wow.init();

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
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="timeline__event animated fadeInUp timeline__event--type1">\n' +
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


$('#beneficio_usar').click(function(){
  Swal.fire({
    title: '<h2><strong>¿Qué beneficios brindarias para tus clientes?</strong></h2>',
    width: '45em',
    confirmButtonColor: '#F26E29',
    cancelButtonColor: '#E3E4E5',
    confirmButtonText: 'Listo!',
    html:
      '        <div class="row justify-content-md-center">\n' +
      '          <div class="col-md-12" >\n' +
      '            <ol class="olcards">\n' +
      '              <li class="wow fadeInLeft" data-wow-delay=".25s" style="--cardColor:#203864">\n' +
      '                <div class="content">\n' +
      '                  <div class="icon">🕔</div>\n' +
      '                  <div class="title">Horario extendido</div>\n' +
      '                  <div class="text">Atención en horarios extendidos en comparación con las oficinas del banco.</div>\n' +
      '                </div>\n' +
      '              </li>\n' +
      '              <li class="wow fadeInLeft" data-wow-delay=".45s" style="--cardColor:rgba(0, 43, 118, 0.7)">\n' +
      '                <div class="content">\n' +
      '                  <div class="icon">📍</div>\n' +
      '                  <div class="title">Más cerca de tus clientes</div>\n' +
      '                  <div class="text">Te encontrarias en diferentes zonas de la ciudad, estando más cerca de tus clientes</div>\n' +
      '                </div>\n' +
      '              </li>\n' +
      '              <li class="wow fadeInLeft" data-wow-delay=".65s" style="--cardColor:rgba(0, 43, 118, 0.4)">\n' +
      '                <div class="content">\n' +
      '                  <div class="icon">🚶‍♀</div>\n' +
      '                  <div class="title">Sin colas de espera</div>\n' +
      '                  <div class="text">El cliente no tiene que hacer colas o esperar mucho tiempo para ser atendido</div>\n' +
      '                </div>\n' +
      '              </li>\n' +
      '            </ol>\n' +
      '          </div>\n',
    showCloseButton: true
  })

});

$('#beneficio_ser').click(function(){
  Swal.fire({
    title: '<h2><strong>¿Qué beneficios tendrás como agente BCP?</strong></h2>',
    width: '45em',
    confirmButtonColor: '#F26E29',
    cancelButtonColor: '#E3E4E5',
    confirmButtonText: 'Listo!',
    html:
      '        <div class="row justify-content-md-center">\n' +
      '          <div class="col-md-12" >\n' +
      '             <ol class="olcards">\n' +
      '              <li class="wow fadeInRight" data-wow-delay=".25s" style="--cardColor:#2B9BE0">\n' +
      '                <div class="content">\n' +
      '                  <div class="icon">📈</div>\n' +
      '                  <div class="title">Mayor productividad</div>\n' +
      '                  <div class="text">Vuelves mas productivo el tiempo sin actividad en tu negocio</div>\n' +
      '                </div>\n' +
      '              </li>\n' +
      '              <li class="wow fadeInRight" data-wow-delay=".45s" style="--cardColor:rgba(43, 155, 224, 0.7)">\n' +
      '                <div class="content">\n' +
      '                  <div class="icon">👥</div>\n' +
      '                  <div class="title">Incremento de clientes</div>\n' +
      '                  <div class="text">Generarás una mayor cantidad de clientes, lo que significa oportunidad de subir tus ventas</div>\n' +
      '                </div>\n' +
      '              </li>\n' +
      '              <li class="wow fadeInRight" data-wow-delay=".65s" style="--cardColor:rgba(43, 155, 224, 0.5)">\n' +
      '                <div class="content">\n' +
      '                  <div class="icon">🗣️</div>\n' +
      '                  <div class="title">Clientes concurrentes</div>\n' +
      '                  <div class="text">Tus clientes volverán ya que verán la comodidad de pagar a travéz de tu negocio</div>\n' +
      '                </div>\n' +
      '              </li>\n' +
      '              <li class="wow fadeInRight" data-wow-delay=".85s" style="--cardColor:rgba(43, 155, 224, 0.3)">\n' +
      '                <div class="content">\n' +
      '                  <div class="icon">➕</div>\n' +
      '                  <div class="title">Mayor gama de servicios</div>\n' +
      '                  <div class="text">Brindarás una mayor gama de servicios que los demás negocios</div>\n' +
      '                </div>\n' +
      '              </li>\n' +
      '            </ol>'+
      '          </div>\n',
    showCloseButton: true
  })

});

$('#requisitos_agente_bcp').click(function(){
  Swal.fire({
    title: '<h2>Revisa si cumples con los requisitos para ser Agente BCP</h2>',
    width: '75%',
    confirmButtonColor: '#F26E29',
    cancelButtonColor: '#E3E4E5',
    confirmButtonText: 'Listo!',
    html:
      '        <svg viewBox="0 0 0 0" style="position: absolute; z-index: -1; opacity: 0;">\n' +
      '          <defs>\n' +
      '            <linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">\n' +
      '              <stop offset="0%"   stop-color="#27FDC7"/>\n' +
      '              <stop offset="100%" stop-color="#0FC0F5"/>\n' +
      '            </linearGradient>\n' +
      '            <linearGradient id="lineGradient">\n' +
      '              <stop offset="0%"    stop-color="#0FC0F5"/>\n' +
      '              <stop offset="100%"  stop-color="#27FDC7"/>\n' +
      '            </linearGradient>\n' +
      '            <path id="todo__line" stroke="url(#lineGradient)" d="M21 12.3h168v0.1z"></path>\n' +
      '            <path id="todo__box" stroke="url(#boxGradient)" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"></path>\n' +
      '            <path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5"></path>\n' +
      '            <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>\n' +
      '          </defs>\n' +
      '        </svg>\n' +
      '        <div class="row justify-content-md-center">\n' +
      '          <div class="col-md-auto " >\n' +
      '            <h3 class="wow fadeInLeft text-center pd-l-r">Requisitos para negocios propios</h3>\n' +
      '            <h4 class="wow fadeInLeft pd-l-r">Cualquier tipo de comercio que tenga <br>antiguedad de negocio puede ser agente BCP</h4>\n' +
      '            <div class="todo-list">\n' +
      '              <label class="todo wow fadeInLeft" data-wow-delay=".25s">\n' +
      '                <input class="todo__state check_propio "  type="checkbox" />\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon " >\n' +
      '                  <use xlink:href="#todo__line" class="todo__line"></use>\n' +
      '                  <use xlink:href="#todo__box" class="todo__box"></use>\n' +
      '                  <use xlink:href="#todo__check" class="todo__check"></use>\n' +
      '                  <use xlink:href="#todo__circle" class="todo__circle"></use>\n' +
      '                </svg>\n' +
      '                <div class="todo__text " >Fotocopia de CI vigente</div>\n' +
      '              </label>\n' +
      '              <label class="todo wow fadeInLeft" data-wow-delay=".45s">\n' +
      '                <input class="todo__state check_propio" type="checkbox" />\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">\n' +
      '                  <use xlink:href="#todo__line" class="todo__line"></use>\n' +
      '                  <use xlink:href="#todo__box" class="todo__box"></use>\n' +
      '                  <use xlink:href="#todo__check" class="todo__check"></use>\n' +
      '                  <use xlink:href="#todo__circle" class="todo__circle"></use>\n' +
      '                </svg>\n' +
      '                <div class="todo__text">Licencia de funcionamiento</div>\n' +
      '              </label>\n' +
      '              <label class="todo wow fadeInLeft" data-wow-delay=".65s">\n' +
      '                <input class="todo__state check_propio" type="checkbox" />\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">\n' +
      '                  <use xlink:href="#todo__line" class="todo__line"></use>\n' +
      '                  <use xlink:href="#todo__box" class="todo__box"></use>\n' +
      '                  <use xlink:href="#todo__check" class="todo__check"></use>\n' +
      '                  <use xlink:href="#todo__circle" class="todo__circle"></use>\n' +
      '                </svg>\n' +
      '                <div class="todo__text">NIT</div>\n' +
      '              </label>\n' +
      '              <label class="todo wow fadeInLeft" data-wow-delay=".85s">\n' +
      '                <input class="todo__state check_propio" type="checkbox" />\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">\n' +
      '                  <use xlink:href="#todo__line" class="todo__line"></use>\n' +
      '                  <use xlink:href="#todo__box" class="todo__box"></use>\n' +
      '                  <use xlink:href="#todo__check" class="todo__check"></use>\n' +
      '                  <use xlink:href="#todo__circle" class="todo__circle"></use>\n' +
      '                </svg>\n' +
      '                <div class="todo__text">Papeles del inmueble donde funciona el negocio:\n' +
      '                                        <ul>\n' +
      '                                          <li>Fotocopia de Contrato Alquiler o Anticrético</li>\n' +
      '                                          <li>Fotocopia de Folio Real (si es propio)</li>\n' +
      '                                        </ul>\n' +
      '                </div>\n' +
      '              </label>\n' +
      '              <label class="todo wow fadeInLeft" data-wow-delay="1.05s">\n' +
      '                <input class="todo__state check_propio" type="checkbox" />\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">\n' +
      '                  <use xlink:href="#todo__line" class="todo__line"></use>\n' +
      '                  <use xlink:href="#todo__box" class="todo__box"></use>\n' +
      '                  <use xlink:href="#todo__check" class="todo__check"></use>\n' +
      '                  <use xlink:href="#todo__circle" class="todo__circle"></use>\n' +
      '                </svg>\n' +
      '                <div class="todo__text">Antecedentes Policiales y Judiciales</div>\n' +
      '              </label>\n' +
      '              <label class="todo wow fadeInLeft" data-wow-delay="1.25s">\n' +
      '                <input class="todo__state check_propio" type="checkbox" />\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">\n' +
      '                  <use xlink:href="#todo__line" class="todo__line"></use>\n' +
      '                  <use xlink:href="#todo__box" class="todo__box"></use>\n' +
      '                  <use xlink:href="#todo__check" class="todo__check"></use>\n' +
      '                  <use xlink:href="#todo__circle" class="todo__circle"></use>\n' +
      '                </svg>\n' +
      '                <div class="todo__text">Resolución de SEDES (solo Farmacias o afines a Salud)</div>\n' +
      '              </label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="col-md-auto">\n' +
      '            <h3  class="wow fadeInRight text-center pd-l-r">Requisitos para negocios SRL o SA</h3>\n' +
      '            <h4 class="wow fadeInRight pd-l-r">Además de los requisitos ya planteados, debes proporcionarnos:<br><br></h4>\n' +
      '            <div class="todo-list">\n' +
      '              <label class="todo wow fadeInRight" data-wow-delay=".25s">\n' +
      '                <input class="todo__state check_srl" type="checkbox" />\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">\n' +
      '                  <use xlink:href="#todo__line" class="todo__line"></use>\n' +
      '                  <use xlink:href="#todo__box" class="todo__box"></use>\n' +
      '                  <use xlink:href="#todo__check" class="todo__check"></use>\n' +
      '                  <use xlink:href="#todo__circle" class="todo__circle"></use>\n' +
      '                </svg>\n' +
      '                <div class="todo__text">Poder del representante legal</div>\n' +
      '              </label>\n' +
      '              <label class="todo wow fadeInRight" data-wow-delay=".45s">\n' +
      '                <input class="todo__state check_srl" type="checkbox" />\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">\n' +
      '                  <use xlink:href="#todo__line" class="todo__line"></use>\n' +
      '                  <use xlink:href="#todo__box" class="todo__box"></use>\n' +
      '                  <use xlink:href="#todo__check" class="todo__check"></use>\n' +
      '                  <use xlink:href="#todo__circle" class="todo__circle"></use>\n' +
      '                </svg>\n' +
      '                <div class="todo__text">Registro de Comercio</div>\n' +
      '              </label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <h5 style="margin-top: 20px;text-align: center;font-size: 19px"><b>Nota: Debes contar con una conexión a internet</b></h5>\n',
    showCloseButton: true
  })

});
var iframe_agentes = document.createElement('iframe');
iframe_agentes.width="100%";
iframe_agentes.height="400px";
if (window.navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  function successCallback(datos) {
    var YOUR_LAT = datos.coords.latitude;
    var YOUR_LON = datos.coords.longitude
    iframe_agentes.setAttribute("src", 'https://www.google.com/maps/d/embed?hl=es&mid=1c-4Q_TdzDhEqJt9doxRdflRERDPUkUDl&ehbc&ll='+YOUR_LAT+'%2C'+YOUR_LON+'&z=13');
  }

  function errorCallback(error) {
    iframe_agentes.setAttribute("src", 'https://www.google.com/maps/d/embed?hl=es&mid=1c-4Q_TdzDhEqJt9doxRdflRERDPUkUDl&ehbc');
  }
}

$('#agentes-cercanos').click(function(){
  Swal.fire({
    title: '<h2><strong>Agentes BCP cercanos a tí</strong></h2>',
    width: '45em',
    confirmButtonColor: '#F26E29',
    cancelButtonColor: '#E3E4E5',
    confirmButtonText: 'Listo!',
    html: iframe_agentes,
    showCloseButton: true
  })
});



$(document).ready(function() {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $(".video-btn").click(function() {
    $videoSrc = $(this).attr("data-src");
    console.log("button clicked" + $videoSrc);
  });

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function(e) {
    console.log("modal opened" + $videoSrc);
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function(e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});
