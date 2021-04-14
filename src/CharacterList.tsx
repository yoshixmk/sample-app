import { FC, useState } from 'react';
import { Header, Icon, Item, Card, Statistic, Button } from 'semantic-ui-react';

export type Character = {
  id: number;
  name: string;
  grade: number; height?: number;
};
type Props = {
  school: string; characters: Character[];
};


const CharacterList: FC<Props> = ({ school, characters }) => {
  const [count, setCount] = useState(0);

  const reset = (): void => {
    setCount(0);
  }
  const increment = (): void => {
    setCount(count + 1);
  }

  return (<>
    <Header as="h2">{school}</Header>
    <Item.Group>
      {characters.map(character => (<Item key={character.id}>
        <Icon name="user circle" size="huge" /> <Item.Content>
          <Item.Header>{character.name}</Item.Header> <Item.Meta>{character.grade}年生</Item.Meta> <Item.Meta>
            {character.height ?? '???'}
                cm
              </Item.Meta>
        </Item.Content>
      </Item>
      ))}
    </Item.Group>
    <Card>
      <Statistic className="number-board"> <Statistic.Label>count</Statistic.Label> <Statistic.Value>{count}</Statistic.Value>
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
export default CharacterList;
