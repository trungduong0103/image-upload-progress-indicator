import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { AttachmentItem } from "./Attachment";
import { UploadButton } from "./UploadButton";

export default function App() {
  const [files, setFiles] = useState<File[]>();
  const [filesProgress, setFilesProgress] = useState<any>({});
  const [filesError, setFilesError] = useState<any>({});

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_name", file.name);
    await axios
      .post("/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percentage =
            (progressEvent.loaded / progressEvent.total!) * 100;
          setFilesProgress((prevState: any) => ({
            ...prevState,
            [file.name]: percentage
          }));
        }
      })
      .catch((error) => {
        setFilesError((prevState: any) => ({
          ...prevState,
          [file.name]: error.message
        }));
      });
  };

  const handleFilesChange = async (output: File[]) => {
    setFiles(output);
    Promise.all(
      output.map(async (file) => {
        await uploadFile(file);
      })
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        style={{
          width: 450,
          display: "flex",
          flexDirection: "column",
          rowGap: 12
        }}
      >
        <UploadButton multiple={false} onChange={handleFilesChange} />
        {files?.map((file, index) => {
          return (
            <AttachmentItem
              progress={filesProgress[file.name]}
              error={filesError[file.name]}
              key={index}
              fileName={file.name}
            />
          );
        })}
        <button
          onClick={() => {
            setFiles(undefined);
            setFilesProgress({});
            setFilesError({});
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
