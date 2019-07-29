type Methods = 'get' | 'GET'
| 'post' | 'POST' 
| 'put' | 'PUT'
| 'option' | 'OPTION'
| 'patch' | 'PATCH'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'

export interface AxiosRequestConfig {
  url: string
  method?: Methods
  data?: any
  params?: any
}