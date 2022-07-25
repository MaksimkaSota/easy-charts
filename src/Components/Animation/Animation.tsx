import React from "react";
import classes from "./Animation.module.scss";
import { Transition } from "react-transition-group";

const Animation = () => {
  // const getAnimationColumn = (): any => {
  //   let content = [];
  //   for (let i = 0; i < 30; i++) {
  //     content.push(
  //       <div key={i} className={`${classes.column} column${i + 1}`}>
  //         <Transition in={true} timeout={0}>
  //           {(state) => <div className={`${classes.block1} ${state}`} />}
  //         </Transition>
  //         <div className={classes.block2}></div>
  //         <div className={classes.block3}></div>
  //         <div className={classes.block4}></div>
  //       </div>
  //     );
  //   }
  //   return content;
  // };
  //   return (
  //     <div className={classes.animation}>
  //       {" "}
  //       <div className={`${classes.column}`}>
  //         <Transition in={true} timeout={500}>
  //           {(state) => <div className={`${classes.block1} ${state}`} />}
  //         </Transition>
  //         <div className={classes.block2}></div>
  //         <div className={classes.block3}></div>
  //         <div className={classes.block4}></div>
  //       </div>
  //     </div>
  //   );
};

export default Animation;
