import * as Yup from 'yup';

const uploadValidation = Yup.object().shape({
  file: Yup.object()
    .test(
      'validate-s3-image-key',
      'Please input an image.',
      (value: any): boolean => value.key !== ''
    ),
  name: Yup.string()
    .trim()
    .required('Please input a name.'),
});

export default uploadValidation;
