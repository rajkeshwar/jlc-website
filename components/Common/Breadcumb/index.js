import clsx from "clsx";

const SiteBreadcrumb = (props) => {
  const {
    breadcrumbsClass,
    innerClass,
    titleClass,
    pageTitle,
  } = props;

  return (
    <div
      className={clsx("rs-breadcrumbs breadcrumbs-overlay", breadcrumbsClass)}
    >
      <div className="breadcrumbs-img-gradient"></div>
      <div className={clsx("breadcrumbs-text white-color", innerClass)}>
        <h1 className={clsx("page-title", titleClass)}>{pageTitle}</h1>
      </div>
    </div>
  );
};

export default SiteBreadcrumb;
