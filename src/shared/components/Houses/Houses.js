import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import {
  FavoriteOutlined,
  LocationOnOutlined,
  SingleBedOutlined,
  SquareFootOutlined,
  EuroOutlined
} from "@material-ui/icons";

import House1 from "../../../public/images/house-1.jpg";
import House2 from "../../../public/images/house-2.jpg";
import House3 from "../../../public/images/house-3.jpg";
import House4 from "../../../public/images/house-4.jpg";
import House5 from "../../../public/images/house-5.jpg";
import House6 from "../../../public/images/house-6.jpg";
import Button from "../UI/Button/Button";
import "./Houses.scss";

const houses = props => {
  return (
    <section className={`houses`}>
      <div className="house">
        <img className={`house__img`} src={House1} alt="House 1" />
        <div className="house__like">
            <SvgIcon>
            <FavoriteOutlined />
            </SvgIcon>
        </div>
        <h5 className="house__name">Beautiful Family House</h5>
        <div className="house__location">
          <SvgIcon>
            <LocationOnOutlined />
          </SvgIcon>
          <p>Germany</p>
        </div>
        <div className="house__rooms">
          <SvgIcon>
            <SingleBedOutlined />
          </SvgIcon>
          <p>4 rooms</p>
        </div>
        <div className="house__area">
          <SvgIcon>
            <SquareFootOutlined />
          </SvgIcon>
          <p>
            200 m<sup>2</sup>
          </p>
        </div>
        <div className="house__price">
          <SvgIcon>
            <EuroOutlined />
          </SvgIcon>
          <p>€500.000</p>
        </div>
        <Button class='house__btn' to="/">Contact agent</Button>
      </div>

      <div className="house">
        <img className={`house__img`} src={House2} alt="House 2" />
        <div className="house__like">
            <SvgIcon>
            <FavoriteOutlined />
            </SvgIcon>
        </div>
        <h5 className="house__name">Elegant House</h5>
        <div className="house__location">
          <SvgIcon>
            <LocationOnOutlined />
          </SvgIcon>
          <p>France</p>
        </div>
        <div className="house__rooms">
          <SvgIcon>
            <SingleBedOutlined />
          </SvgIcon>
          <p>5 rooms</p>
        </div>
        <div className="house__area">
          <SvgIcon>
            <SquareFootOutlined />
          </SvgIcon>
          <p>
            300 m<sup>2</sup>
          </p>
        </div>
        <div className="house__price">
          <SvgIcon>
            <EuroOutlined />
          </SvgIcon>
          <p>€900.000</p>
        </div>
        <Button class='house__btn' to="/">Contact agent</Button>
      </div>

      <div className="house">
        <img className={`house__img`} src={House3} alt="House 3" />
        <div className="house__like">
            <SvgIcon>
            <FavoriteOutlined />
            </SvgIcon>
        </div>
        <h5 className="house__name">Rustic House</h5>
        <div className="house__location">
          <SvgIcon>
            <LocationOnOutlined />
          </SvgIcon>
          <p>UK</p>
        </div>
        <div className="house__rooms">
          <SvgIcon>
            <SingleBedOutlined />
          </SvgIcon>
          <p>3 rooms</p>
        </div>
        <div className="house__area">
          <SvgIcon>
            <SquareFootOutlined />
          </SvgIcon>
          <p>
            200 m<sup>2</sup>
          </p>
        </div>
        <div className="house__price">
          <SvgIcon>
            <EuroOutlined />
          </SvgIcon>
          <p>€400.000</p>
        </div>
        <Button class='house__btn' to="/">Contact agent</Button>
      </div>

      <div className="house">
        <img className={`house__img`} src={House4} alt="House 4" />
        <div className="house__like">
            <SvgIcon>
            <FavoriteOutlined />
            </SvgIcon>
        </div>
        <h5 className="house__name">Large House</h5>
        <div className="house__location">
          <SvgIcon>
            <LocationOnOutlined />
          </SvgIcon>
          <p>Spain</p>
        </div>
        <div className="house__rooms">
          <SvgIcon>
            <SingleBedOutlined />
          </SvgIcon>
          <p>7 rooms</p>
        </div>
        <div className="house__area">
          <SvgIcon>
            <SquareFootOutlined />
          </SvgIcon>
          <p>
            500 m<sup>2</sup>
          </p>
        </div>
        <div className="house__price">
          <SvgIcon>
            <EuroOutlined />
          </SvgIcon>
          <p>€1000.000</p>
        </div>
        <Button class='house__btn' to="/">Contact agent</Button>
      </div>

      <div className="house">
        <img className={`house__img`} src={House5} alt="House 5" />
        <div className="house__like">
            <SvgIcon>
            <FavoriteOutlined />
            </SvgIcon>
        </div>
        <h5 className="house__name">Cozy Mansion</h5>
        <div className="house__location">
          <SvgIcon>
            <LocationOnOutlined />
          </SvgIcon>
          <p>Italy</p>
        </div>
        <div className="house__rooms">
          <SvgIcon>
            <SingleBedOutlined />
          </SvgIcon>
          <p>4 rooms</p>
        </div>
        <div className="house__area">
          <SvgIcon>
            <SquareFootOutlined />
          </SvgIcon>
          <p>
            350 m<sup>2</sup>
          </p>
        </div>
        <div className="house__price">
          <SvgIcon>
            <EuroOutlined />
          </SvgIcon>
          <p>€450.000</p>
        </div>
        <Button class='house__btn' to="/">Contact agent</Button>
      </div>

      <div className="house">
        <img className={`house__img`} src={House6} alt="House 6" />
        <div className="house__like">
            <SvgIcon>
            <FavoriteOutlined />
            </SvgIcon>
        </div>
        <h5 className="house__name">Great For Family</h5>
        <div className="house__location">
          <SvgIcon>
            <LocationOnOutlined />
          </SvgIcon>
          <p>Netherlands</p>
        </div>
        <div className="house__rooms">
          <SvgIcon>
            <SingleBedOutlined />
          </SvgIcon>
          <p>5 rooms</p>
        </div>
        <div className="house__area">
          <SvgIcon>
            <SquareFootOutlined />
          </SvgIcon>
          <p>
            500 m<sup>2</sup>
          </p>
        </div>
        <div className="house__price">
          <SvgIcon>
            <EuroOutlined />
          </SvgIcon>
          <p>€500.000</p>
        </div>
        <Button to="/" class='house__btn'>Contact agent</Button>
      </div>
    </section>
  );
};

export default houses;
