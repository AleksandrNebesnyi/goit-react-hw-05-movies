import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchCast } from '../../api/TMBD-movie-api';
import { List, Item, Description, Label } from './Cast';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCast(id).then(({ cast }) => setCredits(cast));
  }, [id]);

  return (
    <>
      <List>
        {credits &&
          credits.length > 0 &&
          credits.map(actor => (
            <Item key={actor?.id}>
              {actor.profile_path ? (
                <img
                  src={'https://image.tmdb.org/t/p/w300' + actor?.profile_path}
                  alt={actor?.original_name}
                  width="100px"
                />
              ) : null}

              <div>
                <Description>
                  <Label>Character:</Label> {actor?.character}
                </Description>
                <Description>
                  <Label>Name:</Label> {actor?.original_name}
                </Description>
              </div>
            </Item>
          ))}
      </List>
    </>
  );
};

export default Cast;
