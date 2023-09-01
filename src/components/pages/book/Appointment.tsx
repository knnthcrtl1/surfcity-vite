import { useState } from "react";
import View from "../../UI/View";
import Text from "../../UI/Text";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import TextInput from "../../UI/TextInput";
import Container from "../../UI/Container";
import ServiceItem from "./ServiceItem";
import StaticDatePickerLandscape from "./BookDatePicker";
import TimeSlot from "./TimeSlot";
import { appColors } from "../../../constants/colors";
import LoadingButton from "@mui/lab/LoadingButton";
import HeaderBook from "../../Header/HeaderBook";
import HeaderSuccessBook from "../../Header/HeaderSuccessBook";
import BannerSlogan from "../contact-us/BookSlogan";

const SCOPES =
  "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";

const config = {
  client_id:
    "441111504511-881ch73368003c32ad8vtjcn5uaf4gpc.apps.googleusercontent.com",
  apiKey: "AIzaSyALfJGwxfQC0k24ybvuy3CMb7YtdbLilkI",
  scope: SCOPES,
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const serviceList = [
  {
    id: "0",
    title: "Painting",
  },
  {
    id: "1",
    title: "Renovation",
  },
  {
    id: "3",
    title: "Termite Repair",
  },
  {
    id: "4",
    title: "New Project",
  },
];

const Title = styled(Text)`
  font-size: 38px;
  line-height: 44px;

  @media screen and (max-width: 860px) and (min-width: 0px) {
    text-align: center;
  }
`;

const MainContainer = styled(View)`
  background-color: #f5fafd;
  padding: 60px 0px;
`;

const CalendarRow = styled(View)`
  & .MuiPickerStaticWrapper-root {
    border-radius: 24px;
  }

  @media only screen and (max-width: 1050px) {
    & .MuiPickerStaticWrapper-root > div {
      flex-direction: column;
    }
  }
`;

const Button = styled(LoadingButton)`
  padding: 8px 32px;
  color: #ffffff;
  background: ${appColors.semiBlue};
  border-radius: 28px;
  font-size: 18px;
  letter-spacing: 4px;
  font-family: Gotham;
  font-weight: bold;
  border: 0px;
  &:hover {
    background: ${appColors.semiBlue} !important;
  }
`;

const Appointment = () => {
  const initState = {
    name: "",
    email: "",
    address: "",
    servicesNeeded: "",
  };

  const [selectedItem, setSelectedItem] = useState<string>("");
  const [activeService, setActiveService] = useState<string>("");
  const [activeDate, setActiveDate] = useState<string>("");
  const [activeTime, setActiveTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [state, setState] = useState(initState);

  const handleChangeText = (field, e) => {
    setState({
      ...state,
      [field]: e.target.value,
    });
  };

  const handleServiceItem = (item: any) => {
    setActiveService(item?.title);
    setSelectedItem(item?.id);
  };

  const handleSelectDate = (val: string) => {
    if (val) {
      var dt = new Date(val);
      let year = dt.getFullYear();
      let month = ("0" + (dt.getMonth() + 1)).slice(-2);
      let day = ("0" + dt.getDate()).slice(-2);

      let d = `${year}-${month}-${day}`;

      setActiveDate(d);
    }
  };

  const handleClick = async (event: any) => {
    event.preventDefault();
    const gapi = await import("gapi-script").then((pack) => pack.gapi);

    let email = validateEmail(state.email);

    if (!email) {
      alert("Please input a valid email address");

      return false;
    }

    if (
      !activeTime ||
      !activeDate ||
      !activeService ||
      !state.email ||
      !state.address ||
      !state.name
    ) {
      alert("Please fill all required fields");
      return false;
    }

    setLoading(true);

    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: config.apiKey,
        clientId: config.client_id,
        discoveryDocs: config.discoveryDocs,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            description: `Form Email: ${state.email} - Service Needed: ${state.servicesNeeded}`,
            summary: `Service: ${activeService} by: ${state.name}`,
            location: state.address,
            attendees: [{ email: "vortexbears@gmail.com" }],
            start: {
              dateTime: `${activeDate}T${activeTime}`,
              timeZone: "Asia/Manila",
            },
            end: {
              dateTime: `${activeDate}T${endTime}`,
              timeZone: "Asia/Manila",
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          let request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);

            if (event.status === "confirmed") {
              setSuccess(true);
            }

            window.open(event.htmlLink);
          });
        });

      setLoading(false);
    });
  };

  const validateEmail = (email: string) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <View>
      {success ? (
        <HeaderSuccessBook url="url(./pngs/paint-bg.png)" />
      ) : (
        <View>
          <HeaderBook url="url(./pngs/book-bg.png)" slogan={<BannerSlogan />} />
          <MainContainer>
            <Container>
              <Title textAlign="center">
                Your Appointment is just a few clicks away
              </Title>
              <form onSubmit={handleClick}>
                <Grid container spacing={4} mt={1}>
                  <Grid item sm={12} xs={12} md={6}>
                    <TextInput
                      placeholder="Name"
                      required
                      onChange={(e) => handleChangeText("name", e)}
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={6}>
                    <TextInput
                      placeholder="Email Address"
                      required
                      onChange={(e) => handleChangeText("email", e)}
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={6}>
                    <TextInput
                      placeholder="Address"
                      onChange={(e) => handleChangeText("address", e)}
                      required
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={6}>
                    <TextInput
                      placeholder="Services Needed"
                      // required
                      onChange={(e) => handleChangeText("servicesNeeded", e)}
                    />
                  </Grid>
                </Grid>
                <View mt={6}>
                  <Title>Select Service</Title>
                  <Grid container spacing={4} mt={1}>
                    {serviceList.map((item) => (
                      <Grid item sm={12} md={6} xs={12} key={item?.id}>
                        <ServiceItem
                          item={item}
                          selectedItem={selectedItem}
                          handleServiceItem={handleServiceItem}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </View>
                <CalendarRow mt={6}>
                  <Grid container spacing={4}>
                    <Grid item sm={12} md={6} xs={12}>
                      <StaticDatePickerLandscape
                        handleSelectDate={handleSelectDate}
                      />
                    </Grid>
                    <Grid item sm={12} md={6} xs={12}>
                      <TimeSlot
                        setActiveTime={setActiveTime}
                        setEndTime={setEndTime}
                      />
                    </Grid>
                  </Grid>
                </CalendarRow>
                <View display="flex" justifyContent="center" mt={4}>
                  <Button type="button" onClick={handleClick} loading={loading}>
                    Submit Form
                  </Button>
                </View>
              </form>
            </Container>
          </MainContainer>
        </View>
      )}
    </View>
  );
};

export default Appointment;
