import { apiResponse } from '../../tests/data';

export default {
  get: jest.fn(() => Promise.resolve(apiResponse)),
};
