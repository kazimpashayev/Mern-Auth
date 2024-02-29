import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from '../store/slices/userSlice';
import Swal from 'sweetalert2';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading } = useSelector((state) => state.user);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const handleUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setFormData({ ...formData, profilePhoto: url })
        );
      }
    );
  };

  useEffect(() => {
    if (image) {
      handleUpload(image);
    }
  }, [image]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());

      const response = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data));
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update user details',
        });
        return;
      }

      dispatch(updateUserSuccess(data));

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User details have been updated successfully!',
      });
    } catch (error) {
      dispatch(updateUserFailure(error));
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
          src={formData.profilePhoto || currentUser.profilePhoto}
          alt="The Profile Photo"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-700">
              Error uploading image (file size must be less than 2 MB)
            </span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className="text-gray-700">{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-green-700">Image uploaded successfully</span>
          ) : (
            ''
          )}
        </p>
        <input
          defaultValue={currentUser.username}
          className="bg-gray-200 rounded-lg p-3"
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          defaultValue={currentUser.email}
          className="bg-gray-200 rounded-lg p-3"
          type="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="bg-gray-200 rounded-lg p-3"
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="bg-gray-800 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80">
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
