/**
 * Photography from Unsplash (free Unsplash License — commercial use allowed, no attribution required).
 * Served from Unsplash's image CDN, resized on the fly.
 */
export const photos = {
  engineerDc: ["photo-1573164713988-8665fc963095", "Engineer working on a laptop in a data centre"],
  dcAisle: ["photo-1584169417032-d34e8d805e8b", "Data centre aisle lined with server racks"],
  dcRacks: ["photo-1558494949-ef010cbdcc31", "Server racks with neatly patched network cabling"],
  serverLights: ["photo-1762163516269-3c143e04175c", "Close-up of a server rack with status lights"],
  dcWhite: ["photo-1564457461758-8ff96e439e83", "Bright, modern data centre with rows of cabinets"],
  rackCables: ["photo-1695668548342-c0c1ad479aee", "Network rack with cabling in a server room"],
  dashDark: ["photo-1551288049-bebda4e38f71", "Performance analytics dashboard on a laptop screen", "50% 75%"],
  dashLaptop: ["photo-1460925895917-afdab827c52f", "Laptop showing business reporting charts"],
  monitoring: ["photo-1526628953301-3e589a6a8b74", "Monitoring dashboard with live metrics"],
  meetingHands: ["photo-1517245386807-bb43f82c33c4", "Consultant explaining a plan during a meeting"],
  planningPaper: ["photo-1454165804606-c3d57bc86b40", "Planning a technology roadmap on paper beside a laptop"],
  teamTable: ["photo-1622675363311-3e1904dc1885", "Team meeting around a table with laptops"],
  twoColleagues: ["photo-1551836022-d5d88e9218df", "Two colleagues discussing a project at a laptop"],
  bizMeeting: ["photo-1758518729685-f88df7890776", "Business meeting around a table in a modern office"],
  teamLaptop: ["photo-1572021335469-31706a17aaef", "Colleagues gathered around a laptop"],
  padlock: ["photo-1614064641938-3bbee52942c7", "Padlock on a computer keyboard representing security"],
  circuit: ["photo-1550751827-4bd374c3f58b", "Illuminated circuit board in teal light"],
  fiber: ["photo-1594915440248-1e419eba6611", "Fibre optic cables connected to a network switch"],
  patchPanel: ["photo-1544197150-b99a580bb7a8", "Network patch panel with blue cables"],
  handRack: ["photo-1783419231367-89bd75443ad7", "Technician adjusting equipment in a server rack"],
  codeHtml: ["photo-1542831371-29b0f74f9713", "Source code displayed in an editor"],
  codeJava: ["photo-1461749280684-dccba630e2f6", "Monitor showing application code"],
  deskMacbook: ["photo-1498050108023-c5249f4df085", "Laptop with code on a developer's desk"],
  codePython: ["photo-1515879218367-8466d910aaa4", "Close-up of code on a computer screen"],
  teamWorking: ["photo-1522071820081-009f0129c71c", "Team collaborating on laptops"],
  whiteboardTeam: ["photo-1557804506-669a67965ba0", "Team reviewing a plan on a whiteboard"],
  whiteboard: ["photo-1532622785990-d2c36a76f5a6", "Sketching a system design on a whiteboard"],
  laptopPair: ["photo-1573165265437-f5e267bb3db6", "Consultant working with a client on a laptop"],
};

const base = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75`;
export const photoPos = (key) => photos[key][2] || "50% 50%";
export const photoSrc = (key, w = 1200) => `${base(photos[key][0])}&w=${w}`;
export const photoSrcSet = (key) => [480, 800, 1200, 1600].map((w) => `${base(photos[key][0])}&w=${w} ${w}w`).join(", ");
