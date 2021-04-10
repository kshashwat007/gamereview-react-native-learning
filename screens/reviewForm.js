import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const ReviewSchema = yup.object({
  title: yup.string().required().min(3),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num', 'Rating must be between 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button title="Submit" color="red" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}