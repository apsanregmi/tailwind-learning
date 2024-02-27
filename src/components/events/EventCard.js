// EventCard.js
import React from 'react';
import styled from 'styled-components';

// Styled components for modularity
const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  color: #444;
  font-size: 16px;
  margin-bottom: 15px;
`;

const GuestsList = styled.p`
  color: #555;
  font-size: 14px;
  font-style: italic;
`;

const EventCard = ({ event, onCardClick }) => {
  const { title, date, location, description, guests } = event;

  return (
    <CardContainer onClick={() => onCardClick(event)}>
      <Title>{title}</Title>
      <Subtitle>
        {new Date(date).toLocaleDateString()} - {location}
      </Subtitle>
      <Description>{description}</Description>
      <GuestsList>Guests: {guests.join(', ')}</GuestsList>
    </CardContainer>
  );
};

export default EventCard;
