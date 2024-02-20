import Image from "next/image";
import styles from "./page.module.css";
import { SidebarComponent } from "@/src/Sidebar";
import { NavbarComponent } from "@/src/navbar";
import { CardComponent } from "@/src/card";

export default function Home() {
  return (
    <div className={styles.layout}>
      <SidebarComponent />

      <div className={styles.content}>
        <NavbarComponent />
        <div className={styles.center}>
          <div className={styles.whitebox}>
            <CardComponent />
              
            </div>
          </div>
        </div>
      </div>
  );
}
