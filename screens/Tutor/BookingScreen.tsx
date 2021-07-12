import React from "react";
import { StyleSheet } from "react-native";
import AxesExample from "../../components/Results/Chart";
import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";
import * as Yup from "yup";
import { Formik } from "formik";
import { Paragraph, TextInput } from "react-native-paper";
import Button from "../../components/Button";

const formSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  bookDate: Yup.date().required(),
});

const ResultsScreen = () => {
  return (
    <View style={{ ...globalStyles.container }}>
      <Formik
        initialValues={{ name: "", email: "", bookDate: null }}
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              label="Name"
              theme={{ colors: { primary: "red" } }}
            />
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              label="Email"
              theme={{ colors: { primary: "red" } }}
            />

            <Button onPress={handleSubmit} text="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};
export default ResultsScreen;
