import styled from "styled-components";
import { ReactComponent as DownloadIcon } from "./download.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: "center";
  column-gap: 12px;
`;

const ImgName = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const DownloadButton = styled(DownloadIcon)`
  cursor: pointer;
  display: block;
`;

const AttachmentItemSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export { Wrapper, ImgName, DownloadButton, AttachmentItemSection };
