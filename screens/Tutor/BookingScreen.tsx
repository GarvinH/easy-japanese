import React, { useState } from "react";
import { StyleSheet, Touchable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { shallowEqual } from "react-redux";

import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";
import * as Yup from "yup";
import { Formik } from "formik";
import { Paragraph, TextInput, Title } from "react-native-paper";
import Button from "../../components/Button";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import _ from "lodash";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { TutorsParamList } from "../../types";
import { TutorState, TutorType } from "./redux/type";
import { Dispatch } from "redux";
import { updateBooking } from "./redux/store/actions";

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

  const tutors: readonly TutorType[] = useSelector(
    (state: TutorState) => state.tutors,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const route = useRoute<RouteProp<TutorsParamList, "BookingScreen">>();
  const navigator = useNavigation<NavigationProp<TutorsParamList, "BookingScreen">>()

  const { id } = route.params;

  const tutor = _.find(tutors, { id });

  const minDate = new Date();
  const maxDate = new Date();
  minDate.setDate(new Date().getDate() + 7);
  maxDate.setMonth(new Date().getMonth() + 1);

  return (
    <View style={{ ...globalStyles.container }}>
      <Formik
        initialValues={{ name: "", email: "", bookDate: "No date selected" }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          dispatch(updateBooking({ ...values, tutorId: id }));
          navigator.navigate("BookingConfirmedScreen")
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ flex: 1 }}>
            <Title style={{ fontSize: 25, marginBottom: 20 }}>
              Booking for {tutor?.name}
            </Title>
            <Title>Name</Title>
            <View>
              <TextInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                theme={{ colors: { primary: "red" } }}
                placeholder="Ex: John Smith"
                error={!!(errors.name && touched.name)}
              />
              <Paragraph>{touched.name && _.capitalize(errors.name)}</Paragraph>
            </View>
            <Title>Email</Title>
            <View>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                theme={{ colors: { primary: "red" } }}
                placeholder="Ex: example@email.com"
                error={!!(errors.email && touched.email)}
              />
              <Paragraph>
                {touched.email && _.capitalize(errors.email)}
              </Paragraph>
            </View>
            <Title>Date</Title>
            <TextInput value={values.bookDate} disabled />
            <Button
              text="Select Date"
              onPress={() => setShowDatePicker(true)}
            />
            <Paragraph>
              {touched.bookDate &&
                errors.bookDate &&
                "Date is a required field."}
            </Paragraph>
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
                  date &&
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
