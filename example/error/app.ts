import axios from '../../src/index';

axios({
  method: 'post',
  url: '/error/timeout',
  timeout:2000,
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
  console.log(e.code)
  console.log(e.request)
  console.log(e.message)
})