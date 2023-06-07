import * as yup from 'yup';

export const newsletterValidationSchema = yup.object().shape({
  name: yup.string().required(),
  brand_id: yup.string().nullable().required(),
  creator_id: yup.string().nullable().required(),
});
