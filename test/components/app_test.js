import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  it('shows a header', () => {
    expect(component.find('nav.navbar.navbar-light')).to.exist;
  });
});
