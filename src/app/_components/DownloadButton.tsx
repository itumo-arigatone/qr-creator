"use client";

import "@/app/styles/download.css";

const DownloadButton = ({
  onDownloadClick,
}: {
  onDownloadClick: () => void;
}) => {
  return (
    <div className="toggle">
      <button className="button" onClick={onDownloadClick}>
        Download
      </button>
    </div>
  );
};

export default DownloadButton;
