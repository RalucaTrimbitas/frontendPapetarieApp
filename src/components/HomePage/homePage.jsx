import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLock,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Footer from "../utils/footer";
import {FaPhoneAlt, HiChevronDoubleRight} from "react-icons/all";
import NavBarClient from "../../Client/navBarClient";
import NavBar from "../NavBars/navBar";

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      sizeCart: localStorage.getItem("cartLength")
    }
  }
  render() {
    document.body.classList = "";
    document.body.classList.add("background-general");
    return (
      <React.Fragment>
        <NavBar />
        <section className="u-align-center img-homePage" id="sec-f9a4">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h2 className="u-custom-font u-font-playfair-display u-text u-text-default u-text-1">
              <Link
                to="/produse/accesorii-birou/agende-si-blocnotes-uri"
                className="nav-item-aut nav-link menu-item"
                style={{
                  fontSize: "35px",
                  marginTop: "150px",
                  position: "relative",
                  fontFamily: "Playfair Display",
                  cursor: "pointer",
                }}
              >
                DESCOPERĂ PRODUSE
              </Link>
            </h2>
            <Link
              className="nav-item-aut nav-link menu-item"
              to="/produse/accesorii-birou/agende-si-blocnotes-uri"
            >
              <HiChevronDoubleRight
                className=" menu-item"
                style={{ fontSize: "65px" }}
              />
            </Link>
          </div>
        </section>

        {/* <div id="shopify-section-1554730731326" className="shopify-section">
          <section
            className="banner-padding collection_banner  "
            style={{ padding: "70px 0px 0px 0px;" }}
          >
            <div className="container">
              <div className="row partition2">
                <div
                  className="col-md-4"
                  style={{ padding: "0px 15px 0px 15px" }}
                >
                  <a href=""></a>
                  <div className="collection-banner p-right text-right">
                    <a href="">
                      <img
                        src="//cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_437x296.png?v=1582959345"
                        data-widths="[157, 270, 303, 370, 377, 670, 570, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                        data-aspectratio="1.4797297297297298"
                        data-sizes="auto"
                        className="img-fluid lazyautosizes lazyloaded"
                        alt=""
                        data-srcset="//cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_157x.png?v=1582959345 157w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_270x.png?v=1582959345 270w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_303x.png?v=1582959345 303w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_370x.png?v=1582959345 370w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_377x.png?v=1582959345 377w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_670x.png?v=1582959345 670w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_570x.png?v=1582959345 570w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_720x.png?v=1582959345 720w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_900x.png?v=1582959345 900w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_1080x.png?v=1582959345 1080w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_1296x.png?v=1582959345 1296w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_1512x.png?v=1582959345 1512w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_1728x.png?v=1582959345 1728w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_2048x.png?v=1582959345 2048w"
                        sizes="290px"
                        srcSet="//cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_157x.png?v=1582959345 157w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_270x.png?v=1582959345 270w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_303x.png?v=1582959345 303w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_370x.png?v=1582959345 370w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_377x.png?v=1582959345 377w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_670x.png?v=1582959345 670w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_570x.png?v=1582959345 570w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_720x.png?v=1582959345 720w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_900x.png?v=1582959345 900w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_1080x.png?v=1582959345 1080w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_1296x.png?v=1582959345 1296w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_1512x.png?v=1582959345 1512w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_1728x.png?v=1582959345 1728w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/second_banner_dac71885-8fa6-451f-9823-f865c9c35ce3_2048x.png?v=1582959345 2048w"
                      />
                    </a>
                    <div className="contain-banner">
                      <a href=""></a>
                      <div>
                        <a href="">
                          <h4
                            style={{ color: "#888888" }}
                            className="lang_trans"
                            data-trans="#coll_bnr_1554730731326-0_trans_subtitle"
                          >
                            Save 25% Off
                          </h4>

                          <span
                            className="hide"
                            id="coll_bnr_1554730731326-0_trans_subtitle"
                          ></span>

                          <h2
                            style={{ color: "#000000;" }}
                            className="lang_trans"
                            data-trans="#coll_bnr_1554730731326-0_trans_title"
                          >
                            Drama <span>Book</span>
                          </h2>

                          <span
                            className="hide"
                            id="coll_bnr_1554730731326-0_trans_title"
                          ></span>
                        </a>
                        <a
                          href="/"
                          className="btn btn-solid lang_trans"
                          data-trans="#coll_bnr_1554730731326-0_trans_btntitle"
                        >
                          Order Now
                        </a>

                        <span
                          className="hide"
                          id="coll_bnr_1554730731326-0_trans_btntitle"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-4"
                  style={{ padding: "0px 15px 0px 15px" }}
                >
                  <a href="">
                    <div className="collection-banner p-center text-center">
                      <img
                        src="//cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_437x296.png?v=1582721303"
                        data-widths="[157, 270, 303, 370, 377, 670, 570, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                        data-aspectratio="1.4797297297297298"
                        data-sizes="auto"
                        className="img-fluid lazyautosizes lazyloaded"
                        alt=""
                        data-srcset="//cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_157x.png?v=1582721303 157w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_270x.png?v=1582721303 270w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_303x.png?v=1582721303 303w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_370x.png?v=1582721303 370w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_377x.png?v=1582721303 377w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_670x.png?v=1582721303 670w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_570x.png?v=1582721303 570w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_720x.png?v=1582721303 720w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_900x.png?v=1582721303 900w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_1080x.png?v=1582721303 1080w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_1296x.png?v=1582721303 1296w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_1512x.png?v=1582721303 1512w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_1728x.png?v=1582721303 1728w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_2048x.png?v=1582721303 2048w"
                        sizes="290px"
                        srcSet="//cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_157x.png?v=1582721303 157w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_270x.png?v=1582721303 270w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_303x.png?v=1582721303 303w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_370x.png?v=1582721303 370w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_377x.png?v=1582721303 377w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_670x.png?v=1582721303 670w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_570x.png?v=1582721303 570w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_720x.png?v=1582721303 720w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_900x.png?v=1582721303 900w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_1080x.png?v=1582721303 1080w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_1296x.png?v=1582721303 1296w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_1512x.png?v=1582721303 1512w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_1728x.png?v=1582721303 1728w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_3_53154d82-ec11-4cc4-93b5-b701cd650bda_2048x.png?v=1582721303 2048w"
                      />
                    </div>
                  </a>
                </div>

                <div
                  className="col-md-4"
                  style={{ padding: "0px 15px 0px 15px" }}
                >
                  <a href=""></a>
                  <div className="collection-banner p-right text-right">
                    <a href="">
                      <img
                        src="//cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_437x296.png?v=1582721299"
                        data-widths="[157, 270, 303, 370, 377, 670, 570, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                        data-aspectratio="1.4797297297297298"
                        data-sizes="auto"
                        className="img-fluid lazyautosizes lazyloaded"
                        alt=""
                        data-srcset="//cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_157x.png?v=1582721299 157w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_270x.png?v=1582721299 270w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_303x.png?v=1582721299 303w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_370x.png?v=1582721299 370w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_377x.png?v=1582721299 377w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_670x.png?v=1582721299 670w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_570x.png?v=1582721299 570w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_720x.png?v=1582721299 720w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_900x.png?v=1582721299 900w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_1080x.png?v=1582721299 1080w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_1296x.png?v=1582721299 1296w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_1512x.png?v=1582721299 1512w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_1728x.png?v=1582721299 1728w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_2048x.png?v=1582721299 2048w"
                        sizes="290px"
                        srcSet="//cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_157x.png?v=1582721299 157w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_270x.png?v=1582721299 270w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_303x.png?v=1582721299 303w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_370x.png?v=1582721299 370w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_377x.png?v=1582721299 377w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_670x.png?v=1582721299 670w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_570x.png?v=1582721299 570w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_720x.png?v=1582721299 720w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_900x.png?v=1582721299 900w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_1080x.png?v=1582721299 1080w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_1296x.png?v=1582721299 1296w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_1512x.png?v=1582721299 1512w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_1728x.png?v=1582721299 1728w, //cdn.shopify.com/s/files/1/0319/5758/1961/files/image_2_07fa9b9f-13b5-4ed9-8651-89ac55ef9296_2048x.png?v=1582721299 2048w"
                      />
                    </a>
                    <div className="contain-banner">
                      <a href=""></a>
                      <div>
                        <a href="">
                          <h4
                            style={{ color: "#888888" }}
                            className="lang_trans"
                            data-trans="#coll_bnr_1580556646972_trans_subtitle"
                          >
                            On Sale Now
                          </h4>

                          <span
                            className="hide"
                            id="coll_bnr_1580556646972_trans_subtitle"
                          ></span>

                          <h2
                            className="lang_trans"
                            data-trans="#coll_bnr_1580556646972_trans_title"
                          >
                            Story <span>Book</span>
                          </h2>

                          <span
                            className="hide"
                            id="coll_bnr_1580556646972_trans_title"
                          ></span>
                        </a>
                        <a
                          href=""
                          className="btn btn-solid lang_trans"
                          data-trans="#coll_bnr_1580556646972_trans_btntitle"
                        >
                          Order Now
                        </a>

                        <span
                          className="hide"
                          id="coll_bnr_1580556646972_trans_btntitle"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}

        <div className="container my-4">
          <div className="row text-center">
            <h3 className="text-center header-text">
              <span className="text-center" style={{ color: "#3E1B0D" }}>
                {" "}
                Categoriile noastre
              </span>
            </h3>
            <div className="col-md-3 mb-4 col1">
              <h4 className="my-5 h4 " style={{ color: "#3E1B0D" }}>
                Accesorii de birou
              </h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/produse/accesorii-birou/agende-si-blocnotes-uri"
              >
                <img
                  className="rounded-circle z-depth-2"
                  alt="100x100"
                  src="/./poze/home-page/acces.jpg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
                {/* <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer> */}
              </NavLink>
            </div>
            <div className="col-md-3 mb-4">
              <h4 className="my-5 h4" style={{ color: "#3E1B0D" }}>
                Instrumente de scris
              </h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/produse/instrumente-scris/creioane-negre-si-creioane-mecanice"
              >
                <img
                  className="rounded-circle z-depth-2"
                  alt="100x100"
                  src="/./poze/home-page/pen.jpg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              </NavLink>
            </div>
            <div className="col-md-3 mb-4">
              <h4 className="my-5 h4" style={{ color: "#3E1B0D" }}>
                Rechizite scolare
              </h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/produse/rechizite-scolare/caiete"
              >
                <img
                  className="rounded-circle z-depth-2"
                  alt="100x100"
                  src="/./poze/home-page/penar.jpeg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              </NavLink>
            </div>
            <div className="col-md-3 mb-4">
              <h4 className="my-5 h4" style={{ color: "#3E1B0D" }}>
                Articole creative și craft
              </h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/produse/articole-creative/abtibilde-si-stampile-copii"
              >
                <img
                  className="rounded-circle z-depth-2"
                  alt="100x100"
                  src="/./poze/home-page/craft1.png"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row" id="header">
          <div className="col-sm-3">
            <div className="card card-homePage">
              <div className="card-body">
                <h5 className="card-title">
                  <FaPhoneAlt style={{marginRight:"5px"}}/>
                  PROMPTITUDINE{" "}
                </h5>
                <p className="card-text">
                  Oferim seriozitate, încredere și cele mai bune servicii clienților noștri.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" id="card-homePage">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon className="icons-card" icon={faClock} />
                  COMENZI ONLINE 24/7
                </h5>
                <p className="card-text">
                  Puteți comanda atât online,cât și telefonic la numărul:
                  0751215301 ( L-V: 8-16)
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" id="card-homePage">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon className="icons-card" icon={faRedo} />
                  RETUR GRATUIT
                </h5>
                <p className="card-text">
                  Retur garantat în 30 de zile de la achizitonarea oricărui
                  produs!
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3" id="card-homePage">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon className="icons-card" icon={faLock} />
                  PLATA ÎN SIGURANȚĂ
                </h5>
                <p className="card-text">
                  Plata se face în momentul ridicării produselor, cash sau card.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
