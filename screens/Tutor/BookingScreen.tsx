import React, { useState } from "react";
import { StyleSheet, Touchable } from "react-native";
import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";
import * as Yup from "yup";
import { Formik } from "formik";
import { Paragraph, TextInput, Title } from "react-native-paper";
import Button from "../../components/Button";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import _ from "lodash";

const formSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  bookDate: Yup.date().required(),
});

// formSchema.isValid({
//   name: "test",
//   email: "test@test.com",
//   bookDate: "Sat Jul 10 2021"
// }).then((valid) => alert(valid))

const ResultsScreen = () => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>();

  const minDate = new Date()
  const maxDate = new Date()
  minDate.setDate(new Date().getDate() + 7)
  maxDate.setMonth(new Date().getMonth() + 1)

  return (
    <View style={{ ...globalStyles.container }}>
      <Formik
        initialValues={{ name: "", email: "", bookDate: "No date selected" }}
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ flex: 1 }}>
            <Title>Name</Title>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              theme={{ colors: { primary: "red" } }}
              style={{ marginBottom: 20 }}
              placeholder="Ex: John Smith"
            />
            <Title>Email</Title>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              theme={{ colors: { primary: "red" } }}
              style={{ marginBottom: 20 }}
              placeholder="Ex: example@email.com"
            />
            <Title>Date</Title>
            <TextInput value={values.bookDate} disabled />
            <Button
              text="Select Date"
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (
              <RNDateTimePicker
                minimumDate={minDate}
                maximumDate={maxDate}
                testID="dateTimePicker"
                value={
                  _.isNaN(Date.parse(values.bookDate))
                    ? new Date()
                    : new Date(values.bookDate)
                }
                mode="date"
                display="default"
                onChange={(event: any, date: any) => {
                  setShowDatePicker(false);
                  handleChange("bookDate")(new Date(date).toDateString());
                }}
              />
            )}

            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <Button onPress={handleSubmit} text="Submit" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default ResultsScreen;
