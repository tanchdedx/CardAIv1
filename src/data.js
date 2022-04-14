 //Create data array
 import img1 from './assets/OCBC 365.png';
 import img2 from './assets/OCBC Titatium.png';
 import img3 from './assets/OCBC 90N.png';
 import img4 from './assets/OCBC platinum.png';
 import img5 from './assets/OCBC NTUC Plus.png';
 import img6 from './assets/OCBC Frank.png';
 

 const data = {
     cardData:[
         {
             id:1,
             img: img1,
             title: 'OCBC365',
             desc: 'Earn 6% cashback on everyday dining Earn 3% cashback on groceries, land transport, online travel, telco and electricity             Earn up to 22.1% fuel savings at Caltex and 5% cashback for all other petrol brands',
             Merchant:'DinTaiFung,cold storage, sheng siong, SIA, Singtel,Genco, PUB, Caltex, shell, Esso, petrol,expedia, shopping'
         },
         {
            id:2,
            img: img2,
            title: 'OCBC Titanium Rewards',
            desc: 'Earn 50 OCBC$ (worth 20 miles) for every S$5 spent on shopping (OCBC$ will be awarded for every S$5 spent on a per transaction basis. Find out more about OCBC$)            Earn 5 OCBC$ on all other spend            Additional 2% cash rebate when you spend at BEST Denki',
            Merchant:'Best Denki, Starbucks'
        }, 
        {
            id:3,
            img: img3,
            title: 'OCBC 90°N Visa Card',
            desc: '2.1 Travel$ per S$1 on foreign currency spend (Travel$ will be awarded for every S$5 spent on a per transaction basis)            1.2 Travel$ per S$1 on local spend',
            Merchant:'SIA, expedia, travel, hotel, airfare, airline'
        },
        {
            id:4,
            img: img4,
            title: 'OCBC platinum',
            desc: 'Earn 5 OCBC$ per S$5 spent (OCBC$ will be awarded for every S$5 spent on a per transaction basis. Find out more about OCBC$)        Enjoy travel deals from Expedia            Enjoy dining deals for every occasion',
            Merchant:'dining, shopping'
        },
        {
           id:5,
           img: img5,
           title: 'OCBC NTUC Plus',
           desc: 'Up to 12% rebate at FairPrice stores and Warehouse Club stores Receive up to 20.3% at Esso and instant 18.1% off at Caltex           3% rebate at Popular',
           Merchant:'fairprice'
       },
       {
           id:6,
           img: img6,
           title: 'OCBC Frank Card',
           desc: "Up to 6% cashback on online,in-store mobile contactless and foreign currency spend made in-store",
           Merchant:'shopping, Superdry, Tangs, Metro'
           
           
       }
     ]
 }
 export default data;