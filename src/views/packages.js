import React, { useState, useEffect } from "react";
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
} from "@coreui/react";
import axios from "axios";

const packageInfo = [
  {
    title: "Brown eggs",
    type: "dairy",
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
    description: "Sweet fresh stawberry on the wooden table",
    filename: "1.jpg",
    height: 450,
    width: 299,
    price: 29.45,
    rating: 4,
  },
  {
    title: "Asparagus",
    type: "vegetable",
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
    type: "vegetable",
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
    type: "vegetable",
    description: "Italian traditional pesto with basil, chesse and oil",
    filename: "6.jpg",
    height: 450,
    width: 299,
    price: 18.19,
    rating: 2,
  },
  {
    title: "Hazelnut in black ceramic bowl",
    type: "vegetable",
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
    description: "Homemade bread",
    filename: "10.jpg",
    height: 450,
    width: 301,
    price: 17.48,
    rating: 3,
  },
  {
    title: "Legums",
    type: "vegetable",
    description: "Cooked legums on the wooden table",
    filename: "11.jpg",
    height: 600,
    width: 399,
    price: 14.77,
    rating: 0,
  },
  {
    title: "Fresh tomato",
    type: "vegetable",
    description: "Fresh tomato juice with basil",
    filename: "12.jpg",
    height: 600,
    width: 903,
    price: 16.3,
    rating: 2,
  },
  {
    title: "Healthy breakfast",
    type: "fruit",
    description:
      "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
    filename: "13.jpg",
    height: 450,
    width: 350,
    price: 13.02,
    rating: 2,
  },
  {
    title: "Green beans",
    type: "vegetable",
    description: "Raw organic green beans ready to eat",
    filename: "14.jpg",
    height: 450,
    width: 300,
    price: 28.79,
    rating: 1,
  },
  {
    title: "Baked stuffed portabello mushrooms",
    type: "bakery",
    description:
      "Homemade baked stuffed portabello mushrooms with spinach and cheese",
    filename: "15.jpg",
    height: 600,
    width: 400,
    price: 20.31,
    rating: 1,
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
      <CCard className="mb-6" key={index} style={{ margin: 10 }}>
        <CCardHeader>{pacakage.title}</CCardHeader>
        <CCardBody>{pacakage.description}</CCardBody>
        <CCardFooter>{pacakage.width}</CCardFooter>
      </CCard>
    );
  };

  return (
    <CCol>
      <CRow xs={4}>{packageData.map(renderCard)}</CRow>
    </CCol>
  );
};

export default Packages;
