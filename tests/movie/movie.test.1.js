import { Selector } from 'testcafe'

fixture`Video tracking`
  .page`http://${process.env.TEST_SERVER}:3000/pages/movie.html`

test('Track video progress', async t => {
  await Selector('#video-player')
  await t.wait(10000)
})