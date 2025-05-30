import { Suspense, lazy } from 'react';
import { useFormVisibility } from '../utils/FormContext';

const AddPostForm = lazy(() => import('./AddPost'));
const UpdateProfileForm = lazy(() => import('./UpdateProfile'));

const FormContainer = () => {
  const { formType } = useFormVisibility();

  let FormComponent;
  switch (formType) {
    case 'addPost':
      FormComponent = AddPostForm;
      break;
    case 'updateProfile':
      FormComponent = UpdateProfileForm;
      break;
    default:
      return null;
  }

  return (
    <div className="form-container">
      <Suspense fallback={<div>Loading form...</div>}>
        <FormComponent />
      </Suspense>
    </div>
  );
};

export default FormContainer;