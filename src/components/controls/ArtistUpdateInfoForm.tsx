import React, { useEffect } from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';
import {
  Field,
  FieldArray,
  FormikValues,
} from 'formik';
import ControlledInputTextField from './ControlledInputTextField';
import ControlledInputPhoneNumber from './ControlledInputPhoneNumber';
import ControlledInputAddress from './ControlledInputAddress';
import ControlledInputMultiSelect from './ControlledInputMultiSelect';
import InputLabel from './InputLabel';
import { styleList } from '../../constants/artistConstants';
import InputDragzone from './InputDragzone';
import { GenericButton } from './GenericButton';

interface ArtistUpdateFormProps {
  isIdle: boolean;
  values?: FormikValues;
  errors?: any;
  initValues?: {};
  setValues?: React.SetStateAction<any>;
}

export const ArtistUpdateSelfForm: React.FC<ArtistUpdateFormProps> = ({
  isIdle,
}) => {
  return (
    <Grid container spacing={2}>
      {/* artist name */}
      <Grid item xs={12}>
        <Field
          component={ControlledInputTextField}
          textLabel="Artist Name"
          name="artist_name"
        />
      </Grid>

      {/* email */}
      <Grid item xs={12}>
        <Field
          component={ControlledInputTextField}
          textLabel="Email"
          name="email"
        />
      </Grid>

      {/* first name */}
      <Grid item xs={12} sm={6}>
        <Field
          component={ControlledInputTextField}
          textLabel="First Name"
          name="first_name"
        />
      </Grid>

      {/* last name */}
      <Grid item xs={12} sm={6}>
        <Field
          component={ControlledInputTextField}
          textLabel="Last Name"
          name="last_name"
        />
      </Grid>

      {/* phone */}
      <Grid item xs={12}>
        <Field
          component={ControlledInputPhoneNumber}
          textLabel="What is the best number to reach you at?"
          name="phoneNumber"
        />
      </Grid>

      {/* instagram handle */}
      <Grid item xs={12} sm={6}>
        <Field
          component={ControlledInputTextField}
          textLabel="What is your instagram handle?"
          name="instagram"
        />
      </Grid>

      {/* website */}
      <Grid item xs={12} sm={6}>
        <Field
          component={ControlledInputTextField}
          textLabel="What is your website?"
          name="website"
        />
      </Grid>

      {/* about you */}
      <Grid item xs={12}>
        <Field
          name="about"
          component={ControlledInputTextField}
          textLabel="Tell us a little about you? (Paste bio here)"
          multiline
          rows={6}
        />
      </Grid>

      {/* address */}
      <Grid item xs={12}>
        <Field
          name="fullAddress"
          typeInput="text"
          component={ControlledInputAddress}
          textLabel="Please provide the address in which you are looking to place a mural on:"
          placeholder="your address"
        />
      </Grid>

      {/* artistic style */}
      <Grid item xs={12} mb={2}>
        <Field
          component={ControlledInputMultiSelect}
          textLabel="Describe the art styles you practice:"
          name="artStyle"
          list={styleList}
        />
      </Grid>

      {/* button */}
      <Grid item xs={12}>
        <SubmitButton type={'submit'} disabled={isIdle}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            {isIdle ? 'Please wait...' : 'Update'}
          </Box>
        </SubmitButton>
      </Grid>
    </Grid>
  );
};

// export const ArtistUpdateExperienceForm: React.FC<ArtistUpdateFormProps> = ({
//   isIdle,
// }) => {
//   return (
//     <Grid container spacing={2}>
//       {/* price per square */}
//       {/* <Grid item xs={12}>
//         <Field
//           name="price_per_square_foot"
//           typeInput="text"
//           textLabel="Price per Square Foot: $"
//           min={DEFAULT_SLIDER_MIN_VALUE}
//           max={DEFAULT_SLIDER_MAX_VALUE}
//           marks={DEFAULT_SLIDER_MARKS}
//           component={ControlledInputSlider}
//         />
//       </Grid> */}

//       {/* pay split */}
//       {/* <Grid item xs={12}>
//         <Field
//           name="pay_split_preference"
//           component={ControlledInputSelect}
//           placeholder="choose pay split"
//           textLabel="What is your preferred pay split?"
//           typeInput="select"
//           list={['33/33/33', '50/50', '20/40/40', '10/45/45']}
//         />
//       </Grid> */}

//       {/* provide crypto */}
//       {/* <Grid item xs={12}>
//         <Field
//           component={ControlledInputRadioGroup}
//           textLabel="Do you provide crypto as payment?"
//           name="accept_crypto_payment"
//           items={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ]}
//         />
//       </Grid> */}

//       {/* button */}
//       {/* <Grid item xs={12}>
//         <SubmitButton type={'submit'} disabled={isIdle}>
//           <Box sx={{ textAlign: 'center', width: '100%' }}>
//             {isIdle ? 'Please wait...' : 'Update'}
//           </Box>
//         </SubmitButton>
//       </Grid> */}
//     </Grid>
//   );
// };

export const ArtistUpdateLandingPageForm: React.FC<ArtistUpdateFormProps> = ({
  isIdle,
  values,
  errors,
  initValues,
  setValues,
}) => {
  //! We set the values again here because not all the values are read already (for the gallery)
  useEffect(() => {
    setValues({ ...initValues });
  }, []);

  return (
    <Grid container spacing={2}>
      {/* description */}
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            lineHeight: 2,
          }}
        >
          Thanks for giving us some details. Now lets build your landing page so
          we have a summarized page to showcase all your work and
          accomplishments to the universe.
        </Typography>
      </Grid>

      {/* photo profile */}
      <Grid item xs={12} sm={6}>
        <Field
          component={InputDragzone}
          textLabel="Upload your profile photo"
          name="artist_image"
        />
      </Grid>

      {/* portfolio */}
      {/*
          <Grid item xs={12} sm={6}>
            <Field
              component={InputUpload}
              textLabel="Would you like to upload your portfolio?"
              name="portfolio"
            />
          </Grid>
          */}
      {/* logo */}
      <Grid item xs={12}>
        <Field
          component={InputDragzone}
          textLabel="Do you have a logo?"
          name="logo"
        />
      </Grid>

      {/* Exhibitions
        <Grid item xs={12}>
          <Field
            name="exhibitions"
            component={ControlledInputSelect}
            placeholder="choose total"
            textLabel="Exhibitions: Have you been showcased in galleries or private shows? "
            typeInput="select"
            list={[
              'Year, Show title, Location',
              'Year, Show title, Location',
              'Year, Show title, Location',
            ]}
          />
        </Grid>
         */}

      {/* brand */}
      {/*
          <Grid item xs={12}>
            <Field
              component={InputUpload}
              textLabel="What brands have you worked with? (SVG format)"
              name="brand"
            />
          </Grid>
          */}
      {/* photo */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel text="Build your Gallery/Portfolio. Showcase your favorite pieces. (upload 8, add title and location for each)" />
          </Grid>

          <FieldArray name="gallery">
            {({ push, remove }) => (
              <>
                {values?.gallery.map((value: any, index: number) => {
                  return (
                    <Grid key={index} item xs={12} sm={6}>
                      <Field
                        component={InputDragzone}
                        textLabel={`Photo ${index + 1}`}
                        name={`gallery.${index}.photo`}
                        isArrDropzone
                      />
                      <Typography
                        sx={{
                          color: 'red',
                          fontSize: '13px',
                        }}
                      >
                        {errors.gallery &&
                          (errors?.gallery![index] as any)?.photo}
                      </Typography>

                      <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                        <Grid item xs={12} sm={6}>
                          <Field
                            component={ControlledInputTextField}
                            name={`gallery.${index}.title`}
                            typeInput="text"
                            textLabel="title of the wall"
                            placeholder="title"
                            typeField="title"
                            isUpdateField
                          />
                          <Typography
                            sx={{
                              color: 'red',
                              fontSize: '13px',
                            }}
                          >
                            {errors.gallery &&
                              (errors?.gallery![index] as any)?.title}
                          </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Field
                            name={`gallery.${index}.address`}
                            typeInput="text"
                            component={ControlledInputAddress}
                            textLabel="address"
                            placeholder="address"
                            typeField="address"
                            isUpdateField
                          />
                          <Typography
                            sx={{
                              color: 'red',
                              fontSize: '13px',
                            }}
                          >
                            {errors.gallery &&
                              (errors?.gallery![index] as any)?.address}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
                {values?.gallery.length < 16 && (
                  <Grid
                    item
                    xs={12}
                    sm={
                      values?.gallery.length === 0
                        ? 12
                        : values?.gallery.length % 2 !== 0
                        ? 6
                        : 12
                    }
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 4,
                      marginBottom: 4,
                    }}
                  >
                    <GenericButton
                      onClick={() => {
                        push({
                          photo: [],
                          title: '',
                          address: '',
                        });
                      }}
                      title={'Add New Photo'}
                    />
                  </Grid>
                )}
              </>
            )}
          </FieldArray>

          {/* photo 1 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 1"
              name="photo1"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo1Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo1Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 2 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 2"
              name="photo2"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo2Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo2Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 3 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 3"
              name="photo3"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo3Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo3Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 4 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 4"
              name="photo4"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo4Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo4Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 5 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 5"
              name="photo5"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo5Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo5Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 6 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 6"
              name="photo6"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo6Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo6Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 7 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 7"
              name="photo7"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo7Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo7Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 8 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 8"
              name="photo8"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo8Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo8Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 9 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 9"
              name="photo9"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo9Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo9Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}

          {/* photo 10 */}
          {/* <Grid item xs={6}>
            <Field
              component={InputDragzone}
              textLabel="Photo 10"
              name="photo10"
            />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              title
              <Grid item xs={12} sm={6}>
                <Field
                  component={ControlledInputTextField}
                  name="photo10Title"
                  typeInput="text"
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              location
              <Grid item xs={12} sm={6}>
                <Field
                  name="photo10Address"
                  typeInput="text"
                  component={ControlledInputAddress}
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>

      {/* color palette */}
      <Grid item xs={12}>
        <Field
          component={InputDragzone}
          textLabel="Do you have a favorite color palette?"
          name="color_palette"
        />
      </Grid>

      {/* button next */}
      <Grid item xs={12}>
        <SubmitButton type={'submit'} disabled={isIdle}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            {isIdle ? 'Please wait...' : 'Update'}
          </Box>
        </SubmitButton>
      </Grid>
    </Grid>
  );
};

const SubmitButton = styled('button')`
  font-family: var(--font-family-montserrat);
  color: white;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  width: 100%;
  height: 70px;
  background: linear-gradient(
    91.35deg,
    #86ffff 1.34%,
    #33f7f7 19.62%,
    #2cdede 38.09%,
    #0ac5c5 65.12%,
    #04a9a9 97.99%
  );
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;
