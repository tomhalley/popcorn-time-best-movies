import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

export const MediaContainer = styled.div`
  width: 15rem;
  padding: 1rem;
`;

export const MediaCard = styled(Card)`
  position: relative;
  height: 22.5rem;
  padding: 0;
`;

export const MediaCardImage = styled(CardMedia)`
  width: 100%;
  height: 100%;
`;

export const MediaCardTitle = styled.h2`
  width: 100%;
  height: 2rem;
  padding: .75rem 0 0 0;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const MediaCardYear = styled.h3`
  width: 100%;
  height: 2rem;
  margin: 0;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.6;
`;
