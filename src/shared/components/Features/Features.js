import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import {
  HomeWorkOutlined,
  EmojiEventsOutlined,
  LocationOnOutlined,
  VerifiedUserOutlined,
  TrendingUpOutlined,
  EventAvailableOutlined
} from "@material-ui/icons";

import "./Features.scss";

const features = props => {
  return (
    <section className={`features`}>
      <div className="feature">
        <SvgIcon
          className={`feature__icon`}
          style={{
            width: "4.5rem",
            height: "4.5rem"
          }}
        >
          <HomeWorkOutlined />
        </SvgIcon>
        <h4 className={`heading-4 heading-4--dark`}>Best Houses you can get</h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis et
          aut vero officia hic non aspernatur distinctio culpa praesentium.
        </p>
      </div>
      <div className="feature">
        <SvgIcon
          className={`feature__icon`}
          style={{
            width: "4.5rem",
            height: "4.5rem"
          }}
        >
          <EmojiEventsOutlined />
        </SvgIcon>
        <h4 className={`heading-4 heading-4--dark`}>Best quality services</h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          delectus dolorum consectetur illum quaerat debitis rem nemo nisi
          deserunt minus quas deleniti quia veritatis.
        </p>
      </div>
      <div className="feature">
        <SvgIcon
          className={`feature__icon`}
          style={{
            width: "4.5rem",
            height: "4.5rem"
          }}
        >
          <LocationOnOutlined />
        </SvgIcon>
        <h4 className={`heading-4 heading-4--dark`}>Best Locations</h4>
        <p className="feature__text">
          Accumsan lacus vel facilisis volutpat est velit. Egestas fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Tempor nec
          feugiat nisl pretium. Scelerisque.
        </p>
      </div>
      <div className="feature">
        <SvgIcon
          className={`feature__icon`}
          style={{
            width: "4.5rem",
            height: "4.5rem"
          }}
        >
          <VerifiedUserOutlined />
        </SvgIcon>
        <h4 className={`heading-4 heading-4--dark`}>Solid Expertise</h4>
        <p className="feature__text">
          Non consectetur a erat nam at lectus urna duis. Mi in nulla posuere
          sollicitudin aliquam ultrices sagittis orci. Nulla aliquet enim tortor
          at auctor urna nunc. Pellentesque adipiscing.
        </p>
      </div>
      <div className="feature">
        <SvgIcon
          className={`feature__icon`}
          style={{
            width: "4.5rem",
            height: "4.5rem"
          }}
        >
          <TrendingUpOutlined />
        </SvgIcon>
        <h4 className={`heading-4 heading-4--dark`}>Professional Realtors</h4>
        <p className="feature__text">
          Hendrerit gravida rutrum quisque non tellus orci ac auctor. Lectus
          nulla at volutpat diam ut venenatis tellus in. Eu turpis egestas
          pretium aenean. 
        </p>
      </div>
      <div className="feature">
        <SvgIcon
          className={`feature__icon`}
          style={{
            width: "4.5rem",
            height: "4.5rem"
          }}
        >
          <EventAvailableOutlined />
        </SvgIcon>
        <h4 className={`heading-4 heading-4--dark`}>Get a new home quick</h4>
        <p className="feature__text">
          Vulputate ut pharetra sit amet aliquam id diam. Aliquam eleifend mi in
          nulla posuere. Non consectetur a erat nam at lectus urna duis.
        </p>
      </div>
    </section>
  );
};

export default features;
