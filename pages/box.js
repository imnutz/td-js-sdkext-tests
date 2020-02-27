!function () {
  var amount = 1000
  var content = document.querySelector('#content')
  for (i = 1; i <= amount; i++) {
    var randomColor = '#' + ('00000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6);
    var div = document.createElement('div')
    div.className = 'box'
    div.style.backgroundColor = randomColor
    content.appendChild(div)

    var span = document.createElement('div')
    span.id = 'footer'
    span.style.height = '1px'
    content.appendChild(span)
  }
}()
