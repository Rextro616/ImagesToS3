import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
  cloud_name: 'dbzadapd3', 
  api_key: '239724896971933', 
  api_secret: 'JzqQIZJzQOXUt1ldlnnkBY3TWRU' 
});

const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath);
};

const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};

export { uploadImage, deleteImage };
