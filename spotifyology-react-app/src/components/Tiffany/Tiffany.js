import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { Col, Row, Space, PageHeader, DatePicker, Carousel} from 'antd';
import "antd/dist/antd.css";

import Season from "./Season.js";
import positions_photo from "./positions_photo.png";
import ariana_photo from './ariana_photo.jpg';
import divinely_photo from './divinely_photo.jpg';
import lewis_photo from './lewis_photo.jpg'
import evermore_photo from './evermore_photo.png'
import taylor_photo from './taylor_photo.jpg'
import alaska_photo from './alaska_photo.png'
import maggie_photo from './maggie_photo.jpg'

const { RangePicker } = DatePicker;

class Tiffany extends React.Component {
    constructor(props) {
        super(props); 
        
    }
    

    render() {
        const divStyle = {
            padding: "24px",
          };
        function onChange(a, b, c) {
            console.log(a, b, c);
          }
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };
        
        return (
        <body>
            
            <Carousel afterChange={onChange}>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>

            </Carousel>
            
            <Row gutter={16} justify="center">
            <PageHeader 
                justify="center"
                className="site-page-header"
                title="Top Trends by Year"
                subTitle=""
            />
            </Row>

            <Space direction="vertical" size={12}>
                <RangePicker picker="year" />
            </Space>
            
             <div className="site-card-wrapper" style={divStyle}>
             
            <Row gutter={16} justify="center">
            <Col span={8}>
            <Season
                season = "Spring"
                albumArt = {divinely_photo}
                artistArt = {lewis_photo}
                song = "Someone You Loved"
                artist = "Lewis Capaldi"
                />
            </Col>
            <Col span={8}>
            <Season
                season = "Summer"
                albumArt = {alaska_photo}
                artistArt = {maggie_photo}
                song = "Alaska"
                artist = "Maggie Rogers"
                />
            </Col>
            </Row>
            
            <Row gutter={16} justify="center">
            <Col span={8}>
            <Season
                season = "Fall"
                albumArt = {evermore_photo}
                artistArt = {taylor_photo}
                song = "evermore (feat. Bon Iver)"
                artist = "Taylor Swift"
                />
            </Col>
            <Col span={8}>
            <Season
                season = "Winter"
                albumArt = {positions_photo}
                artistArt = {ariana_photo}
                song = "Positions"
                artist = "Ariana Grade"
                />
            </Col>
            </Row>
            
        </div>
        </body>
        );
    }
  }
  
  export default Tiffany;