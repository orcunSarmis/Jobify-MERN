import styled from "styled-components";
import Wrapper from "./../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    // eslint-disable-next-line no-mixed-spaces-and-tabs
    <Wrapper>
      <nav>
        <img src={logo} alt="job" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job<span>traccking</span> app
          </h1>
          <p>
            I'm baby selvage gluten-free gorpcore hashtag forage. Pabst palo
            santo cloud bread church-key ascot. Sartorial wayfarers synth paleo.
            Snackwave plaid ennui, vexillologist big mood raw denim disrupt.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
		<img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
};

export default Landing;
