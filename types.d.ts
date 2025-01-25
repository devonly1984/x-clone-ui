interface ImageSettings {
  type: 'original'|'wide'|'square';
  sensitive: boolean;
}
interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetaData?: { sensitive: boolean };
}