const data = [
  {
    id: 1,
    name: "Muhammad Ali",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GwELdIwxd5T65XfAAeEZGIdBazL7RWL4Qg&usqp=CAU",
    statistics: ["record: 56-5", "knockouts: 37", "titles: 3"],
  },
  {
    id: 2,
    name: "Mike Tyson",
    img: "https://www.thesun.co.uk/wp-content/uploads/2020/04/Bald_Celebs__8_jpg-JS502149546.jpg",
    statistics: ["record: 50-6", "knockouts: 44", "titles: 2"],
  },
  {
    id: 3,
    name: "Sugar Ray Leonard",
    img: "https://www.onthisday.com/images/people/sugar-ray-leonard-medium.jpg",
    statistics: ["record: 36-3-1", "knockouts: 25", "titles: 5"],
  },
  {
    id: 4,
    name: "Roberto Duran",
    img: "https://i.ebayimg.com/images/g/XzwAAOSwnitcmWeM/s-l1600.jpg",
    statistics: ["record: 103-16", "knockouts: 70", "titles: 4"],
  },
  {
    id: 5,
    name: "Rocky Marciano",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Rocky_Marciano_Postcard_1953.jpg",
    statistics: ["record: 49-0", "knockouts: 43", "titles: 1"],
  },
  {
    id: 6,
    name: "Joe Louis",
    img: "https://cdn.britannica.com/96/2196-050-9F52180B/Joe-Louis-1946.jpg",
    statistics: ["record: 66-3", "knockouts: 52", "titles: 25"],
  },
  {
    id: 7,
    name: "Jack Dempsey",
    img: "https://www.mediastorehouse.co.uk/p/617/champion-boxer-jack-dempsey-9742405.jpg.webp",
    statistics: ["record: 66-6-11", "knockouts: 51", "titles: 2"],
  },
  {
    id: 8,
    name: "Jack Johnson",
    img: "https://i.guim.co.uk/img/media/1812e8f6527db71196dc8f2fad7539b5dabf358b/0_428_2539_1523/master/2539.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=da49b5c1905d76308a37b01eff74743a",
    statistics: ["record: 73-13-10", "knockouts: 40", "titles: 1"],
  },
  {
    id: 9,
    name: "George Foreman",
    img: "https://qph.cf2.quoracdn.net/main-qimg-2f246283d84440fd76a3f2b37ac95896-lq",
    statistics: ["record: 76-5", "knockouts: 68", "titles: 2"],
  },
  {
    id: 10,
    name: "Floyd Mayweather Jr.",
    img: "https://static01.nyt.com/images/2015/02/21/sports/21BOXING3/21BOXING1-1424480903046-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    statistics: ["record: 50-0", "knockouts: 27", "titles: 11"],
  },
  {
    id: 11,
    name: "Manny Pacquiao",
    img: "https://i2-prod.mirror.co.uk/incoming/article12138822.ece/ALTERNATES/s615b/Manny-Pacquiao-v-Jeff-Horn.jpg",
    statistics: ["record: 62-7-2", "knockouts: 39", "titles: 12"],
  },
  {
    id: 12,
    name: "Roy Jones Jr.",
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/a4a8ee7edf4e0ef7c53d7a9fbd5323cd-roy-jones-jr-portrait-pictures.jpg",
    statistics: ["record: 66-9", "knockouts: 47", "titles: 9"],
  },
  {
    id: 13,
    name: "Lennox Lewis",
    img: "https://media.gettyimages.com/id/160065956/photo/queens-ny-february-7-2000-lennox-lewis-poses-with-his-ring-belt-for-a-portrait-on-february-7.jpg?s=612x612&w=gi&k=20&c=epjfxg-iFD1Sok6pY-x-SHDkd57i_at9tQhpvyM2obA=",
    statistics: ["record: 41-2-1", "knockouts: 32", "titles: 3"],
  },
  {
    id: 14,
    name: "Marvelous Marvin Hagler",
    img: "https://wallpapercave.com/wp/wp10470071.jpg",
    statistics: ["record: 62-3-2", "knockouts: 52", "titles: 4"],
  },
  {
    id: 15,
    name: "Joe Frazier",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33_6F9Ga2H2DyaMGH-Z_jvEwj34z2iPrKpET0y1-j_mWcPKIFN1phDcqVF76Neq6_VbI&usqp=CAU",
    statistics: ["record: 32-4-1", "knockouts: 27", "titles: 2"],
  },
  {
    id: 16,
    name: "Ezzard Charles",
    img: "https://memorabilia.africanring.co.za/wp-content/uploads/2021/06/Ezzard-Charles-2-postcard-signed-500.jpg",
    statistics: ["record: 93-25-1", "knockouts: 52", "titles: 2"],
  },
  {
    id: 17,
    name: "Archie Moore",
    img: "https://www.historyforsale.com/productimages/jpeg/172508.jpg",
    statistics: ["record: 186-23-10", "knockouts: 131", "titles: 1"],
  },
  {
    id: 18,
    name: "Sonny Liston",
    img: "https://www.prints-online.com/p/164/sonny-liston-14313667.jpg.webp",
    statistics: ["record: 50-4", "knockouts: 39", "titles: 1"],
  },
  {
    id: 19,
    name: "Gennady Golovkin",
    img: "https://imageio.forbes.com/specials-images/imageserve/5cfe952d142c50000a328560/0x0.jpg?format=jpg&crop=2334,2335,x525,y781,safe&height=416&width=416&fit=bounds",
    statistics: [
      "record: 41-1-1", 
      "knockouts: 36", 
      "titles: 4"],
  },
  {
    id: 20,
    name: "Sinan Samil Sam",
    img: "https://www.kelocks-autogramme.de/out/pictures/master/product/1/144789.jpg",
    statistics: [
      "record: 31-4-0",
      "knockouts: 18",
      "titles: European Heavyeight Champion",
    ],
  },
];

export default data;
