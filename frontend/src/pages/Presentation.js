import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from "../components/CodeEditor";
import GitHubButton from 'react-github-btn';

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import HomeImg from "../assets/img/home.jpg";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";

import pages from "../data/pages";
import features from "../data/features";

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">Property Management</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">Markets</Nav.Link>
                <Nav.Link as={HashLink} to="#pages">Services</Nav.Link>
                <Nav.Link as={HashLink} to="#folder" className="d-sm-none d-xl-inline">Events</Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">Company</Nav.Link>
                <Nav.Link as={HashLink} to="#download">Resources</Nav.Link>
                <Nav.Link as={HashLink} to="#download">Support</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/*<Button as={HashLink} to="#download" variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button>*/}
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Property Management Dashboard</h1>
              <p className="text-muted fw-light mb-5 h5">Multiple platforms to meet your property management software needs</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>                
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={HomeImg} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faPager} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">1</h3>
              <p className="text-gray">Pages</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faReact} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">2</h3>
              <p className="text-gray">Page</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faSass} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">3</h3>
              <p className="text-gray">Page</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">4</h3>
              <p className="text-gray">Page</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          
       {/*   <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Mapbox <Badge pill bg='secondary' text="dark" className="badge-md ms-3 mb-0 fs-6">Pro</Badge></h2>
              <p className="mb-3 lead fw-bold">Markers and cards integration with Leaflet.js</p>
              <p className="mb-4">You can use this map to add markers with custom cards and show them on a map using our custom MapBox integration with Leaflet.js</p>
              <Button href="https://example.com/#/map" className="me-3" variant="secondary" target="_blank"><FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" /> Demo Map</Button>
              <Button href="https://example.com/#/plugins/map" variant="outline-primary" target="_blank"><FontAwesomeIcon icon={faBook} className="me-2" /> Guide</Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
  </Row>*/}
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">Calendar</h2>
              <p className="mb-3 lead fw-bold">
                Calendar
              </p>
              <p className="mb-4">
                All the events
              </p>
              <Button href="" className="me-3" variant="secondary" target="_blank"><FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> Events</Button>
              <Button href="" variant="outline-primary" target="_blank"><FontAwesomeIcon icon={faBook} className="me-2" /> Event</Button>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
          
        </Container>
      </section>
      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">
                10 house
              </h2>
              <p className="lead px-lg-10">
                Beautifull houses
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            {pages.map(page => <PagePreview key={`page-${page.id}`} {...page} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary text-white">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Multiple platforms to meet your property management software needs</h2>
              <p className="lead px-lg-8">Choose from two innovative platforms designed for real estate management: Yardi Voyager and Yardi Breeze. Both include accounting, operations and ancillary services for residential and commercial portfolios.</p>
            </Col>
          </Row>
         {/* <Row>
            {features.map(feature => <Feature key={`features-${feature.id}`} {...feature} />)}
  </Row>*/}
        </Container>
      </section>
      <section className="section section-lg line-bottom-soft" id="folder">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Multiple platforms to meet your property management software needs</h2>
              <p className="lead px-lg-8">Choose from two innovative platforms designed for real estate management: Yardi Voyager and Yardi Breeze. Both include accounting, operations and ancillary services for residential and commercial portfolios.

Voyager is a comprehensive system for real estate operators with unique and dynamic requirements. It creates a fully integrated central database of all property types — from multifamily properties and PHAs to shopping malls and airports — with the ability to add advanced services, run exactly the reports you need and leverage big data.

Breeze is a refreshingly simple property management system that works for residential, commercial, affordable housing, manufactured housing, self storage and associations. You can get started using Breeze in just a day, no advanced training or experience required.</p>
            </Col>
          </Row>
          
        </Container>
      </section>
      <section className="section section-lg bg-primary" id="getting-started">
        <Container>
          <Row className="justify-content-center text-center text-white mb-5">
            <Col xs={12}>
              <h2 className="fw-light mb-3">
              Markets we serve
              </h2>
              <p className="lead px-lg-8">
              Property management software for every real estate portfolio
              Discover what the right property management tools can do to transform your business, no matter which property types you work with. Not sure we have what you need? Get in touch!
              </p>
            </Col>
          </Row>
          
        </Container>
      </section>
      <section className="section section-lg bg-white" id="download">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <h2 className="fw-light mb-3">Find out which property management software is right for you</h2>
              <p className="lead mb-4 me-lg-6">Looking for new software? Considering replacing your current system? New to the industry and wondering what’s available? Whatever your reasons for researching property management software, we’re here to help with a guide that includes everything you need to make a smart decision a little more quickly. Choosing the right property management software to organize, optimize and grow your business is a big decision, but it shouldn’t be overwhelming. Use the property management software checklist to help you make the right decision when reviewing the solutions available to you from any real estate technology provider.</p>
            </Col>
            <Col xs={12} lg={4}>
              
            </Col>
          </Row>
          <Row className="mt-6">
          </Row>
          <Row className="mt-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="h5 text-gray fw-normal mb-4">Find out which property management software is right for you</h2>
              <div>
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Property Management</span>
              </Navbar.Brand>
              <p>Multiple platforms to meet your property management software needs</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Property Management</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="">Blog</Card.Link></li>
                <li><Card.Link target="_blank" href="">Products</Card.Link></li>
                <li><Card.Link target="_blank" href="">About Us</Card.Link></li>
                <li><Card.Link target="_blank" href="">Contact Us</Card.Link></li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} to={Routes.DocsQuickStart.path} target="_blank">Getting started</Card.Link>
                </li>
                <li><Card.Link as={Link} to={Routes.DocsChangelog.path} target="_blank">Changelog</Card.Link></li>
                <li><Card.Link target="_blank" href="">License</Card.Link></li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">We’ll never share your details. See our <Card.Link className="text-white" href="#">Privacy Policy</Card.Link></p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Moksud 2023-<span className="current-year">2023</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
