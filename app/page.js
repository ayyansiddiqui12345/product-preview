import Image from "next/image";
import styles from "./page.module.css";
import { SidebarComponent } from "@/src/Sidebar";
import { NavbarComponent } from "@/src/navbar";
import { TableComponent } from "@/src/table";

export default function Home() {
  return (
    <div className={styles.layout}>
      <SidebarComponent />

      <div className={styles.content}>
        <NavbarComponent />
        <div className={styles.center}>
          <div className={styles.whitebox}>
            <div className={styles.container}>
              <TableComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
