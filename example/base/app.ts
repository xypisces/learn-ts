import axios from '../../src/index';

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

axios({
  method: 'get',
  url: '/base/get#hashs',
  params: {
    foo: 'bar',
    baz: null,
  }
}) 