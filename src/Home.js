import React from "react";
import library from "./library.jpg";

const Home = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center">WELCOME TO NEW BOOK STORE</h2>
      <p className="my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit
        amet porttitor eget dolor morbi non. Ullamcorper dignissim cras
        tincidunt lobortis feugiat vivamus at augue eget. Sit amet luctus
        venenatis lectus magna fringilla. Nunc faucibus a pellentesque sit amet
        porttitor eget. Nibh ipsum consequat nisl vel. Ut placerat orci nulla
        pellentesque dignissim enim sit amet venenatis. Tellus id interdum velit
        laoreet id donec ultrices tincidunt arcu.
      </p>
      <img src={library} className="img-fluid my-4" alt="library" />
    </div>
  );
};

export default Home;
