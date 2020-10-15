import fetch from 'node-fetch'

class DataSource {
  url: string;
  token: string;

  defaultHeaders: any;

  constructor(url: string, token: string) {
    this.url = url;
    this.token = token;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  login  = async (body : any) => {
    return fetch(`${this.url}auth/login`, {
      method: 'POST',
      headers: {
        ...this.defaultHeaders
      },
      body: JSON.stringify(body)
    })
  }

  getBanners = async () => {
    return fetch(`${this.url}banner?layout_type=list_layout&status=all`, {
      method: 'GET',
      headers: {
        ...this.defaultHeaders
      }
    })
  }
}

export default DataSource;