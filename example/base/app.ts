import axios from '../../src/index';

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// }).then((res) => {
//   console.log(res)
// })

axios({
  method: 'post',
  url: '/base/post',
  responseType:'json',
  data: {
    foo: ['bar1', 'baz1']
  }
}).then((res) => {
  console.log(res)
})