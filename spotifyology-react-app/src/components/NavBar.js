import React, {useRef} from "react"
import { NavLink } from 'react-router-dom';
import { buildPageSpacing, spacing, fontStyles, colors } from '../styles/index.tsx';
import { css } from 'emotion';

function NavigationBar() {

    const styles = {
        navigationBar: css`
          z-index: 1;
          position: fixed;
          width: 100%;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${spacing.regular};
          background-color: ${colors.leaf};
        `,
        headingStyle: css`
          color: ${colors.liquorice};
          margin-left:  ${spacing.regular};
        `,
        link: css`
          flex: 1;
          text-decoration: none;
          align-items: center;
          margin-right:  ${spacing.regular};
        `,
        activeLink: css`
          border-bottom-width: 2px;
          padding: 2px;
          border-bottom-style: inset;
        `,
        icon: css`
          height: 22px;
        `,
        right: css`
          float:right;
          margin-right:  ${spacing.regular};
          display: flex;
          align-items: center;
          justify-content: space-between;
          vertical-align: center;
        `,
      };
    
    
  return (
    <div className={styles.navigationBar}>
      <div className={styles.headingStyle}>
        <NavLink style={{color: colors.white}}  className={styles.link} activeClassName={styles.activeLink} to="/home" >  Spotifyology </NavLink>
      </div>
      <div className={styles.right}>      
        <NavLink style={{color: colors.white}} className={styles.link} activeClassName={styles.activeLink} to="/Jennifer" > Jennifer </NavLink>
        <NavLink style={{color: colors.white}} className={styles.link} activeClassName={styles.activeLink} to="/David" > David </NavLink>
        <NavLink style={{color: colors.white}} className={styles.link} activeClassName={styles.activeLink} to="/Jasper" > Jasper </NavLink>
        <NavLink style={{color: colors.white}} className={styles.link} activeClassName={styles.activeLink} to="/Jasmine" > Jasmine </NavLink>
        <NavLink style={{color: colors.white}} className={styles.link} activeClassName={styles.activeLink} to="/Sady" > Sady </NavLink>
        <NavLink style={{color: colors.white}} className={styles.link} activeClassName={styles.activeLink} to="/Tiffanie" > Tiffanie </NavLink>
        <NavLink style={{color: colors.white}} className={styles.link} activeClassName={styles.activeLink} to="/Tiffany" > Tiffany </NavLink>
      </div>
    </div>
  )
}
 
export default NavigationBar;