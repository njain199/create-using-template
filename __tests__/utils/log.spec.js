/*
 * Copyright 2021 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations
 * under the License.
 */

const { goToStep } = require('../../src/utils/log');

jest.mock('../../package.json', () => ({
  version: 'packageVersionMock',
}));

describe('log functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log');
  });
  describe('stepBanner', () => {
    it('should output the correct string for all 5 steps', () => {
      goToStep(1);
      goToStep(2);
      goToStep(3);
      goToStep(4);
      goToStep(5);
      // eslint-disable-next-line no-console
      expect(console.log).toHaveBeenCalledTimes(25);
      // snapshot all calls all at once
      // eslint-disable-next-line no-console
      console.log.mock.calls.forEach((mockCall) => {
        expect(mockCall).toMatchSnapshot();
      });
    });
    it('should do nothing if called with an index out of range', () => {
      goToStep(0);
      goToStep(-1);
      goToStep(6);
      goToStep(100);
      goToStep('index');
      // eslint-disable-next-line no-console
      expect(console.log).toHaveBeenCalledTimes(0);
    });
  });
});