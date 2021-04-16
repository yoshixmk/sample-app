import { FC, useEffect, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

const Timer: FC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const reset = (): void => setTimeLeft(limit);
  const tick = (): void => setTimeLeft((t) => t - 1);
  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  }, [timeLeft, limit]);

  return (<Card>
    <Statistic className="number-board"> <Statistic.Label>time</Statistic.Label> <Statistic.Value>{timeLeft}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <Button color="red" fluid onClick={reset}> <Icon name="redo" />
  Reset
          </Button>
    </Card.Content>
  </Card>);
};
export default Timer;
