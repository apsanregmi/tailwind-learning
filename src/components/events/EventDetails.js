// EventDetails.js
import React from 'react';
import styled from 'styled-components';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import { FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto; /* Make the overlay scrollable */
`;

const DetailsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  max-width: 600px;
  max-height: 80%; /* Set a maximum height for scrollability */
  overflow-y: auto; /* Make the container scrollable */
`;
const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const DateLocation = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: #555;
  font-size: 18px;
  margin-bottom: 15px;
`;

const SpeakersContainer = styled.div`
  margin-bottom: 15px;
`;

const Speaker = styled.div`
  margin-bottom: 10px;
`;

const SpeakerName = styled.span`
  font-weight: bold;
`;

const AgendaContainer = styled.div`
  margin-bottom: 15px;
`;

const AgendaItem = styled.div`
  margin-bottom: 10px;
`;

const Guests = styled.p`
  color: #888;
  font-size: 16px;
  margin-bottom: 15px;
`;

const RegistrationLink = styled.a`
  color: #007bff; // Bootstrap primary color
  text-decoration: underline;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

const ShareButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ShareButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FacebookIcon = styled(FaFacebook)`
  color: #1877f2; // Facebook brand color
  margin-right: 5px;
`;

const WhatsappIcon = styled(FaWhatsapp)`
  color: #25d366; // WhatsApp brand color
  margin-right: 5px;
`;

const TwitterIcon = styled(FaTwitter)`
  color: #1da1f2; // Twitter brand color
  margin-right: 5px;
`;

const EventDetails = ({ event, onClose }) => {
  const { title, date, time, location, description, speakers, agenda, guests, registrationLink } = event;
  const shareUrl = window.location.href;

  return (
    <Overlay>
      <DetailsContainer>
        <Title>{title}</Title>
        <DateLocation>
          {new Date(date).toLocaleDateString()} {time && `- ${time}`} - {location}
        </DateLocation>
        <Description>{description}</Description>

        {speakers && speakers.length > 0 && (
          <SpeakersContainer>
            <h3>Speakers:</h3>
            {speakers.map((speaker, index) => (
              <Speaker key={index}>
                <SpeakerName>{speaker.name}</SpeakerName>, {speaker.title} - {speaker.company}
              </Speaker>
            ))}
          </SpeakersContainer>
        )}

        {agenda && agenda.length > 0 && (
          <AgendaContainer>
            <h3>Agenda:</h3>
            {agenda.map((item, index) => (
              <AgendaItem key={index}>
                {item.time} - {item.activity}
              </AgendaItem>
            ))}
          </AgendaContainer>
        )}

        <Guests>Guests: {guests.join(', ')}</Guests>

        {registrationLink && (
          <p>
            Registration: <RegistrationLink href={registrationLink} target="_blank" rel="noopener noreferrer">Register Now</RegistrationLink>
          </p>
        )}

        <ShareButtonContainer>
          <ShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={24} />
              <span>Share on Facebook</span>
            </FacebookShareButton>
          </ShareButton>

          <ShareButton>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={24} />
              <span>Share on WhatsApp</span>
            </WhatsappShareButton>
          </ShareButton>

          <ShareButton>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={24} />
              <span>Share on Twitter</span>
            </TwitterShareButton>
          </ShareButton>
        </ShareButtonContainer>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </DetailsContainer>
    </Overlay>
  );
};

export default EventDetails;
