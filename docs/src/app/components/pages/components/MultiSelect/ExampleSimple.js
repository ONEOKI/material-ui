import React from 'react';
import MultiSelect from 'material-ui/MultiSelect';

const dataSource = [
  'One',
  'Two',
  'Three',
];

export default class MultiSelectExampleSimple extends React.Component {
  render() {
    return (
      <div>
        <MultiSelect
          hintText="Type anything"
          dataSource={dataSource}
          openOnFocus={true}
          filter={MultiSelect.fuzzyFilter}
          multi={true}
        />

        <MultiSelect
          hintText="Type anything"
          dataSource={dataSource}
          floatingLabelText="Full width"
          fullWidth={true}
          openOnFocus={true}
          filter={MultiSelect.fuzzyFilter}
          multi={true}
        />
      </div>
    );
  }
}
