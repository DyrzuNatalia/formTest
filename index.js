
let counterSteps = $('.counter__step');



let stepsNextArr = () => {

  let stepsNext = [];

  counterSteps.each(function (indx, element) {

    if ($(element).hasClass("counter__step--active")) {
      stepsNext.push($(element));
    }

  });

  $(stepsNext).each(function (indx, element) {
    $(element[indx]).addClass("counter__step--done");
    $(element[indx]).removeClass("counter__step--active");
  });
  return;
}

let stepDoneArr = () => {

  let stepsDone = [];

  $('.counter__step').each(function (indx, element) {
    if ($(element).hasClass("counter__step--done")) {
      return;
    } else {
      stepsDone.push($(element));
    }
    return stepsDone;
  });

  $(stepsDone).each(function (indx, element) {
    $(element[indx]).addClass("counter__step--active");
  });
  return;
}



let addClassStepDone = () => {

  let counter = [];

  counterSteps.each(function (indx, element) {

    if ($(element).hasClass("counter__step--done")) {
      counter.push($(element));
    };
  });

  if (counter.length >= 4) {
    $(".btn-next").removeClass("btn-next").addClass("btn-nextHidden");
    $(".btn-done").removeClass("btn-done").addClass("btn-doneShow");
  };
  return;
}




$(document).ready(function () {

  // onclick button Next

  $('.btn-next').on('click', function () {

    $(".btn-prev").addClass("btn_active");

    stepsNextArr();

    stepDoneArr();

    addClassStepDone();


  });



  $('.btn-prev').on('click', function () {
    let steps = [];
    let prevSteps = [];

    $('.counter__step').each(function (indx, element) {
      if ($(element).hasClass("counter__step--done")) {
        steps.unshift($(element));
      }
      return;
    });
    $(steps).each(function (indx, element) {
      $(element[indx]).addClass("counter__step--active");
      $(element[indx]).removeClass("counter__step--done");

    });
    $('.counter__step').each(function (indx, element) {
      if ($(element).hasClass("counter__step--active")) {
        prevSteps.unshift($(element));
      }
      return;
    });
    $(prevSteps).each(function (indx, element) {
      $(element[indx]).removeClass("counter__step--active");
    });

    let counter = [];

    counterSteps.each(function (indx, element) {
      if ($(element).hasClass("counter__step--done")) {
        counter.push($(element));
      };
      return;
    });

    if (counter.length < 4) {
      $(".next").removeClass("btn-nextHidden").addClass("btn-next");
      $(".done").removeClass("btn-doneShow").addClass("btn-done");
    };
    return false;
  });

  // отправка формы 

  $('form').submit(function () {

    var $form = $(this);

    $.post(
      $form.attr('action'),
      $form.serialize()
    );

    return false;
  });

})
