
let counterSteps = $('.counter__step');

$(document).ready(function () {

  // onclick button Next

  $('.btn-next').on('click', function () {

    $(".btn-prev").addClass("btn_active");

    let stepsNext = [];
    let stepsDone = [];

    $('.counter__step').each(function (indx, element) {
      if ($(element).hasClass("counter__step--active")) {
        stepsNext.push($(element));
      }
      return
    });

    $(stepsNext).each(function (indx, element) {
      $(element[indx]).addClass("counter__step--done");
      $(element[indx]).removeClass("counter__step--active");
    });

    $('.counter__step').each(function (indx, element) {
      if ($(element).hasClass("counter__step--done")) {
      } else {
        stepsDone.push($(element));
      }
      return;
    });

    $(stepsDone).each(function (indx, element) {
      $(element[indx]).addClass("counter__step--active");
    });

    let counter = [];

    counterSteps.each(function (indx, element) {
      if ($(element).hasClass("counter__step--done")) {
        counter.push($(element));
      } else {
        return;
      };
      return;
    });

    if (counter.length >= 4) {
      $(".btn-next").removeClass("btn-next").addClass("btn-nextHidden");
      $(".btn-done").removeClass("btn-done").addClass("btn-doneShow");
    } else {
      return;
    };
    return;
  });



  $('.btn-prev').on('click', function () {
    let steps = [];
    let prevSteps = [];

    $('.counter__step').each(function (indx, element) {
      if ($(element).hasClass("counter__step--done")) {
        steps.unshift($(element));
      }
      return
    });
    $(steps).each(function (indx, element) {
      $(element[indx]).addClass("counter__step--active");
      $(element[indx]).removeClass("counter__step--done");

    });
    $('.counter__step').each(function (indx, element) {
      if ($(element).hasClass("counter__step--active")) {
        prevSteps.unshift($(element));
      }
      return
    });
    $(prevSteps).each(function (indx, element) {
      $(element[indx]).removeClass("counter__step--active");
    });

    let counter = [];

    counterSteps.each(function (indx, element) {
      if ($(element).hasClass("counter__step--done")) {
        counter.push($(element));
      } else {
        return;
      };
      return;
    });

    if (counter.length < 4) {
      $(".next").removeClass("btn-nextHidden").addClass("btn-next");
      $(".done").removeClass("btn-doneShow").addClass("btn-done");
    } else {
      return;
    };
    return false;
  });

// отправка формы 

  $('form').submit(function() {
  
    var $form = $(this);

    $.post(
        $form.attr('action'), 
        $form.serialize()     
    );

    return false;
});

})
