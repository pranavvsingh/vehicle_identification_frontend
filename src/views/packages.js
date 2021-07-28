import React, { useState, useEffect } from "react";
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CContainer,
} from "@coreui/react";
import axios from "axios";

const packageInfo = [
  {
    title: "Brown eggs",
    type: "dairy",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Raw organic brown eggs in a basket",
    filename: "0.jpg",
    height: 600,
    width: 400,
    price: 28.1,
    rating: 4,
  },
  {
    title: "Sweet fresh stawberry",
    type: "fruit",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Sweet fresh stawberry on the wooden table",
    filename: "1.jpg",
    height: 450,
    width: 299,
    price: 29.45,
    rating: 4,
  },
  {
    title: "Asparagus",
    type: "vegetables",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Asparagus with ham on the wooden table",
    filename: "2.jpg",
    height: 450,
    width: 299,
    price: 18.95,
    rating: 3,
  },
  {
    title: "Green smoothie",
    type: "dairy",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description:
      "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    filename: "3.jpg",
    height: 600,
    width: 399,
    price: 17.68,
    rating: 4,
  },
  {
    title: "Raw legums",
    type: "vegetables",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Raw legums on the wooden table",
    filename: "4.jpg",
    height: 450,
    width: 299,
    price: 17.11,
    rating: 2,
  },
  {
    title: "Baking cake",
    type: "dairy",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description:
      "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    filename: "5.jpg",
    height: 450,
    width: 675,
    price: 11.14,
    rating: 4,
  },
  {
    title: "Pesto with basil",
    type: "vegetables",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Italian traditional pesto with basil, chesse and oil",
    filename: "6.jpg",
    height: 450,
    width: 299,
    price: 18.19,
    rating: 2,
  },
  {
    title: "Hazelnut in black ceramic bowl",
    type: "vegetables",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description:
      "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    filename: "7.jpg",
    height: 450,
    width: 301,
    price: 27.35,
    rating: 0,
  },
  {
    title: "Fresh stawberry",
    type: "fruit",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Sweet fresh stawberry on the wooden table",
    filename: "8.jpg",
    height: 600,
    width: 399,
    price: 28.59,
    rating: 4,
  },
  {
    title: "Lemon and salt",
    type: "fruit",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Rosemary, lemon and salt on the table",
    filename: "9.jpg",
    height: 450,
    width: 299,
    price: 15.79,
    rating: 5,
  },
  {
    title: "Homemade bread",
    type: "bakery",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Homemade bread",
    filename: "10.jpg",
    height: 450,
    width: 301,
    price: 17.48,
    rating: 3,
  },
  {
    title: "Legums",
    type: "vegetables",
    credits: 10,
    offers: ["offer 1", "offer 2", "offer 3"],
    description: "Cooked legums on the wooden table",
    filename: "11.jpg",
    height: 600,
    width: 399,
    price: 14.77,
    rating: 0,
  },
];

const Packages = () => {
  const [packageData, setPackageData] = useState([]);

  const getPackageData = () => {
    setPackageData(packageInfo);
  };

  useEffect(() => {
    getPackageData();
  });

  const renderCard = (pacakage, index) => {
    return (
      <CCard className="rounded-lg" key={index} style={{ width: "300px"}}>
        <CCardHeader className="text-primary font-weight-bold text-center" style={{fontSize: '1.2rem'}}>
          15% off, {pacakage.title}
        </CCardHeader>
        <CCardBody>
          <CRow className="align-items-center">
            <CCol
              className="text-primary font-weight-bold text-center"
              style={{ fontSize: "1.7rem" }}
            >
              {pacakage.credits} <br /> Credits
            </CCol>
            <div className="row col flex-column font-weight-bold text-center">
              {pacakage.offers.map((offer, index) => (
                <>
                  <CCol clas>
                    {offer}
                    {index < 2 && (
                      <>
                        <br /> or
                      </>
                    )}
                  </CCol>
                </>
              ))}
            </div>
          </CRow>
        </CCardBody>
        <CCardFooter
          color="primary"
          className="text-white font-weight-bold text-center"
          style={{fontSize: '1.3rem'}}
        >
          Buy Now ${pacakage.price}
        </CCardFooter>
      </CCard>
    );
  };

  return (
    <CContainer>
      <div className="text-center text-white mb-5">
        <h2>Packages</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <CRow className="justify-content-around">
        {packageData.map(renderCard)}
      </CRow>
    </CContainer>
  );
};

export default Packages;
