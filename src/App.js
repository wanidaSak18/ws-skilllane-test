import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import ReadMoreReact from 'read-more-react';
import Home from './views/Home'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const minimumLength	= 80
const idealLength=	100
const maxLength	=200
const readMoreText=	"read more"
const readLessText=	"read less"
const courseDetailText = 'นวัตกรรม (Innovation) เป็นสิ่งที่ทุกคนกำลังมองหา  เพราะไม่ว่าคุณจะเป็นพนักงานบริษัท ผู้บริหาร เจ้าของกิจการ หรือไม่ว่าจะทำสายอาชีพอะไรก็ตาม เราต่างอยากทำให้งานของเราออกมาดีขึ้น อยากทำงานให้น้อยแต่ได้ผลมาก และอยากสร้างผลงานที่สร้างผลกระทบที่ดีในวงกว้าง'
function App() {
  return (
    <div className="App">
      <React.Fragment>
        {/* banner */}
        <div className="banner-course-detail _academic _tu-banner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-11">
                <div className="banner-course-detail-sub-header">
                  <span className="academic-icon">
                    <image src="https://skilllane.s3-ap-southeast-1.amazonaws.com/tu/icon-tuxsa.png" />
                  </span>
                  หลักสูตรปริญญาโทออนไลน์
                </div>
                <div className="banner-course-detail-header">
                  <h1>Design Thinking กระบวนการคิดเชิงออกแบบ</h1>
                </div>
                <div className="banner-course-detail-degree">
                  <a
                    href="https://www.skilllane.com/academic/tuxsa/businessinnovation"
                    className="btn btn-degree"
                  >
                    ปริญญาโทบริหารธุรกิจ สาขา Business Innovation
                  </a>
                </div>
                <div className="banner-course-detail-footer -gutter-bottom -display-block">
                  <div className="review-course-detail">
                    <div className="stars read-only">
                      <div className="star-svg-container filled">
                        <image
                          className="star-svg"
                          src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg"
                        />
                      </div>
                      <div className="star-svg-container filled">
                        <image
                          className="star-svg"
                          src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg"
                        />
                      </div>
                      <div className="star-svg-container filled">
                        <image
                          className="star-svg"
                          src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg"
                        />
                      </div>
                      <div className="star-svg-container filled">
                        <image
                          className="star-svg"
                          src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg"
                        />
                      </div>
                      <div className="star-svg-container">
                        <image
                          className="star-svg"
                          src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg"
                          style={{
                            clipPath: "inset(0px 8px 0px 0px)",
                            WebkitClipPath: "inset(0px 8px 0px 0px)",
                          }}
                        />
                      </div>
                    </div>
                    <h3>4.7 (578 รีวิว)</h3>
                  </div>
                  <div
                    className="social-share-button"
                    id="social-popover"
                    data-toggle="popover"
                    data-placement="bottom"
                    data-original-title
                    title
                  >
                    <span className="social-share-icon">
                      <svg
                        className="svg-inline--fa fa-share-alt fa-w-14"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="share-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M352 320c-25.6 0-48.9 10-66.1 26.4l-98.3-61.5c5.9-18.8 5.9-39.1 0-57.8l98.3-61.5C303.1 182 326.4 192 352 192c53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 9.8 1.5 19.6 4.4 28.9l-98.3 61.5C144.9 170 121.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.6 0 48.9-10 66.1-26.4l98.3 61.5c-2.9 9.4-4.4 19.1-4.4 28.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96zm0-272c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM96 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm256 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                        />
                      </svg>
                      {/* <i class="far fa-share-alt"></i> */}
                    </span>
                    <span className="social-share-text">แชร์คอร์สนี้</span>
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* course-academic */}
        <div class="content-course course-academic none-credit-mode">
          <div class="container">
            <div class="row content-course-row">
              {/* video-container */}
              <div class="video-container content-course-card -padding">
                <div class="video preview-video-card">
                  <image></image>
                </div>
              </div>
              {/* course-audit-container */}
              <div class="course-audit-container content-course-card -padding"></div>
              {/* course-sidebar-container */}
              <div class="course-sidebar-container content-course-card -relative"></div>
            </div>
          </div>
        </div>
        {/* <Home /> */}
        <Tabs>
          <TabList>
            <Tab>รายละเอียด</Tab>
            <Tab>วิธีการชำระเงิน</Tab>
            <Tab>ห้องสนทนา</Tab>
            <Tab>ผู้สอน</Tab>
          </TabList>
          <TabPanel>
            <ReadMoreReact
              text={courseDetailText}
              min={minimumLength}
              ideal={idealLength}
              max={maxLength}
              readMoreText={readMoreText}
              readLessText={readLessText}
            />
          </TabPanel>
        </Tabs>
      </React.Fragment>
    </div>
  );
}

export default App;
