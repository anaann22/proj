// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilApps,
    UilBookmark,
    UilClock,
    UilAmbulance,
    UilHeartbeat,
    UilTablets,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  import img1 from "../imgs/img1.png";
  import img2 from "../imgs/img2.png";
  import img3 from "../imgs/img3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilUsersAlt,
      heading: "Profile",
    },
    {
      icon: UilApps,
      heading: "Filtered view",
    },
    {
      icon: UilBookmark,
      heading: 'Activity'
    },
    {
      icon: UilClock,
      heading: 'Updates'
    },
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Unnatural deaths",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #f799e354 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 5,
      value: "76.868",
      png: UilUsdSquare,
      series: [
        {
          name: "Unnatural deaths",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Cancer deaths",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #f799d354 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 20,
      value: "577.688",
      png: UilHeartbeat,
      series: [
        {
          name: "Cancer deaths",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Persons under 50 years of age",
      color: {
        backGround:
        "linear-gradient(180deg, #FF919D 0%, #b689d454 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 13,
      value: "687.899",
      png: UilTablets,
      series: [
        {
          name: "Persons under 50 years of age",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      name: "Maria Carina --",
      noti: "cancer pulmonar",
      time: "25 seconds ago",
    },
    {
      name: "James Bond --",
      noti: "accident rutier",
      time: "30 minutes ago",
    },
    {
      name: "Iron Man --",
      noti: "intoxicatie cu gaz",
      time: "2 hours ago",
    },
  ];