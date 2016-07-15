import React from 'react';
import Title from 'react-title-component';

import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';

import multiSelectReadmeText from './README';
import multiSelectCode from '!raw!material-ui/MultiSelect/MultiSelect';
import MultiSelectExampleSimple from './ExampleSimple';
import multiSelectExampleSimpleCode from '!raw!./ExampleSimple';

const descriptions = {
  simple: 'Basic example of a multi-select',
};

const MultiSelectsPage = () => (
  <div>
    <Title render={(previousTitle) => `Auto Complete - ${previousTitle}`} />
    <MarkdownElement text={multiSelectReadmeText} />
    <CodeExample
      code={multiSelectExampleSimpleCode}
      title="Simple example"
      description={descriptions.simple}
    >
      <MultiSelectExampleSimple />
    </CodeExample>
    <PropTypeDescription code={multiSelectCode} />
  </div>
);

export default MultiSelectsPage;
