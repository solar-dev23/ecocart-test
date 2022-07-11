import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Loading from "../common/Loading";
import Typography from "../common/Typography";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  max-width: 1140px;
  min-width: 1140px;
  height: 200px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2em;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    background-image: ${(props) => `url(${props.backgroundImage})` || ""};
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    z-index: -1;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  padding: 1em;
`;

function Hero(props) {
  const { artist, loading } = props;

  const renderNotFound = () => {
    return <Typography variant="h1">Not Found</Typography>;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {artist ? (
        <Container backgroundImage={artist?.image_url}>
          <Avatar src={artist?.thumb_url} />
          <Box>
            <Box direction="column" align="flex-start">
              <Box>
                <Typography variant="h1" color="white">
                  {artist?.name}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="white">
                  {artist?.tracker_count} Followers
                </Typography>
                <Typography variant="body1" color="white">
                  &sdot;{artist?.upcoming_event_count} Upcoming Concerts
                </Typography>
              </Box>
            </Box>
            <Button>Follow</Button>
          </Box>
        </Container>
      ) : (
        renderNotFound()
      )}
    </Wrapper>
  );
}

export default Hero;
