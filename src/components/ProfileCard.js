import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardActionArea, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setVideo } from "../features/home/videoSlice";
import Tilt from "react-parallax-tilt";
import {
  Card,
  Avatar,
  AvatarImg,
  Contact,
  Name,
  Description,
} from "../styledComponents/ProfileCardStyle";

function ProfileCard({ data }) {
  const myStyle = { margin: "18px", zIndex: 1, backdropFilter: "blur(5px)" };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = (video) => {
    dispatch(setVideo(video));
    setTimeout(() => {
      navigate("/video");
    }, 500);
  };

  return (
    <>
      <Tilt style={myStyle}>
        <CardActionArea
          onClick={() => clickHandler(data.video)}
          sx={{ color: "white" }}
        >
          <Card>
            <Avatar>
              <AvatarImg name={data.pic} />
            </Avatar>
            <Name>{data.name}</Name>
            <Description>{data.description}</Description>

            <Description>{data.description2}</Description>

            <Contact>
              <IconButton sx={{ color: "white" }}>
                <a href={`https://instagram.com/${data.instagram}`}>
                  <i className="fab fa-instagram"></i>
                </a>
              </IconButton>
              <IconButton
                sx={{ color: "white", transform: "translateY(-10px)" }}
              >
                <i className="fab fa-facebook"></i>
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <a href={`mailto:${data.email}`}>
                  <i className="far fa-envelope"></i>
                </a>
              </IconButton>
            </Contact>
          </Card>
        </CardActionArea>
      </Tilt>
    </>
  );
}

export default ProfileCard;
