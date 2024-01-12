import { BaseSyntheticEvent } from "react";

interface UploadButtonProps {
  onChange?: (output: File[]) => void;
  multiple?: boolean;
}

const UploadButton = ({
  multiple = false,
  onChange = () => {}
}: UploadButtonProps) => {
  const onChangeWrapper = (e: BaseSyntheticEvent) => {
    const { files }: { files: FileList } = e.target;
    onChange(Object.keys(files).map((_, index) => files[index]));
  };
  return (
    <input
      multiple={multiple}
      onChange={onChangeWrapper}
      type="file"
      title="Upload"
    />
  );
};

export { UploadButton };
