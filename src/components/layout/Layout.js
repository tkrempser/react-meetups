import styles from "./Layout.module.css";
import NavigationMenu from "./NavigationMenu";

function Layout(props) {
  return (
    <div>
      <NavigationMenu />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
