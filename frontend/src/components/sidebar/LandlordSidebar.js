
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

//import { Routes } from "../routes";
import { Routes } from "../../routes";
import ThemesbergLogo from "../../assets/img/themesberg.svg";
import ReactHero from "../../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../../assets/img/team/profile-picture-3.jpg";


export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="Property Management" link={Routes.Presentation.path} image={ReactHero} />

              <NavItem title="Overview" link={Routes.DashboardOverview.path} icon={faChartPie} />
              <NavItem external title="Messages" link="" target="_blank" icon={faInbox} />
              
              {/* Properties */}
              <CollapsableNavItem eventKey="property/" title="Property" icon={faFileAlt}>
                <NavItem title="List Properties" link={Routes.ListProperty.path} />
                <NavItem title="Add New Property" link={Routes.NewProperty.path} />
                <NavItem title="Property Types" link={Routes.ListProperty.path} />
              </CollapsableNavItem>

              {/* Rentals */}
              <CollapsableNavItem eventKey="property/" title="Rentals" icon={faFileAlt}>
                <NavItem title="Available Properties" link={Routes.ListProperty.path} />
                <NavItem title="My Rental Agreements" link={Routes.NewProperty.path} />                
              </CollapsableNavItem>

              
              {/* Maintenance */}
              <CollapsableNavItem eventKey="property/" title="Maintenance" icon={faFileAlt}>
                <NavItem title="Submit Request" link={Routes.ListProperty.path} />
                <NavItem title="My Requests" link={Routes.NewProperty.path} />                
                <NavItem title="Schedule Repairs" link={Routes.NewProperty.path} />                
              </CollapsableNavItem>

              
              {/* Finances */}
              <CollapsableNavItem eventKey="property/" title="Finances" icon={faFileAlt}>
                <NavItem title="Financial Overview" link={Routes.ListProperty.path} />
                <NavItem title="Transactions" icon={faHandHoldingUsd} link={Routes.Transactions.path} />          
                <NavItem title="Reports" link={Routes.NewProperty.path} />                
              </CollapsableNavItem>

              
              {/* Communication */}
              <CollapsableNavItem eventKey="property/" title="Communication" icon={faFileAlt}>
                <NavItem title="Inbox" link={Routes.ListProperty.path} />
                <NavItem title="Sent Items" icon={faHandHoldingUsd} link={Routes.Transactions.path} />          
                <NavItem title="New Message" link={Routes.NewProperty.path} />                
              </CollapsableNavItem>
                            
              {/* Reports & Analytics */}
              <CollapsableNavItem eventKey="property/" title="Reports & Analytics" icon={faFileAlt}>
                <NavItem title="Vacancy Reports" link={Routes.ListProperty.path} />
                <NavItem title="Financial Statements" icon={faHandHoldingUsd} link={Routes.Transactions.path} />          
                <NavItem title="Property Analytics" link={Routes.NewProperty.path} />                
              </CollapsableNavItem>

              
              {/* User Management */}
              <CollapsableNavItem eventKey="property/" title="User Management" icon={faFileAlt}>
                <NavItem title="All Users" link={Routes.ListProperty.path} />
                <NavItem title="Add New User" icon={faHandHoldingUsd} link={Routes.Users.path} />          
                <NavItem title="User Roles" link={Routes.NewProperty.path} />                
              </CollapsableNavItem>

              
              {/* Profile */}
              <CollapsableNavItem eventKey="property/" title="My Profile" icon={faFileAlt}>
                <NavItem title="My Profile" link={Routes.ListProperty.path} />
                <NavItem title="Edit Profile" icon={faHandHoldingUsd} link={Routes.Transactions.path} />                          
              </CollapsableNavItem>

              {/* Settings */}
              <CollapsableNavItem eventKey="property/" title="Settings" icon={faFileAlt}>
                <NavItem title="General Settings" link={Routes.ListProperty.path} />
                <NavItem title="Notifications" icon={faHandHoldingUsd} link={Routes.Transactions.path} />                          
                <NavItem title="Privacy & Security" icon={faHandHoldingUsd} link={Routes.Transactions.path} />                          
              </CollapsableNavItem>
              
              {/* Help & Support */}
              <CollapsableNavItem eventKey="property/" title="Help & Support" icon={faFileAlt}>
                <NavItem title="FAQs" link={Routes.ListProperty.path} />
                <NavItem title="Contact Support" icon={faHandHoldingUsd} link={Routes.Transactions.path} />                                          
              </CollapsableNavItem>
              
              <NavItem title="Transactions" icon={faHandHoldingUsd} link={Routes.Transactions.path} />

              <NavItem title="Users" icon={faHandHoldingUsd} link={Routes.Users.path} />

              <CollapsableNavItem eventKey="property/" title="Property" icon={faFileAlt}>
                <NavItem title="Add New" link={Routes.NewProperty.path} />
                <NavItem title="List" link={Routes.ListProperty.path} />
              </CollapsableNavItem>
              
              <NavItem title="Property Listing" icon={faCog} link={Routes.PropertyListing.path} />
              <NavItem title="Settings" icon={faCog} link={Routes.Settings.path} />
              <NavItem external title="Calendar" link="" target="_blank"  icon={faCalendarAlt} />
              <NavItem external title="Map" link="" target="_blank"  icon={faMapPin} />

              <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={Routes.BootstrapTables.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={Routes.Signin.path} />
                <NavItem title="Sign Up" link={Routes.Signup.path} />
                <NavItem title="Forgot password" link={Routes.ForgotPassword.path} />
                <NavItem title="Reset password" link={Routes.ResetPassword.path} />
                <NavItem title="Lock" link={Routes.Lock.path} />
                <NavItem title="404 Not Found" link={Routes.NotFound.path} />
                <NavItem title="500 Server Error" link={Routes.ServerError.path} />
              </CollapsableNavItem>

             
              <Dropdown.Divider className="my-3 border-indigo" />

             {/* <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
                <NavItem title="Overview" link={Routes.DocsOverview.path} />
                <NavItem title="Download" link={Routes.DocsDownload.path} />
                <NavItem title="Quick Start" link={Routes.DocsQuickStart.path} />
                <NavItem title="License" link={Routes.DocsLicense.path} />
                <NavItem title="Folder Structure" link={Routes.DocsFolderStructure.path} />
                <NavItem title="Build Tools" link={Routes.DocsBuild.path} />
                <NavItem title="Changelog" link={Routes.DocsChangelog.path} />
                </CollapsableNavItem>*/}
              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem title="Accordion" link={Routes.Accordions.path} />
                <NavItem title="Alerts" link={Routes.Alerts.path} />
                <NavItem title="Badges" link={Routes.Badges.path} />
                <NavItem external title="Widgets" link="https://example.com" target="_blank"/>
                <NavItem title="Breadcrumbs" link={Routes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={Routes.Buttons.path} />
                <NavItem title="Forms" link={Routes.Forms.path} />
                <NavItem title="Modals" link={Routes.Modals.path} />
                <NavItem title="Navbars" link={Routes.Navbars.path} />
                <NavItem title="Navs" link={Routes.Navs.path} />
                <NavItem title="Pagination" link={Routes.Pagination.path} />
                <NavItem title="Popovers" link={Routes.Popovers.path} />
                <NavItem title="Progress" link={Routes.Progress.path} />
                <NavItem title="Tables" link={Routes.Tables.path} />
                <NavItem title="Tabs" link={Routes.Tabs.path} />
                <NavItem title="Toasts" link={Routes.Toasts.path} />
                <NavItem title="Tooltips" link={Routes.Tooltips.path} />
              </CollapsableNavItem>
              {/*<NavItem external title="Themesberg" link="https://themesberg.com" target="_blank" image={ThemesbergLogo} />
              <Button as={Link} to={Routes.Upgrade.path} variant="secondary" className="upgrade-to-pro"><FontAwesomeIcon icon={faRocket} className="me-1" /></Button>*/}
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
