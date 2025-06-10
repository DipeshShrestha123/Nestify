import { useForm } from 'react-hook-form';
import { useFormVisibility } from '../utils/FormContext';
import './UpdateProfile.scss';
import { updateProfile } from '../utils/api';


const UpdateProfile = () => {
  const { closeForm } = useFormVisibility();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      avatar: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await updateProfile(data);
      console.log("Update success:", res.data);
      reset();
      closeForm();
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="updatePostFormCont">
      <form className="update-profile-form" onSubmit={handleSubmit(onSubmit)}>
        <button type="button" onClick={closeForm} className="close-Btn">×</button>
        <h3>Update Profile</h3>

        <label>Username</label>
        <input
          {...register('username', { required: 'Username is required' })}
          placeholder="Your username"
        />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <label>Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email',
            },
          })}
          placeholder="you@example.com"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Avatar URL</label>
        <input
          {...register('avatar')}
          placeholder="Link to your avatar image"
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
