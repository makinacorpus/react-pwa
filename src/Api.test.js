import axios from 'axios';
import Api, { API_URL } from './Api';

var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);


describe('getAll', () => {
  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  mock.onAny().reply(200, {
    response: {results: [
      { title: 'a' },
      { title: 'b' }
    ]}
  });

  it('should return a list of articles', () => {
    const expectedResponse = [
      { title: 'a' },
      { title: 'b' }
    ];
  
    return Api.getAll()
      .then((res) => {
        expect(res).toEqual(expectedResponse)
      })
  });
})