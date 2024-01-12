import { FunctionComponent } from "react";
import { ReactComponent as ImgIcon } from "./image.svg";
import {
  Wrapper,
  ImgName,
  DownloadButton,
  AttachmentItemSection
} from "./Attachment.styles";

interface AttachmentProps {
  fileName: string;
  progress?: number;
  error?: string;
}

const AttachmentItem: FunctionComponent<AttachmentProps> = ({
  progress,
  error,
  fileName
}): JSX.Element => {
  console.log({ progress });
  return (
    <div>
      <AttachmentItemSection
        style={{
          border:
            progress && progress < 100
              ? "1px solid orange"
              : error
              ? "1px solid red"
              : "1px solid rgba(0, 0, 0, 0.2)"
        }}
      >
        <Wrapper>
          <ImgIcon />
          <ImgName>{fileName}</ImgName>
        </Wrapper>

        <DownloadButton />
      </AttachmentItemSection>
      <div
        style={{
          height: 5,
          backgroundColor: "orange",
          width: progress ? `${progress}%` : "0",
          display: progress && progress === 100 ? "none" : "block"
        }}
      ></div>
      {error && (
        <div style={{ color: "red", textAlign: "left", marginTop: 5 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export { AttachmentItem };
