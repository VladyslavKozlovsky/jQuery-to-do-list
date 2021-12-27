let counter = 0
let index = 0
let task_val = ""

$(".add-btn").on("click" ,function () {
  task_val = $(".input").val();
  let task_val_true = task_val.trim()
  if (task_val_true != ""){
    counter++
    index++
    $(".numbers").append(`<div class="hidden" style="display:none">${index}.</div>`)
    $(".unfinished").append(`<div onclick="move(${counter})" class="task_${counter} task_text hidden" style="display:none">${task_val_true}</div>`)
    $(".input").val("")
    $(".tasks").prepend("<div class='info'>Добавленно</div>")
    setTimeout(() => $(".info").remove(), 2000)
  } else {
    $(".tasks").prepend("<div class='info'>Заполните поле</div>")
    setTimeout(() => $(".info").remove(), 2000)
  }
  event.preventDefault()
})

$(".show-btn").on("click" ,() => {
  $(".num_tasks .hidden").attr("style", "display:true").removeClass("hidden")

  event.preventDefault()
})

$(".clear-btn").on(("click"), () => {
  $(".clear_btns").removeClass("hidden")
  $(".clear-btn").fadeOut()
  event.preventDefault()
})

$(".clear_all_btn").on("click", () => {
  $(".unfinished").empty()
  $(".finished").empty()
  $(".numbers").empty()
  $(".checked").empty()
  $(".clear-btn").fadeIn()
  $(".clear_btns").addClass("hidden")
  counter = 0
  index = 0
  event.preventDefault()
})

$(".clear_fin_btn").on("click", () => {
  $(".finished").empty()
  $(".checked").empty()
  $(".clear-btn").fadeIn()
  $(".clear_btns").addClass("hidden")
  event.preventDefault()
})


function move(i) {
  $(`.task_${i}`).prependTo(".finished").attr("onclick", `move_back(${i})`).addClass("striked")
  $(".checked").append(`<div>&#10004;</div>`)
  $(".numbers div").last().remove()
  index--
}

function move_back(j) {
  $(`.task_${j}`).prependTo(".unfinished").attr("onclick", `move(${j})`).removeClass("striked")
  index++
  $(".numbers").append(`<div>${index}.</div>`)
  $(".checked div").last().remove()
}
