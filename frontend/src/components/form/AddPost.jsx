import { useForm } from 'react-hook-form';
import { useFormVisibility } from '../utils/FormContext';
import './AddPost.scss';
import axios from 'axios';

const AddPost = () => {
  const { closeForm } = useFormVisibility();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  try {
    // Step 1: Get user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        // Step 2: Append to data
        data.latitude = position.coords.latitude;
        data.longitude = position.coords.longitude;

        // Step 3: Send POST request with updated data
        const res = await axios.post(
          'http://localhost:8080/listdata/addpost',
          data,
          {
            withCredentials: true,
          }
        );

        console.log('Post Created:', res.data);
        reset();
        closeForm();
      },
      (error) => {
        console.error('Geolocation error:', error.message);
        alert("Please allow location access to submit the form.");
      }
    );
  } catch (err) {
    console.error('Failed to create post:', err.response?.data || err.message);
  }
};


  return (
    <div className="addPostFormCont">
      <form className="add-post-form" onSubmit={handleSubmit(onSubmit)}>
        <button type="button" onClick={closeForm} className="close-Btn">×</button>
        <h3>Add New Post</h3>

        <label>Title</label>
        <input type='text'
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

        <label>Bedrooms</label>
        <input type='number'
        {...register('bedRooms',{ required: 'Bedroom field is required' })}
        placeholder="Write no of Bedroom"
           />
        {errors.bedRooms && <p className="error">{errors.bedRooms.message}</p>}

        <label>Bathrooms</label>
        <input type='number'
        {...register('bathRooms',{ required: 'Bathroom field is required' })}
        placeholder="Write no of Bathroom"
           />
        {errors.bathRooms && <p className="error">{errors.bathRooms.message}</p>}

        <label>Price</label>
        <input type='number'
        {...register('price',{ required: 'Price field is required' })}
        placeholder="Price"
           />
        {errors.price && <p className="error">{errors.price.message}</p>}

         <label>Country</label>
        <input type='text'
          {...register('country', { required: 'country is required' })}
          placeholder="country"
        />
        {errors.country && <p className="error">{errors.country.message}</p>}

         <label>Address</label>
        <input type='text'
          {...register('address', { required: 'address is required' })}
          placeholder="address"
        />
        {errors.address && <p className="error">{errors.address.message}</p>}

        <label>Type</label>
        <select
          {...register("type", { required: "Type is required" })}
        >
          <option value="">Select Type</option>
          <option value="buy">buy</option>
          <option value="rent">rent</option>
        </select>
        {errors.type && <p className="error">{errors.type.message}</p>}

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default AddPost;
