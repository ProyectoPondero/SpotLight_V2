import fileUpload from 'express-fileupload';

export const imgUploadMiddleware = fileUpload({
    useTempFiles: true,
    tempFileDir: './temp'
});