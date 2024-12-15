"use client";
import React from "react";
import styles from "./tabs.module.css";
import { useState } from "react";
import Description from "./Description";
import MoreInfoes from "./MoreInfoes";
import Comments from "./Comments";
const Tabs = ({ product }) => {
  const [tab, setTab] = useState("description");

  return (
    <>
      <div data-aos="fade-left" className={styles.tabs}>
        <ul>
          <li>
            <button
              className={tab === "description" ? styles.active_tab : ""}
              onClick={() => setTab("description")}
            >
             Description
            </button>
          </li>
          <li>
            <button
              className={tab === "moreInfoes" ? styles.active_tab : ""}
              onClick={() => setTab("moreInfoes")}
            >
              More infos
            </button>
          </li>
          <li>
            <button
              className={tab === "comments" ? styles.active_tab : ""}
              onClick={() => setTab("comments")}
            >
            Comments(
              {product.comments.filter((comment) => comment.isAccept).length})
            </button>
          </li>
        </ul>

        <div className={styles.contents}>
          <section>
            {tab === "description" && <Description product={product} />}
            {tab == "moreInfoes" && (
              <MoreInfoes product={JSON.parse(JSON.stringify(product))} />
            )}
            {tab == "comments" && (
              <Comments
                productID={product._id}
                comments={JSON.parse(JSON.stringify(product))}
              />
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Tabs;
