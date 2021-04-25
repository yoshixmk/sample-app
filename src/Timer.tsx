import { useEffect, useState, useMemo, VFC, useCallback } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import { getPrimes } from './utils/math-tool';
import './Timer.css';

const Timer: VFC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const reset = useCallback((): void => setTimeLeft(limit), [limit]);
  const tick = (): void => setTimeLeft((t) => t - 1);
  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

  return (<Card>
    <Statistic className="number-board">
      <Statistic.Label>time</Statistic.Label>
      <Statistic.Value className={primes.includes(timeLeft) ? 'prime-number' : undefined}>{timeLeft}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <Button color="red" fluid onClick={reset}> <Icon name="redo" />
  Reset
          </Button>
    </Card.Content>
  </Card>);
};
export default Timer;
