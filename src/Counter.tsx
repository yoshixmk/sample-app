// Waiting semantic-ui-react's new release version...
// https://github.com/Semantic-Org/Semantic-UI-React/search?q=findDOMNode&type=issues
/**
 * Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of RefFindNode which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
 */

import { VFC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

const Counter: VFC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(0);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={reset}>
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;