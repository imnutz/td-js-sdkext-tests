import { ClientFunction, Selector } from 'testcafe'

fixture`Scroll tracking`
  .page`http://${process.env.TEST_SERVER}:3000/pages/scroll.html`

const scrollPage = ClientFunction(() => {
  let content = document.querySelector('#wrapper')

  let percentage = 0.01 * content.getBoundingClientRect().height

  return new Promise(resolve => {
    const interval = window.setInterval(() => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        window.clearInterval(interval)
        resolve()
      }

      window.scrollBy(0, percentage)
    }, 500)
  })
})

test('Track scrolling', async t => {
  await scrollPage()
  await t.wait(5000)
})