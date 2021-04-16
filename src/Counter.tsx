import { useState, VFC } from 'react';
import { Card, Statistic, Button } from 'semantic-ui-react';

type Props = {
};


const Counter: VFC<Props> = () => {
  const [count, setCount] = useState(0);

  const reset = (): void => {
    setCount(0);
  }
  const increment = (): void => {
    setCount(count + 1);
  }

  return (<>
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={() => reset()}> Reset</Button>
          <Button color="green" onClick={() => increment()}> +1 </Button>
        </div>
      </Card.Content>
    </Card>
  </>)
};
export default Counter;
