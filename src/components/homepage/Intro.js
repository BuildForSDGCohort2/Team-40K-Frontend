import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './homepage.css';
import CustomSlider from '../slider/CustomSlider';
import TextContent from '../TextContent';
import VideoPlayBtn from '../VideoPlayBtn';
import { toggleVideo } from '../../state/intro/intro.actions';
import Slide from '../slider/Slide';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';

const Intro = ({ videoToggle, introSlides, checkLoading }) => {
  const texts = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, maiores veniam? Soluta recusandae quod accusamus ipsa, similique consequatur vero error?';
  const showVideo = () => videoToggle(true);
  const style = {
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false
  };
  useEffect(() => {
    checkLoading(false);
  }, []);
  return (
        <div className="intro-container center">
          <div className="left-col-flex center">
            <TextContent heading="Tribal Kenya" text={texts} >
              <VideoPlayBtn activate={showVideo} />
            </TextContent>
          </div>
          <div className="right-col-flex center">
            <CustomSlider customStyles={style} >
                {introSlides.map((key) => (
                  <Slide key={key} image={key.image} content={key.content} />
                ))}
            </CustomSlider>
          </div>
        </div>
  );
};

const mapStateToProps = (state) => ({
  introSlides: state.introSlider.introSlides,
  sliderStyle: state.introSlider.style
});

const mapDispatchToProps = (dispatch) => ({
  videoToggle: (isVideoShown) => dispatch(toggleVideo(isVideoShown)),
  checkLoading: (loading) => dispatch(checkLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
