import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import MasksIcon from "@mui/icons-material/Masks";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PasswordIcon from "@mui/icons-material/Password";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import Docspages from "./Docspages";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar } from "@mui/material";

let base_url = [
  {
    name: "Blog",
    icone: CollectionsBookmarkIcon,
  },
  {
    name: "Contact Book",
    icone: ContactPageIcon,
  },
  { name: "Food", icone: FastfoodIcon },
  {
    name: "GST Invoice",
    icone: ReceiptIcon,
  },
  {
    name: "Hospital",
    icone: LocalHospitalIcon,
  },
  { name: "Hotel", icone: HotelIcon },
  {
    name: "Insurance",
    icone: MasksIcon,
  },
  {
    name: "MailId Sever",
    icone: ContactMailIcon,
  },
  {
    name: "Mobile",
    icone: StayCurrentPortraitIcon,
  },
  {
    name: "Movie",
    icone: MovieCreationIcon,
  },
  { name: "Note", icone: EventNoteIcon },
  {
    name: "Password Saver",
    icone: PasswordIcon,
  },
  {
    name: "Payment",
    icone: PaidIcon,
  },
  {
    name: "Playlist",
    icone: PlaylistAddIcon,
  },
  {
    name: "Sports",
    icone: SportsEsportsIcon,
  },
];

const Data = [
  {
    name: "Blog",
    describe:
      "Developers can integrate a blog API into their applications or websites to enable seamless content management and interaction with the blogging platform, facilitating tasks such as content creation, publishing, and moderation.",
    link1: "https://api-forge-node.onrender.com/blog",
    link2: "https://api-forge-node.onrender.com/blog/create",
    link3: "https://api-forge-node.onrender.com/blog/delete/:id",
    link4: "https://api-forge-node.onrender.com/blog/update/:id",
    link5: "https://api-forge-node.onrender.com/blog/find/:find",
    field: [
      { key: "imgURL", value: "Value1" },
      { key: "title", value: "Value2" },
      { key: "category", value: "Value3" },
      { key: "description", value: "Value4" },
    ],
  },
  {
    name: "Contact Book",
    describe:
      "A ContactBook API simplifies the process of managing contact information within an application or system, providing developers with a standardized interface to integrate contact management functionality into their software solutions.",
    link1: "https://api-forge-node.onrender.com/contackbook",
    link2: "https://api-forge-node.onrender.com/contackbook/create",
    link3: "https://api-forge-node.onrender.com/contackbook/delete/:id",
    link4: "https://api-forge-node.onrender.com/contackbook/update/:id",
    link5: "https://api-forge-node.onrender.com/contackbook/find/:find",
    field: [
      { key: "fitstName", value: "Value1" },
      { key: "lastName", value: "Value2" },
      { key: "mobileNo", value: "Value3" },
      { key: "email", value: "Value4" },
      { key: "nickName", value: "Value5" },
      { key: "tempId", value: "Value6" },
    ],
  },
  {
    name: "Food",
    describe:
      "Food APIs are valuable tools for developers looking to build applications and services related to nutrition, cooking, meal planning, restaurant discovery, and dietary management. By leveraging these APIs, developers can create innovative solutions that cater to the needs of food enthusiasts, health-conscious individuals, and culinary professionals.",
    link1: "https://api-forge-node.onrender.com/food",
    link2: "https://api-forge-node.onrender.com/food/create",
    link3: "https://api-forge-node.onrender.com/food/delete/:id",
    link4: "https://api-forge-node.onrender.com/food/update/:id",
    link5: "https://api-forge-node.onrender.com/food/find/:find",
    field: [
      { key: "productName", value: "Value1" },
      { key: "weight", value: "Value2" },
      { key: "energy", value: "Value3" },
      { key: "protine", value: "Value4" },
      { key: "carbohydrate", value: "Value5" },
      { key: "fat", value: "Value6" },
    ],
  },
  {
    name: "GST Invoice",
    describe:
      "GST invoices are crucial for both the seller and the buyer for compliance with tax regulations and for maintaining accurate financial records. They help ensure transparency in business transactions and facilitate the calculation and reporting of GST liabilities to tax authorities.",
    link1: "https://api-forge-node.onrender.com/gst",
    link2: "https://api-forge-node.onrender.com/gst/create",
    link3: "https://api-forge-node.onrender.com/gst/delete/:id",
    link4: "https://api-forge-node.onrender.com/gst/update/:id",
    link5: "https://api-forge-node.onrender.com/gst/find/:find",
    field: [
      { key: "name", value: "Value1" },
      { key: "gstno", value: "Value2" },
      { key: "baseamount", value: "Value3" },
      { key: "gstpercentage", value: "Value4" },
      { key: "totalamount", value: "Value5" },
      { key: "invoiceno", value: "Value6" },
    ],
  },
  {
    name: "Hospital",
    describe:
      "Hospital APIs streamline communication and data exchange between different healthcare applications and systems, improving efficiency, accuracy, and patient care outcomes. They enable developers to build innovative healthcare solutions, such as patient portals, telemedicine platforms, health monitoring apps, and more, by leveraging the rich functionality and data available within hospital systems.",
    link1: "https://api-forge-node.onrender.com/hospital",
    link2: "https://api-forge-node.onrender.com/hospital/create",
    link3: "https://api-forge-node.onrender.com/hospital/delete/:id",
    link4: "https://api-forge-node.onrender.com/hospital/update/:id",
    link5: "https://api-forge-node.onrender.com/hospital/find/:find",
    field: [
      { key: "pesantName", value: "Value1" },
      { key: "doctor", value: "Value2" },
      { key: "diseaseType", value: "Value3" },
      { key: "description", value: "Value4" },
      { key: "medicineName", value: "Value5" },
      { key: "wardType", value: "Value6" },
    ],
  },
  {
    name: "Hotel",
    describe:
      "Hotel APIs enable developers to build a wide range of applications and services related to hotel bookings and travel planning, such as hotel booking websites, mobile apps, travel agent portals, and corporate travel management systems. By leveraging the rich functionality and data available within hotel APIs, developers can create innovative solutions that streamline the hotel booking process, enhance the guest experience, and drive business growth for hoteliers.",
    link1: "https://api-forge-node.onrender.com/hotel",
    link2: "https://api-forge-node.onrender.com/hotel/create",
    link3: "https://api-forge-node.onrender.com/hotel/delete/:id",
    link4: "https://api-forge-node.onrender.com/hotel/update/:id",
    link5: "https://api-forge-node.onrender.com/hotel/find/:find",
    field: [
      { key: "customerName", value: "Value1" },
      { key: "documentType", value: "Value2" },
      { key: "documentNumber", value: "Value3" },
      { key: "roomNo", value: "Value4" },
      { key: "entryTime", value: "Value5" },
      { key: "exitTime", value: "Value6" },
      { key: "paymentStatus", value: "done or panding" },
    ],
  },
  {
    name: "Insurance",
    describe:
      "Insurance APIs enable developers to build a wide range of applications and services related to insurance, such as insurance portals, mobile apps, claims management systems, and insurance marketplace platforms. By leveraging the functionality and data available within insurance APIs, developers can create innovative solutions that streamline insurance processes, improve customer experiences, and drive business growth for insurance providers.",
    link1: "https://api-forge-node.onrender.com/insurance",
    link2: "https://api-forge-node.onrender.com/insurance/create",
    link3: "https://api-forge-node.onrender.com/insurance/delete/:id",
    link4: "https://api-forge-node.onrender.com/insurance/update/:id",
    link5: "https://api-forge-node.onrender.com/insurance/find/:find",
    field: [
      { key: "name", value: "Value1" },
      { key: "amount", value: "Value2" },
      { key: "discription", value: "Value3" },
      { key: "type", value: "Value4" },
      { key: "id", value: "Value5" },
    ],
  },
  {
    name: "MailId Sever",
    describe:
      "Mail ID Server APIs enable developers to integrate email functionality into a wide range of applications and services, such as email clients, collaboration tools, marketing automation platforms, customer support systems, and business process automation solutions. By leveraging the functionality and data available within Mail ID Server APIs, developers can create innovative email-related applications that enhance productivity, communication, and collaboration for users.",
    link1: "https://api-forge-node.onrender.com/mailid",
    link2: "https://api-forge-node.onrender.com/mailid/create",
    link3: "https://api-forge-node.onrender.com/mailid/delete/:id",
    link4: "https://api-forge-node.onrender.com/mailid/update/:id",
    link5: "https://api-forge-node.onrender.com/mailid/find/:find",
    field: [
      { key: "mailId", value: "Value1" },
      { key: "password", value: "Value2" },
      { key: "phoneNo", value: "Value3" },
      { key: "recoveryMailId", value: "Value4" },
      { key: "Idtype", value: "Value5" },
      { key: "firstName", value: "Value6" },
      { key: "lastName", value: "Value7" },
    ],
  },
  {
    name: "Mobile",
    describe:
      "Mobile APIs enable developers to create powerful, feature-rich mobile applications by leveraging backend services, data sources, and functionalities available through APIs. By integrating with Mobile APIs, developers can build apps that deliver personalized experiences, streamline user interactions, and provide seamless access to data and services on mobile devices.",
    link1: "https://api-forge-node.onrender.com/mobile",
    link2: "https://api-forge-node.onrender.com/mobile/create",
    link3: "https://api-forge-node.onrender.com/mobile/delete/:id",
    link4: "https://api-forge-node.onrender.com/mobile/update/:id",
    link5: "https://api-forge-node.onrender.com/mobile/find/:find",
    field: [
      { key: "display", value: "Value1" },
      { key: "imgURL", value: "Value2" },
      { key: "processor", value: "Value3" },
      { key: "storage", value: "Value4" },
      { key: "battery", value: "Value5" },
      { key: "camera", value: "Value6" },
    ],
  },
  {
    name: "Movie",
    describe:
      "Movie APIs enable developers to build a wide range of applications and services related to movie discovery, recommendation, streaming, and entertainment. By leveraging the functionality and data available through Movie APIs, developers can create innovative movie-related apps, such as movie databases, movie review platforms, streaming platforms, movie recommendation engines, and movie ticketing services.",
    link1: "https://api-forge-node.onrender.com/movie",
    link2: "https://api-forge-node.onrender.com/movie/create",
    link3: "https://api-forge-node.onrender.com/movie/delete/:id",
    link4: "https://api-forge-node.onrender.com/movie/update/:id",
    link5: "https://api-forge-node.onrender.com/movie/find/:find",
    field: [
      { key: "posterURL", value: "Value1" },
      { key: "movieName", value: "Value2" },
      { key: "runningTime", value: "Value3" },
      { key: "availableOn", value: "Value4" },
      { key: "movieType", value: "Value5" },
    ],
  },
  {
    name: "Note",
    describe:
      "Note APIs enable developers to build a wide range of note-taking applications and services, such as note-taking apps, productivity tools, knowledge management platforms, collaboration platforms, and task management systems. By leveraging the functionality and data available through Note APIs, developers can create innovative solutions that streamline note-taking processes, enhance productivity, and improve information management for users.",
    link1: "https://api-forge-node.onrender.com/note",
    link2: "https://api-forge-node.onrender.com/note/create",
    link3: "https://api-forge-node.onrender.com/note/delete/:id",
    link4: "https://api-forge-node.onrender.com/note/update/:id",
    link5: "https://api-forge-node.onrender.com/note/find/:find",
    field: [
      { key: "date", value: "Value1" },
      { key: "time", value: "Value2" },
      { key: "description", value: "Value3" },
      { key: "title", value: "Value5" },
    ],
  },
  {
    name: "Password Saver",
    describe:
      "Password Saver APIs enable developers to build secure password management solutions and applications, such as password managers, identity management platforms, enterprise password vaults, and security-as-a-service (SecaaS) offerings. By leveraging the functionality and security features available through Password Saver APIs, developers can help users protect their sensitive credentials, mitigate the risk of password-related security breaches, and enhance overall cybersecurity posture.",
    link1: "https://api-forge-node.onrender.com/passwordsaver",
    link2: "https://api-forge-node.onrender.com/passwordsaver/create",
    link3: "https://api-forge-node.onrender.com/passwordsaver/delete/:id",
    link4: "https://api-forge-node.onrender.com/passwordsaver/update/:id",
    link5: "https://api-forge-node.onrender.com/passwordsaver/find/:find",
    field: [
      { key: "id ", value: "Value1" },
      { key: "password", value: "Value2" },
      { key: "webName", value: "Value3" },
      { key: "webLink", value: "Value4" },
      { key: "description", value: "Value5" },
    ],
  },
  {
    name: "Payment",
    describe:
      "Payment APIs enable developers to build e-commerce platforms, online marketplaces, mobile apps, subscription services, and other digital commerce solutions that require payment processing functionality. By leveraging the functionality and data available through Payment APIs, developers can create seamless payment experiences for customers, streamline payment workflows for merchants, and drive business growth through secure and reliable payment processing.",
    link1: "https://api-forge-node.onrender.com/payment",
    link2: "https://api-forge-node.onrender.com/payment/create",
    link3: "https://api-forge-node.onrender.com/payment/delete/:id",
    link4: "https://api-forge-node.onrender.com/payment/update/:id",
    link5: "https://api-forge-node.onrender.com/payment/find/:find",
    field: [
      { key: "paymentType", value: "Value1" },
      { key: "accountType", value: "Value2" },
      { key: "description", value: "Value3" },
      { key: "date", value: "Value4" },
      { key: "location", value: "Value5" },
      { key: "amount", value: "Value6" },
    ],
  },
  {
    name: "Playlist",
    describe:
      "Playlist APIs enable developers to build a wide range of applications and services related to playlist management, media playback, content discovery, and social sharing. By leveraging the functionality and data available through Playlist APIs, developers can create innovative solutions that enhance the music, video, or podcast listening experience for users, streamline playlist management workflows, and foster community engagement and collaboration around curated multimedia content.",
    link1: "https://api-forge-node.onrender.com/playlist",
    link2: "https://api-forge-node.onrender.com/playlist/create",
    link3: "https://api-forge-node.onrender.com/playlist/delete/:id",
    link4: "https://api-forge-node.onrender.com/playlist/update/:id",
    link5: "https://api-forge-node.onrender.com/playlist/find/:find",
    field: [
      { key: "songname", value: "Value1" },
      { key: "group", value: "Value2" },
      { key: "link", value: "Value3" },
      { key: "type", value: "Value4" },
      { key: "singer", value: "Value5" },
    ],
  },
  {
    name: "Sports",
    describe:
      "Sports APIs enable developers to build a wide range of applications and services related to sports, such as sports news portals, live score apps, fantasy sports platforms, sports betting sites, sports analytics tools, and sports betting sites. By leveraging the functionality and data available through Sports APIs, developers can create innovative solutions that enhance the sports viewing experience, provide valuable insights and analysis, and engage sports fans across different platforms and devices.",
    link1: "https://api-forge-node.onrender.com/sports",
    link2: "https://api-forge-node.onrender.com/sports/create",
    link3: "https://api-forge-node.onrender.com/sports/delete/:id",
    link4: "https://api-forge-node.onrender.com/sports/update/:id",
    link5: "https://api-forge-node.onrender.com/sports/find/:find",
    field: [
      { key: "playerName", value: "Value1" },
      { key: "sportsName", value: "Value2" },
      { key: "time", value: "Value3" },
      { key: "place", value: "Value4" },
      { key: "playerAge", value: "Value5" },
      { key: "playerWeight", value: "Value6" },
    ],
  },
];

function Docs(props) {
  const drawerWidth = 250;
  const [data, setData] = React.useState(Data[0]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const changeData = (index) => {
    setData(Data[index]);
    setSelectedIndex(index);
    setMobileOpen(false);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedIndex]);

  const drawer = (
    <div>
      <List>
        {base_url.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
              sx={{
                minHeight: "48px",
                backgroundColor:
                  selectedIndex === index ? "#0000000A" : "transparent",
                borderRight:
                  selectedIndex === index ? "3px solid #002884" : "none",
                transition: "all 0.1s ease",
              }}
              onClick={() => changeData(index)}
            >
              <ListItemIcon
                sx={{ color: selectedIndex === index ? "#1565C0" : "black" }}
              >
                <text.icone />
              </ListItemIcon>
              <ListItemText
                sx={{ color: selectedIndex === index ? "#1565C0" : "black" }}
                primary={text.name}
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    windows !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Toolbar
          sx={{
            position: "fixed",
            background: "white",
            width: "100%",
            display: { sm: "none" },
            zIndex: "100"
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            zIndex: 99,
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                marginTop: "56px",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                marginTop: "78.5px",
                maxHeight: `calc(100vh - 78.5px)`,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Typography paragraph sx={{ marginTop: { sm: "0px", xs: "56px" } }}>
            <Docspages Data={data} />
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Docs;
