/* eslint-env mocha */
import React from 'react';
import {assert} from 'chai';
import MultiSelect from './MultiSelect';
import {shallow} from 'enzyme';
import getMuiTheme from '../styles/getMuiTheme';

describe('<MultiSelect />', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = (node) => shallow(node, {context: {muiTheme}});

  it('search using fuzzy filter', () => {
    assert.strictEqual(MultiSelect.fuzzyFilter('ea', 'Peach'), true, 'should match Peach with ea');
    assert.strictEqual(MultiSelect.fuzzyFilter('pah', 'Peach'), true, 'should match Peach with pah');
    assert.strictEqual(MultiSelect.fuzzyFilter('peach', 'Peach'), true, 'should match Peach with peach');

    assert.strictEqual(MultiSelect.fuzzyFilter('phc', 'Peach'), false, 'should not match Peach with phc');
    assert.strictEqual(MultiSelect.fuzzyFilter('pp', 'Peach'), false, 'should not match Peach with pp');
    assert.strictEqual(MultiSelect.fuzzyFilter('pb', 'Peach'), false, 'should not match Peach with pb');

    // testing longer string
    const test_string = 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.';

    let search_result = MultiSelect.fuzzyFilter('bOOLEAN', test_string);
    assert.strictEqual(search_result, true, 'should match with case insensitive');

    search_result = MultiSelect.fuzzyFilter('The a Boolean if wrong', test_string);
    assert.strictEqual(search_result, true, 'should match pattern with spaces');

    search_result = MultiSelect.fuzzyFilter(' if ,bit.', test_string);
    assert.strictEqual(search_result, true, 'should match pattern with comma and period');

    search_result = MultiSelect.fuzzyFilter('the best q', test_string);
    assert.strictEqual(search_result, false, 'should not match pattern with letter is not contained in search text');

    search_result = MultiSelect.fuzzyFilter('off bit by', 'off by a bit');
    assert.strictEqual(search_result, false, 'should not match pattern when can not find letters in order ');
  });

  /**
   * This test ensures that <MultiSelect /> doesn't pass down filter property to <TextField />,
   * otherwise <TextField /> will render input as <input filter="function (...) {...}" ... />,
   * which will have different behaviors in different environments, producing indent conflicts and
   * breaking server rendering.
   * Read more: https://github.com/callemall/material-ui/issues/4195
   */
  it('should not pass filter property to children', () => {
    const wrapper = shallowWithContext(
      <MultiSelect dataSource={[]} />
    );

    assert.strictEqual(
      wrapper.find('TextField').prop('filter'),
      undefined,
      'should not pass filter property to children');
  });
});
