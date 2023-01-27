import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";
//import style from './mystyle.module.css';


export default function Practice (props) {

  const label={
    display: 'flex',
    alignItems: 'center',
};
// const textarea={
//     display:'grid',
//     backgroundcolor: 'var(--background-two ,rgba(137, 175, 224, 0.9))',
//     borderradius: '0.35rem',
//     padding: '5px 25px',

// };

const button={
    color: '#fff',
    fontsize: '1.30rem',
    border: 'none',
    borderradius:'0.26rem',
    fontsize: '1,2em',
    margin: '8px 0',
    width: '100%',
    height: '40px',
    background: 'rgb(139, 148, 247)',
    
  };
  return (
    <>
<div id="productPage" class="list-view">
  <div id="switcher">
    <label for="gSwap" class="fa fa-th" title="Switch to Grid View">
      <input type="radio" id="gSwap" value="grid-view" name="swap" checked />Grid View</label>
    <label for="lSwap" class="fa fa-th-list" title="Switch to List View">
      <input type="radio" id="lSwap" value="list-view" name="swap" />List View</label>
  </div>
  <ul id="productWrapper">
    <li class="product-block">
      <div class="pb-upper">
        <div class="pb-image">
          <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/11614/Image-Not-Available.gif" border="0" alt="Some great product" class="pb-img"/></a>
        </div>
        <div class="pb-description">
          <p class="description">
            <a href="#" title="View more information about the great product">Some great product in a bottle</a>
          </p>
        </div>
        <div class="pb-mid">
          <p class="price">$11.88</p>
        </div>
      </div>
      <div class="pb-lower">
        <a href="#" class="button">Add to cart</a>
      </div>
       </li>
      <li class="product-block">
        <div class="pb-upper">
          <div class="pb-image">
            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/11614/Image-Not-Available.gif" border="0" alt="Some great product" class="pb-img"/></a>
          </div>
          <div class="pb-description">
            <p class="description">
              <a href="#" title="View more information about the great product">Great product in bottle, this longer description than the one before.</a>
            </p>
          </div>
          <div class="pb-mid">
            <p class="price"><strike>$11.88</strike>
              <br/> $10.88
            </p>
          </div>
        </div>
        <div class="pb-lower">
          <a href="#" class="button">Add to cart</a>
        </div>
      </li>
      <li class="product-block">
        <div class="pb-upper">
          <div class="pb-image">
            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/11614/Image-Not-Available.gif" border="0" alt="Some great product" class="pb-img"/></a>
          </div>
          <div class="pb-description">
            <p class="description">
              <a href="#" title="View more information about the great product">Some other product</a>
            </p>
          </div>
          <div class="pb-mid">
            <p class="price">$11.88</p>
          </div>
        </div>
        <div class="pb-lower">
          <a href="#" class="button">Add to cart</a>
        </div>
      </li>
      <li class="product-block">
        <div class="pb-upper">
          <div class="pb-image">
            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/11614/Image-Not-Available.gif" border="0" alt="Some great product" class="pb-img"/></a>
          </div>
          <div class="pb-description">
            <p class="description">
              <a href="#" title="View more information about the great product">Another product in bottle that has a long description  that takes up a lot of vertical space in the layout</a>
            </p>
          </div>
          <div class="pb-mid">
            <p class="price">$11.88</p>
          </div>
        </div>
        <div class="pb-lower">
          <a href="#" class="button">Add to cart</a>
        </div>
      </li>
      <li class="product-block">
        <div class="pb-upper">
          <div class="pb-image">
            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/11614/Image-Not-Available.gif" border="0" alt="Some great product" class="pb-img"/></a>
          </div>
          <div class="pb-description">
            <p class="description">
              <a href="#" title="View more information about the great product">Another product in bottle that has a long description  that takes up a lot of vertical space in the layout</a>
            </p>
          </div>
          <div class="pb-mid">
            <p class="price">$11.88</p>
          </div>
        </div>
        <div class="pb-lower">
          <a href="#" class="button">Add to cart</a>
        </div>
      </li>

  </ul>
</div>

    </>
  );
};

// export default UploadForm;