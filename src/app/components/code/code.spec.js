import angular from 'angular';
import 'angular-mocks';
import {code} from './code';

describe('code component', () => {
  beforeEach(() => {
    angular
      .module('code', ['app/components/code/code.html'])
      .component('code', code);
    angular.mock.module('code');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<code></code>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
