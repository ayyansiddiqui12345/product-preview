import React from "react";
import Button from 'react-bootstrap/Button';
import styles from "./navbar.module.css";
export const NavbarComponent = () => {
  return (
    <div className={styles.container}
      contentEditable={false}
    >
      <navbar className={styles.navbar} >
        <h3
          style={{
            color: "#000",
            userSelect: "none",
            fontFamily: "Lato",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            margin: "0",
          }}
        >
          {" "}
          Product preview{" "}
        </h3>


        
{/*         
        <div className={styles.button}>
        <Button variant="success">Add Product</Button>
        </div> */}
      </navbar>
    </div>
  );
};
