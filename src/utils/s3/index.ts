export const getFileNameFromS3ObjectKey = (key: string): string => key.substr(key.lastIndexOf('/') + 1);
