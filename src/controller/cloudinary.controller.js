import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
  cloud_name: '', 
  api_key: '', 
  api_secret: '
});

const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath);
};

const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};

export { uploadImage, deleteImage };
