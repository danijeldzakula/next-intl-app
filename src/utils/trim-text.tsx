type IProps = {
  text: string;
  maxLength?: number;
};

export default function trimText({ text, maxLength = 20 }: IProps) {
  if (!text) {
    throw Error('This function text is required field');
  }

  const trimmedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return trimmedText;
}
