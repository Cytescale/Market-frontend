export const PageHeader = (props) => {
  return (
    <>
      <div className="app-page-head-cont">
        <div className="app-page-head-lab-cont">
          {props.icon}
          {props.title}
        </div>
        <div className="app-page-head-right-cont">{props.rightcont}</div>
      </div>
    </>
  );
};
