// FullStack.jsx

import React, { useState, useRef } from "react";

import fsimg1 from "../../image/lims.png";
import fsimg2 from "../../image/clart.png";
import fsimg3 from "../../image/dzital.png";
import fsimg4 from "../../image/jaisal.png";
import fsimg5 from "../../image/chat.jpg";
import fsimg6 from "../../image/authpic.jpg";
import "./AllProjects.css";

const FullStack = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          {/* First card-box */}
          <div className="card-box">
            <div className="image-wrap">
              <img src={fsimg1} alt="example card" />
              <figcaption className="price">
                <a target="_blank" href="https://lab.clart.in">
                  <button class="custom-btn btn-12">
                    <span>Click</span>
                    <span>Demo</span>
                  </button>
                </a>
              </figcaption>
            </div>
            <div className="content-box">
              <h2 className="title">
                CLART LIMS Super Admin Panel – West Bengal Government Laboratory
                Test Management System
              </h2>
              <div className="text-box">
                <p>
                  {" "}
                  Tech Stack: React.js, Node.js, Express, SQL, Payment Gateway,
                  Nodemailer, OTP, Barcode Scanner Developed the Super Admin
                  Panel for CLART (Centre for Laboratory Animal Research and
                  Training), a West Bengal Government project under West Bengal
                  Livestock Development Corporation Limited. The system
                  facilitates medical test bookings for pets, phlebotomist
                  sample collection, lab testing, and result management.
                  <br />
                  <strong>Key Features: </strong>
                  <ul className="blog-ul">
                    <li>
                      Comprehensive Test Management: CRUD operations for test
                      parameters and health packages.
                    </li>

                    <li>
                      Phlebotomist Scheduling: Managing phlebotomist zones, time
                      slots, and test collection allocations.
                    </li>

                    <li>
                      Lab & Collection Center Coordination: Overseeing test
                      transfers and lab distribution.
                    </li>

                    <li>
                      Inventory Management: Tracking reagent stocks and medical
                      testing equipment..
                    </li>

                    <li>
                      System Configurations: Handling all administrative
                      settings and complex calculations.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Second card-box */}
          <div className="card-box">
            <div className="image-wrap">
              <img src={fsimg2} alt="example card" />
              <figcaption className="price">
                <a target="_blank" href="https://clart.in">
                  <button class="custom-btn btn-12">
                    <span>Click</span>
                    <span>Demo</span>
                  </button>
                </a>
              </figcaption>
            </div>
            <div className="content-box">
              <h2 className="title">
                CLART Super Admin Panel – Laboratory Animal Management System
              </h2>
              <div className="text-box">
                <p>
                  {" "}
                  Tech Stack: React.js, Node.js, Express, SQL, Payment Gateway,
                  Nodemailer, OTP, Barcode Scanner Developed the Super Admin
                  Panel for CLART (Centre for Laboratory Animal Research and
                  Training), a West Bengal Government project under West Bengal
                  Livestock Development Corporation Limited. The system
                  facilitates the breeding, and sale of laboratory animals
                  (rats, fish, hamsters) for research and medical institutes.
                  <br />
                  <strong>Key Features: </strong>
                  <ul className="blog-ul">
                    <li>
                      Animal Lifecycle Management: Tracking each animal’s life
                      stages, from weanling to culled period.
                    </li>

                    <li>
                      Inventory Control: Managing stock levels for packing boxes
                      and essential supplies.
                    </li>

                    <li>
                      Purchase & Order Processing: Facilitating animal sales to
                      research and medical institutions.
                    </li>

                    <li>
                      System Configurations: Overseeing all administrative
                      settings, records, and workflow automation.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Second card-box */}
          <div className="card-box">
            <div className="image-wrap">
              <img src={fsimg3} alt="example card" />
              <figcaption className="price">
                <a target="_blank" href="https://dzital.com">
                  <button class="custom-btn btn-12">
                    <span>Click</span>
                    <span>Demo</span>
                  </button>
                </a>
              </figcaption>
            </div>
            <div className="content-box">
              <h2 className="title">
                Dzital – Multi-Purpose Online Marketplace & Service Platform
              </h2>
              <div className="text-box">
                <p>
                  {" "}
                  Tech Stack: React.js, Node.js, Express, MongoDB, Payment
                  Gateway, Nodemailer, OTP Worked on Dzital, a comprehensive
                  multi-purpose platform enabling users to buy & sell products,
                  offer courses, list real estate, and post job
                  opportunities—combining features of OLX, Udemy, MagicBricks,
                  and Naukri into a single ecosystem.This all-in-one platform
                  streamlines e-commerce, education, real estate, and
                  recruitment, offering seamless transactions and user
                  engagement across diverse industries.
                  <br />
                  <strong>Key Features: </strong>
                  <ul className="blog-ul">
                    <li>
                      E-commerce Marketplace: Users can create accounts and sell
                      fashion, beauty, electronics, and other products.
                    </li>

                    <li>
                      Online Learning Hub: Course creators can post lessons,
                      conduct live classes, and sell courses.
                    </li>

                    <li>
                      Real Estate Listings: Builders and property owners can
                      list houses & properties, while buyers can connect with
                      them
                    </li>

                    <li>
                      Job Portal: Companies can post recruitment opportunities,
                      and job seekers can apply.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Second card-box */}
          <div className="card-box">
            <div className="image-wrap">
              <img src={fsimg4} alt="example card" />
              <figcaption className="price">
                <a target="_blank" href="https://jaisal.co.in">
                  <button class="custom-btn btn-12">
                    <span>Click</span>
                    <span>Demo</span>
                  </button>
                </a>
              </figcaption>
            </div>
            <div className="content-box">
              <h2 className="title">
                Jaisal – RiceDealer E-Commerce Platform for Rice & Grain
                Distribution
              </h2>
              <div className="text-box">
                <p>
                  {" "}
                  Tech Stack: React.js, Node.js, Express, MongoDB, Payment
                  Gateway, Nodemailer, OTP Worked on RiceDealer, a specialized
                  e-commerce platform for rice and grain distribution, enabling
                  seamless product listing, order management, and checkout for
                  customers while providing a robust admin panel for business
                  operations.This platform ensures a streamlined purchasing
                  experience for customers while allowing the business to
                  efficiently manage inventory, orders, and logistics through an
                  advanced admin system.
                  <br />
                  <strong>Key Features: </strong>
                  <ul className="blog-ul">
                    <li>
                      E-Commerce Functionality: Shopping cart, product listings,
                      product details, coupon application, and secure checkout..
                    </li>

                    <li>
                      Payment Integration: Seamless payment processing through a
                      Phi Commerce payment gateway.
                    </li>

                    <li>
                      Inventory & Stock Management: Admin can add, update, and
                      track stock with linked unit types and packing bag types
                    </li>

                    <li>
                      Order & Delivery Management: Handling orders, delivery
                      personnel, and serviceable pincodes.
                    </li>
                    <li>
                      Comprehensive Admin Panel: Full CRUD operations for
                      products, categories, stock, and master data
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Second card-box */}
          <div className="card-box">
            <div className="image-wrap">
              <img
                src={fsimg5}
                alt="example card"
                style={{ objectFit: "contain" }}
              />
              <figcaption className="price">
                <a
                  target="_blank"
                  href="https://chatapp-gfry.onrender.com/login"
                >
                  <button class="custom-btn btn-12">
                    <span>Click</span>
                    <span>Demo</span>
                  </button>
                </a>
              </figcaption>
            </div>
            <div className="content-box">
              <h2 className="title">
                Real-Time Chat Application Using Web sockets
              </h2>
              <div className="text-box">
                <p>
                  {" "}
                  MERN Stack: Utilizing MongoDB, Express.js, React, and Node.js
                  to build a powerful and scalable web application. Tailwind
                  CSS: Ensuring a sleek, modern, and fully responsive design for
                  optimal user experience across all devices. Redux: Managing
                  the application state efficiently to handle complex user
                  interactions. Socket.io: Enabling real-time, two-way
                  communication for an instant messaging experience. Render:
                  Deployed on Render for high availability and scalability. 💡
                  Features:
                  <br />
                  <strong>Key Features: </strong>
                  <ul className="blog-ul">
                    <li>
                      User Authentication: Secure signup and login to protect
                      user data using JWT authentication.
                    </li>

                    <li>
                      Friend Requests: Users can send and accept friend
                      requests, expanding their network.
                    </li>

                    <li>
                      Instant Messaging: Real-time chat functionality allows
                      users to communicate instantly with friends.
                    </li>

                    <li>
                      Responsive Design: The application is fully responsive,
                      ensuring usability on both desktops and mobile devices.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Second card-box */}
          <div className="card-box">
            <div className="image-wrap">
              <img
                src={fsimg6}
                style={{ objectFit: "contain" }}
                alt="example card"
               
              />
              <figcaption className="price">
                <a
                  target="_blank"
                  href="https://fullauth-mern.onrender.com/login"
                >
                  <button class="custom-btn btn-12">
                    <span>Click</span>
                    <span>Demo</span>
                  </button>
                </a>
              </figcaption>
            </div>
            <div className="content-box">
              <h2 className="title">
                Empowering Users with Secure Authentication: A Full-Stack
                Authentication Web App Using MERN!
              </h2>
              <div className="text-box">
                <p>
                  {" "}
                  Tech Stack: React.js | Node.js | Express.js | MongoDB | JWT |
                  Tailwind CSS
                  <br />
                  <strong>Key Features: </strong>
                  Sign Up & Login: Users can sign up and log in securely with
                  their email and password. 📧 Email Verification: After signing
                  up, users receive a verification OTP via email to confirm
                  their account. 🛡️ Secure Dashboard Access: Post-verification
                  or login, users are redirected to a personalized dashboard. 🔄
                  Password Reset: Forgot your password? No problem! Users can
                  request a password reset directly from the dashboard, and an
                  email will be sent with reset instructions. I utilized the
                  MERN stack to build this app, with React.js on the frontend,
                  Node.js and Express.js on the backend, and MongoDB for
                  database management. JWT tokens ensure secure authentication,
                  and Nodemailer SMTP services handle all email communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStack;
