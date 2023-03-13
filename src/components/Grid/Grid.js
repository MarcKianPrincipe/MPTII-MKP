import classNames from "classnames";
import "./Grid.scss";

export const Container = (props) => {
  const wrapClass = classNames("container", props.className);
  return <div className={wrapClass}>{props.children}</div>;
};

export const Row = (props) => {
  const wrapClass = classNames("row", props.className);
  return <div className={wrapClass}>{props.children}</div>;
};

export const Col = (props) => {
  const { className, children, sm, md, lg } = props;
  const wrapClass = classNames("col", className, {
    [`col-sm-${sm}`]: sm,
    [`col-md-${md}`]: md,
    [`col-${lg}`]: lg,
  });

  return <div className={wrapClass}>{children}</div>;
};
