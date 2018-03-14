$(document).ready(function () {
  var $nameItem = $('.className');

  $nameItem.each(function () {
    if ($(this).attr('checked', true)) {
      $(this).closest('.options-list').addClass('blur')
      $('.options-list').removeClass('validate')
    }
  });

  $(document).on('click', '.item a', function () {
    $(this).closest('.options-list').addClass('blur')
    $('.options-list').removeClass('validate')
  });

  // ['item1', 'item2'].forEach(function (modalId) {
  //   closeModalDialog(modalId)
  // })
})

function isEmpty (str) {
  return (!str || str.length === 0)
}

function nextStep (nextStepId, prevStepId, nextStepMenuId, prevStepMenuId) {
  $('#' + nextStepId).show()
  $('#' + prevStepId).hide()
  $('#' + nextStepMenuId).addClass('active')
  $('#' + nextStepMenuId + 'Text').addClass('active')
  $('#' + prevStepMenuId).addClass('done').next().addClass('active')
  $('#' + prevStepMenuId + 'Text').addClass('done')
}

function closeModalDialog (modalId) {
  if (window.history && window.history.pushState) {
    $('#' + modalId).on('show.bs.modal', function (e) {
      window.history.pushState('forward')
    })

    $(window).on('popstate', function () {
      $('#' + modalId).modal('hide')
    })
  }
}
