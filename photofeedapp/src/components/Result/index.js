import React, { useState, useEffect } from "react";
import "./result.css";
import ImageBox from "../ImageBox/";
import Loader from "../Loader/";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonary from "react-masonry-css";
import Modal from "../Modal/";

const Result = ({ flag, handleSwitch, modalImage }) => {
  const [images, setImages] = useState([]);

  const API = `https://api.unsplash.com/photos/random?client_id=g3bLSaOsb8LyAccVOmrTm9N1bGqYuU9obhNaf4X2K4E&count=10`;
  //Function to fetch Images
  const fetchingData = async () => {
    const jsonData = await fetch(API);
    const data = await jsonData.json();
    console.log(data);
    setImages([...images, ...data]);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const breakPoints = {
    default: 6,
    1200: 5,
    992: 4,
    768: 3,
    576: 1,
  };
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchingData}
      hasMore={true}
      loader={<Loader />}
    >
      {flag ? <Modal modalImage={modalImage} handleSwitch={handleSwitch} /> : null}

      <Masonary
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((item, id) => {
          return (
            <ImageBox
              key={item.id}
              image={item.urls.thumb}
              handleSwitch={() => handleSwitch(item.urls.small)}
            />
          );
        })}
      </Masonary>
    </InfiniteScroll>
  );
};

export default Result;
