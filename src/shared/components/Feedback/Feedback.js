import React from "react";

import Customer1 from "../../../public/images/customer-1.jpg";

import Button from "../UI/Button/Button";
import "./Feedback.scss";

const feedback = props => {
  return (
    <React.Fragment>
      <div className="feedback__pictures">
        <img src={Customer1} alt="Customer 1" className="feedback__img--1" />
      </div>
      <section className={`feedback__content`}>
        <h3 className="heading-3 mb-sm">Our clients enjoyed it!</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;It changed my life&rdquo;
        </h2>
        <p className="feedback__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          voluptatibus perspiciatis fuga numquam provident deleniti recusandae
          voluptas ea architecto dolorem molestias vel consectetur explicabo
          totam facilis, quos voluptate laudantium beatae.
        </p>
        <Button btnGhost={false} to="/">
          Find your own home!
        </Button>
      </section>
    </React.Fragment>
  );
};

export default feedback;
