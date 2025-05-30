import { useForm } from 'react-hook-form';
import { useFormVisibility } from '../utils/FormContext';
import './AddPost.scss';

const AddPost = () => {
  const { closeForm } = useFormVisibility();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Add Post Data:', data);
    reset();
    closeForm();
  };

  return (
    <div className="addPostFormCont">
      <form className="add-post-form" onSubmit={handleSubmit(onSubmit)}>
        <button type="button" onClick={closeForm} className="close-Btn">×</button>
        <h3>Add New Post</h3>

        <label>Title</label>
        <input
          {...register('title', { required: 'Title is required' })}
          placeholder="Post Title"
        />
        {errors.title && <p className="error">{errors.title.message}</p>}

        <label>Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          placeholder="Write something..."
        />
        {errors.description && <p className="error">{errors.description.message}</p>}

        <label>Image URL</label>
        <input
          {...register('image')}
          placeholder="Optional image link"
        />

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default AddPost;
